import { LanguageType } from '../../../types';

export type ItemStat =
  | 'MANA'
  | 'ARMOR'
  | 'AD'
  | 'AS'
  | 'MAGICRESIST'
  | 'HEALTH'
  | 'CRITCHANCE'
  | 'AP';

export const itemStatNameMap = {
  AD: {
    ko: '공격력',
    en: 'Attack Damage',
  },
  AP: {
    ko: '주문력',
    en: 'Ability Power',
  },
  AS: {
    ko: '공격속도',
    en: 'Attack Speed',
  },
  ARMOR: {
    ko: '방어력',
    en: 'Armor',
  },
  MAGICRESIST: {
    ko: '마법저항력',
    en: 'Magic Resist',
  },
  HEALTH: {
    ko: '체력',
    en: 'Health',
  },
  MANA: {
    ko: '마나',
    en: 'Mana',
  },
  CRITCHANCE: {
    ko: '치명타 확률',
    en: 'Critical Chance',
  },
} as const satisfies Record<ItemStat, { [key in LanguageType]: string }>;

export const itemStatUnitMap = {
  AD: '%',
  AP: '',
  AS: '%',
  ARMOR: '',
  MAGICRESIST: '',
  HEALTH: '',
  MANA: '',
  CRITCHANCE: '%',
} as const satisfies Record<ItemStat, string>;

export const itemStatMultiplier = {
  AD: 100,
  AP: 1,
  AS: 1,
  ARMOR: 1,
  MAGICRESIST: 1,
  HEALTH: 1,
  MANA: 1,
  CRITCHANCE: 1,
} as const satisfies Record<ItemStat, number>;
