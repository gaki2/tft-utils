import { GeneralParser } from './generalParser';
import { Season } from '../../types';
import path from 'path';
import { LANGUAGES } from '../../types/config';
import _ from 'lodash';
import { General } from '../general';

const BRANCHES = ['desc', 'name'];

const jsonDir = path.join(__dirname, '../../json');
const generatedDir = path.join(__dirname, '../../_generated');

function getAdditionalText(season: Season) {
  switch (season) {
    case 'season_9b':
      return `export type AugmentName_9b = SplitTwice<keyof typeof augments_season_9b, '_'>[2];
export type AugmentData_9b = DeepNullable<(typeof augments_season_9b)['TFT6_Augment_GachaAddict']>;
`;
  }
}

export class _AugmentParser {
  static getAugmentIdList(season: Season) {
    const augmentListDataSet = GeneralParser.readFileSync(
      `${jsonDir}/${season}/tft_augments_ko.json`
    );
    const augmentData = JSON.parse(augmentListDataSet).data;

    if (Object.keys(augmentData).length === 0) {
      throw new Error('AugmentList is empty');
    }

    return Object.values<{ id: string }>(augmentData).map((augment) => augment.id);
  }

  static getAugmentData(season: Season, augmentList: ReturnType<typeof this.getAugmentIdList>) {
    const augmentDataMap = LANGUAGES.reduce((acc, language) => {
      const augmentDataSet = JSON.parse(
        GeneralParser.readFileSync(`${jsonDir}/${season}/tft_data_${language}.json`)
      ).items;

      for (let i = 0; i < augmentList.length; i++) {
        const id = augmentList[i];
        const data = augmentDataSet.find((object: { apiName: string }) => object.apiName === id);

        if (!data) {
          console.error(`${id} is not matched!`);
          return acc;
        }

        if (!_.get(acc, id)) {
          _.set(acc, id, data);
        }

        BRANCHES.forEach((branch) => {
          _.set(acc, id + '.' + branch + `.${language}`, _.get(data, branch));
        });
      }

      return acc;
    }, {});

    const ret = `import { DeepNullable, SplitTwice } from '../../types/utilType';

export const augments_${season} = ${JSON.stringify(augmentDataMap, null, 2)}

${getAdditionalText(season)}
  `;

    return General.writeFile(`${generatedDir}/${season}/augments_${season}.ts`, ret);
  }
}

function parseAugment(season: Season) {
  const augmentList = _AugmentParser.getAugmentIdList(season);

  return _AugmentParser.getAugmentData(season, augmentList);
}

parseAugment('season_9b');
