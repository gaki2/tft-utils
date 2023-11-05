import { LanguageType, Season } from '../../types';
import { S3 } from '../../environments/urls';
import { GeneralParser } from './generalParser';
import {
  removeAngleBracket,
  removeBrTag,
  removePercent,
  removeZWSP,
  spaceToUnderBar,
} from '../../utils/regex';

export interface Item {
  apiName: string;
  name: string;
  /**
   * composition 은 아이템을 조합하는데 필요한 아이템들의 apiName 을 담고있다.
   */
  composition: string[];
  url: string;
  desc: string;
}

export class ItemParser {
  constructor(private language: LanguageType, private season: Season) {}

  parseItemList(itemListJsonString: string) {
    const itemList = JSON.parse(itemListJsonString).data;

    if (Object.keys(itemList).length === 0) {
      throw new Error('itemList is empty');
    }

    return Object.values<{ id: string; image: { full: string } }>(itemList).map((value) => {
      const { id } = value;
      return {
        id,
        url: `${S3}/${this.season}/items/${value.image.full}`,
      };
    });
  }

  parseItemData(itemDataJsonString: string, itemList: ReturnType<typeof this.parseItemList>) {
    const itemData = JSON.parse(itemDataJsonString).items;

    if (Object.keys(itemData).length === 0) {
      throw new Error('itemData is empty');
    }

    return itemList.reduce((acc, { id, url }) => {
      const data = itemData.find((object: { apiName: string }) => object.apiName === id);

      /**
       * @exception
       */
      if (!data) {
        console.error(`${id} is not matched!`);
        return acc;
      }

      const { name: originalName, composition, desc: originalDesc, effects } = data;
      const name = GeneralParser.applyRegex(originalName, spaceToUnderBar, removeBrTag);

      /**
       * @exception `name` 이 빈 문자열인 경우가 있음.
       */
      if (!name) {
        return acc;
      }

      const desc = GeneralParser.replaceVariables(
        GeneralParser.applyRegex(originalDesc, removeZWSP, removePercent, removeAngleBracket),
        effects
      );
      const item: Item = { apiName: id, name, url, desc, composition };
      acc[id] = item;
      return acc;
    }, {} as { [key in string]: Item });
  }

  parseItemName(itemDataJsonString: string, itemList: ReturnType<typeof this.parseItemList>) {
    const itemData = JSON.parse(itemDataJsonString).items;

    return itemList
      .map(({ id }) => {
        const data = itemData.find((object: { apiName: string }) => object.apiName === id);
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
