import { describe, expect } from 'vitest';
import { LANGUAGES, LanguageType, SEASONS } from '../../types/config';
import { Season } from '../../types';
import { GeneralParser } from './generalParser';
import path from 'path';
import { ChampionParser } from './championParser';
import { ItemParser } from './itemParser';
import { AugmentParser } from './augmentParser';
import { TraitParser } from './traitParser';

describe('Parser 테스트', () => {
  const config: [Season, LanguageType][] = SEASONS.reduce((acc, season) => {
    for (const language of LANGUAGES) {
      acc.push([season, language]);
    }
    return acc;
  }, []);

  const jsonDir = path.join(__dirname, '../../json');

  test.each(config)(
    '챔피언 파싱 정상 여부 테스트 [시즌: %s, 언어: %s]',
    async (season, language) => {
      const allDataSet = GeneralParser.readFileSync(
        `${jsonDir}/${season}/tft_data_${language}.json`
      );
      const championListDataSet = GeneralParser.readFileSync(
        `${jsonDir}/${season}/tft_champions_${language}.json`
      );

      const championParser = new ChampionParser(language, season);
      const championList = championParser.parseChampionList(championListDataSet);
      expect(() => championList).not.toThrowError();
      expect(
        () => championParser.parseChampionData(allDataSet, championList).resolves
      ).not.toThrowError();
      expect(
        () => championParser.parseChampionName(allDataSet, championList).resolves
      ).not.toThrowError();
    }
  );

  test.each(config)(
    '아이템 파싱 정상 여부 테스트 [시즌: %s, 언어: %s]',
    async (season, language) => {
      const allDataSet = GeneralParser.readFileSync(
        `${jsonDir}/${season}/tft_data_${language}.json`
      );
      const itemListDataSet = GeneralParser.readFileSync(
        `${jsonDir}/${season}/tft_item_${language}.json`
      );

      const itemParser = new ItemParser(language, season);
      const itemList = itemParser.parseItemList(itemListDataSet);
      expect(() => itemList).not.toThrowError();
      expect(() => itemParser.parseItemData(allDataSet, itemList).resolves).not.toThrowError();
      expect(() => itemParser.parseItemName(allDataSet, itemList).resolves).not.toThrowError();
    }
  );

  test.each(config)('증강 파싱 정상 여부 테스트 [시즌: %s, 언어: %s]', async (season, language) => {
    const allDataSet = GeneralParser.readFileSync(`${jsonDir}/${season}/tft_data_${language}.json`);
    const augmentListDataSet = GeneralParser.readFileSync(
      `${jsonDir}/${season}/tft_augments_${language}.json`
    );
    const augmentParser = new AugmentParser(language, season);
    const augmentList = augmentParser.parseAugmentList(augmentListDataSet);

    expect(() => augmentList).not.toThrowError();
    expect(
      () => augmentParser.parseAugmentData(allDataSet, augmentList).resolves
    ).not.toThrowError();
    expect(
      () => augmentParser.parseAugmentName(allDataSet, augmentList).resolves
    ).not.toThrowError();
  });

  test.each(config)('특성 파싱 정상 여부 테스트 [시즌: %s, 언어: %s]', async (season, language) => {
    const allDataSet = GeneralParser.readFileSync(`${jsonDir}/${season}/tft_data_${language}.json`);
    const traitParser = new TraitParser(language, season);

    expect(() => traitParser.parseTraitData(allDataSet).resolves).not.toThrowError();
    expect(() => traitParser.parseTraitName(allDataSet).resolves).not.toThrowError();
  });
});
