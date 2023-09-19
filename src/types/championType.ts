import { champion_season_9 } from '../_generated/season_9/champion_en_us';
import { champion_season_9b} from "../_generated/season_9b/champion_en_us";

export type ChampionName = keyof typeof champion_season_9 | keyof typeof champion_season_9b;

export type ChampionName_9 = keyof typeof champion_season_9;
export type ChampionName_9b = keyof typeof champion_season_9b;