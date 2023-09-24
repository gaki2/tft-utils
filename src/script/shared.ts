import { Season } from '../types/seasonType';

/**
 * Setdata of Cdragon's json file is not sorted by season.
 * So, we need to map season to index of setdata.
 */
export const SEASON_SET_DATA_IDX_MAP: Record<Season, number> = {
  season_9: 21,
  season_9b: 24,
};
