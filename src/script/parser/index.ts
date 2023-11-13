import { LanguageType, Season } from '../../types';
import { ItemParser } from './itemParser';
import { AugmentParser } from './augmentParser';
import { TraitParser } from './traitParser';
import { GeneralParser } from './generalParser';
import path from 'path';
import { LANGUAGES, SEASONS } from '../../types/config';

const jsonDir = path.join(__dirname, '../../json');
const outDir = path.join(__dirname, '../../_generated');

class TFT_Parser {
  constructor(
    private language: LanguageType,
    private season: Season,
    private itemParser: ItemParser,
    private augmentParser: AugmentParser,
    private traitParser: TraitParser
  ) {}

  static new(season: Season, language: LanguageType) {
    const itemParser = new ItemParser(language, season);
    const augmentParser = new AugmentParser(language, season);
    const traitParser = new TraitParser(language, season);
    return new TFT_Parser(language, season, itemParser, augmentParser, traitParser);
  }

  private async createItem(allDataSet: string) {
    const itemListDataSet = GeneralParser.readFileSync(
      `${jsonDir}/${this.season}/tft_item_${this.language}.json`
    );

    const itemList = this.itemParser.parseItemList(itemListDataSet);
    const itemData = this.itemParser.parseItemData(allDataSet, itemList);
    const itemName = this.itemParser.parseItemName(allDataSet, itemList);

    const ret = `export const items_${this.season}_${this.language} = ${JSON.stringify(
      itemData,
      null,
      4
    )};
export type ItemName_${this.season}_${this.language} = ${itemName
      .map((item) => `"${item}"`)
      .join(' | ')}
  `;
    await GeneralParser.writeFile(`${outDir}/${this.season}/items_${this.language}.ts`, ret);
  }

  private async createTrait(allDataSet: string) {
    const traitData = this.traitParser.parseTraitData(allDataSet);
    const traitName = this.traitParser.parseTraitName(allDataSet);

    const ret = `export const trait_${this.season}_${this.language} = ${JSON.stringify(
      traitData,
      null,
      4
    )};
export type TraitName_${this.season}_${this.language} = ${Array.from(traitName)
      .map((trait) => `"${trait}"`)
      .join(' | ')}
`;
    await GeneralParser.writeFile(`${outDir}/${this.season}/trait_${this.language}.ts`, ret);
  }

  private async createAugment(allDataSet: string) {
    const augmentListDataSet = GeneralParser.readFileSync(
      `${jsonDir}/${this.season}/tft_augments_${this.language}.json`
    );

    const augmentList = this.augmentParser.parseAugmentList(augmentListDataSet);
    const augmentData = this.augmentParser.parseAugmentData(allDataSet, augmentList);
    const augmentName = this.augmentParser.parseAugmentName(allDataSet, augmentList);

    const ret = `export const augments_${this.season}_${this.language} = ${JSON.stringify(
      augmentData,
      null,
      4
    )};
export type AugmentName_${this.season}_${this.language} = ${augmentName
      .map((aug) => `"${aug}"`)
      .join(' | ')};
`;
    await GeneralParser.writeFile(`${outDir}/${this.season}/augments_${this.language}.ts`, ret);
  }

  public async createAll() {
    const allDataSet = GeneralParser.readFileSync(
      `${jsonDir}/${this.season}/tft_data_${this.language}.json`
    );

    await this.createItem(allDataSet);
    await this.createTrait(allDataSet);
    await this.createAugment(allDataSet);
  }
}

async function main() {
  const promises = [];

  for (const language of LANGUAGES) {
    for (const season of SEASONS) {
      promises.push(TFT_Parser.new(season, language).createAll());
    }
  }

  return Promise.all(promises);
}

main();
