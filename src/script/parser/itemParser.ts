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
      return `export type ItemName_9b = SplitTwice<keyof typeof items_season_9b, '_'>[2];
export type ItemData_9b = DeepNullable<(typeof items_season_9b)['TFT_Item_Bloodthirster']>;
`;
  }
}

export class ItemParser {
  static getItemIdList(season: Season) {
    const itemListDataSet = GeneralParser.readFileSync(`${jsonDir}/${season}/tft_item_ko.json`);
    const itemData = JSON.parse(itemListDataSet).data;

    if (Object.keys(itemData).length === 0) {
      throw new Error('ItemList is empty');
    }

    return Object.values<{ id: string }>(itemData).map((augment) => augment.id);
  }

  static getItemData(season: Season, itemList: ReturnType<typeof this.getItemIdList>) {
    const itemDataMap = LANGUAGES.reduce((acc, language) => {
      const dataSet = JSON.parse(
        GeneralParser.readFileSync(`${jsonDir}/${season}/tft_data_${language}.json`)
      ).items;

      for (let i = 0; i < itemList.length; i++) {
        const id = itemList[i];
        const data = dataSet.find((object: { apiName: string }) => object.apiName === id);

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

export const items_${season} = ${JSON.stringify(itemDataMap, null, 2)}

${getAdditionalText(season)}
  `;

    return General.writeFile(`${generatedDir}/${season}/items_${season}.ts`, ret);
  }
}

function parseItem(season: Season) {
  const itemIdList = ItemParser.getItemIdList(season);

  return ItemParser.getItemData(season, itemIdList);
}

parseItem('season_9b');
