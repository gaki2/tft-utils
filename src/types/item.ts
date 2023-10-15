import { Item_season_9b_ko } from '../_generated/season_9b/items_ko';
import { Item_season_9_en } from '../_generated/season_9/items_en';
import { Item_season_9_ko } from '../_generated/season_9/items_ko';
import { Item_season_9b_en } from '../_generated/season_9b/items_en';

export type ItemName = Item_season_9_ko | Item_season_9b_ko | Item_season_9_en | Item_season_9b_en;

export type ItemMap = {
  season_9: Item_season_9_ko | Item_season_9_en;
  season_9b: Item_season_9b_ko | Item_season_9b_en;
};
