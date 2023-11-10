import path from 'path';
import { LanguageType, Season } from '../../types';
import { ItemStatTemplate } from './itemStatTemplate';
import { General } from '../general';

const jsonDir = path.join(__dirname, '../../json');
const outDir = path.join(__dirname, '../../_template');

class TFT_Template {
  constructor(
    private language: LanguageType,
    private season: Season,
    private itemStatTemplate: ItemStatTemplate
  ) {}

  static new(season: Season, language: LanguageType) {
    const itemStatTemplate = new ItemStatTemplate(language, season);
    return new TFT_Template(language, season, itemStatTemplate);
  }

  createItemStatTemplate() {
    const itemListDataSet = General.readFileSync(
      `${jsonDir}/${this.season}/tft_item_${this.language}.json`
    );
    const itemList = this.itemStatTemplate.parseItemList(itemListDataSet);
    const template = this.itemStatTemplate.getEmptyTemplate(itemList);
    General.writeFile(`${outDir}/${this.season}/item_stat.ts`, template);
  }
}

const main = () => {
  TFT_Template.new('season_9b', 'ko').createItemStatTemplate();
};

main();
