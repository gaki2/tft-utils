import { LanguageType, Season } from '../../types';
import { General } from '../general';
import _ from 'lodash';
import path from 'path';
import { SEASON_SET_DATA_IDX_MAP } from '../../types/config';

const BRANCHS_MAP = {
  season_10: ['ability.desc', 'ability.name', 'name', 'traits'],
} satisfies Record<Season, string[]>;

const jsonDir = path.join(__dirname, '../../json');
const generatedDir = path.join(__dirname, '../../_generated');

function getAdditionalText(season: Season) {
  switch (season) {
    case 'season_10':
      return `export type ChampionName_10 = Split<keyof typeof champions_season_10, '_'>[1];
export type ChampionData_10 = DeepNullable<(typeof champions_season_10)['TFT10_Ahri']>;
`;
    default:
      return '';
  }
}

export class ChampionParser {
  static extractChampionData(season: Season, language: LanguageType) {
    /**
     * @returns
     * {
     *   'TFT9_Aatrox': {
     *    'name': '아트록스',
     *    'cost': 3,
     *    'traits': ['척후병', '천상'],
     *   },
     *   'TFT9_Ahri': {
     *    'name': '아리',
     *    'cost': 5,
     *    'traits': ['신비술사', '천상'],
     *   ...
     * } 과 같은 형태이다.
     */
    const dataSet = General.readFileSync(`${jsonDir}/${season}/tft_data_${language}.json`);
    const parsedDataSet = General.parse(dataSet);
    /**
     * championData 는 다음과 같은 형태로 들어있다.
     * [
     *   {
     *     "apiName": "TFT9_Aatrox",
     *     "name": "아트록스",
     *     "cost": 3, ...
     *   },
     *   {
     *     "apiName": "TFT9_Ahri",
     *     "name": "아리",
     *     "cost": 5, ...
     *   }...
     * ]
     */
    const raw_championData = parsedDataSet['setData'][SEASON_SET_DATA_IDX_MAP[season]].champions;

    const parsed_championData = raw_championData.reduce((acc: any, champion: any) => {
      const apiName = champion.apiName;
      acc[apiName] = champion;
      return acc;
    }, {} as { [key: string]: any });

    return General.writeFile(
      `${jsonDir}/${season}/champion_data_${language}.json`,
      JSON.stringify(parsed_championData, null, 2)
    );
  }

  static mergeChampionData(season: Season, languages: LanguageType[]) {
    /**
     * championDataMap 의 구조
     * {
     *   'ko': {
     *     'TFT9_Aatrox': {
     *       'name': '아트록스',
     *       'cost': 3, ...
     *   },
     *   'en': {
     *     'TFT9_Aatrox': {
     *      'name': 'Aatrox',
     *      'cost': 3, ...
     *   }
     * }
     */
    const championDataMap = languages.reduce((acc, language) => {
      const championDataSet = General.readFileSync(
        `${jsonDir}/${season}/champion_data_${language}.json`
      );
      const parsedChampionDataSet = General.parse(championDataSet);

      acc[language] = parsedChampionDataSet;
      return acc;
    }, {} as { [key in LanguageType]: any });
    /**
     * pointMap 의 구조
     * {
     *     'TFT9_Aatrox': {
     *       'name': '아트록스',
     *       'cost': 3, ...,
     *     'TFT9_Ahri': {
     *     'name': '아리',
     *     'cost': 5, ...
     *     }
     *   }
     */
    const pointMap = championDataMap.ko;
    const apiNames = Object.keys(pointMap);
    const seasonNumber = season.split('_')[1];

    const merged_data = apiNames.reduce((acc, apiName) => {
      /**
       * apiName 이 TFT${seasonNumber} 로 시작하지 않으면 무시한다.
       */
      if (!apiName.includes(`TFT${seasonNumber}`)) {
        return acc;
      }

      const pointData = pointMap[apiName];
      const merged_champion = _.cloneDeep(pointData);

      const branchs = BRANCHS_MAP[season];
      // change original data to empty object
      branchs.forEach((branch) => {
        _.set(merged_champion, branch, {});
      });

      languages.forEach((language) => {
        const nowData = championDataMap[language][apiName];
        branchs.forEach((branch) => {
          _.set(merged_champion, branch + `.${language}`, _.get(nowData, branch));
        });
      });

      acc[apiName] = merged_champion;
      return acc;
    }, {} as { [key: string]: any });

    const ret = `import { DeepNullable, Split } from '../../types/utilType';

export const champions_${season} = ${JSON.stringify(merged_data, null, 2)}

${getAdditionalText(season)}
  `;

    return General.writeFile(`${generatedDir}/${season}/champions_${season}.ts`, ret);
  }
}

async function parseChampion(season: Season) {
  const languages: LanguageType[] = ['ko', 'en'];

  const promises = languages.map((language) =>
    ChampionParser.extractChampionData(season, language)
  );

  await Promise.all(promises);

  await ChampionParser.mergeChampionData(season, languages);
}

parseChampion('season_10');
