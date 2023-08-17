export type ChampionName =
  | 'Tristana'
  | 'Irelia'
  | 'Aatrox'
  | 'Ahri'
  | 'Akshan'
  | 'Ashe'
  | 'Azir'
  | 'BelVeth'
  | 'ChoGath'
  | 'Darius'
  | 'Ekko'
  | 'Garen'
  | 'Gwen'
  | 'Heimerdinger'
  | 'JarvanIV'
  | 'Jayce'
  | 'Jinx'
  | 'KaiSa'
  | 'Karma'
  | 'Katarina'
  | 'Kled'
  | 'KSante'
  | 'Lissandra'
  | 'Lux'
  | 'Orianna'
  | 'Poppy'
  | 'Shen'
  | 'RekSai'
  | 'Renekton'
  | 'Sejuani'
  | 'Senna'
  | 'Sion'
  | 'Sona'
  | 'Soraka'
  | 'Swain'
  | 'Taric'
  | 'Teemo'
  | 'VelKoz'
  | 'Warwick'
  | 'Yasuo'
  | 'Zed'
  | 'Cassiopeia'
  | 'Vi'
  | 'Maokai'
  | 'Kayle'
  | 'Samira'
  | 'Urgot'
  | 'Aphelios'
  | 'Zeri'
  | 'Galio'
  | 'Kalista'
  | 'Nasus'
  | 'Malzahar'
  | 'Taliyah'
  | 'Ryze'
  | 'Sett'
  | 'Jhin'
  | 'Viego'
  | 'Kassadin'
  | 'RyzeDemacia'
  | 'RyzeBandleCity'
  | 'RyzeFreljord'
  | 'RyzeIonia'
  | 'RyzeNoxus'
  | 'RyzePiltover'
  | 'RyzeShadowIsles'
  | 'RyzeShurima'
  | 'RyzeTargon'
  | 'RyzeZaun';
type Champions = {
  [key in ChampionName]: Champion;
};

export interface Champion {
  id: string;
  name: string;
  tier: number;
  image: ChampionImage;
}

