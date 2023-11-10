import { ItemStat } from '../../../script/template/itemStatTemplate';
import { LanguageType } from '../../../types';

export const itemStatNameMap = {
  ad: {
    ko: '공격력',
    en: 'Attack Damage',
  },
  ap: {
    ko: '주문력',
    en: 'Ability Power',
  },
  speed: {
    ko: '공격속도',
    en: 'Attack Speed',
  },
  armor: {
    ko: '방어력',
    en: 'Armor',
  },
  mr: {
    ko: '마법저항력',
    en: 'Magic Resist',
  },
  hp: {
    ko: '체력',
    en: 'Health',
  },
  mana: {
    ko: '마나',
    en: 'Mana',
  },
  critical: {
    ko: '치명타 확률',
    en: 'Critical Chance',
  },
} as const satisfies Record<ItemStat, { [key in LanguageType]: string }>;

export const itemStatUnitMap = {
  ad: '%',
  ap: '',
  speed: '%',
  armor: '',
  mr: '',
  hp: '',
  mana: '',
  critical: '%',
} as const satisfies Record<ItemStat, string>;
