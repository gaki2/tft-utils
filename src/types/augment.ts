import { Augment_season_9b_ko } from '../_generated/season_9b/augments_ko';
import { Augment_season_9_en } from '../_generated/season_9/augments_en';
import { Augment_season_9_ko } from '../_generated/season_9/augments_ko';
import { Augment_season_9b_en } from '../_generated/season_9b/augments_en';

export type AugmentName =
  | Augment_season_9_ko
  | Augment_season_9b_ko
  | Augment_season_9_en
  | Augment_season_9b_en;

export type AugmentMap = {
  season_9: Augment_season_9_ko | Augment_season_9_en;
  season_9b: Augment_season_9b_ko | Augment_season_9b_en;
};
