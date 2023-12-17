export class ChampionDetailPageError extends Error {
  constructor(championName: string) {
    super(`${championName} 을 찾을 수 없습니다.`);
    this.name = 'ChampionDetailPageError';
  }
}
