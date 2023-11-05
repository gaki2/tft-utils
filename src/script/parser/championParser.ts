import { LanguageType, Season } from '../../types';
import { S3 } from '../../environments/urls';
import { GeneralParser } from './generalParser';
import { removeQuote, spaceToUnderBar } from '../../utils/regex';
import { SEASON_SET_DATA_IDX_MAP } from '../shared';

type Champion = {
  /**
   * @example
   * Language 가 한국어일때는, '징크스'
   * 영어일때는 'Jinx'
   */
  name: string;
  apiName: string;
  url: string;
  cost: number;
  traits: string[];
};

export class ChampionParser {
  constructor(private language: LanguageType, private season: Season) {}

  parseChampionList(championListJsonString: string) {
    const championList = JSON.parse(championListJsonString).data;

    if (Object.keys(championList).length === 0) {
      throw new Error('championList is empty');
    }

    return Object.values<{ id: string; tier: number; name: string }>(championList).map((value) => {
      const { id } = value;
      return {
        id,
      };
    });
  }

  parseChampionData(
    championDataJsonString: string,
    championList: ReturnType<typeof this.parseChampionList>
  ) {
    const championData =
      JSON.parse(championDataJsonString)[SEASON_SET_DATA_IDX_MAP[this.season]].champions;

    if (Object.keys(championData).length === 0) {
      throw new Error('championData is empty');
    }

    return championList.reduce((acc, { id }) => {
      const data = championData.find((object: { apiName: string }) => object.apiName === id);

      if (!data) {
        console.error(`${id} is not matched!`);
        return acc;
      }

      const { name: originalName, traits, cost } = data;

      const apiName = parseApiName(id);
      const name = GeneralParser.applyRegex(originalName, spaceToUnderBar, removeQuote);
      acc[id] = {
        apiName: id,
        name,
        url: `${S3}/${this.season}/champions/${apiName}.png`,
        cost,
        traits: traits.map((trait: string) => GeneralParser.applyRegex(trait, spaceToUnderBar)),
      };

      return acc;
    }, {} as { [key in string]: Champion });
  }

  parseChampionName(
    championDataJsonString: string,
    championList: ReturnType<typeof this.parseChampionList>
  ) {
    const championData =
      JSON.parse(championDataJsonString)[SEASON_SET_DATA_IDX_MAP[this.season]].champions;

    return championList
      .map(({ id }) => {
        const data = championData.find((object: { apiName: string }) => object.apiName === id);
        if (!data) {
          return '';
        }
        const { name: originalName } = data;
        return GeneralParser.applyRegex(originalName, spaceToUnderBar, removeQuote);
      })
      .filter(Boolean);
  }
}

/**
 * @example
 * handleException('TFT9_Zeus') // 'Zeus'
 */
const parseApiName = (_apiName: string) => {
  return _apiName.split('_')[1];
};
