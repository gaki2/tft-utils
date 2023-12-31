export type SkillDetail = {
  championName: string;
  name: string;
  mana: string;
  description: string;
  damage: { title: string; content: string }[];
};

export const skills_season_10 = {
  ahri: {
    championName: 'ahri',
    name: 'POP/STAR',
    mana: '마나: 0/30',
    description: `현재 대상에게 입맞춤을 보냅니다. 마법 피해를 입히고 잠시 기절시킵니다. 이전에 입맞춤을 받은 대상일 경우, 강화된 마법 피해를 입힙니다.\n\n헤드라이너 효과: 주문력 +15%`,
    damage: [
      { title: '피해량', content: ':  주문력의 275% / 410% / 820%' },
      { title: '강화된 피해량', content: ':  주문력의 480% / 720% / 1440%' },
    ],
  },
  akalitruedamage: {
    championName: 'akalitruedamage',
    name: '삼연타격',
    mana: '마나: 0/60',
    description:
      '가장 가까운 3칸 내의 적 세 명에게 물리 피해를 세 번 나누어 입힙니다. 세 번의 공격 후 살아남은 적 하나당 마나를 돌려받습니다.\n\n반짝반짝 보너스: 삼연타격으로 입힌 피해의 20%만큼 체력을 회복합니다.\n\n헤드라이너 효과: 체력 +100, 공격 속도 +10%',
    damage: [
      { title: '단검 세례당 피해량', content: ':  공격력의 275% / 275% / 550%' },
      { title: '돌려받는 마나', content: ':  주문력의 12% / 12% / 20%' },
    ],
  },
  amumu: {
    championName: 'amumu',
    name: '짜증내기',
    mana: '마나: 0/45',
    description:
      '기본 지속 효과: 공격받으면 4의 방어력을 얻으며, 최대 25회까지 중첩됩니다.\n\n사용 시: 주변 적에게 마법 피해를 입힙니다. 3번 사용할 때마다 2칸 내의 적에게 적중해 1.5초 동안 기절시킵니다.\n\n헤드라이너 효과: 체력 +150, 공격을 받으면 추가로 마법 저항력을 얻습니다.',
    damage: [
      { title: '피해량', content: ':  주문력의 80% / 120% / 190%' },
      { title: '총 피해량', content: ':  피해량 + 방어력의 150% / 175% / 200%' },
    ],
  },
  annie: {
    championName: 'annie',
    name: '붕괴',
    mana: '마나: 0/50',
    description:
      '기본 지속 효과: 4회 사용하면 50%의 공격 속도를 얻습니다. 또한 사용 시 주변 다른 적 하나에게 마법 피해를 입힙니다.\n\n사용 시: 현재 대상에게 마법 피해를 입힙니다.\n\n헤드라이너 효과: 주문력 +20',
    damage: [
      { title: '피해량', content: ':  주문력의 195% / 295% / 440%' },
      { title: '추가 사용 시 피해량', content: ':  주문력의 115% / 170% / 255%' },
    ],
  },
  aphelios: {
    championName: 'aphelios',
    name: '달빛 자장가',
    mana: '마나: 40/135',
    description:
      '현재 대상에게 물리 피해를 입히고 기절시킵니다. 그리고 1칸 내의 적에게 물리 피해를 입힙니다. 원래 대상이 사망할 경우 1칸 내의 적을 1초 동안 기절시킵니다.\n\n헤드라이너 효과: 공격력 +20%',
    damage: [
      { title: '기절 지속 시간', content: ':  1.5 / 1.5 / 2' },
      { title: '피해량', content: ':  공격력의 725%' },
      { title: '피해량 %', content: ':  주문력의 10%' },
      { title: '주위 적 피해량', content: ':  피해량 % * 피해량' },
    ],
  },
  bard: {
    championName: 'bard',
    name: '즉흥 공연',
    mana: '마나: 15/60',
    description:
      '세 종류 음표를 무작위로 사용해 음표 4개로 구성된 곡을 연주합니다.\n\n음표 - 현재 대상에게 마법 피해를 입힙니다.\n고대의 종 - 가장 체력이 낮은 아군의 체력을 회복시킵니니다.\n팁 - 1골드를 떨어뜨리고 다른 음표를 연주합니다. (초고속 모드에서는 3골드를 떨어뜨립니다.)\n\n헤드라이너 효과: 바드가 이번 게임에서 스킬을 8회 사용할 때마다 매 전투에서 처음 사용하는 스킬의 피날레가 음표를 추가로 퍼뜨립니다. 음표는 85의 마법 피해를 입힙니다.',
    damage: [
      { title: '음표', content: ':  주문력의 190% / 285% / 430%' },
      { title: '고대의 종', content: ':  주문력의 120% / 150% / 180%' },
      { title: '거리 공연', content: ':  1% / 1% / 3%' },
      { title: '헤드라이너 음표 피해량', content: ':  85 / 125 / 190' },
    ],
  },
  blitzcrank: {
    championName: 'blitzcrank',
    name: '덩실덩실 보호막',
    mana: '마나: 60/120',
    description:
      '기본 지속 효과: 2초마다 주변 적에게 마법 피해를 입힙니다.\n\n사용 시: 보호막을 얻습니다. 5초 동안 블리츠크랭크가 매초 기본 지속 효과 피해를 입히며, 추가로 대상 최대 체력의 1%에 해당하는 마법 피해를 입힙니다.\n\n헤드라이너 효과: 체력 +200, 기본 지속 효과가 항상 최대 체력에 비례하는 마법 피해를 입힙니다.',
    damage: [
      { title: '빠직 피해량', content: ':  주문력의 100% / 150% / 1000%' },
      { title: '보호막', content: ':  주문력의 600% / 750% / 2000%' },
    ],
  },
  caitlyn: {
    championName: 'caitlyn',
    name: '챔피언 사냥',
    mana: '마나: 0/90',
    description:
      '가장 멀리 있는 적 4명을 사격합니다. 사격 시 처음 적중당한 적에게 물리 피해를 입힙니다.\n\n헤드라이너 효과: 공격력 +5%, 추가로 사격하여 60%의 피해를 입힙니다.',
    damage: [
      { title: '공격력 비례 피해량', content: ':  공격력의 390% / 390% / 800%' },
      { title: '주문력 비례 피해량', content: ':  주문력의 25% / 40% / 120%' },
      { title: '총 피해량', content: ':  공격력 비례 피해량 + 주문력 비례 피해량' },
    ],
  },
  corki: {
    championName: 'corki',
    name: '8비트 폭발',
    mana: '마나: 15/60',
    description:
      '현재 대상과 주변 적에게 물리 피해를 입히고, 잠시 동안 상처를 남깁니다.\n\n상처: 체력 회복 효과가 33% 감소합니다.\n\n헤드라이너 효과: 공격력 +20%',
    damage: [
      { title: '피해량', content: ':  공격력의 320%' },
      { title: '지속시간', content: ':  주문력의 5%' },
    ],
  },
  ekko: {
    championName: 'ekko',
    name: '레코드 스크래치',
    mana: '마나: 50/125',
    description:
      '2칸 내의 적에게 마법 피해를 입히고 1.5초 동안 기절시킵니다. 4초 동안 보호막을 얻습니다.\n\n반짝반짝 보너스: 보호막이 활성화된 동안 매초 100의 체력을 회복합니다.\n\n헤드라이너 효과: 체력 +200, 주문력 +20%',
    damage: [
      { title: '보호막', content: ':  주문력의 400% / 450% / 550%' },
      { title: '피해량', content: ':  주문력의 60% / 90% / 145%' },
    ],
  },
  evelynn: {
    championName: 'evelynn',
    name: '채찍유린',
    mana: '마나: 30/90',
    description:
      '현재 대상에게 마법 피해를 입힙니다. 4초 동안 공격 속도가 120% 증가하지만 시간이 흐르면서 효과가 감소합니다. 효과가 활성화된 동안 체력을 회복합니다.\n\n헤드라이너 효과: 체력 +100, 주문력 +15',
    damage: [
      { title: '피해량', content: ':  주문력의 200% / 300% / 450%' },
      { title: '체력 회복', content: ':  25 / 30 / 35' },
    ],
  },
  ezreal: {
    championName: 'ezreal',
    name: '파티 망치기',
    mana: '마나: 0/40',
    description:
      '점멸하여 현재 대상과 멀어진 후 물리 피해를 입힙니다. 3번 사용할 때마다 직선상의 모든 적에게 물리 피해를 입힙니다.\n\n헤드라이너 효과: 공격력 +15%',
    damage: [
      { title: '피해량', content: ':  공격력의 350% / 350% / 700%' },
      { title: '파동 주문력 비례 피해량', content: ':  주문력의 80% / 120% / 360%' },
      { title: '파동 공격력 비례 피해량', content: ':  공격력의 350% / 350% / 700%' },
      { title: '파동 총 피해량', content: ':  공격력 비례 피해량 + 주문력 비례 피해량' },
    ],
  },
  gnar: {
    championName: 'gnar',
    name: '광적인 팬덤',
    mana: '마나: 0/70',
    description:
      '현재 대상 위로 도약한 후 전투가 끝날 때까지 메가 나르로 변신합니다. 체력이 증가하고, 공격력이 70%만큼 증가합니다. 이후 사용 시 현재 대상에게 물리 피해를 입힙니다.\n\n헤드라이너 효과: 전투 시작 시 메가 나르로 변신합니다.',
    damage: [
      { title: '체력', content: ':  주문력의 500% / 550% / 600%' },
      { title: '피해량', content: ':  공격력의 335% / 335% / 335%' },
    ],
  },
  gragas: {
    championName: 'gragas',
    name: '댄스 타임',
    mana: '마나: 40/80',
    description:
      '2초 동안 체력을 회복합니다. 이후 주변 적에게 마법 피해를 입히고 3초 동안 동상 효과를 부여합니다.\n\n동상: 공격 속도가 30% 감소합니다.\n\n헤드라이너 효과 :그라가스가 받는 피해가 10% 감소하고 피해량은 15% 증가합니다.',
    damage: [
      { title: '회복', content: ':  500 / 575 / 650' },
      { title: '피해량', content: ':  주문력의 160% / 240% / 360%' },
    ],
  },
  illaoi: {
    championName: 'illaoi',
    name: '심해의 드럼',
    mana: '마나: 70/150',
    description:
      '기본 지속 효과: 3초마다 일라오이의 촉수가 주변 적에게 마법 피해를 입힙니다.\n\n사용 시: 3.5초 동안 일라오이가 방어력과 마법 저항력이 증가합니다. 체력이 가장 낮은 촉수를 부활시키거나 완전히 회복시킵니다. 가장 가까운 적에게 도약한 후 넓은 범위에 마법 피해를 3회 입힙니다. 촉수는 드럼 소리에 따라 찍기 공격을 가합니다.\n\n헤드라이너 효과: 주문력 +10%, 방어력 +5, 마법 저항력 +5, 촉수가 2초마다 찍기 공격을 가합니다.',
    damage: [
      { title: '피해량', content: ':  방어력 및 마법 저항력의 60% / 60% / 500%' },
      { title: '범위 피해량', content: ':  주문력의 100% / 150% / 4000%' },
      { title: '방어력 및 마법 저항력', content: ':  100 / 150  / 400' },
      { title: '촉수 피해량', content: ':  방어력 비례 피해량+ 마법 저항력 비례 피해량' },
    ],
  },
  jax: {
    championName: 'jax',
    name: '반격 멜로디',
    mana: '마나: 50/120',
    description:
      '사거리 내의 체력이 가장 높은 적에게 도약하여 마법 피해를 입힙니다. 이후 주변 모든 적에게 마법 피해를 입힙니다. 전투가 끝날 때까지 공격력과 주문력이 10%만큼 증가합니다.\n\n헤드라이너 효과: 체력 +200, 주문력 +20%',
    damage: [
      { title: '찍기 피해량', content: ':  주문력의 230% / 345% / 520%' },
      { title: '회전 피해량', content: ':  주문력의 140% / 210% / 315%' },
      { title: '사거리', content: ':  1 + 현재 사거리 (1)' },
    ],
  },
  jhin: {
    championName: 'jhin',
    name: '종말의 협주곡 라단조',
    mana: '마나: 0/50',
    description:
      '기본 지속 효과: 기본 공격 시 추가로 10의 마나를 얻습니다. 대기석에 대단원의 막 소총이 4개 있으면 공격 대신 지휘를 시작합니다. 각 소총은 마에스트로와 같은 속도로 발사되고 물리 피해를 입힙니다. 4번째 세례마다 200%의 피해를 입힙니다.\n\n사용 시: 대단원의 막 소총 1개를 빈 대기석 슬롯에 놓습니다.\n\n헤드라이너 효과: 공격력 +10%, 전투 시작: 빈 대기석 슬롯에 대단원의 막 소총을 1개를 놓습니다.',
    damage: [
      { title: '스킬 사용 1회당 소총', content: ':  1 / 1 / 4' },
      { title: '주문력 비례 피해량', content: ':  15% / 25% / 144%' },
      { title: '공격력 비례 피해량', content: ':  60% / 60% / 444%' },
      { title: '피해량', content: ':  공격력 비례 피해량 + 주문력 비례 피해량' },
    ],
  },
  jinx: {
    championName: 'jinx',
    name: '에스컬레이션',
    mana: '마나: 0/50',
    description:
      '기본 지속 효과 미니건: 공격 시 공격 속도가 증가합니다.\n기본 지속 효과 로켓 발사기: 공격 시 추가 물리 피해를 입힙니다.\n\n사용 시: 미니건이나 로켓 발사기로 교체합니다.\n\n헤드라이너 효과: 미니건 기본 공격 시 1%의 공격 속도를 추가로 얻고, 로켓 발사기 기본 공격 시 10%의 추가 피해를 입힙니다.',
    damage: [
      { title: '공격 속도', content: ':  주문력의 4%' },
      { title: '로켓 피해량', content: ':  공격력의 50%' },
    ],
  },
  karthus: {
    championName: 'karthus',
    name: '필멸자의 운명',
    mana: '마나: 40/120',
    description:
      '가장 체력이 낮은 적 5명에게 마법 피해를 입힙니다. 죽는 적 하나당 10의 마나를 회복합니다.\n\n헤드라이너 효과: 주문력 +15%',
    damage: [{ title: '피해량', content: ':  주문력의 220% / 330% / 1000%' }],
  },
  katarina: {
    championName: 'katarina',
    name: '단검 투척',
    mana: '마나: 0/60',
    description:
      '현재 대상에게 단검을 투척합니다. 단검은 3회 튕기며 튕길 때마다 마법 피해를 입히고 6초 동안 상처를 남깁니다.\n\n상처: 체력 회복량이 33% 감소합니다.\n\n헤드라이너 효과: 체력 +150, 마지막 칼날이 튕길 때 25%의 추가 피해를 입힙니다.',
    damage: [{ title: '피해량', content: ':  주문력의 140% / 210% / 315%' }],
  },
  kayle: {
    championName: 'kayle',
    name: '승천의 불길',
    mana: '마나: 0/30',
    description:
      '5초 동안 기본 공격 시 현재 대상과 그 뒤로 파동을 일으켜 추가 마법 피해를 입힙니다. 적중당한 적에게 4초 동안 파쇄를 적용합니다. 마지막으로 대상의 주변 적에게 마법 피해를 입힙니다.\n\n파쇄: 마법 저항력 30% 감소\n\n헤드라이너 효과: 공격 속도 +25%',
    damage: [
      { title: '추가 피해량', content: ':  주문력의 35% / 50% / 75%' },
      { title: '최종 피해량', content: ':  주문력의 210% / 315% / 475%' },
    ],
  },
  kayn: {
    championName: 'kayn',
    name: '사신의 공포',
    mana: '마나: 0/50',
    description:
      '돌진한 후 주변 모든 적에게 마법 피해를 입히고 3초 동안 동상 효과를 부여합니다. 케인의 공격이 한 대상에게만 적중할 경우 즉시 스킬을 다시 사용합니다.\n\n동상: 공격 속도를 20% 감소시킵니다.\n\n헤드라이너 효과: 주문력 +5%, 그림자 암살자가 2골드를 추가로 제공합니다. 라아스트가 1의 전략가 체력을 추가로 제공합니다.',
    damage: [{ title: '피해량', content: ':  400% / 600% / 4000%' }],
  },
  kennen: {
    championName: 'kennen',
    name: '충격과 공포',
    mana: '마나: 30/90',
    description:
      '2초 동안 충격을 2회 방출합니다. 충격을 방출할 때마다 사거리 내 무작위 적에게 마법 피해를 입히고 0.75초 동안 기절시킵니다.\n\n반짝반짝 보너스: 두 번째 대상에게 충격을 방출해 50%의 피해를 입히고 기절시킵니다.\n\n헤드라이너 효과: 체력 +75, 충격이 최대 체력의 2%에 해당하는 체력을 회복시킵니다.',
    damage: [{ title: '충격 피해량', content: ':  주문력의 145% / 215% / 325%' }],
  },
  lillia: {
    championName: 'lillia',
    name: '피어나는 색종이',
    mana: '마나: 70/140',
    description:
      '주변 적에게 마법 피해를 입힙니다. 릴리아가 체력을 회복하고, 가장 가까운 아군의 체력을 회복시킵니다.\n\n헤드라이너 효과: 체력 +100, 피어나는 색종이의 체력 회복량이 12% 증가합니다.',
    damage: [
      { title: '피해량', content: ':  주문력의 180% / 270% / 400%' },
      { title: '자가 회복량', content: ':  주문력의 180% / 220% / 260%' },
      { title: '아군 회복량', content: ':  주문력의 90% / 110% / 130%' },
    ],
  },
  lucian: {
    championName: 'lucian',
    name: '아르페지오',
    mana: '마나: 50/125',
    description:
      '가장 먼 적을 향해 사격합니다. 각 탄환은 처음 적에게 적중하면 폭발하여 주변 모든 적에게 물리 피해를 입히고 전투가 끝날 때까지 방어력을 감소시킵니다.\n\n아르페지오 사용이 일찍 끝나면 발사하지 않은 사격 횟수에 따라 마나를 얻습니다.\n\n 헤드라이너 효과: 공격력 +5%, 아르페지오 사용 시 추가로 3회 사격합니다.',
    damage: [
      { title: '방어력 감소', content: ':  3 / 5 / 20' },
      { title: '주문력 비례 피해량', content: ':  주문력의 20% / 30% / 100%' },
      { title: '공격력 비례 피해량', content: ':  공격력의 55% / 55% / 1000%' },
      { title: '발사 횟수', content: ':  14 + 추가 공격 속도 20%당 1' },
      { title: '총 피해량', content: ':   공격력 비례 피해량 + 주문력 비례 피해량' },
    ],
  },
  lulu: {
    championName: 'lulu',
    name: '반짝이 맛',
    mana: '마나: 0/40',
    description:
      '현재 대상 방향으로 화살을 발사합니다. 처음 관통하는 적에게 마법 피해를 입히고 두 번째로 적중하는 적에게는 마법 피해를 입힙니다. 3번 사용할 때마다 가장 가까운 적 3명을 1.25초 동안 기절시키고 마법 피해를 입힙니다.\n\n헤드라이너 효과: 주문력 +25',
    damage: [
      { title: '피해량', content: ':  주문력의 240% / 360% / 575%' },
      { title: '2차 대상 피해량', content: ':  주문력의 150% / 225% / 360%' },
      { title: '3번째 사용 시 피해량', content: ':  주문력의 120% / 180% / 280%' },
    ],
  },
  lux: {
    championName: 'lux',
    name: '레이저 쇼',
    mana: '마나: 15/75',
    description:
      '가장 먼 적에게 광선을 발사합니다. 적중하는 모든 적에게 마법 피해를 입힙니다.\n\n헤드라이너 효과: 치명타 확률 +15%, 이 스킬에는 치명타가 적용될 수 있습니다.',
    damage: [{ title: '피해량', content: ':  주문력의 230% / 345% / 550%' }],
  },
  mordekaiser: {
    championName: 'mordekaiser',
    name: '안면 붕괴',
    mana: '마나: 70/120',
    description:
      '3초 동안 보호막을 얻고 주변 적에게 마법 피해를 입힙니다. 이후 주변 적에게 마법 피해를 입힙니다.\n\n안면 붕괴로 적을 처치하면 주문력과 공격력이 4%만큼, 방어력 및 마법 저항력이 4만큼 증가합니다.\n\n헤드라이너 효과: 체력 +100, 주문력 +5, 이 스킬로 적을 처치하면 영구적으로 1%의 주문력을 얻습니다.',
    damage: [
      { title: '보호막', content: ':  주문력의 500% / 575% / 650%' },
      { title: '피해량', content: ':  주문력의 200% / 300% / 480%' },
      { title: '최종 피해량', content: ':  주문력의 200% / 300% / 480%' },
    ],
  },
  nami: {
    championName: 'nami',
    name: '디스코 감옥',
    mana: '마나: 15/75',
    description:
      '현재 대상에게 마법 피해를 입히고 1.5초 동안 기절시킵니다.\n\n헤드라이너 효과: 주문력 +25%',
    damage: [{ title: '피해량', content: ':  주문력의 300% / 450% / 675%' }],
  },
  neeko: {
    championName: 'neeko',
    name: '코스프레',
    mana: '마나: 0/90',
    description:
      '체력의 가장 높은 아군을 코스프레해 4초 동안 보호막 + 아군 체력의 5%에 해당하는 보호막을 얻습니다. 보호막이 사라질 때 주변 적에게 최초 보호막 수치의 %에 해당하는 마법 피해를 입힙니다.\n\n헤드라이너 효과: 체력 +200, 니코가 아군을 복사할 때 해당 아군에게 20의 마나를 부여합니다.',
    damage: [
      { title: '보호막', content: ':  주문력의 250% / 300% / 350%' },
      { title: '피해량 %', content: ':  70% / 90% / 115%' },
    ],
  },
  pantheon: {
    championName: 'pantheon',
    name: '끈질긴 목숨',
    mana: '마나: 0/60',
    description:
      '2.5초 동안 받는 피해가 감소합니다. 이후 지속시간 동안 판테온에게 가장 큰 피해를 입힌 적 3명에게 물리 피해를 입힙니다.\n\n헤드라이너 효과: 체력 +250, 방어력 +20, 마법 저항력 +20',
    damage: [
      { title: '피해량 감소', content: ':  주문력의 25% / 25% / 30%' },
      { title: '총 피해량 감소', content: ':  (최대 70%) 15% + 주문력 비례 피해량 감소' },
      { title: '피해량', content: ':  공격력의 200%' },
    ],
  },
  poppy: {
    championName: 'poppy',
    name: '망치 가져와',
    mana: '마나: 30/100',
    description:
      '기본 지속 효과: 추가 체력에 따라 공격력이 증가합니다.\n\n사용 시: 6초 동안 방어력 및 마법 저항력이 100만큼 증가합니다. 또한 가장 가까운 적을 3번 내리쳐 적중할 때마다 물리 피해를 입히고 체력을 회복합니다. 이 스킬로 적을 처치하면 추가로 한 번 찍기 공격을 가합니다.\n\n헤드라이너 효과: 체력 +200, 공격력 +15%',
    damage: [
      { title: '피해량', content: ':  공격력의 260% / 260% / 525%' },
      { title: '추가 공격 피해량', content: ':  최대 체력의 3%' },
      { title: '체력 회복', content: ':  최대 체력의 6%' },
    ],
  },
  qiyana: {
    championName: 'qiyana',
    name: '샘플링과 리믹스',
    mana: '마나: 0/40',
    description:
      '현재 대상이 보유한 아이템을 1개 복사한 후 아군에게 던져 줍니다. 그리고 대상에게 물리 피해를 입히고 뒤로 밀쳐냅니다. 대상이 보유한 아이템이 없을 경우 추가 고정 피해를 입히고 전장 가장자리로 밀쳐냅니다.\n\n반짝반짝 보너스: 샘플링과 리믹스로 챔피언을 처치하고 아이템을 복사하면 영구적인 조합 아이템 1개를 생성합니다.\n\n[찬란한 아이템, 유물, 상징은 복사할 수 없습니다.]\n\n헤드라이너 효과: 공격력 +5%, 키아나가 아이템을 복사할 때 영구적으로 2%의 공격력을 얻습니다.',
    damage: [
      { title: '복사한 아이템 수', content: ':  1 / 2 / 3' },
      { title: '피해량', content: ':  500% / 500% / 1000% (공격력 비례)' },
      { title: '추가 피해량', content: ':  피해량의 75% / 75% / 500% (주문력 비례)' },
    ],
  },
  riven: {
    championName: 'riven',
    name: '복셀 방어',
    mana: '마나: 50/100',
    description:
      '다음 6초 동안 보호막을 얻습니다. 또한 기본 공격 시 대상과 1칸 내의 적에게 추가 물리 피해를 입힙니다.\n\n헤드라이너 효과: 체력 +200, 공격력 +10%, 방어력 +10%, 마법 저항력 +10%',
    damage: [
      { title: '주문력 비례 보호막', content: ':  100% / 120% / 140%' },
      { title: '보호막', content: ':  공격력의 250% + 주문력 비례 보호막' },
      { title: '피해량', content: ':  공격력의 100%' },
    ],
  },
  samira: {
    championName: 'samira',
    name: '전율과 살상',
    mana: '마나: 0/100',
    description:
      '기본 지속 효과: 공격이 치명타로 적중하면 스타일 중첩을 얻으며, 최대 6회 중첩됩니다. 중첩 하나당 공격 속도가 증가합니다.\n\n사용 시: 현재 대상에게 물리 피해를 입힙니다. 이때 스타일 중첩 하나당 물리 피해를 추가로 입히고, 스타일이 초기화됩니다.\n\n헤드라이너 효과: 공격력 +5, 치명타 확률 +10%',
    damage: [
      { title: '피해량', content: ':  공격력의 240% / 240% / 250%' },
      { title: '스타일당 피해량', content: ':  공격력의 110%' },
      { title: '공격 속도', content: ':  주문력의 20%' },
    ],
  },
  senna: {
    championName: 'senna',
    name: '뇌진탕 소음',
    mana: '마나: 30/90',
    description:
      '현재 대상의 위치에 소리 폭발을 일으킵니다. 서브 우퍼는 3회 파동을 방출하며, 파동을 방출할 때마다 1칸 내의 적에게 마법 피해를 입힙니다.\n\n반짝반짝 보너스: -15의 최대 마나\n\n헤드라이너 효과: 주문력 +5%, 파동을 방출할 때마다 파동의 크기가 증가합니다.',
    damage: [{ title: '피해량', content: ':  주문력의 105% / 155% / 225%' }],
  },
  seraphine: {
    championName: 'seraphine',
    name: '고음',
    mana: '마나: 0/60',
    description:
      '1칸 내의 모든 유닛에게 적중하는 고음을 가장 큰 유닛 무리로 보냅니다. 적에게 적중 시 마법 피해를 입힙니다. 아군에게 적중 시 체력을 회복시킵니다.\n\n헤드라이너 효과: 스킬을 2번 사용할 때마다 또 다른 고음을 보내 40%의 피해를 입히고 40%의 체력을 회복시킵니다.',
    damage: [
      { title: '피해량', content: ':  140% / 210% / 315%' },
      { title: '체력 회복', content: ':  80% / 120% / 160%' },
    ],
  },
  sett: {
    championName: 'sett',
    name: '펀치라인',
    mana: '마나: 30/90',
    description:
      '2초 동안 보호막을 얻으며, 잃은 체력 4당 보호막이 1만큼 증가합니다. 현재 대상에게 마법 피해를 입히고 주변 원뿔 범위의 적에게는 마법 피해를 입힙니다.\n\n헤드라이너 효과: 체력 +150, 체력이 50%일 때 최대 체력이 영구적으로 50 증가합니다.',
    damage: [
      { title: '보호막', content: ':  375 / 425 / 475' },
      { title: '피해량', content: ':  주문력의 275% / 420% / 680%' },
      { title: '원뿔 범위 피해량', content: ':  주문력의 130% / 210% / 340%' },
    ],
  },
  sona: {
    championName: 'sona',
    name: '절정',
    mana: '마나: 0/170',
    description:
      '역동\n기본 지속 효과: 공격 시 아군에게 비트를 보내 최대 체력의 일부를 회복시킵니다.\n사용 시: 모든 아군에게 비트를 보내 보호막을 부여합니다.\n\n헤드라이너 효과: 공격 속도 +5%, 공격할 때마다 공격 속도가 1% 증가합니다.\n\n환영\n기본 지속 효과: 공격 시 아군에게 비트를 보내 4초 동안 공격 속도를 증가시킵니다.\n사용 시: 6초 동안 모든 아군의 공격 속도를 증가시키고, 공격 시 마법 피해를 입힙니다.\n\n헤드라이너 효과: 공격 속도 +5%, 공격할 때마다 공격 속도가 2% 증가합니다.\n\n뇌진탕\n기본 지속 효과: 공격 시 아군에게 비트를 보냅니다. 소나와 아군 모두 주문력이 증가합니다.\n사용 시: 다수의 가장 가까운 적에게 마법 피해를 입힙니다.\n\n헤드라이너 효과: 공격 속도 +5%, 공격할 때마다 공격 속도가 2% 증가합니다.',
    damage: [
      { title: '[역동] 최대 체력 %', content: ':  4% / 7% / 100%' },
      { title: '[역동] 보호막', content: ':  350% / 550% / 3333%' },
      { title: '[역동] 지속 시간', content: ':  2 / 2 / 30' },
      { title: '[환영] 기본 지속 효과 공격 속도', content: ':  25% / 35% / 500%' },
      { title: '[환영] 사용 시 공격 속도', content: ':  90% / 135% / 777%' },
      { title: '[환영] 1회당 피해량', content: ':  75% / 115% / 777%' },
      { title: '[뇌진탕] 주문력', content: ':  2 / 3 / 100' },
      { title: '[뇌진탕] 피해량', content: ':  450% / 675% / 7777%' },
      { title: '[뇌진탕] 대상 수', content: ':  5 / 5 / 11' },
    ],
  },
  taric: {
    championName: 'taric',
    name: '미러볼의 축복',
    mana: '마나: 50/140',
    description:
      '4초 동안 보호막을 얻습니다. 타릭이 사용하는 다음 2회의 공격이 추가 마법 피해를 입힙니다.\n\n헤드라이너 효과: 체력 +100, 방어력 +15',
    damage: [
      { title: '기본 보호막', content: ':  240 / 290 / 330' },
      { title: '보호막', content: ':  기본 보호막 + 최대 체력의 6%' },
      { title: '피해량', content: ':  주문력의 100% / 150% / 225%' },
    ],
  },
  thresh: {
    championName: 'thresh',
    name: '악마의 휘몰이',
    mana: '마나: 70/160',
    description:
      '주위 가장 큰 적 무리를 기절시키고 각각 마법 피해를 입힙니다. 기본 체력 회복량 + 쓰레쉬가 입힌 총 피해의 50%에 해당하는 체력을 회복합니다.\n\n헤드라이너 효과: 체력 +250, 최대 마나가 25 감소합니다.',
    damage: [
      { title: '피해량', content: ':  주문력의 150% / 225% / 1200%' },
      { title: '체력 회복', content: ':  250 / 300 / 600' },
      { title: '기절 지속시간', content: ':  1.75 / 2 / 8' },
    ],
  },
  twitch: {
    championName: 'twitch',
    name: '병 속의 난장판',
    mana: '마나: 20/70',
    description:
      '현재 대상에게 병을 던져 1칸 내의 적에게 물리 피해를 입힙니다. 이후 병은 6개의 파편으로 폭발해 각 파편이 2칸 내의 무작위 적에게 마법 피해를 입힙니다. 병 투척이 치명타로 적중한 적 하나당 파편 1개를 추가로 생성합니다.\n\n헤드라이너 효과: 공격력 +15%, 치명타 확률 +20%',
    damage: [
      { title: '2차 마법 피해량', content: ':  주문력의 35% / 50% / 80%' },
      { title: '1차 피해량', content: ':  공격력의 225%' },
    ],
  },
  urgot: {
    championName: 'urgot',
    name: '손끝에서 피어나는 불꽃',
    mana: '마나: 0/20',
    description:
      '8초 동안 추가 공격 속도를 공격력으로 전환합니다. 공격 시 원뿔 범위에 물리 피해를 입히고 우르곳이 5초 동안 입힌 피해의 20%에 해당하는 보호막을 얻습니다.\n\n헤드라이너 효과: 공격력 +15%, 모든 피해 흡혈 +10%',
    damage: [
      { title: '주문력 비례 피해량', content: ':  주문력의 15% / 25% / 40%' },
      { title: '공격력 비례 피해량', content: ':  공격력의 175% / 175% / 180%' },
      { title: '총 피해량', content: ':  공격력 비례 피해량 + 주문력 비례 피해량' },
    ],
  },
  vex: {
    championName: 'vex',
    name: '그대의 장례식',
    mana: '마나: 25/75',
    description:
      '현재 대상에게 그림자를 보냅니다. 그림자는 주위 1칸 내의 적을  1.5초 동안 기절시키며, 이후 1칸 내의 적에게 마법 피해를 입힙니다.\n\n헤드라이너 효과 : 주문력 +25%',
    damage: [{ title: '피해량', content: ':  주문력의 255% / 380% / 610%' }],
  },
  vi: {
    championName: 'vi',
    name: '가중되는 고통',
    mana: '마나: 40/70',
    description:
      '현재 대상에게 물리 피해를 입힙니다. 대상의 체력이 바이보다 더 높은 경우 강화된 물리 피해를 입힙니다. 적을 잠시 기절시킵니다. 또한 전투가 끝날 때까지 방어력을 감소시킵니다.\n\n헤드라이너 효과: 체력 +150, 공격력 +20',
    damage: [
      { title: '기절 지속 시간', content: ':  1.5 / 1.75 / 2' },
      { title: '방어력 감소', content: ':  주문력의 15% / 18% / 20%' },
      { title: '피해량', content: ':  공격력의 220%' },
      { title: '강화된 피해량', content: ':  공격력의 320%' },
    ],
  },
  viego: {
    championName: 'viego',
    name: '몰락한 왕의 리프',
    mana: '마나: 70/120',
    description:
      '근처 칸을 찍습니다. 2칸 내의 적에게 물리 피해를 입히고 표식을 남깁니다. 표식이 남은 적은 받는 모든 피해가 10%만큼 증가합니다.\n\n비에고가 표식이 남은 적을 공격할 때 강화된 물리 피해를 입힙니다.\n\n헤드라이너 효과: 체력 +150, 공격력 +10%',
    damage: [
      { title: '찍기 피해량', content: ':  공격력의 200% / 200% / 400%' },
      { title: '강화된 공격 피해량', content: ':  공격력의 185% / 185% / 370%' },
      { title: '지속시간', content: ':  주문력의 5%' },
    ],
  },
  yasuo: {
    championName: 'yasuo',
    name: '신시사이저 타격',
    mana: '마나: 0/50',
    description:
      '기본 지속 효과: 야스오가 적 챔피언을 처치할 때마다 영구적으로 공격력이 1% 증가합니다. (초고속 모드에서는 효과가 두 배로 적용됩니다.)\n\n사용 시: 현재 대상에게 물리 피해를 입힙니다.\n\n반짝반짝 보너스: 신시사이저 타격 시 체력이 15% 아래인 적을 처형합니다.\n\n헤드라이너 효과: 체력 +100, 모든 피해 흡혈 +15%',
    damage: [{ title: '피해량', content: ':  공격력의 300% + 주문력의 20%' }],
  },
  yone: {
    championName: 'yone',
    name: '급살',
    mana: '마나: 0/70',
    description:
      '전투가 끝날 때까지 이동 속도와 모든 피해 흡혈을 얻습니다. 이 효과는 중첩됩니다. 두 번 베기 공격을 날려 원뿔 범위의 적에게 각각 물리 피해를 입힙니다.\n\n모든 피해 흡혈: 입힌 피해량의 일부만큼 체력을 회복합니다.\n\n헤드라이너 효과: 체력 +200, 공격력 +20%',
    damage: [
      { title: '피해량', content: ':  공격력의 210% / 210% / 215%' },
      { title: '모든 피해 흡혈 중첩', content: ':  주문력의 8%' },
    ],
  },
  yorick: {
    championName: 'yorick',
    name: '구덩이로 들어가! (ft. 망령)',
    mana: '마나: 60/110',
    description:
      '헤드뱅잉 망령을 소환하여 전장 중앙으로 보냅니다. 각 망령은 3회 공격에 걸쳐 물리 피해를 입힙니다. 망령이 피해를 입히면 3초 동안 20%의 파열을 적용합니다.\n\n스킬을 2번째로 사용할 때마다 거대 망령을 소환합니다.\n\n파열: 방어력이 감소합니다\n\n헤드라이너 효과: 체력 +50, 망령을 2마리 추가로 소환합니다. 거대 망령은 훨씬 크고 10%의 추가 피해를 입힙니다.',
    damage: [
      { title: '망령', content: ':  9 / 10 / 25' },
      { title: '망령 피해량', content: ':  150% / 150% / 1000%' },
      { title: '거대 망령 체력', content: ':  900 / 1750 / 9001' },
      { title: '거대 망령 피해량', content: ':  250% / 250% / 2000%' },
    ],
  },
  zac: {
    championName: 'zac',
    name: '바운스!',
    mana: '마나: 60/130',
    description:
      '주변 적에게 3회 튕깁니다. 튕길 때마다 마법 피해를 입히고 1초 동안 기절시킵니다. 추가로 자크의 체력을 회복합니다.\n\n헤드라이너 효과: 체력 +200, 주문력 +15',
    damage: [
      { title: '피해량', content: ':  주문력의 120% / 180% / 1200%' },
      { title: '체력 회복', content: ':  주문력의 100% / 140% / 800%' },
    ],
  },
  zed: {
    championName: 'zed',
    name: '그림자 춤',
    mana: '마나: 30/50',
    description:
      '현재 대상에게 표식을 남기고, 4초 동안 대상으로 지정할 수 없는 그림자를 생성합니다. 그림자는 제드 공격력에 비례한 공격력을 지닙니다. 짧은 시간이 지나거나 표식이 남은 적의 체력이 일정 수치 아래로 떨어지면 추가 물리 피해를 입힙니다.\n\n헤드라이너 효과: 체력 +100, 제드의 그림자가 +10%의 공격력 및 +10%의 공격 속도를 얻습니다.',
    damage: [
      { title: '그림자 공격력', content: ':  공격력의 175% / 175% / 350%' },
      { title: '피해량', content: ':  공격력의 350% / 350% / 700%' },
      { title: '체력 기준', content: ':  주문력의 15%' },
    ],
  },
  ziggs: {
    championName: 'ziggs',
    name: '혼돈 이론',
    mana: '마나: 30/75',
    description:
      '현재 대상에게 폭탄을 던져 마법 피해를 입힙니다. 폭탄은 5개의 소형 폭탄으로 분열하여 대상에게 4초 동안 파쇄를 부여하고 마법 피해를 입힙니다. 스킬을 사용할 때마다 소형 폭탄의 개수가 1개 증가합니다.\n\n파쇄: 마법 저항력이 30% 감소합니다.\n\n헤드라이너 효과: 주문력 +5%, 최대 마나가 15 감소합니다.',
    damage: [
      { title: '피해량', content: ':  360% / 540% / 4000%' },
      { title: '분열 피해량', content: ':  70% / 105% / 400%' },
    ],
  },
  missfortune: {
    championName: 'missfortune',
    name: '두 배 시간',
    mana: '마나: 0/60',
    description:
      '현재 대상에게 물리 피해를 입히고, 그 뒤에 가장 가까운 적에게 물리 피해를 입힙니다. 둘 중 하나라도 죽으면 4초 동안 공격 속도가 증가합니다.\n\n헤드라이너 효과: 공격력 +20%',
    damage: [
      { title: '1차 피해량', content: ':  공격력의 270% / 270% / 275%' },
      { title: '2차 피해량', content: ':  공격력의 180% / 180% / 180%' },
      { title: '공격 속도', content: ':  주문력의 40%' },
    ],
  },
  olaf: {
    championName: 'olaf',
    name: '광전사의 분노',
    mana: '마나: 없음',
    description:
      '기본 지속 효과: 공격 시 체력을 회복합니다. 잃은 체력 1%당 공격 속도가 증가합니다.\n\n헤드라이너 효과: 체력 +150, 방어력 +10, 마법 저향력 +10',
    damage: [
      { title: '체력 회복', content: ':  주문력의 20% / 25% / 35%' },
      { title: '공격 속도', content: ':  체력의 0.12%당 1%' },
    ],
  },
  tahmkench: {
    championName: 'tahmkench',
    name: '생가죽',
    mana: '마나: 없음',
    description:
      '기본 지속 효과: 피해를 받을 때 받는 피해가 감소합니다.\n\n헤드라이너 효과: 체력 +225',
    damage: [{ title: '피해량 감소', content: ':  주문력의 12% / 15% / 25%' }],
  },
  twistedfate: {
    championName: 'twistedfate',
    name: '섞고 던지기',
    mana: '마나: 30/105',
    description:
      '현재 대상과 가장 가까운 적 3명에게 카드를 나누어 던집니다. 마법 저항력을 1만큼 감소시키고 마법 피해를 입힙니다.\n\n헤드라이너 효과: 카드 3장을 추가로 던집니다.',
    damage: [
      { title: '피해량', content: ':  주문력의 50% / 75% / 225%' },
      { title: '카드 수', content: ':  21 + 추가 공격 속도 40%당 1' },
    ],
  },
  ksante: {
    championName: 'ksante',
    name: '안티 차단',
    mana: '마나: 0/40',
    description:
      '방어 태세를 취합니다. 2.5초 동안 받는 피해가 감소합니다. 이후 현재 대상에게 물리 피해를 입힙니다.\n\n헤드라이너 효과: 체력 +225',
    damage: [
      { title: '주문력 비례 피해량 감소', content: ':  주문력의 20% / 20% / 25%' },
      { title: '피해량 감소', content: ':  (최대 75%) 30% + 주문력 비례 피해량 감소' },
      { title: '피해량', content: ':  공격력의 800%' },
    ],
  },
  kaisa: {
    championName: 'kaisa',
    name: '웅장한 사운드',
    mana: '마나: 0/30',
    description:
      '최대 2칸 돌진한 후 현재 대상에게 미사일을 발사합니다. 처음 적중하는 적에게 물리 피해를 입힙니다.\n\n헤드라이너 효과: 공격력 +15%, +2칸 더 멀리 돌진합니다.',
    damage: [
      { title: '공격력 비례 피해량', content: ':  280% / 280% / 285%' },
      { title: '주문력 비례 피해량', content: ':  30% / 45% / 65%' },
      { title: '피해량', content: ':  공격력 비례 피해량 + 주문력 비례 피해량' },
    ],
  },
  garen: {
    championName: 'garen',
    name: '능력 강화!',
    mana: '마나: 40/90',
    description:
      '최대 체력이 증가합니다. 가렌의 다음 공격이 추가 물리 피해를 입힙니다.\n\n헤드라이너 효과: 체력 +400',
    damage: [
      { title: '체력', content: ':  주문력의 200% / 215% / 230%' },
      { title: '피해량', content: ':  공격력의 160% + 체력의 10%' },
    ],
  },
  akali: {
    championName: 'akali',
    name: 'The Baddest',
    mana: '마나: 10/50',
    description:
      '가장 멀리 있는 표식이 없는 대상에게 표창을 던져 표식을 남깁니다. 이후 표식이 남은 모든 적에게 돌진한 뒤 타격하여 물리 피해를 입히고, 돌진 경로에 있는 적에게는 물리 피해를 입힙니다.\n\n헤드라이너 효과: 체력 +100, 공격 속도 +10%',
    damage: [
      { title: '타격 피해량', content: ':  공격력의 190% / 190% / 380%' },
      { title: '돌진 피해량', content: ':  주문력의 80% / 120% / 400%' },
    ],
  },
};
