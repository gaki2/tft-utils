import { GeneralParser } from './generalParser';
import { LanguageType, Season } from '../../types';
import { S3 } from '../../environments/urls';
import { removeBrTag, spaceToUnderBar } from '../../utils/regex';

export interface Augment {
  apiName: string;
  description: string;
  name: string;
  url: string;
}

export class AugmentParser {
  constructor(private language: LanguageType, private season: Season) {}

  parseAugmentList(augmentListJsonString: string) {
    const augmentList = JSON.parse(augmentListJsonString).data;

    if (Object.keys(augmentList).length === 0) {
      throw new Error('AugmentList is empty');
    }

    return Object.values<{ id: string; image: { full: string } }>(augmentList).map((augment) => ({
      id: augment.id,
      url: `${S3}/${this.season}/augments/${augment.image.full}`,
    }));
  }

  parseAugmentData(
    augmentDataJsonString: string,
    augmentList: ReturnType<typeof this.parseAugmentList>
  ) {
    const augmentData = JSON.parse(augmentDataJsonString).items;

    if (Object.keys(augmentData).length === 0) {
      throw new Error('AugmentData is empty');
    }

    return augmentList.reduce((acc, { id, url }) => {
      const data = augmentData.find((object: { apiName: string }) => object.apiName === id);
      if (!data) {
        console.error(`${id} is not matched!`);
        return acc;
      }

      const { name: originalName, desc: originalDesc, effects } = data;
      const name = GeneralParser.applyRegex(originalName, spaceToUnderBar, removeBrTag);
      const desc = GeneralParser.replaceVariables(originalDesc, effects);
      const augment: Augment = { apiName: id, description: desc, name, url };
      acc[id] = augment;
      return acc;
    }, {} as { [key in string]: Augment });
  }

  parseAugmentName(
    augmentDataJsonString: string,
    augmentList: ReturnType<typeof this.parseAugmentList>
  ) {
    const augmentData = JSON.parse(augmentDataJsonString).items;

    return augmentList
      .map(({ id }) => {
        const data = augmentData.find((object: { apiName: string }) => object.apiName === id);
        if (!data) {
          return '';
        }
        const { name: originalName } = data;
        const name = GeneralParser.applyRegex(originalName, spaceToUnderBar, removeBrTag);
        return name;
      })
      .filter(Boolean);
  }
}
