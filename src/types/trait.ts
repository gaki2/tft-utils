import { Trait_season_9b_ko } from '../_generated/season_9b/trait_ko';
import { Trait_season_9_ko } from '../_generated/season_9/trait_ko';
import { Trait_season_9_en } from '../_generated/season_9/trait_en';
import { Trait_season_9b_en } from '../_generated/season_9b/trait_en';

export type TraitData = {
  name: string;
  apiName: string;
  url: string;
};

export type TraitName =
  | Trait_season_9_ko
  | Trait_season_9b_ko
  | Trait_season_9_en
  | Trait_season_9b_en;

export type TraitNameMap = {
  season_9: Trait_season_9_ko | Trait_season_9_en;
  season_9b: Trait_season_9b_ko | Trait_season_9b_en;
};
