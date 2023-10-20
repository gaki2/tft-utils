import { Champion_season_9_en } from '../_generated/season_9/champion_en';
import { Champion_season_9b_en } from '../_generated/season_9b/champion_en';
import { Champion_season_9_ko } from '../_generated/season_9/champion_ko';
import { Champion_season_9b_ko } from '../_generated/season_9b/champion_ko';

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

export type ChampionName =
  | Champion_season_9_ko
  | Champion_season_9b_ko
  | Champion_season_9_en
  | Champion_season_9b_en;

export type ChampionNameMap = {
  season_9: Champion_season_9_ko | Champion_season_9_en;
  season_9b: Champion_season_9b_ko | Champion_season_9b_en;
};