export interface ChampionImage {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface Data {
  type: string;
  version: string;
  data: Champions;
}

export const rawChampions: Data = {
  type: 'tft-champion',
  version: '13.15.1',
  data: {
    Tristana: {
      id: 'TFT9_Tristana',
      name: '트리스타나',
      tier: 1,
      image: {
        full: 'TFT9_Tristana.TFT_Set9.png',
        sprite: 'tft-champion0.png',
        group: 'tft-champion',
        x: 0,
        y: 0,
        w: 48,
        h: 48,
      },
    },
    Irelia: {
      id: 'TFT9_Irelia',
      name: '이렐리아',
      tier: 1,
      image: {
        full: 'TFT9_Irelia.TFT_Set9.png',
        sprite: 'tft-champion0.png',
        group: 'tft-champion',
        x: 48,
        y: 0,
        w: 48,
        h: 48,
      },
    },
    Aatrox: {
      id: 'TFT9_Aatrox',
      name: '아트록스',
      tier: 5,
      image: {
        full: 'TFT9_Aatrox.TFT_Set9.png',
        sprite: 'tft-champion0.png',
        group: 'tft-champion',
        x: 96,
        y: 0,
        w: 48,
        h: 48,
      },
    },
    Ahri: {
      id: 'TFT9_Ahri',
      name: '아리',
      tier: 5,
      image: {
        full: 'TFT9_Ahri.TFT_Set9.png',
        sprite: 'tft-champion0.png',
        group: 'tft-champion',
        x: 144,
        y: 0,
        w: 48,
        h: 48,
      },
    },
    Akshan: {
      id: 'TFT9_Akshan',
      name: '아크샨',
      tier: 3,
      image: {
        full: 'TFT9_Akshan.TFT_Set9.png',
        sprite: 'tft-champion0.png',
        group: 'tft-champion',
        x: 192,
        y: 0,
        w: 48,
        h: 48,
      },
    },
    Ashe: {
      id: 'TFT9_Ashe',
      name: '애쉬',
      tier: 2,
      image: {
        full: 'TFT9_Ashe.TFT_Set9.png',
        sprite: 'tft-champion0.png',
        group: 'tft-champion',
        x: 240,
        y: 0,
        w: 48,
        h: 48,
      },
    },
    Azir: {
      id: 'TFT9_Azir',
      name: '아지르',
      tier: 4,
      image: {
        full: 'TFT9_Azir.TFT_Set9.png',
        sprite: 'tft-champion0.png',
        group: 'tft-champion',
        x: 288,
        y: 0,
        w: 48,
        h: 48,
      },
    },
    BelVeth: {
      id: 'TFT9_BelVeth',
      name: '벨베스',
      tier: 5,
      image: {
        full: 'TFT9_BelVeth.TFT_Set9.png',
        sprite: 'tft-champion0.png',
        group: 'tft-champion',
        x: 336,
        y: 0,
        w: 48,
        h: 48,
      },
    },
    ChoGath: {
      id: 'TFT9_ChoGath',
      name: '초가스',
      tier: 1,
      image: {
        full: 'TFT9_ChoGath.TFT_Set9.png',
        sprite: 'tft-champion0.png',
        group: 'tft-champion',
        x: 384,
        y: 0,
        w: 48,
        h: 48,
      },
    },
    Darius: {
      id: 'TFT9_Darius',
      name: '다리우스',
      tier: 3,
      image: {
        full: 'TFT9_Darius.TFT_Set9.png',
        sprite: 'tft-champion0.png',
        group: 'tft-champion',
        x: 432,
        y: 0,
        w: 48,
        h: 48,
      },
    },
    Ekko: {
      id: 'TFT9_Ekko',
      name: '에코',
      tier: 3,
      image: {
        full: 'TFT9_Ekko.TFT_Set9.png',
        sprite: 'tft-champion0.png',
        group: 'tft-champion',
        x: 0,
        y: 48,
        w: 48,
        h: 48,
      },
    },
    Garen: {
      id: 'TFT9_Garen',
      name: '가렌',
      tier: 3,
      image: {
        full: 'TFT9_Garen.TFT_Set9.png',
        sprite: 'tft-champion0.png',
        group: 'tft-champion',
        x: 48,
        y: 48,
        w: 48,
        h: 48,
      },
    },
    Gwen: {
      id: 'TFT9_Gwen',
      name: '그웬',
      tier: 4,
      image: {
        full: 'TFT9_Gwen.TFT_Set9.png',
        sprite: 'tft-champion0.png',
        group: 'tft-champion',
        x: 96,
        y: 48,
        w: 48,
        h: 48,
      },
    },
    Heimerdinger: {
      id: 'TFT9_Heimerdinger',
      name: '하이머딩거',
      tier: 5,
      image: {
        full: 'TFT9_Heimerdinger.TFT_Set9.png',
        sprite: 'tft-champion0.png',
        group: 'tft-champion',
        x: 144,
        y: 48,
        w: 48,
        h: 48,
      },
    },
    JarvanIV: {
      id: 'TFT9_JarvanIV',
      name: '자르반 4세',
      tier: 4,
      image: {
        full: 'TFT9_JarvanIV.TFT_Set9.png',
        sprite: 'tft-champion0.png',
        group: 'tft-champion',
        x: 192,
        y: 48,
        w: 48,
        h: 48,
      },
    },
    Jayce: {
      id: 'TFT9_Jayce',
      name: '제이스',
      tier: 3,
      image: {
        full: 'TFT9_Jayce.TFT_Set9.png',
        sprite: 'tft-champion0.png',
        group: 'tft-champion',
        x: 240,
        y: 48,
        w: 48,
        h: 48,
      },
    },
    Jinx: {
      id: 'TFT9_Jinx',
      name: '징크스',
      tier: 2,
      image: {
        full: 'TFT9_Jinx.TFT_Set9.png',
        sprite: 'tft-champion0.png',
        group: 'tft-champion',
        x: 288,
        y: 48,
        w: 48,
        h: 48,
      },
    },
    KaiSa: {
      id: 'TFT9_KaiSa',
      name: '카이사',
      tier: 4,
      image: {
        full: 'TFT9_KaiSa.TFT_Set9.png',
        sprite: 'tft-champion0.png',
        group: 'tft-champion',
        x: 336,
        y: 48,
        w: 48,
        h: 48,
      },
    },
    Karma: {
      id: 'TFT9_Karma',
      name: '카르마',
      tier: 3,
      image: {
        full: 'TFT9_Karma.TFT_Set9.png',
        sprite: 'tft-champion0.png',
        group: 'tft-champion',
        x: 384,
        y: 48,
        w: 48,
        h: 48,
      },
    },
    Katarina: {
      id: 'TFT9_Katarina',
      name: '카타리나',
      tier: 3,
      image: {
        full: 'TFT9_Katarina.TFT_Set9.png',
        sprite: 'tft-champion0.png',
        group: 'tft-champion',
        x: 432,
        y: 48,
        w: 48,
        h: 48,
      },
    },
    Kled: {
      id: 'TFT9_Kled',
      name: '클레드',
      tier: 2,
      image: {
        full: 'TFT9_Kled.TFT_Set9.png',
        sprite: 'tft-champion0.png',
        group: 'tft-champion',
        x: 0,
        y: 96,
        w: 48,
        h: 48,
      },
    },
    KSante: {
      id: 'TFT9_KSante',
      name: '크산테',
      tier: 5,
      image: {
        full: 'TFT9_KSante.TFT_Set9.png',
        sprite: 'tft-champion0.png',
        group: 'tft-champion',
        x: 48,
        y: 96,
        w: 48,
        h: 48,
      },
    },
    Lissandra: {
      id: 'TFT9_Lissandra',
      name: '리산드라',
      tier: 3,
      image: {
        full: 'TFT9_Lissandra.TFT_Set9.png',
        sprite: 'tft-champion0.png',
        group: 'tft-champion',
        x: 96,
        y: 96,
        w: 48,
        h: 48,
      },
    },
    Lux: {
      id: 'TFT9_Lux',
      name: '럭스',
      tier: 4,
      image: {
        full: 'TFT9_Lux.TFT_Set9.png',
        sprite: 'tft-champion0.png',
        group: 'tft-champion',
        x: 144,
        y: 96,
        w: 48,
        h: 48,
      },
    },
    Orianna: {
      id: 'TFT9_Orianna',
      name: '오리아나',
      tier: 1,
      image: {
        full: 'TFT9_Orianna.TFT_Set9.png',
        sprite: 'tft-champion0.png',
        group: 'tft-champion',
        x: 192,
        y: 96,
        w: 48,
        h: 48,
      },
    },
    Poppy: {
      id: 'TFT9_Poppy',
      name: '뽀삐',
      tier: 1,
      image: {
        full: 'TFT9_Poppy.TFT_Set9.png',
        sprite: 'tft-champion0.png',
        group: 'tft-champion',
        x: 240,
        y: 96,
        w: 48,
        h: 48,
      },
    },
    Shen: {
      id: 'TFT9_Shen',
      name: '쉔',
      tier: 4,
      image: {
        full: 'TFT9_Shen.TFT_Set9.png',
        sprite: 'tft-champion0.png',
        group: 'tft-champion',
        x: 288,
        y: 96,
        w: 48,
        h: 48,
      },
    },
    RekSai: {
      id: 'TFT9_RekSai',
      name: '렉사이',
      tier: 3,
      image: {
        full: 'TFT9_RekSai.TFT_Set9.png',
        sprite: 'tft-champion0.png',
        group: 'tft-champion',
        x: 336,
        y: 96,
        w: 48,
        h: 48,
      },
    },
    Renekton: {
      id: 'TFT9_Renekton',
      name: '레넥톤',
      tier: 1,
      image: {
        full: 'TFT9_Renekton.TFT_Set9.png',
        sprite: 'tft-champion0.png',
        group: 'tft-champion',
        x: 384,
        y: 96,
        w: 48,
        h: 48,
      },
    },
    Sejuani: {
      id: 'TFT9_Sejuani',
      name: '세주아니',
      tier: 4,
      image: {
        full: 'TFT9_Sejuani.TFT_Set9.png',
        sprite: 'tft-champion0.png',
        group: 'tft-champion',
        x: 432,
        y: 96,
        w: 48,
        h: 48,
      },
    },
    Senna: {
      id: 'TFT9_Senna',
      name: '세나',
      tier: 5,
      image: {
        full: 'TFT9_Senna.TFT_Set9.png',
        sprite: 'tft-champion1.png',
        group: 'tft-champion',
        x: 0,
        y: 0,
        w: 48,
        h: 48,
      },
    },
    Sion: {
      id: 'TFT9_Sion',
      name: '사이온',
      tier: 5,
      image: {
        full: 'TFT9_Sion.TFT_Set9.png',
        sprite: 'tft-champion1.png',
        group: 'tft-champion',
        x: 48,
        y: 0,
        w: 48,
        h: 48,
      },
    },
    Sona: {
      id: 'TFT9_Sona',
      name: '소나',
      tier: 3,
      image: {
        full: 'TFT9_Sona.TFT_Set9.png',
        sprite: 'tft-champion1.png',
        group: 'tft-champion',
        x: 96,
        y: 0,
        w: 48,
        h: 48,
      },
    },
    Soraka: {
      id: 'TFT9_Soraka',
      name: '소라카',
      tier: 2,
      image: {
        full: 'TFT9_Soraka.TFT_Set9.png',
        sprite: 'tft-champion1.png',
        group: 'tft-champion',
        x: 144,
        y: 0,
        w: 48,
        h: 48,
      },
    },
    Swain: {
      id: 'TFT9_Swain',
      name: '스웨인',
      tier: 2,
      image: {
        full: 'TFT9_Swain.TFT_Set9.png',
        sprite: 'tft-champion1.png',
        group: 'tft-champion',
        x: 192,
        y: 0,
        w: 48,
        h: 48,
      },
    },
    Taric: {
      id: 'TFT9_Taric',
      name: '타릭',
      tier: 3,
      image: {
        full: 'TFT9_Taric.TFT_Set9.png',
        sprite: 'tft-champion1.png',
        group: 'tft-champion',
        x: 240,
        y: 0,
        w: 48,
        h: 48,
      },
    },
    Teemo: {
      id: 'TFT9_Teemo',
      name: '티모',
      tier: 2,
      image: {
        full: 'TFT9_Teemo.TFT_Set9.png',
        sprite: 'tft-champion1.png',
        group: 'tft-champion',
        x: 288,
        y: 0,
        w: 48,
        h: 48,
      },
    },
    VelKoz: {
      id: 'TFT9_VelKoz',
      name: '벨코즈',
      tier: 3,
      image: {
        full: 'TFT9_VelKoz.TFT_Set9.png',
        sprite: 'tft-champion1.png',
        group: 'tft-champion',
        x: 336,
        y: 0,
        w: 48,
        h: 48,
      },
    },
    Warwick: {
      id: 'TFT9_Warwick',
      name: '워윅',
      tier: 2,
      image: {
        full: 'TFT9_Warwick.TFT_Set9.png',
        sprite: 'tft-champion1.png',
        group: 'tft-champion',
        x: 384,
        y: 0,
        w: 48,
        h: 48,
      },
    },
    Yasuo: {
      id: 'TFT9_Yasuo',
      name: '야스오',
      tier: 4,
      image: {
        full: 'TFT9_Yasuo.TFT_Set9.png',
        sprite: 'tft-champion1.png',
        group: 'tft-champion',
        x: 432,
        y: 0,
        w: 48,
        h: 48,
      },
    },
    Zed: {
      id: 'TFT9_Zed',
      name: '제드',
      tier: 2,
      image: {
        full: 'TFT9_Zed.TFT_Set9.png',
        sprite: 'tft-champion1.png',
        group: 'tft-champion',
        x: 0,
        y: 48,
        w: 48,
        h: 48,
      },
    },
    Cassiopeia: {
      id: 'TFT9_Cassiopeia',
      name: '카시오페아',
      tier: 1,
      image: {
        full: 'TFT9_Cassiopeia.TFT_Set9.png',
        sprite: 'tft-champion1.png',
        group: 'tft-champion',
        x: 48,
        y: 48,
        w: 48,
        h: 48,
      },
    },
    Vi: {
      id: 'TFT9_Vi',
      name: '바이',
      tier: 2,
      image: {
        full: 'TFT9_Vi.TFT_Set9.png',
        sprite: 'tft-champion1.png',
        group: 'tft-champion',
        x: 96,
        y: 48,
        w: 48,
        h: 48,
      },
    },
    Maokai: {
      id: 'TFT9_Maokai',
      name: '마오카이',
      tier: 1,
      image: {
        full: 'TFT9_Maokai.TFT_Set9.png',
        sprite: 'tft-champion1.png',
        group: 'tft-champion',
        x: 144,
        y: 48,
        w: 48,
        h: 48,
      },
    },
    Kayle: {
      id: 'TFT9_Kayle',
      name: '케일',
      tier: 1,
      image: {
        full: 'TFT9_Kayle.TFT_Set9.png',
        sprite: 'tft-champion1.png',
        group: 'tft-champion',
        x: 192,
        y: 48,
        w: 48,
        h: 48,
      },
    },
    Samira: {
      id: 'TFT9_Samira',
      name: '사미라',
      tier: 1,
      image: {
        full: 'TFT9_Samira.TFT_Set9.png',
        sprite: 'tft-champion1.png',
        group: 'tft-champion',
        x: 240,
        y: 48,
        w: 48,
        h: 48,
      },
    },
    Urgot: {
      id: 'TFT9_Urgot',
      name: '우르곳',
      tier: 4,
      image: {
        full: 'TFT9_Urgot.TFT_Set9.png',
        sprite: 'tft-champion1.png',
        group: 'tft-champion',
        x: 288,
        y: 48,
        w: 48,
        h: 48,
      },
    },
    Aphelios: {
      id: 'TFT9_Aphelios',
      name: '아펠리오스',
      tier: 4,
      image: {
        full: 'TFT9_Aphelios.TFT_Set9.png',
        sprite: 'tft-champion1.png',
        group: 'tft-champion',
        x: 336,
        y: 48,
        w: 48,
        h: 48,
      },
    },
    Zeri: {
      id: 'TFT9_Zeri',
      name: '제리',
      tier: 4,
      image: {
        full: 'TFT9_Zeri.TFT_Set9.png',
        sprite: 'tft-champion1.png',
        group: 'tft-champion',
        x: 384,
        y: 48,
        w: 48,
        h: 48,
      },
    },
    Galio: {
      id: 'TFT9_Galio',
      name: '갈리오',
      tier: 2,
      image: {
        full: 'TFT9_Galio.TFT_Set9.png',
        sprite: 'tft-champion1.png',
        group: 'tft-champion',
        x: 432,
        y: 48,
        w: 48,
        h: 48,
      },
    },
    Kalista: {
      id: 'TFT9_Kalista',
      name: '칼리스타',
      tier: 3,
      image: {
        full: 'TFT9_Kalista.TFT_Set9.png',
        sprite: 'tft-champion1.png',
        group: 'tft-champion',
        x: 0,
        y: 96,
        w: 48,
        h: 48,
      },
    },
    Nasus: {
      id: 'TFT9_Nasus',
      name: '나서스',
      tier: 4,
      image: {
        full: 'TFT9_Nasus.TFT_Set9.png',
        sprite: 'tft-champion1.png',
        group: 'tft-champion',
        x: 48,
        y: 96,
        w: 48,
        h: 48,
      },
    },
    Malzahar: {
      id: 'TFT9_Malzahar',
      name: '말자하',
      tier: 1,
      image: {
        full: 'TFT9_Malzahar.TFT_Set9.png',
        sprite: 'tft-champion1.png',
        group: 'tft-champion',
        x: 96,
        y: 96,
        w: 48,
        h: 48,
      },
    },
    Taliyah: {
      id: 'TFT9_Taliyah',
      name: '탈리야',
      tier: 2,
      image: {
        full: 'TFT9_Taliyah.TFT_Set9.png',
        sprite: 'tft-champion1.png',
        group: 'tft-champion',
        x: 144,
        y: 96,
        w: 48,
        h: 48,
      },
    },
    Ryze: {
      id: 'TFT9_Ryze',
      name: '라이즈',
      tier: 5,
      image: {
        full: 'TFT9_Ryze.TFT_Set9.png',
        sprite: 'tft-champion1.png',
        group: 'tft-champion',
        x: 192,
        y: 96,
        w: 48,
        h: 48,
      },
    },
    Sett: {
      id: 'TFT9_Sett',
      name: '세트',
      tier: 2,
      image: {
        full: 'TFT9_Sett.TFT_Set9.png',
        sprite: 'tft-champion1.png',
        group: 'tft-champion',
        x: 240,
        y: 96,
        w: 48,
        h: 48,
      },
    },
    Jhin: {
      id: 'TFT9_Jhin',
      name: '진',
      tier: 1,
      image: {
        full: 'TFT9_Jhin.TFT_Set9.png',
        sprite: 'tft-champion1.png',
        group: 'tft-champion',
        x: 288,
        y: 96,
        w: 48,
        h: 48,
      },
    },
    Viego: {
      id: 'TFT9_Viego',
      name: '비에고',
      tier: 1,
      image: {
        full: 'TFT9_Viego.TFT_Set9.png',
        sprite: 'tft-champion1.png',
        group: 'tft-champion',
        x: 336,
        y: 96,
        w: 48,
        h: 48,
      },
    },
    Kassadin: {
      id: 'TFT9_Kassadin',
      name: '카사딘',
      tier: 2,
      image: {
        full: 'TFT9_Kassadin.TFT_Set9.png',
        sprite: 'tft-champion1.png',
        group: 'tft-champion',
        x: 384,
        y: 96,
        w: 48,
        h: 48,
      },
    },
    RyzeDemacia: {
      id: 'TFT9_RyzeDemacia',
      name: '라이즈',
      tier: 5,
      image: {
        full: 'TFT9_Ryze.TFT_Set9.png',
        sprite: 'tft-champion1.png',
        group: 'tft-champion',
        x: 432,
        y: 96,
        w: 48,
        h: 48,
      },
    },
    RyzeBandleCity: {
      id: 'TFT9_RyzeBandleCity',
      name: '라이즈',
      tier: 5,
      image: {
        full: 'TFT9_Ryze.TFT_Set9.png',
        sprite: 'tft-champion2.png',
        group: 'tft-champion',
        x: 0,
        y: 0,
        w: 48,
        h: 48,
      },
    },
    RyzeFreljord: {
      id: 'TFT9_RyzeFreljord',
      name: '라이즈',
      tier: 5,
      image: {
        full: 'TFT9_Ryze.TFT_Set9.png',
        sprite: 'tft-champion2.png',
        group: 'tft-champion',
        x: 48,
        y: 0,
        w: 48,
        h: 48,
      },
    },
    RyzeIonia: {
      id: 'TFT9_RyzeIonia',
      name: '라이즈',
      tier: 5,
      image: {
        full: 'TFT9_Ryze.TFT_Set9.png',
        sprite: 'tft-champion2.png',
        group: 'tft-champion',
        x: 96,
        y: 0,
        w: 48,
        h: 48,
      },
    },
    RyzeNoxus: {
      id: 'TFT9_RyzeNoxus',
      name: '라이즈',
      tier: 5,
      image: {
        full: 'TFT9_Ryze.TFT_Set9.png',
        sprite: 'tft-champion2.png',
        group: 'tft-champion',
        x: 144,
        y: 0,
        w: 48,
        h: 48,
      },
    },
    RyzePiltover: {
      id: 'TFT9_RyzePiltover',
      name: '라이즈',
      tier: 5,
      image: {
        full: 'TFT9_Ryze.TFT_Set9.png',
        sprite: 'tft-champion2.png',
        group: 'tft-champion',
        x: 192,
        y: 0,
        w: 48,
        h: 48,
      },
    },
    RyzeShadowIsles: {
      id: 'TFT9_RyzeShadowIsles',
      name: '라이즈',
      tier: 5,
      image: {
        full: 'TFT9_Ryze.TFT_Set9.png',
        sprite: 'tft-champion2.png',
        group: 'tft-champion',
        x: 240,
        y: 0,
        w: 48,
        h: 48,
      },
    },
    RyzeShurima: {
      id: 'TFT9_RyzeShurima',
      name: '라이즈',
      tier: 5,
      image: {
        full: 'TFT9_Ryze.TFT_Set9.png',
        sprite: 'tft-champion2.png',
        group: 'tft-champion',
        x: 288,
        y: 0,
        w: 48,
        h: 48,
      },
    },
    RyzeTargon: {
      id: 'TFT9_RyzeTargon',
      name: '라이즈',
      tier: 5,
      image: {
        full: 'TFT9_Ryze.TFT_Set9.png',
        sprite: 'tft-champion2.png',
        group: 'tft-champion',
        x: 336,
        y: 0,
        w: 48,
        h: 48,
      },
    },
    RyzeZaun: {
      id: 'TFT9_RyzeZaun',
      name: '라이즈',
      tier: 5,
      image: {
        full: 'TFT9_Ryze.TFT_Set9.png',
        sprite: 'tft-champion2.png',
        group: 'tft-champion',
        x: 384,
        y: 0,
        w: 48,
        h: 48,
      },
    },
  },
};
export const champion = rawChampions.data;
