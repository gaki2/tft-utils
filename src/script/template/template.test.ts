import { describe } from 'vitest';
import { item_stat_season_9b } from '../../_template/season_9b/item_stat';

describe('템플릿 테스트', () => {
  test('[시즌9b] 아이템 스탯 데이터 스냅샷 테스트', () => {
    const item_stat_data = item_stat_season_9b;

    expect(item_stat_data).toMatchSnapshot();
  });
});
