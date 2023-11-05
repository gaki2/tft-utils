import { LanguageType, Season } from '../../types';
import { SEASON_SET_DATA_IDX_MAP } from '../shared';
import { removeBrTag, spaceToUnderBar } from '../../utils/regex';
import { GeneralParser } from './generalParser';
import { S3 } from '../../environments/urls';

export type Trait = {
  apiName: string;
  name: string;
  url: string;
};

export class TraitParser {
  constructor(private language: LanguageType, private season: Season) {}

  parseTraitData(traitDataJsonString: string) {
    const traitData = JSON.parse(traitDataJsonString)['setData'][
      SEASON_SET_DATA_IDX_MAP[this.season]
    ].traits as Trait[];

    if (Object.keys(traitData).length === 0) {
      throw new Error('traitData is empty');
    }

    return traitData.reduce((acc, { name: originalName, apiName: originalApiName, url }) => {
      const apiName = parseApiName(originalApiName);
      const name = GeneralParser.applyRegex(originalName, spaceToUnderBar, removeBrTag);
      acc[apiName] = {
        apiName,
        name,
        url: `${S3}/${this.season}/traits/${apiName}.png`,
      };

      return acc;
    }, {} as { [key: string]: Trait });
  }

  parseTraitName(traitDataJsonString: string) {
    const traitData = JSON.parse(traitDataJsonString)['setData'][
      SEASON_SET_DATA_IDX_MAP[this.season]
    ].traits as Trait[];

    return traitData.map(({ name: originalName }) => {
      const name = GeneralParser.applyRegex(originalName, spaceToUnderBar, removeBrTag);
      return name;
    });
  }
}

function parseApiName(_apiName: string) {
  return _apiName.split('_')[1];
}
