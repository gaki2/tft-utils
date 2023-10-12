import { champion_season_9 } from '../_generated/season_9/champion_en';
import { champion_season_9b } from '../_generated/season_9b/champion_en';

/**
 * Board.tsx, Borad Model 에서 사용됩니다.
 */
export type ChampionData = {
  // 언어에 따라서 달라지는 값
  name: string;
  // 언어와 관계없이 항상 똑같은 값
  apiName: string;
  url: string;
  cost: number;
  traits: string[];
};

export type ChampionName = keyof typeof champion_season_9 | keyof typeof champion_season_9b;

export type ChampionName_9 = keyof typeof champion_season_9;
export type ChampionName_9b = keyof typeof champion_season_9b;
