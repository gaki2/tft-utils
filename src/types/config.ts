export type LanguageType = 'en' | 'ko';

export const LANGUAGES: LanguageType[] = ['ko', 'en'];
/**
 * @example
 * 'season_9' | 'season_9b', 'season_10' ...
 * season_9b = season9.5
 */
export type Season = 'season_10';
/**
 * 각 시즌 별 JSON 파일이 있고, 그 안에는 여러 시즌의 JSON 데이터가 들어있다.
 * 각 시즌에 맞는 JSON 데이터를 가져오기 위해서 사용한다.
 */
export const SEASON_SET_DATA_IDX_MAP: Record<Season, number> = {
  season_10: 3,
};
