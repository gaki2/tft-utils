import { DeepNullable, Split } from '../../types/utilType';

export const champions_season_10 = {
  TFT10_Ahri: {
    ability: {
      desc: {
        ko: '현재 대상에게 입맞춤을 보냅니다. <magicDamage>@modifieddamage@(%i:scaleAP%)</magicDamage>의 마법 피해를 입히고 잠시 기절시킵니다. 이전에 입맞춤을 받은 대상일 경우, <magicDamage>@bonusKissDamage@(%i:scaleAP%)</magicDamage>의 마법 피해를 입힙니다.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: 'Blow a kiss at the current target. It deals <magicDamage>@modifieddamage@&nbsp;(%i:scaleAP%)</magicDamage> magic damage and briefly Stuns them. If the target has been kissed before, deal <magicDamage>@bonusKissDamage@&nbsp;(%i:scaleAP%)</magicDamage> magic damage&nbsp;instead.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Ahri/HUD/Icons2D/Icons_TFT10_Ahri_E.TFT_Set10.dds',
      name: {
        ko: 'POP/STAR',
        en: 'POP/STAR',
      },
      variables: [
        {
          name: 'damage',
          value: [0, 275, 410, 1500, 0, 0, 0],
        },
        {
          name: 'kissDamage',
          value: [
            1.600000023841858, 480, 720, 2400, 1.600000023841858, 1.600000023841858,
            1.600000023841858,
          ],
        },
        {
          name: 'stunduration',
          value: [0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25],
        },
        {
          name: 'HeadlinerAbilityPower',
          value: [15, 15, 15, 15, 15, 15, 15],
        },
      ],
    },
    apiName: 'TFT10_Ahri',
    characterName: 'TFT10_Ahri',
    cost: 4,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Ahri.TFT_Set10.tex',
    name: {
      ko: '아리',
      en: 'Ahri',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Ahri_Mobile.TFT_Set10.tex',
    stats: {
      armor: 30,
      attackSpeed: 0.800000011920929,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 40,
      hp: 700,
      initialMana: 0,
      magicResist: 30,
      mana: 30,
      range: 5,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Ahri/HUD/TFT10_Ahri_Square.TFT_Set10.tex',
    traits: {
      ko: ['K/DA', '주문술사'],
      en: ['K/DA', 'Spellweaver'],
    },
  },
  TFT10_Akali: {
    ability: {
      desc: {
        ko: '가장 멀리 있는 표식이 없는 대상에게 표창을 던져 표식을 남깁니다. 이후 표식이 남은 모든 적에게 돌진한 뒤 타격하여 <physicalDamage>@Total_Strike_Damage@(%i:scaleAD%)</physicalDamage>의 물리 피해를 입히고, 돌진 경로에 있는 적에게는 <physicalDamage>@Total_Dash_Damage@(%i:scaleAP%)</physicalDamage>의 물리 피해를 입힙니다.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: 'Throw a shuriken at the farthest unmarked target, marking them. Dash to every marked enemy, striking them for <physicalDamage>@Total_Strike_Damage@&nbsp;(%i:scaleAD%)</physicalDamage> physical damage and dealing <physicalDamage>@Total_Dash_Damage@&nbsp;(%i:scaleAP%)</physicalDamage> physical damage to enemies dashed through.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Akali/HUD/Icons2D/TFT10_Akali_E.TFT_Set10.dds',
      name: {
        ko: 'The Baddest',
        en: 'The Baddest',
      },
      variables: [
        {
          name: 'Base_Dash_Damage',
          value: [0, 80, 120, 400, 2, 2, 2],
        },
        {
          name: 'Base_Strike_Damage',
          value: [0, 1.899999976158142, 1.899999976158142, 3.799999952316284, 0, 0, 0],
        },
        {
          name: 'HeadlinerHealth',
          value: [100, 100, 100, 100, 100, 100, 100],
        },
        {
          name: 'HeadlinerAttackSpeed',
          value: [
            0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612,
            0.10000000149011612, 0.10000000149011612, 0.10000000149011612,
          ],
        },
      ],
    },
    apiName: 'TFT10_Akali',
    characterName: 'TFT10_Akali',
    cost: 4,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Akali.TFT_Set10.tex',
    name: {
      ko: '아칼리',
      en: 'Akali',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Akali_Mobile.TFT_Set10.tex',
    stats: {
      armor: 50,
      attackSpeed: 0.8500000238418579,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 60,
      hp: 950,
      initialMana: 10,
      magicResist: 50,
      mana: 50,
      range: 1,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Akali/HUD/TFT10_Akali_Square.TFT_Set10.tex',
    traits: {
      ko: ['K/DA', '처형자', '빅히트'],
      en: ['K/DA', 'Executioner', 'Breakout'],
    },
  },
  TFT10_Amumu: {
    ability: {
      desc: {
        ko: '<spellPassive>기본 지속 효과:</spellPassive> 공격받으면 <scaleLevel>@ArmorGain@</scaleLevel>의 방어력을 얻으며, 최대 @StackCap@회까지 중첩됩니다.<br><br><spellActive>사용 시:</spellActive> 주변 적에게 <magicDamage>@TotalDamage@(%i:scaleAP%%i:scaleArmor%)</magicDamage>의 마법 피해를 입힙니다. 3번 사용할 때마다 2칸 내의 적에게 적중해 @StunDuration@초 동안 기절시킵니다.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: '<spellPassive>Passive:</spellPassive> When attacked, gain <scaleLevel>@ArmorGain@</scaleLevel> Armor (stacks up to @StackCap@ times).<br><br><spellActive>Active:</spellActive> Deal <magicDamage>@TotalDamage@&nbsp;(%i:scaleAP%%i:scaleArmor%)</magicDamage> magic damage to adjacent enemies. Every 3rd cast hits enemies within 2 hexes and Stuns them for&nbsp;@StunDuration@&nbsp;seconds.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Amumu/HUD/Icons2D/TFT10_Amumu_E.TFT_Set10.dds',
      name: {
        ko: '짜증내기',
        en: 'Tantrum',
      },
      variables: [
        {
          name: 'ManaGain',
          value: [20, 20, 20, 20, 20, 20, 20],
        },
        {
          name: 'ArmorGain',
          value: [2, 2, 2, 2, 2, 2, 2],
        },
        {
          name: 'StackCap',
          value: [30, 30, 30, 30, 30, 30, 30],
        },
        {
          name: 'MagicDamage',
          value: [0, 60, 90, 145, 0, 0, 0],
        },
        {
          name: 'ARRatio',
          value: [1, 1.399999976158142, 1.600000023841858, 1.7999999523162842, 1, 1, 1],
        },
        {
          name: 'StunDuration',
          value: [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5],
        },
        {
          name: 'HeadlinerHealth',
          value: [150, 150, 150, 150, 150, 150, 150],
        },
      ],
    },
    apiName: 'TFT10_Amumu',
    characterName: 'TFT10_Amumu',
    cost: 3,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Amumu.TFT_Set10.tex',
    name: {
      ko: '아무무',
      en: 'Amumu',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Amumu_Mobile.TFT_Set10.tex',
    stats: {
      armor: 55,
      attackSpeed: 0.6499999761581421,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 45,
      hp: 900,
      initialMana: 0,
      magicResist: 55,
      mana: 45,
      range: 1,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Amumu/HUD/TFT10_Amumu_Square.TFT_Set10.tex',
    traits: {
      ko: ['이모코어', '수호자'],
      en: ['Emo', 'Guardian'],
    },
  },
  TFT10_Annie: {
    ability: {
      desc: {
        ko: '<spellPassive>기본 지속 효과:</spellPassive> @PyromaniaCount@회 사용하면 <TFTBonus>@BonusAS@%</TFTBonus>의 공격 속도를 얻습니다. 또한 사용 시 주변 다른 적 하나에게 <magicDamage>@ModifiedSecondaryDamage@(%i:scaleAP%)</magicDamage>의 마법 피해를 입힙니다.<br><br><spellActive>사용 시:</spellActive> 현재 대상에게 <magicDamage>@ModifiedMagicDamage@(%i:scaleAP%)</magicDamage>의 마법 피해를 입힙니다.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: '<spellPassive>Passive:</spellPassive> After @PyromaniaCount@ casts, gain <TFTBonus>@BonusAS@%</TFTBonus> Attack Speed and casts deal <magicDamage>@ModifiedSecondaryDamage@&nbsp;(%i:scaleAP%)</magicDamage> magic damage to another nearby&nbsp;enemy.<br><br><spellActive>Active:</spellActive> Deal <magicDamage>@ModifiedMagicDamage@&nbsp;(%i:scaleAP%)</magicDamage> magic damage to the current&nbsp;target.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Annie/HUD/Icons2D/TFT10_Annie_Q.TFT_Set10.dds',
      name: {
        ko: '붕괴',
        en: 'Disintegrate',
      },
      variables: [
        {
          name: 'MagicDamage',
          value: [0, 170, 255, 385, 0, 0, 0],
        },
        {
          name: 'HealthThreshold',
          value: [
            0.3499999940395355, 0.3499999940395355, 0.3499999940395355, 0.3499999940395355,
            0.3499999940395355, 0.3499999940395355, 0.3499999940395355,
          ],
        },
        {
          name: 'DamageRatio',
          value: [
            0.05000000074505806, 0.05000000074505806, 0.05000000074505806, 0.05000000074505806,
            0.05000000074505806, 0.05000000074505806, 0.05000000074505806,
          ],
        },
        {
          name: 'HeadlinerAbilityPower',
          value: [20, 20, 20, 20, 20, 20, 20],
        },
        {
          name: 'ExtraCasts',
          value: [1, 1, 1, 1, 1, 1, 1],
        },
        {
          name: 'PyromaniaCount',
          value: [4, 4, 4, 4, 4, 4, 4],
        },
        {
          name: 'BonusAS',
          value: [50, 50, 50, 50, 50, 50, 50],
        },
        {
          name: 'SecondaryDamage',
          value: [0, 115, 170, 255, 0, 0, 0],
        },
      ],
    },
    apiName: 'TFT10_Annie',
    characterName: 'TFT10_Annie',
    cost: 1,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Annie.TFT_Set10.tex',
    name: {
      ko: '애니',
      en: 'Annie',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Annie_Mobile.TFT_Set10.tex',
    stats: {
      armor: 20,
      attackSpeed: 0.6499999761581421,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 40,
      hp: 450,
      initialMana: 0,
      magicResist: 20,
      mana: 50,
      range: 5,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Annie/HUD/TFT10_Annie_Square.TFT_Set10.tex',
    traits: {
      ko: ['이모코어', '주문술사'],
      en: ['Emo', 'Spellweaver'],
    },
  },
  TFT10_Aphelios: {
    ability: {
      desc: {
        ko: '현재 대상에게 <physicalDamage>@ModifiedPhysicalDamage@(%i:scaleAD%)</physicalDamage>의 물리 피해를 입히고 <scaleLevel>@StunDuration@</scaleLevel>초 동안 기절시킵니다. 그리고 1칸 내의 적에게 <physicalDamage>@ModifiedAOEDamage@(%i:scaleAD%%i:scaleAP%)</physicalDamage>의 물리 피해를 입힙니다. 원래 대상이 사망할 경우 1칸 내의 적을 @AOEStunDuration@초 동안 기절시킵니다.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: 'Deal <physicalDamage>@ModifiedPhysicalDamage@&nbsp;(%i:scaleAD%)</physicalDamage> physical damage and Stun the current target for <scaleLevel>@StunDuration@</scaleLevel> seconds. Deal <physicalDamage>@ModifiedAOEDamage@&nbsp;(%i:scaleAD%%i:scaleAP%)</physicalDamage> physical damage to enemies within 1 hex. If the original target dies, Stun enemies within 1 hex for&nbsp;@AOEStunDuration@&nbsp;second.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Aphelios/HUD/Icons2D/TFT10_ApheliosR.TFT_Set10.dds',
      name: {
        ko: '달빛 자장가',
        en: 'Moonlight Lullaby',
      },
      variables: [
        {
          name: 'StunDuration',
          value: [0, 1.5, 1.5, 2, 2, 2, 2],
        },
        {
          name: 'HeadlinerAttackDamage',
          value: [
            0.20000000298023224, 0.20000000298023224, 0.20000000298023224, 0.20000000298023224,
            0.20000000298023224, 0.20000000298023224, 0.20000000298023224,
          ],
        },
        {
          name: 'ADRatio',
          value: [7.25, 7.25, 7.25, 7.25, 7.25, 7.25, 7.25],
        },
        {
          name: 'Range',
          value: [1, 1, 1, 1, 1, 1, 1],
        },
        {
          name: 'APMultiplier',
          value: [
            0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612,
            0.10000000149011612, 0.10000000149011612, 0.10000000149011612,
          ],
        },
        {
          name: 'AOEStunDuration',
          value: [1, 1, 1, 1, 1, 1, 1],
        },
      ],
    },
    apiName: 'TFT10_Aphelios',
    characterName: 'TFT10_Aphelios',
    cost: 2,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Aphelios.TFT_Set10.tex',
    name: {
      ko: '아펠리오스',
      en: 'Aphelios',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Aphelios_Mobile.TFT_Set10.tex',
    stats: {
      armor: 20,
      attackSpeed: 0.75,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 55,
      hp: 600,
      initialMana: 40,
      magicResist: 20,
      mana: 135,
      range: 4,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Aphelios/HUD/TFT10_Aphelios_Square.TFT_Set10.tex',
    traits: {
      ko: ['Heartsteel', '속사포'],
      en: ['Heartsteel', 'Rapidfire'],
    },
  },
  TFT10_Bard: {
    ability: {
      desc: {
        ko: '세 종류 음표를 무작위로 사용해 음표 @NumNotes@개로 구성된 곡을 연주합니다.<br><br>음표 - 현재 대상에게 <magicDamage>@ModifiedSingleTarDmg@(%i:scaleAP%)</magicDamage>의 마법 피해를 입힙니다.<br>고대의 종 - 가장 체력이 낮은 아군의 체력을 <scaleHealth>@ModifiedHeal@(%i:scaleAP%)</scaleHealth>만큼 회복시킵니다.<br>팁 - <TFTBonus>@TipGold@</TFTBonus>골드를 떨어뜨리고 다른 음표를 연주합니다. <rules>(초고속 모드에서는 @TipGold_HR@골드를 떨어뜨립니다.)</rules><br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: 'Play a @NumNotes@-note tune at random using 3 possible notes:<br><br>Doot - Deal <magicDamage>@ModifiedSingleTarDmg@&nbsp;(%i:scaleAP%)</magicDamage> magic damage to the current target.<br>Chime - Heal the lowest Health ally for <scaleHealth>@ModifiedHeal@&nbsp;(%i:scaleAP%)</scaleHealth> Health.<br>Tip - Drop <TFTBonus>@TipGold@</TFTBonus> gold and play another note. <rules>(@TipGold_HR@ Gold in Hyper Roll)</rules><br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Bard/HUD/Icons2D/TFT10_Bard_Meeps.TFT_Set10.dds',
      name: {
        ko: '즉흥 공연',
        en: 'Improv',
      },
      variables: [
        {
          name: 'NumNotes',
          value: [0, 4, 4, 4, 0, 0, 0],
        },
        {
          name: 'SingleTarDmg',
          value: [1, 190, 285, 430, 0, 0, 0],
        },
        {
          name: 'Heal',
          value: [0, 120, 150, 180, 0, 0, 0],
        },
        {
          name: 'HeadlinerAbilityPower',
          value: null,
        },
        {
          name: 'HeadlinerCastsPerMeep',
          value: [8, 8, 8, 8, 8, 8, 8],
        },
        {
          name: 'HeadlinerDootDamage',
          value: [190, 95, 140, 215, 190, 190, 190],
        },
        {
          name: 'TipChance',
          value: [2, 1, 1, 3, 0, 0, 0],
        },
        {
          name: 'TipGold',
          value: [1, 1, 1, 1, 1, 1, 1],
        },
        {
          name: 'TipGold_HR',
          value: [3, 3, 3, 3, 3, 3, 3],
        },
      ],
    },
    apiName: 'TFT10_Bard',
    characterName: 'TFT10_Bard',
    cost: 2,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Bard.TFT_Set10.tex',
    name: {
      ko: '바드',
      en: 'Bard',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Bard_Mobile.TFT_Set10.tex',
    stats: {
      armor: 20,
      attackSpeed: 0.699999988079071,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 40,
      hp: 550,
      initialMana: 15,
      magicResist: 20,
      mana: 75,
      range: 4,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Bard/HUD/TFT10_Bard_Square.TFT_Set10.tex',
    traits: {
      ko: ['재즈', '현혹술사'],
      en: ['Jazz', 'Dazzler'],
    },
  },
  TFT10_Blitzcrank: {
    ability: {
      desc: {
        ko: '<spellPassive>기본 지속 효과:</spellPassive> @Period@초마다 주변 적에게 <magicDamage>@ZapDamage@(%i:scaleAP%)</magicDamage>의 마법 피해를 입힙니다.<br><br><spellActive>사용 시:</spellActive> <TFTBonus>@ShieldAmount@(%i:scaleAP%)</TFTBonus>의 보호막을 얻습니다. @Duration@초 동안 블리츠크랭크가 매초 기본 지속 효과 피해를 입히며, 추가로 대상 최대 체력의 <scaleLevel>@HealthRatio*100@%</scaleLevel>에 해당하는 마법 피해를 입힙니다.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: "<spellPassive>Passive:</spellPassive> Deal <magicDamage>@ZapDamage@ (%i:scaleAP%)</magicDamage> magic damage to a nearby enemy every @Period@ seconds.<br><br><spellActive>Active:</spellActive> Gain a <TFTBonus>@ShieldAmount@ (%i:scaleAP%)</TFTBonus> Shield. For @Duration@ seconds, Blitzcrank's Passive deals damage every second and deals an additional <scaleLevel>@HealthRatio*100@%</scaleLevel> of the target's max Health as magic&nbsp;damage.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@",
      },
      icon: 'ASSETS/Characters/TFT10_Blitzcrank/HUD/Icons2D/TFT10_BlitzcrankP.TFT_Set10.dds',
      name: {
        ko: '덩실덩실 보호막',
        en: 'Boogie Barrier',
      },
      variables: [
        {
          name: 'Period',
          value: [2, 2, 2, 2, 2, 2, 2],
        },
        {
          name: 'BaseZapDamage',
          value: [0, 100, 150, 1000, 0, 0, 0],
        },
        {
          name: 'BaseShieldAmount',
          value: [0, 600, 750, 2000, 0, 0, 0],
        },
        {
          name: 'EnhancedPeriod',
          value: [1, 1, 1, 1, 1, 1, 1],
        },
        {
          name: 'HealthRatio',
          value: [
            0.009999999776482582, 0.009999999776482582, 0.009999999776482582, 0.009999999776482582,
            0.009999999776482582, 0.009999999776482582, 0.009999999776482582,
          ],
        },
        {
          name: 'Duration',
          value: [5, 5, 5, 5, 5, 5, 5],
        },
        {
          name: 'HeadlinerHealth',
          value: [150, 150, 150, 150, 150, 150, 150],
        },
      ],
    },
    apiName: 'TFT10_Blitzcrank',
    characterName: 'TFT10_Blitzcrank',
    cost: 4,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Blitzcrank.TFT_Set10.tex',
    name: {
      ko: '블리츠크랭크',
      en: 'Blitzcrank',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Blitzcrank_Mobile.TFT_Set10.tex',
    stats: {
      armor: 60,
      attackSpeed: 0.6000000238418579,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 60,
      hp: 1000,
      initialMana: 60,
      magicResist: 60,
      mana: 120,
      range: 1,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Blitzcrank/HUD/TFT10_Blitzcrank_Square.TFT_Set10.tex',
    traits: {
      ko: ['디스코', '감시자'],
      en: ['Disco', 'Sentinel'],
    },
  },
  TFT10_Caitlyn: {
    ability: {
      desc: {
        ko: '가장 멀리 있는 적 @NumShots@명을 사격합니다. 사격 시 처음 적중당한 적에게 <physicalDamage>@TOTAL_DAMAGE@(%i:scaleAD%%i:scaleAP%)</physicalDamage>의 물리 피해를 입힙니다.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: 'Fire shots at the @NumShots@ furthest enemies. Shots deal <physicalDamage>@TOTAL_DAMAGE@&nbsp;(%i:scaleAD%%i:scaleAP%)</physicalDamage> physical damage to the first enemy they&nbsp;hit.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Caitlyn/HUD/Icons2D/TFT10_CaitlynR.TFT_Set10.dds',
      name: {
        ko: '챔피언 사냥',
        en: 'Champ Hunt',
      },
      variables: [
        {
          name: 'ADPercent',
          value: [2, 3.4000000953674316, 3.4000000953674316, 6.800000190734863, 2, 2, 2],
        },
        {
          name: 'APRatio',
          value: [0, 0.25, 0.4000000059604645, 1.2000000476837158, 0, 0, 0],
        },
        {
          name: 'NumShots',
          value: [4, 4, 4, 4, 4, 4, 4],
        },
        {
          name: 'HeadlinerAttackDamage',
          value: [
            0.05000000074505806, 0.05000000074505806, 0.05000000074505806, 0.05000000074505806,
            0.05000000074505806, 0.05000000074505806, 0.05000000074505806,
          ],
        },
        {
          name: 'HeadlinerShotDamage',
          value: [
            0.6000000238418579, 0.6000000238418579, 0.6000000238418579, 0.6000000238418579,
            0.6000000238418579, 0.6000000238418579, 0.6000000238418579,
          ],
        },
      ],
    },
    apiName: 'TFT10_Caitlyn',
    characterName: 'TFT10_Caitlyn',
    cost: 4,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Caitlyn.TFT_Set10.tex',
    name: {
      ko: '케이틀린',
      en: 'Caitlyn',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Caitlyn_Mobile.TFT_Set10.tex',
    stats: {
      armor: 30,
      attackSpeed: 0.800000011920929,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 70,
      hp: 700,
      initialMana: 0,
      magicResist: 30,
      mana: 90,
      range: 5,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Caitlyn/HUD/TFT10_Caitlyn_Square.TFT_Set10.tex',
    traits: {
      ko: ['8비트', '속사포'],
      en: ['8-bit', 'Rapidfire'],
    },
  },
  TFT10_Corki: {
    ability: {
      desc: {
        ko: '현재 대상과 주변 적에게 <physicalDamage>@TotalDamage@(%i:scaleAD%)</physicalDamage>의 물리 피해를 입히고 @ModifiedWoundDuration@(%i:scaleAP%)초 동안 <TFTKeyword>상처</TFTKeyword>를 남깁니다.<br><br><rules>상처: 받는 체력 회복 효과가 33% 감소합니다.</rules><br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: 'Deal <physicalDamage>@TotalDamage@&nbsp;(%i:scaleAD%)</physicalDamage> physical damage to the current target and adjacent enemies, then <TFTKeyword>Wound</TFTKeyword> them for @ModifiedWoundDuration@&nbsp;(%i:scaleAP%)&nbsp;seconds.<br><br><rules>Wound: Reduce healing received by&nbsp;33%</rules><br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Corki/HUD/Icons2D/TFT10_Corki_ThePackage.TFT_Set10.dds',
      name: {
        ko: '8비트 폭발',
        en: 'Blown to 8 Bits',
      },
      variables: [
        {
          name: 'RocketDamage',
          value: [
            3.200000047683716, 3.200000047683716, 3.200000047683716, 3.200000047683716,
            3.200000047683716, 3.200000047683716, 3.200000047683716,
          ],
        },
        {
          name: 'HeadlinerAttackDamage',
          value: [
            0.20000000298023224, 0.20000000298023224, 0.20000000298023224, 0.20000000298023224,
            0.20000000298023224, 0.20000000298023224, 0.20000000298023224,
          ],
        },
        {
          name: 'DurationIncreasePerAPPercent',
          value: [1, 1, 1, 1, 1, 1, 1],
        },
        {
          name: 'WoundDuration',
          value: [5, 5, 5, 5, 5, 5, 5],
        },
      ],
    },
    apiName: 'TFT10_Corki',
    characterName: 'TFT10_Corki',
    cost: 1,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Corki.TFT_Set10.tex',
    name: {
      ko: '코르키',
      en: 'Corki',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Corki_Mobile.TFT_Set10.tex',
    stats: {
      armor: 15,
      attackSpeed: 0.699999988079071,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 42,
      hp: 450,
      initialMana: 15,
      magicResist: 15,
      mana: 60,
      range: 5,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Corki/HUD/TFT10_Corki_Square.TFT_Set10.tex',
    traits: {
      ko: ['8비트', '거물'],
      en: ['8-bit', 'Big Shot'],
    },
  },
  TFT10_Ekko: {
    ability: {
      desc: {
        ko: '2칸 내의 적에게 <magicDamage>@TOTAL_DAMAGE@(%i:scaleAP%)</magicDamage>의 마법 피해를 입히고 @STUN_DURATION@초 동안 기절시킵니다. @SHIELD_DURATION@초 동안 <TFTBonus>@SHIELD_TOTAL@(%i:scaleAP%)</TFTBonus>의 보호막을 얻습니다.<br><br><spellActive enabled=TFT10_BlingActive alternate=rules>반짝반짝 보너스: 보호막이 활성화된 동안 매초 <scaleHealth><ShowIfNot.TFT10_BlingActive>@TFTUnitProperty.:TFT10_EkkoHealPerSecond@</ShowIfNot.TFT10_BlingActive><ShowIf.TFT10_BlingActive>@TFTUnitProperty.:TFT10_EkkoHealPerSecond@</ShowIf.TFT10_BlingActive></scaleHealth>의 체력을 회복합니다.</spellActive><br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: 'Deal <magicDamage>@TOTAL_DAMAGE@&nbsp;(%i:scaleAP%)</magicDamage>&nbsp;magic damage to enemies within 2 hexes and Stun them for @STUN_DURATION@ seconds. Gain a <TFTBonus>@SHIELD_TOTAL@&nbsp;(%i:scaleAP%)</TFTBonus>&nbsp;Health shield for @SHIELD_DURATION@&nbsp;seconds.<br><br><spellActive enabled=TFT10_BlingActive alternate=rules>Bling Bonus: While the shield is up, heal <scaleHealth><ShowIfNot.TFT10_BlingActive>@TFTUnitProperty.:TFT10_EkkoHealPerSecond@</ShowIfNot.TFT10_BlingActive><ShowIf.TFT10_BlingActive>@TFTUnitProperty.:TFT10_EkkoHealPerSecond@</ShowIf.TFT10_BlingActive></scaleHealth> every&nbsp;second.</spellActive><br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Ekko/HUD/Icons2D/TFT10_Ekko_R.TFT_Set10.dds',
      name: {
        ko: '레코드 스크래치',
        en: 'Record Scratch',
      },
      variables: [
        {
          name: 'SHIELD_BASE',
          value: [300, 400, 450, 550, 600, 300, 300],
        },
        {
          name: 'SHIELD_DURATION',
          value: [4, 4, 4, 4, 4, 4, 4],
        },
        {
          name: 'STUN_DURATION',
          value: [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5],
        },
        {
          name: 'BASE_DAMAGE',
          value: [0, 60, 90, 145, 0, 0, 0],
        },
        {
          name: 'HEAL_AMOUNT',
          value: [100, 100, 100, 100, 100, 100, 100],
        },
        {
          name: 'HEAL_AMOUNT_EMPOWERED',
          value: [200, 200, 200, 200, 200, 200, 200],
        },
        {
          name: 'HEAL_TICKRATE',
          value: [1, 1, 1, 1, 1, 1, 1],
        },
        {
          name: 'HeadlinerHealth',
          value: [200, 200, 200, 200, 200, 200, 200],
        },
        {
          name: 'HeadlinerAbilityPower',
          value: [20, 20, 20, 20, 20, 20, 20],
        },
      ],
    },
    apiName: 'TFT10_Ekko',
    characterName: 'TFT10_Ekko',
    cost: 3,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Ekko.TFT_Set10.tex',
    name: {
      ko: '에코',
      en: 'Ekko',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Ekko_Mobile.TFT_Set10.tex',
    stats: {
      armor: 40,
      attackSpeed: 0.6499999761581421,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 50,
      hp: 850,
      initialMana: 50,
      magicResist: 40,
      mana: 125,
      range: 1,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Ekko/HUD/TFT10_Ekko_Square.TFT_Set10.tex',
    traits: {
      ko: ['True Damage', '주문술사', '감시자'],
      en: ['True Damage', 'Spellweaver', 'Sentinel'],
    },
  },
  TFT10_Evelynn: {
    ability: {
      desc: {
        ko: '현재 대상에게 <magicDamage>@ModifiedMagicDamage@(%i:scaleAP%)</magicDamage>의 마법 피해를 입힙니다. @Duration@초 동안 공격 속도가 <TFTBonus>@AttackSpeedPercent@%</TFTBonus> 증가하지만 시간이 흐르면서 효과가 감소합니다. 효과가 활성화된 동안 <scaleHealth>@Healing@</scaleHealth>의 체력을 회복합니다.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: 'Deal <magicDamage>@ModifiedMagicDamage@&nbsp;(%i:scaleAP%)</magicDamage> magic damage to the current target. Gain <TFTBonus>@AttackSpeedPercent@%</TFTBonus> Attack Speed that decays over @Duration@ seconds. While active, attacks restore <scaleHealth>@Healing@</scaleHealth> Health.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Evelynn/HUD/Icons2D/TFT10_Evelynn_E1.TFT_Set10.dds',
      name: {
        ko: '채찍유린',
        en: 'Whiplash',
      },
      variables: [
        {
          name: 'MagicDamage',
          value: [0, 200, 300, 450, 0, 0, 0],
        },
        {
          name: 'AttackSpeedPercent',
          value: [0, 175, 175, 175, 175, 175, 175],
        },
        {
          name: 'Duration',
          value: [0, 4, 4, 4, 4, 4, 4],
        },
        {
          name: 'Healing',
          value: [0, 25, 30, 35, 20, 20, 20],
        },
        {
          name: 'HeadlinerHealth',
          value: [100, 100, 100, 100, 100, 100, 100],
        },
        {
          name: 'HeadlinerAbilityPower',
          value: [15, 15, 15, 15, 15, 15, 15],
        },
      ],
    },
    apiName: 'TFT10_Evelynn',
    characterName: 'TFT10_Evelynn',
    cost: 1,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Evelynn.TFT_Set10.tex',
    name: {
      ko: '이블린',
      en: 'Evelynn',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Evelynn_Mobile.TFT_Set10.tex',
    stats: {
      armor: 35,
      attackSpeed: 0.699999988079071,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 45,
      hp: 550,
      initialMana: 30,
      magicResist: 35,
      mana: 90,
      range: 1,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Evelynn/HUD/TFT10_Evelynn_Square.TFT_Set10.tex',
    traits: {
      ko: ['K/DA', '스테이지 다이버'],
      en: ['K/DA', 'Crowd Diver'],
    },
  },
  TFT10_Ezreal: {
    ability: {
      desc: {
        ko: '점멸하여 현재 대상과 멀어진 후 <physicalDamage>@TotalDamage@(%i:scaleAD%)</physicalDamage>의 물리 피해를 입힙니다. 3번 사용할 때마다 직선상의 모든 적에게 <physicalDamage>@ModifiedBigDamage@(%i:scaleAD%%i:scaleAP%)</physicalDamage>의 물리 피해를 입힙니다.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: 'Blink away from the current target and deal <physicalDamage>@TotalDamage@&nbsp;(%i:scaleAD%)</physicalDamage> physical damage to them. Every 3rd cast, deal <physicalDamage>@ModifiedBigDamage@&nbsp;(%i:scaleAD%%i:scaleAP%)</physicalDamage> physical damage to all enemies in&nbsp;a&nbsp;line.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Ezreal/HUD/Icons2D/TFT10_Ezreal_R.TFT_Set10.dds',
      name: {
        ko: '파티 망치기',
        en: 'Crash the Party',
      },
      variables: [
        {
          name: 'ADRatioNormalCast',
          value: [
            2.5999999046325684, 3.299999952316284, 3.299999952316284, 6.599999904632568,
            2.5999999046325684, 2.5999999046325684, 2.5999999046325684,
          ],
        },
        {
          name: 'APRatioSpecialCast',
          value: [0, 80, 120, 360, 0, 0, 0],
        },
        {
          name: 'ADRatioSpecialCast',
          value: [0, 3.5, 3.5, 7, 0, 0, 0],
        },
        {
          name: 'MaxDashDistanceHexesNormalCast',
          value: [3, 3, 3, 3, 3, 3, 3],
        },
        {
          name: 'MaxDashDistanceHexesSpecialCast',
          value: [6, 6, 6, 6, 6, 6, 6],
        },
        {
          name: 'HeadlinerAttackDamage',
          value: [
            0.15000000596046448, 0.15000000596046448, 0.15000000596046448, 0.15000000596046448,
            0.15000000596046448, 0.15000000596046448, 0.15000000596046448,
          ],
        },
      ],
    },
    apiName: 'TFT10_Ezreal',
    characterName: 'TFT10_Ezreal',
    cost: 4,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Ezreal.TFT_Set10.tex',
    name: {
      ko: '이즈리얼',
      en: 'Ezreal',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Ezreal_Mobile.TFT_Set10.tex',
    stats: {
      armor: 30,
      attackSpeed: 0.800000011920929,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 70,
      hp: 700,
      initialMana: 0,
      magicResist: 30,
      mana: 40,
      range: 4,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Ezreal/HUD/TFT10_Ezreal_Square.TFT_Set10.tex',
    traits: {
      ko: ['Heartsteel', '거물'],
      en: ['Heartsteel', 'Big Shot'],
    },
  },
  TFT10_Gnar: {
    ability: {
      desc: {
        ko: '현재 대상 위로 도약한 후 전투가 끝날 때까지 메가 나르로 변신합니다. 체력이 <scaleHealth>@ModifiedHealthGain@(%i:scaleAP%)</scaleHealth>, 공격력이 <scaleLevel>@ADgain*100@%</scaleLevel>만큼 증가합니다. 이후 사용 시 현재 대상에게 <physicalDamage>@TotalDamage@(%i:scaleAD%)</physicalDamage>의 물리 피해를 입힙니다.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: 'Leap over the current target and transform into Mega Gnar for the rest of combat, gaining <scaleHealth>@ModifiedHealthGain@&nbsp;(%i:scaleAP%)</scaleHealth> Health and <scaleLevel>@ADgain*100@%</scaleLevel> Attack Damage. Subsequent casts deal <physicalDamage>@TotalDamage@&nbsp;(%i:scaleAD%)</physicalDamage> physical damage to the current&nbsp;target.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Gnar/HUD/Icons2D/TFT10_GnarTransform.TFT_Set10.dds',
      name: {
        ko: '광적인 팬덤',
        en: 'Rabid Fandom',
      },
      variables: [
        {
          name: 'HealthGain',
          value: [400, 500, 550, 600, 650, 650, 650],
        },
        {
          name: 'ADgain',
          value: [
            0.699999988079071, 0.699999988079071, 0.699999988079071, 0.699999988079071,
            0.699999988079071, 0.699999988079071, 0.699999988079071,
          ],
        },
        {
          name: 'ADpercent',
          value: [3, 3.3499999046325684, 3.3499999046325684, 3.3499999046325684, 3, 3, 3],
        },
        {
          name: 'HeadlinerHealth',
          value: null,
        },
      ],
    },
    apiName: 'TFT10_Gnar',
    characterName: 'TFT10_Gnar',
    cost: 2,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Gnar.TFT_Set10.tex',
    name: {
      ko: '나르',
      en: 'Gnar',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Gnar_Mobile.TFT_Set10.tex',
    stats: {
      armor: 45,
      attackSpeed: 0.6499999761581421,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 55,
      hp: 700,
      initialMana: 0,
      magicResist: 45,
      mana: 70,
      range: 2,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Gnar/HUD/TFT10_Gnar_Square.TFT_Set10.tex',
    traits: {
      ko: ['펜타킬', '열혈 팬', '춤꾼'],
      en: ['Pentakill', 'Superfan', 'Mosher'],
    },
  },
  TFT10_Gragas: {
    ability: {
      desc: {
        ko: '@DURATION@초 동안 <scaleHealth>@HEALING@</scaleHealth>의 체력을 회복합니다. 이후 주변 적에게 <magicDamage>@TOTAL_DAMAGE@(%i:scaleAP%)</magicDamage>의 마법 피해를 입히고 @CCDuration@초 동안 <TFTKeyword>동상</TFTKeyword> 효과를 부여합니다.<br><br><rules>동상: 공격 속도가 30% 감소합니다.</rules><br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: 'Heal <scaleHealth>@HEALING@</scaleHealth> Health over @DURATION@ seconds. Then, deal <magicDamage>@TOTAL_DAMAGE@&nbsp;(%i:scaleAP%)</magicDamage> magic damage to adjacent enemies and <TFTKeyword>Chill</TFTKeyword> them for&nbsp;@CCDuration@&nbsp;seconds.<br><br><rules>Chill: Reduce Attack Speed by&nbsp;30%</rules><br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Gragas/HUD/Icons2D/TFT10_GragasPassiveHeal.TFT_Set10.dds',
      name: {
        ko: '댄스 타임',
        en: 'Boogie Hour',
      },
      variables: [
        {
          name: 'DAMAGE',
          value: [30, 150, 225, 350, 350, 350, 350],
        },
        {
          name: 'DURATION',
          value: [2, 2, 2, 2, 2, 2, 2],
        },
        {
          name: 'ATTACK_SCALE',
          value: [0, 1.5, 2, 3, 0, 0, 0],
        },
        {
          name: 'CCDuration',
          value: [0, 3, 3, 3, 3, 3, 3],
        },
        {
          name: 'HEALING',
          value: [0, 500, 575, 650, 0, 0, 0],
        },
        {
          name: 'HeadlinerDamageMod',
          value: [
            0.15000000596046448, 0.15000000596046448, 0.15000000596046448, 0.15000000596046448,
            0.15000000596046448, 0.15000000596046448, 0.15000000596046448,
          ],
        },
        {
          name: 'HeadlinerDR',
          value: [
            0.07999999821186066, 0.07999999821186066, 0.07999999821186066, 0.07999999821186066,
            0.07999999821186066, 0.07999999821186066, 0.07999999821186066,
          ],
        },
        {
          name: 'HeadlinerHealth',
          value: null,
        },
      ],
    },
    apiName: 'TFT10_Gragas',
    characterName: 'TFT10_Gragas',
    cost: 2,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Gragas.TFT_Set10.tex',
    name: {
      ko: '그라가스',
      en: 'Gragas',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Gragas_Mobile.TFT_Set10.tex',
    stats: {
      armor: 45,
      attackSpeed: 0.6000000238418579,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 50,
      hp: 750,
      initialMana: 40,
      magicResist: 45,
      mana: 80,
      range: 1,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Gragas/HUD/TFT10_Gragas_Square.TFT_Set10.tex',
    traits: {
      ko: ['디스코', '주문술사', '난동꾼'],
      en: ['Disco', 'Spellweaver', 'Bruiser'],
    },
  },
  TFT10_Illaoi: {
    ability: {
      desc: {
        ko: '<spellPassive>기본 지속 효과:</spellPassive> @Frequency@초마다 일라오이의 촉수가 주변 적에게 <magicDamage>@ModifiedTentacleDamage@(%i:scaleArmor%%i:scaleMR%)</magicDamage>의 마법 피해를 입힙니다.<br><br><spellPassive>사용 시:</spellPassive> 3.5초 동안 방어력과 마법 저항력이 <scaleLevel>@StatBonus@</scaleLevel> 증가합니다. 체력이 가장 낮은 촉수를 부활시키거나 완전히 회복시킵니다. 가장 가까운 적에게 도약한 후 넓은 범위에 <magicDamage>@TooltipDamage@(%i:scaleAP%)</magicDamage>의 마법 피해를 @DrumNum@회 입힙니다. 촉수는 드럼 소리에 따라 찍기 공격을 가합니다.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: "<spellPassive>Passive:</spellPassive> Every @Frequency@ seconds, Illaoi's tentacles deal <magicDamage>@ModifiedTentacleDamage@&nbsp;(%i:scaleArmor%%i:scaleMR%)</magicDamage> magic damage to nearby enemies.<br><br><spellPassive>Active:</spellPassive> Gain <scaleLevel>@StatBonus@</scaleLevel> Armor and Magic Resist for 3.5 seconds. Revive or fully heal the lowest Health tentacle. Leap at the nearest enemy and deal <magicDamage>@TooltipDamage@&nbsp;(%i:scaleAP%)</magicDamage> magic damage in a large circle @DrumNum@ times as tentacles slam in&nbsp;unison.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@",
      },
      icon: 'ASSETS/Characters/TFT10_Illaoi/HUD/Icons2D/TFT10_Illaoi_P.TFT_Set10.dds',
      name: {
        ko: '심해의 드럼',
        en: 'Drums of the Deep',
      },
      variables: [
        {
          name: 'Damage',
          value: [0, 100, 150, 4000, 0, 0, 0],
        },
        {
          name: 'StatBonus',
          value: [0, 100, 150, 400, 60, 60, 60],
        },
        {
          name: 'DrumNum',
          value: [3, 3, 3, 7, 3, 3, 3],
        },
        {
          name: 'Frequency',
          value: [3, 3, 3, 3, 3, 3, 3],
        },
        {
          name: 'HeadlinerArmor',
          value: [5, 5, 5, 5, 5, 5, 5],
        },
        {
          name: 'HeadlinerMagicResist',
          value: [5, 5, 5, 5, 5, 5, 5],
        },
        {
          name: 'HeadlinerAbilityPower',
          value: [10, 10, 10, 10, 10, 10, 10],
        },
        {
          name: 'HeadlinerTentacleFrequency',
          value: [2, 2, 2, 2, 2, 2, 2],
        },
        {
          name: 'TentacleArmor',
          value: [1, 1, 1, 1, 1, 1, 1],
        },
        {
          name: 'TentacleMR',
          value: [1, 1, 1, 1, 1, 1, 1],
        },
        {
          name: 'ArmorScalar',
          value: [0, 0.6000000238418579, 0.6000000238418579, 5, 0, 0, 0],
        },
        {
          name: 'MRScalar',
          value: [0, 0.6000000238418579, 0.6000000238418579, 5, 0, 0, 0],
        },
      ],
    },
    apiName: 'TFT10_Illaoi',
    characterName: 'TFT10_Illaoi',
    cost: 5,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Illaoi.TFT_Set10.tex',
    name: {
      ko: '일라오이',
      en: 'Illaoi',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Illaoi_Mobile.TFT_Set10.tex',
    stats: {
      armor: 70,
      attackSpeed: 0.800000011920929,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 70,
      hp: 1050,
      initialMana: 70,
      magicResist: 70,
      mana: 150,
      range: 1,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Illaoi/HUD/TFT10_Illaoi_Square.TFT_Set10.tex',
    traits: {
      ko: ['일류 비트', '난동꾼'],
      en: ['ILLBEATS', 'Bruiser'],
    },
  },
  TFT10_Jax: {
    ability: {
      desc: {
        ko: '@ModifiedHexRadius@(%i:scaleRange%)칸 내의 체력이 가장 높은 적에게 도약하여 <magicDamage>@ModifiedSlamDamage@(%i:scaleAP%)</magicDamage>의 마법 피해를 입힙니다. 이후 주변 모든 적에게 <magicDamage>@ModifiedSpinDamage@(%i:scaleAP%)</magicDamage>의 마법 피해를 입힙니다. 전투가 끝날 때까지 공격력과 주문력이 <TFTBonus>@StatBonus@%</TFTBonus>만큼 증가합니다.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: 'Leap at the highest Health enemy within @ModifiedHexRadius@&nbsp;(%i:scaleRange%) hexes and deal <magicDamage>@ModifiedSlamDamage@&nbsp;(%i:scaleAP%)</magicDamage> magic damage to them. Then, deal <magicDamage>@ModifiedSpinDamage@&nbsp;(%i:scaleAP%)</magicDamage> magic damage to all adjacent enemies. Gain <TFTBonus>@StatBonus@%</TFTBonus> Attack Damage and Ability Power for the rest of&nbsp;combat.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Jax/HUD/Icons2D/Armsmaster_Disarm.TFT_Set10.dds',
      name: {
        ko: '반격 멜로디',
        en: 'Counter Melody',
      },
      variables: [
        {
          name: 'SlamDamage',
          value: [0, 230, 345, 520, 250, 250, 250],
        },
        {
          name: 'AttackRadius',
          value: [1, 1, 1, 1, 1, 1, 1],
        },
        {
          name: 'HexRadiusBeforeRange',
          value: [1, 1, 1, 1, 1, 1, 1],
        },
        {
          name: 'HeadlinerHealth',
          value: [200, 200, 200, 200, 200, 200, 200],
        },
        {
          name: 'HeadlinerAbilityPower',
          value: [20, 20, 20, 20, 20, 20, 20],
        },
        {
          name: 'SpinDamage',
          value: [0, 140, 210, 315, 0, 0, 0],
        },
        {
          name: 'StatBonus',
          value: [10, 10, 10, 10, 10, 10, 10],
        },
      ],
    },
    apiName: 'TFT10_Jax',
    characterName: 'TFT10_Jax',
    cost: 2,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Jax.TFT_Set10.tex',
    name: {
      ko: '잭스',
      en: 'Jax',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Jax_Mobile.TFT_Set10.tex',
    stats: {
      armor: 35,
      attackSpeed: 0.8500000238418579,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 55,
      hp: 750,
      initialMana: 50,
      magicResist: 35,
      mana: 120,
      range: 1,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Jax/HUD/TFT10_Jax_Square.TFT_Set10.tex',
    traits: {
      ko: ['EDM', '춤꾼'],
      en: ['EDM', 'Mosher'],
    },
  },
  TFT10_Jhin: {
    ability: {
      desc: {
        ko: '<spellPassive>기본 지속 효과:</spellPassive> 기본 공격 시 추가로 <TFTBonus>@BonusManaOnAttack@</TFTBonus>의 마나를 회복합니다. 대기석에 대단원의 막 소총이 @RiflesRequired@개 있으면 공격 대신 지휘를 시작합니다. 각 소총은 마에스트로와 같은 속도로 발사되고 <physicalDamage>@TOTAL_DAMAGE@(%i:scaleAD%)</physicalDamage>의 물리 피해를 입힙니다. 4번째 세례마다 @EmpoweredShotBonusTooltipOnly*100@%의 피해를 입힙니다.<br><br><spellActive>사용 시:</spellActive> 대단원의 막 소총 <scaleLevel>@RIFLES_PER_CAST@</scaleLevel>개를 빈 대기석 슬롯에 놓습니다.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: '<spellPassive>Passive:</spellPassive> Attacks generate <TFTBonus>@BonusManaOnAttack@</TFTBonus> additional Mana. If your bench has @RiflesRequired@ Grand Finale Rifles, begin conducting instead of attacking. Each Rifle fires at the same rate as the Maestro and deals <physicalDamage>@TOTAL_DAMAGE@&nbsp;(%i:scaleAD%)</physicalDamage> physical&nbsp;damage. Every 4th volley deals @EmpoweredShotBonusTooltipOnly*100@%&nbsp;damage.<br><br><spellActive>Active:</spellActive> Put <scaleLevel>@RIFLES_PER_CAST@</scaleLevel> Grand Finale Rifle into one of your empty bench&nbsp;slots.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Jhin/HUD/Icons2D/TFT10_Jhin_W_Spotted.TFT_Set10.dds',
      name: {
        ko: '종말의 협주곡 라단조',
        en: 'Concerto of Demise in D Minor',
      },
      variables: [
        {
          name: 'PhysicalDamageRatio',
          value: [
            0, 0.6000000238418579, 0.6000000238418579, 4.440000057220459, 4.440000057220459, 200,
            240,
          ],
        },
        {
          name: 'TacticianDamagePerRifle',
          value: [1, 1, 1, 1, 1, 1, 1],
        },
        {
          name: 'RIFLES_PER_CAST',
          value: [0, 1, 1, 4, 4, 0, 0],
        },
        {
          name: 'BASE_FIRE_RATE',
          value: [1, 1, 1, 1, 1, 1, 1],
        },
        {
          name: 'SimulateAutoAttacksEveryX',
          value: [1, 1, 1, 1, 1, 1, 1],
        },
        {
          name: 'HeadlinerAttackDamage',
          value: [
            0.05000000074505806, 0.05000000074505806, 0.05000000074505806, 0.05000000074505806,
            0.05000000074505806, 0.05000000074505806, 0.05000000074505806,
          ],
        },
        {
          name: 'HeadlinerStartingRifles',
          value: [1, 1, 1, 1, 1, 1, 1],
        },
        {
          name: 'MagicalDamageBase',
          value: [20, 15, 25, 144, 144, 20, 20],
        },
        {
          name: 'RiflesRequired',
          value: [4, 4, 4, 4, 4, 4, 4],
        },
        {
          name: 'EmpoweredShotBonusTooltipOnly',
          value: [2, 2, 2, 2, 2, 2, 2],
        },
        {
          name: 'BonusManaOnAttack',
          value: [10, 10, 10, 10, 10, 10, 10],
        },
      ],
    },
    apiName: 'TFT10_Jhin',
    characterName: 'TFT10_Jhin',
    cost: 5,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Jhin.TFT_Set10.tex',
    name: {
      ko: '진',
      en: 'Jhin',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Jhin_Mobile.TFT_Set10.tex',
    stats: {
      armor: 30,
      attackSpeed: 0.8999999761581421,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 70,
      hp: 850,
      initialMana: 0,
      magicResist: 30,
      mana: 60,
      range: 4,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Jhin/HUD/TFT10_Jhin_Square.TFT_Set10.tex',
    traits: {
      ko: ['마에스트로', '거물'],
      en: ['Maestro', 'Big Shot'],
    },
  },
  TFT10_Jinx: {
    ability: {
      desc: {
        ko: '<spellPassive>기본 지속 효과 미니건:</spellPassive> 공격 시 공격 속도가 <TFTBonus>@TOTAL_ATTACK_SPEED@(%i:scaleAP%)</TFTBonus>만큼 증가합니다.<br><spellPassive>기본 지속 효과 로켓 발사기:</spellPassive> 공격 시 <physicalDamage>@ROCKET_DAMAGE@(%i:scaleAD%)</physicalDamage>의 추가 물리 피해를 입힙니다.<br><br><spellActive>사용 시:</spellActive> 미니건이나 로켓 발사기로 교체합니다.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: '<spellPassive>Passive Minigun:</spellPassive> Attacks grant <TFTBonus>@TOTAL_ATTACK_SPEED@&nbsp;(%i:scaleAP%)</TFTBonus> Attack Speed.<br><spellPassive>Passive Rocket Launcher:</spellPassive> Attacks deal <physicalDamage>@ROCKET_DAMAGE@&nbsp;(%i:scaleAD%)</physicalDamage> bonus physical&nbsp;damage.<br><br><spellActive>Active:</spellActive> Swap between Minigun and Rocket Launcher.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Jinx/HUD/Icons2D/TFT10_Jinx_Q2.TFT_Set10.dds',
      name: {
        ko: '에스컬레이션',
        en: 'Escalation',
      },
      variables: [
        {
          name: 'ATTACK_SPEED_BONUS',
          value: [
            0.03999999910593033, 0.03999999910593033, 0.03999999910593033, 0.03999999910593033,
            0.03999999910593033, 0.03999999910593033, 0.03999999910593033,
          ],
        },
        {
          name: 'ROCKET_AD_PERCENT',
          value: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
        },
        {
          name: 'HeadlinerAttackSpeed',
          value: null,
        },
        {
          name: 'HeadlinerMinigunAS',
          value: [
            0.009999999776482582, 0.009999999776482582, 0.009999999776482582, 0.009999999776482582,
            0.009999999776482582, 0.009999999776482582, 0.009999999776482582,
          ],
        },
        {
          name: 'HeadlinerRocketBonus',
          value: [
            0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612,
            0.10000000149011612, 0.10000000149011612, 0.10000000149011612,
          ],
        },
      ],
    },
    apiName: 'TFT10_Jinx',
    characterName: 'TFT10_Jinx',
    cost: 1,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Jinx.TFT_Set10.tex',
    name: {
      ko: '징크스',
      en: 'Jinx',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Jinx_Mobile.TFT_Set10.tex',
    stats: {
      armor: 15,
      attackSpeed: 0.699999988079071,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 45,
      hp: 450,
      initialMana: 0,
      magicResist: 15,
      mana: 50,
      range: 4,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Jinx/HUD/TFT10_Jinx_Square.TFT_Set10.tex',
    traits: {
      ko: ['펑크', '속사포'],
      en: ['Punk', 'Rapidfire'],
    },
  },
  TFT10_Karthus: {
    ability: {
      desc: {
        ko: '가장 체력이 낮은 적 @NumTargets@명에게 <magicDamage>@ModifiedDamage@(%i:scaleAP%)</magicDamage>의 마법 피해를 입힙니다. 죽는 적 하나당 @ManaGain@의 마나를 회복합니다.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: 'Deal <magicDamage>@ModifiedDamage@&nbsp;(%i:scaleAP%)</magicDamage> magic damage to the @NumTargets@ lowest Health enemies. Gain @ManaGain@ Mana for each that&nbsp;dies.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Karthus/HUD/Icons2D/TFT10_Karthus_Passive.TFT_Set10.dds',
      name: {
        ko: '필멸자의 운명',
        en: 'Mortal Reminder',
      },
      variables: [
        {
          name: 'BaseDamage',
          value: [15, 220, 330, 1000, 15, 15, 15],
        },
        {
          name: 'ManaGain',
          value: [10, 10, 10, 10, 10, 10, 10],
        },
        {
          name: 'NumTargets',
          value: [5, 5, 5, 5, 5, 5, 5],
        },
        {
          name: 'SpellSpeedModifier',
          value: [2, 2, 2, 2, 2, 2, 2],
        },
        {
          name: 'HeadlinerAbilityPower',
          value: [15, 15, 15, 15, 15, 15, 15],
        },
      ],
    },
    apiName: 'TFT10_Karthus',
    characterName: 'TFT10_Karthus',
    cost: 4,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Karthus.TFT_Set10.tex',
    name: {
      ko: '카서스',
      en: 'Karthus',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Karthus_Mobile.TFT_Set10.tex',
    stats: {
      armor: 30,
      attackSpeed: 0.75,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 40,
      hp: 700,
      initialMana: 40,
      magicResist: 30,
      mana: 120,
      range: 4,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Karthus/HUD/TFT10_Karthus_Square.TFT_Set10.tex',
    traits: {
      ko: ['펜타킬', '처형자'],
      en: ['Pentakill', 'Executioner'],
    },
  },
  TFT10_Katarina: {
    ability: {
      desc: {
        ko: '현재 대상에게 단검을 투척합니다. 단검은 @ExtraBounces@회 튕기며, 튕길 때마다 <magicDamage>@ModifiedMagicDamage@(%i:scaleAP%)</magicDamage>의 마법 피해를 입히고 @WoundDuration@초 동안 <TFTKeyword>상처</TFTKeyword>를 남깁니다.<br><br><rules><tftbold>상처:</tftbold> 체력 회복량이 @WoundPercent*100@% 감소합니다.</rules><br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: 'Throw a blade at the current target that bounces @ExtraBounces@ times, dealing <magicDamage>@ModifiedMagicDamage@&nbsp;(%i:scaleAP%)</magicDamage> magic damage and applying <TFTKeyword>Wound</TFTKeyword> for @WoundDuration@ seconds.<br><br><rules><tftbold>Wound:</tftbold> Reduce healing received by @WoundPercent*100@%</rules><br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Katarina/HUD/Icons2D/TFT10_Katarina_Q.TFT_Set10.dds',
      name: {
        ko: '단검 투척',
        en: 'Bouncing Blade',
      },
      variables: [
        {
          name: 'ExtraBounces',
          value: [3, 3, 3, 3, 3, 3, 3],
        },
        {
          name: 'MagicDamage',
          value: [0, 140, 210, 315, 0, 0, 0],
        },
        {
          name: 'WoundPercent',
          value: [
            0.33000001311302185, 0.33000001311302185, 0.33000001311302185, 0.33000001311302185,
            0.33000001311302185, 0.33000001311302185, 0.33000001311302185,
          ],
        },
        {
          name: 'WoundDuration',
          value: [6, 6, 6, 6, 6, 6, 6],
        },
        {
          name: 'HeadlinerAttackSpeed',
          value: null,
        },
        {
          name: 'HeadlinerHealth',
          value: [200, 200, 200, 200, 200, 200, 200],
        },
        {
          name: 'HeadlinerBladeBonus',
          value: [
            0.44999998807907104, 0.44999998807907104, 0.44999998807907104, 0.44999998807907104,
            0.44999998807907104, 0.44999998807907104, 0.44999998807907104,
          ],
        },
      ],
    },
    apiName: 'TFT10_Katarina',
    characterName: 'TFT10_Katarina',
    cost: 2,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Katarina.TFT_Set10.tex',
    name: {
      ko: '카타리나',
      en: 'Katarina',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Katarina_Mobile.TFT_Set10.tex',
    stats: {
      armor: 35,
      attackSpeed: 0.699999988079071,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 40,
      hp: 650,
      initialMana: 0,
      magicResist: 35,
      mana: 60,
      range: 2,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Katarina/HUD/TFT10_Katarina_Square.TFT_Set10.tex',
    traits: {
      ko: ['컨트리', '스테이지 다이버'],
      en: ['Country', 'Crowd Diver'],
    },
  },
  TFT10_Kayle: {
    ability: {
      desc: {
        ko: '@Duration@초 동안 기본 공격 시 현재 대상과 그 뒤로 파동을 일으켜 <magicDamage>@ModifiedAttackDamage@(%i:scaleAP%)</magicDamage>의 추가 마법 피해를 입힙니다. 적중당한 적에게 @ShredDuration@초 동안 <TFTKeyword>파쇄</TFTKeyword>를 적용합니다. 마지막으로 대상 주변 적에게 <magicDamage>@ModifiedFinaleDamage@(%i:scaleAP%)</magicDamage>의 마법 피해를 입힙니다.<br><br><rules><tftbold>파쇄:</tftbold> 마법 저항력 @Shred@% 감소</rules><br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: 'For @Duration@ seconds, attacks deal <magicDamage>@ModifiedAttackDamage@&nbsp;(%i:scaleAP%)</magicDamage> bonus magic damage in waves at the current target and behind them. <TFTKeyword>Shred</TFTKeyword> enemies hit for @ShredDuration@ seconds. Finally, deal <magicDamage>@ModifiedFinaleDamage@&nbsp;(%i:scaleAP%)</magicDamage> magic damage to enemies around the&nbsp;target.<br><br><rules><tftbold>Shred:</tftbold> Reduce Magic Resist by&nbsp;@Shred@%</rules><br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Kayle/HUD/Icons2D/TFT10_Kayle_R.TFT_Set10.dds',
      name: {
        ko: '승천의 불길',
        en: 'Fires of Ascension',
      },
      variables: [
        {
          name: 'BaseAttackDamage',
          value: [0, 30, 45, 70, 0, 0, 0],
        },
        {
          name: 'Duration',
          value: [5, 5, 5, 5, 5, 5, 5],
        },
        {
          name: 'Shred',
          value: [30, 30, 30, 30, 30, 30, 30],
        },
        {
          name: 'ShredDuration',
          value: [4, 4, 4, 4, 4, 4, 4],
        },
        {
          name: 'BaseFinaleDamage',
          value: [0, 190, 285, 430, 0, 0, 0],
        },
        {
          name: 'HeadlinerAttackSpeed',
          value: [0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25],
        },
      ],
    },
    apiName: 'TFT10_Kayle',
    characterName: 'TFT10_Kayle',
    cost: 2,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Kayle.TFT_Set10.tex',
    name: {
      ko: '케일',
      en: 'Kayle',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Kayle_Mobile.TFT_Set10.tex',
    stats: {
      armor: 20,
      attackSpeed: 0.75,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 35,
      hp: 550,
      initialMana: 0,
      magicResist: 20,
      mana: 30,
      range: 4,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Kayle/HUD/TFT10_Kayle_Square.TFT_Set10.tex',
    traits: {
      ko: ['펜타킬', '이단아'],
      en: ['Pentakill', 'Edgelord'],
    },
  },
  TFT10_Kayn: {
    ability: {
      desc: {
        ko: '돌진한 후 주변 모든 적에게 <magicDamage>@ModifiedDamage@(%i:scaleAP%)</magicDamage>의 마법 피해를 입히고 @ChillDuration@초 동안 <TFTKeyword>동상</TFTKeyword> 효과를 부여합니다. 케인의 공격이 한 대상에게만 적중할 경우 즉시 스킬을 다시 사용합니다.<br><br><rules><tftbold>동상:</tftbold> 공격 속도를 20% 감소시킵니다.</rules><br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@<br><br><br><br>',
        en: 'Dash, then deal <magicDamage>@ModifiedDamage@&nbsp;(%i:scaleAP%)</magicDamage> magic damage to adjacent enemies and <TFTKeyword>Chill</TFTKeyword> them for @ChillDuration@ seconds. If Kayn only hits one target, he immediately casts&nbsp;again.<br><br><rules><tftbold>Chill:</tftbold> Reduce Attack Speed by 20%</rules><br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@<br><br><br><br>',
      },
      icon: 'ASSETS/Characters/TFT10_Kayn/HUD/Icons2D/TFT10_Kayn_Q_Primary.TFT_Set10.dds',
      name: {
        ko: '사신의 공포',
        en: 'Fear the Reaper',
      },
      variables: [
        {
          name: 'Damage',
          value: [300, 350, 525, 4000, 1200, 1200, 1200],
        },
        {
          name: 'PercentRestored',
          value: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
        },
        {
          name: 'ChillDuration',
          value: [3, 3, 3, 3, 3, 3, 3],
        },
        {
          name: 'HeadlinerAbilityPower',
          value: [5, 5, 5, 5, 5, 5, 5],
        },
        {
          name: 'HeadlinerBonusGold',
          value: [2, 2, 2, 2, 2, 2, 2],
        },
        {
          name: 'HeadlinerBonusHealth',
          value: [1, 1, 1, 1, 1, 1, 1],
        },
      ],
    },
    apiName: 'TFT10_Kayn',
    characterName: 'TFT10_Kayn',
    cost: 5,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Kayn.TFT_Set10.tex',
    name: {
      ko: '케인',
      en: 'Kayn',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Kayn_Mobile.TFT_Set10.tex',
    stats: {
      armor: 70,
      attackSpeed: 0.8500000238418579,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 75,
      hp: 1200,
      initialMana: 0,
      magicResist: 70,
      mana: 50,
      range: 1,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Kayn/HUD/TFT10_Kayn_Square.TFT_Set10.tex',
    traits: {
      ko: ['Heartsteel', '이단아', '와일드카드'],
      en: ['Heartsteel', 'Edgelord', 'Wildcard'],
    },
  },
  TFT10_Kennen: {
    ability: {
      desc: {
        ko: '@SpellDuration@초 동안 충격을 @NumJolts@회 방출합니다. 충격을 방출할 때마다 사거리 내 무작위 적에게 <magicDamage>@ModifiedDamage@(%i:scaleAP%)</magicDamage>의 마법 피해를 입히고 @StunDuration@초 동안 기절시킵니다.<br><br><spellActive enabled=TFT10_BlingActive alternate=rules>반짝반짝 보너스: 두 번째 대상에게 충격을 방출해 <TFTBonus><ShowIfNot.TFT10_BlingActive>@TFTUnitProperty.:TFT10_KennenPercentage@%</ShowIfNot.TFT10_BlingActive><ShowIf.TFT10_BlingActive>@TFTUnitProperty.:TFT10_KennenPercentage@%</ShowIf.TFT10_BlingActive></TFTBonus>의 피해를 입히고 기절시킵니다.</spellActive><br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: 'Discharge @NumJolts@ Jolts over @SpellDuration@ seconds. Each Jolt deals <magicDamage>@ModifiedDamage@&nbsp;(%i:scaleAP%)</magicDamage> magic damage to a random enemy within range and Stuns them for&nbsp;@StunDuration@&nbsp;seconds.<br><br><spellActive enabled=TFT10_BlingActive alternate=rules>Bling Bonus: Discharge at 2nd target for <TFTBonus><ShowIfNot.TFT10_BlingActive>@TFTUnitProperty.:TFT10_KennenPercentage@%</ShowIfNot.TFT10_BlingActive><ShowIf.TFT10_BlingActive>@TFTUnitProperty.:TFT10_KennenPercentage@%</ShowIf.TFT10_BlingActive></TFTBonus> damage and Stun duration.</spellActive><br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Kennen/HUD/Icons2D/TFT10_Kennen_E.TFT_Set10.dds',
      name: {
        ko: '충격과 공포',
        en: 'Shock and Awe',
      },
      variables: [
        {
          name: 'JoltDamage',
          value: [0, 160, 240, 360, 0, 0, 0],
        },
        {
          name: 'NumJolts',
          value: [2, 2, 2, 2, 2, 2, 2],
        },
        {
          name: 'StunDuration',
          value: [0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75],
        },
        {
          name: 'SpellDuration',
          value: [2, 2, 2, 2, 2, 2, 2],
        },
        {
          name: 'BASE_HEAL',
          value: [50, 200, 250, 300, 50, 50, 50],
        },
        {
          name: 'BLING_SECONDARY_DAMAGE',
          value: [80, 80, 80, 80, 80, 80, 80],
        },
        {
          name: 'BLING_SECONDARY_DAMAGE_EMPOWERED',
          value: [120, 120, 120, 120, 120, 120, 120],
        },
        {
          name: 'HeadlinerHealth',
          value: [75, 75, 75, 75, 75, 75, 75],
        },
        {
          name: 'HeadlinerPercentMaxHealthHeal',
          value: [
            0.03999999910593033, 0.03999999910593033, 0.03999999910593033, 0.03999999910593033,
            0.03999999910593033, 0.03999999910593033, 0.03999999910593033,
          ],
        },
      ],
    },
    apiName: 'TFT10_Kennen',
    characterName: 'TFT10_Kennen',
    cost: 1,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Kennen.TFT_Set10.tex',
    name: {
      ko: '케넨',
      en: 'Kennen',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Kennen_Mobile.TFT_Set10.tex',
    stats: {
      armor: 40,
      attackSpeed: 0.6000000238418579,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 40,
      hp: 650,
      initialMana: 30,
      magicResist: 40,
      mana: 90,
      range: 2,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Kennen/HUD/TFT10_Kennen_Square.TFT_Set10.tex',
    traits: {
      ko: ['True Damage', '열혈 팬', '수호자'],
      en: ['True Damage', 'Superfan', 'Guardian'],
    },
  },
  TFT10_Lillia: {
    ability: {
      desc: {
        ko: '주변 적에게 <magicDamage>@ModifiedMagicDamage@(%i:scaleAP%)</magicDamage>의 마법 피해를 입힙니다. 릴리아가 체력을 <scaleHealth>@ModifiedHealing@(%i:scaleAP%)</scaleHealth>만큼 회복하고, 가장 가까운 아군의 체력을 <scaleHealth>@ModifiedAllyHealing@(%i:scaleAP%)</scaleHealth>만큼 회복시킵니다.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: 'Deal <magicDamage>@ModifiedMagicDamage@&nbsp;(%i:scaleAP%)</magicDamage> magic damage to adjacent enemies. Heal Lillia for <scaleHealth>@ModifiedHealing@&nbsp;(%i:scaleAP%)</scaleHealth> and her nearest ally for&nbsp;<scaleHealth>@ModifiedAllyHealing@&nbsp;(%i:scaleAP%)</scaleHealth>.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Lillia/HUD/Icons2D/TFT10_Lillia_Icon_Q.TFT_Set10.dds',
      name: {
        ko: '피어나는 색종이',
        en: 'Confetti Bloom',
      },
      variables: [
        {
          name: 'MagicDamage',
          value: [0, 180, 270, 400, 0, 0, 0],
        },
        {
          name: 'HealAmount',
          value: [0, 180, 220, 260, 0, 0, 0],
        },
        {
          name: 'HeadlinerHealth',
          value: [100, 100, 100, 100, 100, 100, 100],
        },
        {
          name: 'AllyHealAmount',
          value: [0, 90, 110, 130, 0, 0, 0],
        },
        {
          name: 'HeadlinerBonusHeal',
          value: [
            0.11999999731779099, 0.11999999731779099, 0.11999999731779099, 0.11999999731779099,
            0.11999999731779099, 0.11999999731779099, 0.11999999731779099,
          ],
        },
      ],
    },
    apiName: 'TFT10_Lillia',
    characterName: 'TFT10_Lillia',
    cost: 1,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Lillia.TFT_Set10.tex',
    name: {
      ko: '릴리아',
      en: 'Lillia',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Lillia_Mobile.TFT_Set10.tex',
    stats: {
      armor: 40,
      attackSpeed: 0.550000011920929,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 50,
      hp: 600,
      initialMana: 70,
      magicResist: 40,
      mana: 140,
      range: 1,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Lillia/HUD/TFT10_Lillia_Square.TFT_Set10.tex',
    traits: {
      ko: ['K/DA', '열혈 팬', '감시자'],
      en: ['K/DA', 'Superfan', 'Sentinel'],
    },
  },
  TFT10_Lucian: {
    ability: {
      desc: {
        ko: '가장 먼 적을 향해 <TFTBonus>@TotalNumShots@(%i:scaleAS%)</TFTBonus>회 사격합니다. 각 탄환은 처음 적에게 적중하면 폭발하여 주변 모든 적에게 <physicalDamage>@TOTAL_DAMAGE@(%i:scaleAD%%i:scaleAP%)</physicalDamage>의 물리 피해를 입히고 전투가 끝날 때까지 방어력을 <TFTBonus>@FlatArmorReduction@</TFTBonus>만큼 감소시킵니다.<br><br>아르페지오 사용이 일찍 끝나면 발사하지 않은 사격 횟수에 따라 마나를 얻습니다.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: 'Fire <TFTBonus>@TotalNumShots@&nbsp;(%i:scaleAS%)</TFTBonus> shots toward the furthest enemy. Each shot explodes on the first enemy hit, dealing <physicalDamage>@TOTAL_DAMAGE@&nbsp;(%i:scaleAD%%i:scaleAP%)</physicalDamage> physical damage to all nearby enemies and reducing their Armor by <TFTBonus>@FlatArmorReduction@</TFTBonus> for the rest of&nbsp;combat.<br><br>If Arpeggio ends early, gain Mana based on the number of unused shots.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Lucian/HUD/Icons2D/TFT10_Lucian_W.TFT_Set10.dds',
      name: {
        ko: '아르페지오',
        en: 'Arpeggio',
      },
      variables: [
        {
          name: 'Duration',
          value: [4, 4, 4, 4, 4, 4, 4],
        },
        {
          name: 'BaseDamage',
          value: [20, 20, 30, 100, 20, 20, 20],
        },
        {
          name: 'TADRatio',
          value: [0.25, 0.550000011920929, 0.550000011920929, 10, 0.25, 0.25, 0.25],
        },
        {
          name: 'AttacksPerSecondCoefficient',
          value: [1, 1, 1, 1, 1, 1, 1],
        },
        {
          name: 'NumShots',
          value: [14, 14, 14, 14, 14, 14, 14],
        },
        {
          name: 'BonusASBreakpoint',
          value: [20, 20, 20, 20, 20, 20, 20],
        },
        {
          name: 'HeadlinerAttackDamage',
          value: [
            0.05000000074505806, 0.05000000074505806, 0.05000000074505806, 0.05000000074505806,
            0.05000000074505806, 0.05000000074505806, 0.05000000074505806,
          ],
        },
        {
          name: 'HeadlinerExtraShots',
          value: [3, 3, 3, 3, 3, 3, 3],
        },
        {
          name: 'FlatArmorReduction',
          value: [6, 3, 5, 20, 5, 5, 5],
        },
      ],
    },
    apiName: 'TFT10_Lucian',
    characterName: 'TFT10_Lucian',
    cost: 5,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Lucian.TFT_Set10.tex',
    name: {
      ko: '루시안',
      en: 'Lucian',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Lucian_Mobile.TFT_Set10.tex',
    stats: {
      armor: 30,
      attackSpeed: 0.8999999761581421,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 65,
      hp: 850,
      initialMana: 50,
      magicResist: 30,
      mana: 125,
      range: 5,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Lucian/HUD/TFT10_Lucian_Square.TFT_Set10.tex',
    traits: {
      ko: ['재즈', '속사포'],
      en: ['Jazz', 'Rapidfire'],
    },
  },
  TFT10_Lulu: {
    ability: {
      desc: {
        ko: '현재 대상 방향으로 화살을 발사합니다. 처음 관통하는 적에게 <magicDamage>@ModifiedMagicDamage@(%i:scaleAP%)</magicDamage>의 마법 피해를 입히고 두 번째로 적중하는 적에게는 <magicDamage>@ModifiedSecondaryDamage@(%i:scaleAP%)</magicDamage>의 마법 피해를 입힙니다. 3번 사용할 때마다 가장 가까운 적 @NumOfEnemiesToStun@명을 @StunDuration@초 동안 기절시키고 <magicDamage>@ModifiedBigCastDamage@(%i:scaleAP%)</magicDamage>의 마법 피해를 입힙니다.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: 'Fire a bolt toward the current target. It deals <magicDamage>@ModifiedMagicDamage@&nbsp;(%i:scaleAP%)</magicDamage> magic damage to the first enemy it passes through and <magicDamage>@ModifiedSecondaryDamage@&nbsp;(%i:scaleAP%)</magicDamage> magic damage to the second. Every 3rd cast, Stun the @NumOfEnemiesToStun@ nearest enemies for @StunDuration@ seconds and deal <magicDamage>@ModifiedBigCastDamage@&nbsp;(%i:scaleAP%)</magicDamage> magic damage&nbsp;instead.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Lulu/HUD/Icons2D/TFT10_Lulu_Glitterbolt.TFT_Set10.dds',
      name: {
        ko: '반짝이 맛',
        en: 'Tastes like Glitter',
      },
      variables: [
        {
          name: 'APRatio',
          value: [0, 240, 360, 575, 0, 0, 0],
        },
        {
          name: 'NumOfEnemiesToStun',
          value: [3, 3, 3, 3, 3, 3, 3],
        },
        {
          name: 'StunDamage',
          value: [0, 120, 180, 280, 0, 0, 0],
        },
        {
          name: 'StunDuration',
          value: [1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25],
        },
        {
          name: 'SecondaryDamage',
          value: [0, 150, 225, 360, 0, 0, 0],
        },
        {
          name: 'HeadlinerAbilityPower',
          value: [25, 25, 25, 25, 25, 25, 25],
        },
        {
          name: 'HeadlinerManaReduction',
          value: null,
        },
      ],
    },
    apiName: 'TFT10_Lulu',
    characterName: 'TFT10_Lulu',
    cost: 3,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Lulu.TFT_Set10.tex',
    name: {
      ko: '룰루',
      en: 'Lulu',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Lulu_Mobile.TFT_Set10.tex',
    stats: {
      armor: 20,
      attackSpeed: 0.699999988079071,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 40,
      hp: 650,
      initialMana: 0,
      magicResist: 20,
      mana: 40,
      range: 4,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Lulu/HUD/TFT10_Lulu_Square.TFT_Set10.tex',
    traits: {
      ko: ['하이퍼팝', '주문술사'],
      en: ['Hyperpop', 'Spellweaver'],
    },
  },
  TFT10_Lux: {
    ability: {
      desc: {
        ko: '가장 먼 적에게 광선을 발사합니다. 적중하는 모든 적에게 <magicDamage>@ModifiedMagicDamage@(%i:scaleAP%)</magicDamage>의 마법 피해를 입힙니다.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: 'Fire a beam at the farthest enemy, dealing <magicDamage>@ModifiedMagicDamage@&nbsp;(%i:scaleAP%)</magicDamage> magic damage to all enemies it&nbsp;hits.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Lux/HUD/Icons2D/TFT10_LuxFinaleFunkeln.TFT_Set10.dds',
      name: {
        ko: '레이저 쇼',
        en: 'Laser Light Show',
      },
      variables: [
        {
          name: 'MagicDamage',
          value: [0, 230, 345, 550, 0, 0, 0],
        },
        {
          name: 'HeadlinerAbilityPower',
          value: null,
        },
        {
          name: 'HeadlinerCritChance',
          value: [
            0.15000000596046448, 0.15000000596046448, 0.15000000596046448, 0.15000000596046448,
            0.15000000596046448, 0.15000000596046448, 0.15000000596046448,
          ],
        },
      ],
    },
    apiName: 'TFT10_Lux',
    characterName: 'TFT10_Lux',
    cost: 3,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Lux.TFT_Set10.tex',
    name: {
      ko: '럭스',
      en: 'Lux',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Lux_Mobile.TFT_Set10.tex',
    stats: {
      armor: 20,
      attackSpeed: 0.699999988079071,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 40,
      hp: 700,
      initialMana: 15,
      magicResist: 20,
      mana: 75,
      range: 5,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Lux/HUD/TFT10_Lux_Square.TFT_Set10.tex',
    traits: {
      ko: ['EDM', '현혹술사'],
      en: ['EDM', 'Dazzler'],
    },
  },
  TFT10_Mordekaiser: {
    ability: {
      desc: {
        ko: '@Duration@초 동안 <TFTBonus>@ModifiedShieldAmount@(%i:scaleAP%)</TFTBonus>의 보호막을 얻고 주변 적에게 <magicDamage>@ModifiedZoneDamage@(%i:scaleAP%)</magicDamage>의 마법 피해를 입힙니다. 이후 주변 적에게 <magicDamage>@ModifiedFinaleDamage@(%i:scaleAP%)</magicDamage>의 마법 피해를 입힙니다.<br><br>안면 붕괴로 적을 처치하면 주문력과 공격력이 <TFTBonus>@StatGain@%</TFTBonus>만큼, 방어력 및 마법 저항력이 <TFTBonus>@StatGain@</TFTBonus>만큼 증가합니다.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: 'Gain a <TFTBonus>@ModifiedShieldAmount@&nbsp;(%i:scaleAP%)</TFTBonus> Shield and deal <magicDamage>@ModifiedZoneDamage@&nbsp;(%i:scaleAP%)</magicDamage> magic damage to adjacent enemies over @Duration@ seconds. Afterwards, deal <magicDamage>@ModifiedFinaleDamage@&nbsp;(%i:scaleAP%)</magicDamage> magic damage to nearby enemies.<br><br>When Face-Melter kills an enemy, gain <TFTBonus>@StatGain@%</TFTBonus> Ability Power and Attack Damage, and <TFTBonus>@StatGain@</TFTBonus> Armor and Magic&nbsp;Resist.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Mordekaiser/HUD/Icons2D/TFT10_MordekaiserQ3.TFT_Set10.dds',
      name: {
        ko: '안면 붕괴',
        en: 'Face-Melter',
      },
      variables: [
        {
          name: 'Duration',
          value: [3, 3, 3, 3, 3, 3, 3],
        },
        {
          name: 'BaseShield',
          value: [250, 500, 575, 650, 650, 650, 650],
        },
        {
          name: 'ZoneDamage',
          value: [175, 200, 300, 480, 450, 450, 450],
        },
        {
          name: 'FinaleDamage',
          value: [200, 200, 300, 480, 200, 200, 200],
        },
        {
          name: 'StatGain',
          value: [4, 4, 4, 4, 4, 4, 4],
        },
        {
          name: 'HeadlinerHealth',
          value: [100, 100, 100, 100, 100, 100, 100],
        },
        {
          name: 'HeadlinerStatGain',
          value: [1, 1, 1, 1, 1, 1, 1],
        },
        {
          name: 'HeadlinerAttackDamage',
          value: null,
        },
        {
          name: 'HeadlinerAbilityPower',
          value: [5, 5, 5, 5, 5, 5, 5],
        },
      ],
    },
    apiName: 'TFT10_Mordekaiser',
    characterName: 'TFT10_Mordekaiser',
    cost: 3,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Mordekaiser.TFT_Set10.tex',
    name: {
      ko: '모데카이저',
      en: 'Mordekaiser',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Mordekaiser_Mobile.TFT_Set10.tex',
    stats: {
      armor: 55,
      attackSpeed: 0.6499999761581421,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 60,
      hp: 850,
      initialMana: 70,
      magicResist: 55,
      mana: 120,
      range: 1,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Mordekaiser/HUD/TFT10_Mordekaiser_Square.TFT_Set10.tex',
    traits: {
      ko: ['펜타킬', '감시자'],
      en: ['Pentakill', 'Sentinel'],
    },
  },
  TFT10_Nami: {
    ability: {
      desc: {
        ko: '현재 대상에게 <magicDamage>@TOTAL_DAMAGE@(%i:scaleAP%)</magicDamage>의 마법 피해를 입히고 @PRISON_DURATION@초 동안 기절시킵니다.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: 'Deal <magicDamage>@TOTAL_DAMAGE@&nbsp;(%i:scaleAP%)</magicDamage> magic damage to the current target and Stun them for&nbsp;@PRISON_DURATION@&nbsp;seconds.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Nami/HUD/Icons2D/TFT10_NamiQ.TFT_Set10.dds',
      name: {
        ko: '디스코 감옥',
        en: 'Disco Prison',
      },
      variables: [
        {
          name: 'MAGIC_DAMAGE_BASE',
          value: [0, 300, 450, 675, 0, 0, 0],
        },
        {
          name: 'PRISON_DURATION',
          value: [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5],
        },
        {
          name: 'HeadlinerBonusBombs',
          value: null,
        },
        {
          name: 'HeadlinerAbilityPower',
          value: [20, 20, 20, 20, 20, 20, 20],
        },
        {
          name: 'HeadlinerManaReduction',
          value: null,
        },
      ],
    },
    apiName: 'TFT10_Nami',
    characterName: 'TFT10_Nami',
    cost: 1,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Nami.TFT_Set10.tex',
    name: {
      ko: '나미',
      en: 'Nami',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Nami_Mobile.TFT_Set10.tex',
    stats: {
      armor: 15,
      attackSpeed: 0.75,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 40,
      hp: 450,
      initialMana: 15,
      magicResist: 15,
      mana: 75,
      range: 4,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Nami/HUD/TFT10_Nami_Square.TFT_Set10.tex',
    traits: {
      ko: ['디스코', '현혹술사'],
      en: ['Disco', 'Dazzler'],
    },
  },
  TFT10_Neeko: {
    ability: {
      desc: {
        ko: '체력이 가장 높은 아군을 코스프레해 @Duration@초 동안 <TFTBonus>@ModifiedShield@(%i:scaleAP%)</TFTBonus>+아군 체력의 <TFTBonus>@ShieldPercent@%</TFTBonus>에 해당하는 보호막을 얻습니다. 보호막이 사라질 때 주변 적에게 최초 보호막 수치의 <magicDamage>@DamagePercent*100@%</magicDamage>에 해당하는 마법 피해를 입힙니다.<br><br>@TFTUnitProperty.unit:TFT10_Headliner_TRA@',
        en: "Cosplay the highest Health ally and gain a <TFTBonus>@ModifiedShield@&nbsp;(%i:scaleAP%)</TFTBonus> Shield + <TFTBonus>@ShieldPercent@%</TFTBonus> of the ally's Health for @Duration@ seconds. When it breaks, deal <magicDamage>@DamagePercent*100@%</magicDamage> of its initial value as magic damage to adjacent&nbsp;enemies.<br><br>@TFTUnitProperty.unit:TFT10_Headliner_TRA@",
      },
      icon: 'ASSETS/Characters/TFT10_Neeko/HUD/Icons2D/TFT10_Neeko_W2.TFT_Set10.dds',
      name: {
        ko: '코스프레',
        en: 'Cosplay',
      },
      variables: [
        {
          name: 'ShieldPercent',
          value: [5, 5, 5, 5, 5, 5, 5],
        },
        {
          name: 'Duration',
          value: [4, 4, 4, 4, 4, 4, 4],
        },
        {
          name: 'Shield',
          value: [0, 250, 300, 350, 0, 0, 0],
        },
        {
          name: 'HeadlinerHealth',
          value: [200, 200, 200, 200, 200, 200, 200],
        },
        {
          name: 'HeadlinerMana',
          value: [20, 20, 20, 20, 20, 20, 20],
        },
        {
          name: 'DamagePercent',
          value: [0.5, 0.699999988079071, 0.8999999761581421, 1.149999976158142, 0.5, 0.5, 0.5],
        },
      ],
    },
    apiName: 'TFT10_Neeko',
    characterName: 'TFT10_Neeko',
    cost: 3,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Neeko.TFT_Set10.tex',
    name: {
      ko: '니코',
      en: 'Neeko',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Neeko_Mobile.TFT_Set10.tex',
    stats: {
      armor: 50,
      attackSpeed: 0.6000000238418579,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 50,
      hp: 850,
      initialMana: 0,
      magicResist: 50,
      mana: 90,
      range: 1,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Neeko/HUD/TFT10_Neeko_Square.TFT_Set10.tex',
    traits: {
      ko: ['K/DA', '열혈 팬', '수호자'],
      en: ['K/DA', 'Superfan', 'Guardian'],
    },
  },
  TFT10_Pantheon: {
    ability: {
      desc: {
        ko: '@DURATION@초 동안 받는 피해가 <TFTBonus>@DR_TOTAL@(%i:scaleAP%)</TFTBonus>만큼 감소합니다. 이후 지속시간 동안 판테온에게 가장 큰 피해를 입힌 적 @NumTargets@명에게 <physicalDamage>@TOTAL_DAMAGE@(%i:scaleAD%)</physicalDamage>의 물리 피해를 입힙니다.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: 'Reduce damage taken by <TFTBonus>@DR_TOTAL@&nbsp;(%i:scaleAP%)</TFTBonus> for @DURATION@ seconds. Afterwards, deal <physicalDamage>@TOTAL_DAMAGE@&nbsp;(%i:scaleAD%)</physicalDamage> physical damage to the @NumTargets@ enemies who dealt the most damage to Pantheon during the&nbsp;duration.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Pantheon/HUD/Icons2D/TFT10_Pantheon_Q1.TFT_Set10.dds',
      name: {
        ko: '끈질긴 목숨',
        en: 'Too Tough To Kill',
      },
      variables: [
        {
          name: 'DR_PERCENT_AP',
          value: [
            0.15000000596046448, 0.15000000596046448, 0.15000000596046448, 0.15000000596046448,
            0.15000000596046448, 0.15000000596046448, 0.15000000596046448,
          ],
        },
        {
          name: 'BASE_DR',
          value: [0, 0.25, 0.25, 0.30000001192092896, 0, 0, 0],
        },
        {
          name: 'DURATION',
          value: [2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5],
        },
        {
          name: 'PercentADDamage',
          value: [2, 2, 2, 2, 2, 2, 2],
        },
        {
          name: 'NumTargets',
          value: [3, 3, 3, 3, 3, 3, 3],
        },
        {
          name: 'HeadlinerHealth',
          value: [200, 200, 200, 200, 200, 200, 200],
        },
        {
          name: 'HeadlinerArmor',
          value: [20, 20, 20, 20, 20, 20, 20],
        },
        {
          name: 'HeadlinerMagicResist',
          value: [20, 20, 20, 20, 20, 20, 20],
        },
        {
          name: 'DR_CAP_tooltip_only',
          value: [
            0.699999988079071, 0.699999988079071, 0.699999988079071, 0.699999988079071,
            0.699999988079071, 0.699999988079071, 0.699999988079071,
          ],
        },
      ],
    },
    apiName: 'TFT10_Pantheon',
    characterName: 'TFT10_Pantheon',
    cost: 2,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Pantheon.TFT_Set10.tex',
    name: {
      ko: '판테온',
      en: 'Pantheon',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Pantheon_Mobile.TFT_Set10.tex',
    stats: {
      armor: 45,
      attackSpeed: 0.6000000238418579,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 55,
      hp: 750,
      initialMana: 0,
      magicResist: 45,
      mana: 60,
      range: 1,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Pantheon/HUD/TFT10_Pantheon_Square.TFT_Set10.tex',
    traits: {
      ko: ['펑크', '수호자'],
      en: ['Punk', 'Guardian'],
    },
  },
  TFT10_Poppy: {
    ability: {
      desc: {
        ko: '<spellPassive>기본 지속 효과:</spellPassive> 추가 체력에 따라 공격력이 증가합니다. (현재: <TFTBonus>@TotalBonusAD@%(%i:scaleHealth%)</TFTBonus>)<br><br><spellActive>사용 시:</spellActive> @Duration@초 동안 방어력 및 마법 저항력이 <TFTBonus>@ArmorAndMR@</TFTBonus>만큼 증가합니다. 또한 가장 가까운 적을 <TFTBonus>@TargetNumber@</TFTBonus>번 내리쳐 적중할 때마다 <physicalDamage>@TotalDamage@(%i:scaleAD%)</physicalDamage>의 물리 피해를 입히고 <scaleHealth>@TotalHealing@(%i:scaleHealth%%i:scaleAP%)</scaleHealth>의 체력을 회복합니다. 이 스킬로 적을 처치하면 추가로 한 번 찍기 공격을 가합니다.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: '<spellPassive>Passive:</spellPassive> Gain Attack Damage based on bonus Health. (Current: <TFTBonus>@TotalBonusAD@%&nbsp;(%i:scaleHealth%)</TFTBonus>)<br><br><spellActive>Active:</spellActive> Gain <TFTBonus>@ArmorAndMR@</TFTBonus> Armor and Magic Resistance for @Duration@ seconds. Hammer the nearest enemy <TFTBonus>@TargetNumber@</TFTBonus> times; each deals <physicalDamage>@TotalDamage@&nbsp;(%i:scaleAD%)</physicalDamage> physical damage and heals <scaleHealth>@TotalHealing@&nbsp;(%i:scaleHealth%%i:scaleAP%)</scaleHealth> Health. If this kills an enemy, slam an additional&nbsp;time.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Poppy/HUD/Icons2D/TFT10_Poppy_Q.TFT_Set10.dds',
      name: {
        ko: '망치 가져와',
        en: 'Hammer Time',
      },
      variables: [
        {
          name: 'PercentHealthAsAD',
          value: [
            0.029999999329447746, 0.029999999329447746, 0.029999999329447746, 0.029999999329447746,
            0.029999999329447746, 0.029999999329447746, 0.029999999329447746,
          ],
        },
        {
          name: 'TargetNumber',
          value: [3, 3, 3, 3, 3, 3, 3],
        },
        {
          name: 'ArmorAndMR',
          value: [60, 80, 80, 80, 60, 60, 60],
        },
        {
          name: 'ADRatio',
          value: [2.25, 2.4000000953674316, 2.4000000953674316, 5, 6, 6, 6],
        },
        {
          name: 'ExtraSlams',
          value: [1, 1, 1, 1, 1, 1, 1],
        },
        {
          name: 'Duration',
          value: [6, 6, 6, 6, 6, 6, 6],
        },
        {
          name: 'PercentHealthHeal',
          value: [
            0.03999999910593033, 0.03999999910593033, 0.03999999910593033, 0.03999999910593033,
            0.03999999910593033, 0.03999999910593033, 0.03999999910593033,
          ],
        },
        {
          name: 'HeadlinerHealth',
          value: [150, 150, 150, 150, 150, 150, 150],
        },
        {
          name: 'HeadlinerAttackDamage',
          value: [
            0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612,
            0.10000000149011612, 0.10000000149011612, 0.10000000149011612,
          ],
        },
      ],
    },
    apiName: 'TFT10_Poppy',
    characterName: 'TFT10_Poppy',
    cost: 4,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Poppy.TFT_Set10.tex',
    name: {
      ko: '뽀삐',
      en: 'Poppy',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Poppy_Mobile.TFT_Set10.tex',
    stats: {
      armor: 65,
      attackSpeed: 0.6499999761581421,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 60,
      hp: 1000,
      initialMana: 30,
      magicResist: 65,
      mana: 100,
      range: 1,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Poppy/HUD/TFT10_Poppy_Square.TFT_Set10.tex',
    traits: {
      ko: ['이모코어', '춤꾼'],
      en: ['Emo', 'Mosher'],
    },
  },
  TFT10_Qiyana: {
    ability: {
      desc: {
        ko: '현재 대상이 보유한 아이템 <scaleLevel>@NUM_ITEMS@</scaleLevel>개를 복사한 후 아군에게 던져 줍니다. 그리고 대상에게 <physicalDamage>@TOTAL_DAMAGE@(%i:scaleAD%)</physicalDamage>의 물리 피해를 입히고 뒤로 밀쳐냅니다. 대상이 보유한 아이템이 없을 경우 <trueDamage>@TD_TOTAL_DAMAGE@(%i:scaleAP%%i:scaleAD%)</trueDamage>의 추가 고정 피해를 입히고 전장 가장자리로 밀쳐냅니다.<br><br><spellActive enabled=TFT10_BlingActive alternate=rules>반짝반짝 보너스: <TFTBonus><ShowIfNot.TFT10_BlingActive></ShowIfNot.TFT10_BlingActive><ShowIf.TFT10_BlingActive></ShowIf.TFT10_BlingActive></TFTBonus>샘플링과 리믹스로 챔피언을 처치하고 아이템을 복사하면 영구적인 조합 아이템 @TFTUnitProperty.:TFT10_QiyanaComponentCount@개를 생성합니다.</spellActive><br><br><rules>[찬란한 아이템, 유물, 상징은 복사할 수 없습니다.]</rules><br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@<br><br>',
        en: "Copy <scaleLevel>@NUM_ITEMS@</scaleLevel> of the current target's items and throw them to an ally. Deal <physicalDamage>@TOTAL_DAMAGE@&nbsp;(%i:scaleAD%)</physicalDamage> physical damage and knock them back. If the target had no items, deal <trueDamage>@TD_TOTAL_DAMAGE@&nbsp;(%i:scaleAP%%i:scaleAD%)</trueDamage> additional true damage and knock them back to the edge of the board instead.<br><br><spellActive enabled=TFT10_BlingActive alternate=rules>Bling Bonus: <TFTBonus><ShowIfNot.TFT10_BlingActive></ShowIfNot.TFT10_BlingActive><ShowIf.TFT10_BlingActive></ShowIf.TFT10_BlingActive></TFTBonus>After Sample & Remix kills a champion and copies an item, create @TFTUnitProperty.:TFT10_QiyanaComponentCount@ permanent&nbsp;component(s).</spellActive><br><br><rules>[Radiant items, Artifacts, and Emblems cannot be copied]</rules><br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@<br><br>",
      },
      icon: 'ASSETS/Characters/TFT10_Qiyana/HUD/Icons2D/TFT10_Qiyana_W.TFT_Set10.dds',
      name: {
        ko: '샘플링과 리믹스',
        en: 'Sample & Remix',
      },
      variables: [
        {
          name: 'NUM_ITEMS',
          value: [1, 1, 2, 3, 1, 1, 1],
        },
        {
          name: 'BASE_AD_RATIO',
          value: [0, 5, 5, 10, 0, 0, 0],
        },
        {
          name: 'BASE_AP_MOD',
          value: [200, 0.75, 0.75, 5, 200, 200, 200],
        },
        {
          name: 'BONUS_BASE_RATIO',
          value: [2, 2, 2, 2, 2, 2, 2],
        },
        {
          name: 'BLING_BONUS',
          value: [1, 1, 1, 1, 1, 1, 1],
        },
        {
          name: 'StunDuration',
          value: [1.5, 1.5, 1.5, 5, 1.5, 1.5, 1.5],
        },
        {
          name: 'NumOfComponentsToCopy',
          value: [1, 1, 1, 1, 1, 1, 1],
        },
        {
          name: 'NumOfComponentsToCopy_HR',
          value: [2, 2, 2, 2, 2, 2, 2],
        },
        {
          name: 'NumOfComponentsToCopy_Empowered',
          value: [2, 2, 2, 2, 2, 2, 2],
        },
        {
          name: 'NumOfComponentsToCopy_HR_Empowered',
          value: [4, 4, 4, 4, 4, 4, 4],
        },
        {
          name: 'HeadlinerAttackDamage',
          value: [
            0.05000000074505806, 0.05000000074505806, 0.05000000074505806, 0.05000000074505806,
            0.05000000074505806, 0.05000000074505806, 0.05000000074505806,
          ],
        },
        {
          name: 'HeadlinerBonusAD',
          value: [
            0.05000000074505806, 0.05000000074505806, 0.05000000074505806, 0.05000000074505806,
            0.05000000074505806, 0.05000000074505806, 0.05000000074505806,
          ],
        },
      ],
    },
    apiName: 'TFT10_Qiyana',
    characterName: 'TFT10_Qiyana',
    cost: 5,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Qiyana.TFT_Set10.tex',
    name: {
      ko: '키아나',
      en: 'Qiyana',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Qiyana_Mobile.TFT_Set10.tex',
    stats: {
      armor: 60,
      attackSpeed: 0.8999999761581421,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 75,
      hp: 1050,
      initialMana: 0,
      magicResist: 60,
      mana: 50,
      range: 1,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Qiyana/HUD/TFT10_Qiyana_Square.TFT_Set10.tex',
    traits: {
      ko: ['True Damage', '스테이지 다이버'],
      en: ['True Damage', 'Crowd Diver'],
    },
  },
  TFT10_Riven: {
    ability: {
      desc: {
        ko: '다음 @Duration@초 동안 <TFTBonus>@ModifiedShield@(%i:scaleAD%%i:scaleAP%)</TFTBonus>의 보호막을 얻습니다. 또한 기본 공격 시 대상과 1칸 내의 적에게 <physicalDamage>@ModifiedSplashDamage@(%i:scaleAD%)</physicalDamage>의 추가 물리 피해를 입힙니다.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: 'For the next @Duration@ seconds, gain a <TFTBonus>@ModifiedShield@&nbsp;(%i:scaleAD%%i:scaleAP%)</TFTBonus> Shield and attacks deal <physicalDamage>@ModifiedSplashDamage@&nbsp;(%i:scaleAD%)</physicalDamage> bonus physical damage to enemies within 1 hex of the&nbsp;target.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Riven/HUD/Icons2D/TFT10_RivenPathoftheExile.TFT_Set10.dds',
      name: {
        ko: '복셀 방어',
        en: 'Voxel Defense',
      },
      variables: [
        {
          name: 'SplashRadiusHexes',
          value: [1, 1, 1, 1, 1, 1, 1],
        },
        {
          name: 'SplashDamageADPercent',
          value: [
            1.2000000476837158, 1.2000000476837158, 1.2000000476837158, 1.2000000476837158,
            1.2000000476837158, 1.2000000476837158, 1.2000000476837158,
          ],
        },
        {
          name: 'Duration',
          value: [6, 6, 6, 6, 6, 6, 6],
        },
        {
          name: 'ShieldAP',
          value: [0, 100, 120, 140, 0, 0, 0],
        },
        {
          name: 'ShieldADPercent',
          value: [2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5],
        },
        {
          name: 'HeadlinerHealth',
          value: [100, 100, 100, 100, 100, 100, 100],
        },
        {
          name: 'HeadlinerAttackDamage',
          value: [
            0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612,
            0.10000000149011612, 0.10000000149011612, 0.10000000149011612,
          ],
        },
        {
          name: 'HeadlinerAbilityPower',
          value: null,
        },
        {
          name: 'HeadlinerArmor',
          value: [10, 10, 10, 10, 10, 10, 10],
        },
        {
          name: 'HeadlinerMagicResist',
          value: [10, 10, 10, 10, 10, 10, 10],
        },
        {
          name: 'HeadlinerAttackSpeed',
          value: null,
        },
      ],
    },
    apiName: 'TFT10_Riven',
    characterName: 'TFT10_Riven',
    cost: 3,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Riven.TFT_Set10.tex',
    name: {
      ko: '리븐',
      en: 'Riven',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Riven_Mobile.TFT_Set10.tex',
    stats: {
      armor: 40,
      attackSpeed: 0.75,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 60,
      hp: 800,
      initialMana: 50,
      magicResist: 40,
      mana: 100,
      range: 1,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Riven/HUD/TFT10_Riven_Square.TFT_Set10.tex',
    traits: {
      ko: ['8비트', '이단아'],
      en: ['8-bit', 'Edgelord'],
    },
  },
  TFT10_Samira: {
    ability: {
      desc: {
        ko: '<spellPassive>기본 지속 효과:</spellPassive> 공격이 치명타로 적중하면 스타일 중첩을 얻으며, 최대 @MaxStacks@회 중첩됩니다. 중첩 하나당 공격 속도가 <TFTBonus>@ModifiedAS@(%i:scaleAP%)</TFTBonus>만큼 증가합니다.<br><br><spellActive>사용 시:</spellActive> 현재 대상에게 <physicalDamage>@BaseADDamage@(%i:scaleAD%)</physicalDamage>의 물리 피해를 입힙니다. 이때 스타일 중첩 하나당 <physicalDamage>@ADDamagePerStack@(%i:scaleAD%)</physicalDamage>의 물리 피해를 추가로 입히고, 스타일이 초기화됩니다. <br><br>@TFTUnitProperty.unit:TFT10_Headliner_TRA@',
        en: '<spellPassive>Passive:</spellPassive> Attacks that critically strike grant a stack of Style, up to @MaxStacks@ stacks. Each stack grants <TFTBonus>@ModifiedAS@&nbsp;(%i:scaleAP%)</TFTBonus>&nbsp;Attack Speed.<br><br><spellActive>Active:</spellActive> Deal <physicalDamage>@BaseADDamage@&nbsp;(%i:scaleAD%)</physicalDamage> physical damage to the current target, then another <physicalDamage>@ADDamagePerStack@&nbsp;(%i:scaleAD%)</physicalDamage> physical damage per Style stack. Afterwards, reset&nbsp;Style. <br><br>@TFTUnitProperty.unit:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Samira/HUD/Icons2D/TFT10_SamiraP.TFT_Set10.dds',
      name: {
        ko: '전율과 살상',
        en: 'Thrills & Kills',
      },
      variables: [
        {
          name: 'AttackSpeedPerStack',
          value: [
            0.20000000298023224, 0.20000000298023224, 0.20000000298023224, 0.20000000298023224,
            0.20000000298023224, 0.20000000298023224, 0.20000000298023224,
          ],
        },
        {
          name: 'BasePercentAD',
          value: [
            2.0999999046325684, 2.4000000953674316, 2.4000000953674316, 2.5, 2.0999999046325684,
            2.0999999046325684, 2.0999999046325684,
          ],
        },
        {
          name: 'PercentAD',
          value: [
            1.100000023841858, 1.100000023841858, 1.100000023841858, 1.100000023841858,
            1.100000023841858, 1.100000023841858, 1.100000023841858,
          ],
        },
        {
          name: 'SimulateLaunchAttackNum',
          value: [5, 5, 5, 5, 5, 5, 5],
        },
        {
          name: 'MaxStacks',
          value: [6, 6, 6, 6, 6, 6, 6],
        },
        {
          name: 'HeadlinerAttackDamage',
          value: [
            0.15000000596046448, 0.15000000596046448, 0.15000000596046448, 0.15000000596046448,
            0.15000000596046448, 0.15000000596046448, 0.15000000596046448,
          ],
        },
        {
          name: 'HeadlinerCritChance',
          value: [
            0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612,
            0.10000000149011612, 0.10000000149011612, 0.10000000149011612,
          ],
        },
      ],
    },
    apiName: 'TFT10_Samira',
    characterName: 'TFT10_Samira',
    cost: 3,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Samira.TFT_Set10.tex',
    name: {
      ko: '사미라',
      en: 'Samira',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Samira_Mobile.TFT_Set10.tex',
    stats: {
      armor: 20,
      attackSpeed: 0.699999988079071,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 60,
      hp: 600,
      initialMana: 0,
      magicResist: 20,
      mana: 100,
      range: 4,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Samira/HUD/TFT10_Samira_Square.TFT_Set10.tex',
    traits: {
      ko: ['컨트리', '처형자'],
      en: ['Country', 'Executioner'],
    },
  },
  TFT10_Senna: {
    ability: {
      desc: {
        ko: '현재 대상의 위치에 소리 폭발을 일으킵니다. 서브 우퍼는 @PULSE_COUNT@회 파동을 방출하며, 파동을 방출할 때마다 @RANGE@칸 내의 적에게 <magicDamage>@TOTAL_DAMAGE@(%i:scaleAP%)</magicDamage>의 마법 피해를 입힙니다.<br><br><spellActive enabled=TFT10_BlingActive alternate=rules>반짝반짝 보너스: <TFTBonus>-<ShowIfNot.TFT10_BlingActive>@TFTUnitProperty.:TFT10_SennaMana@</ShowIfNot.TFT10_BlingActive><ShowIf.TFT10_BlingActive>@TFTUnitProperty.:TFT10_SennaMana@</ShowIf.TFT10_BlingActive></TFTBonus>의 최대 마나</spellActive><br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: "Fire a blast of sound at the current target's location. It pulses @PULSE_COUNT@ times, each dealing <magicDamage>@TOTAL_DAMAGE@&nbsp;(%i:scaleAP%)</magicDamage> magic damage to enemies within&nbsp;@RANGE@&nbsp;hex.<br><br><spellActive enabled=TFT10_BlingActive alternate=rules>Bling Bonus: <TFTBonus>-<ShowIfNot.TFT10_BlingActive>@TFTUnitProperty.:TFT10_SennaMana@</ShowIfNot.TFT10_BlingActive><ShowIf.TFT10_BlingActive>@TFTUnitProperty.:TFT10_SennaMana@</ShowIf.TFT10_BlingActive></TFTBonus> max Mana</spellActive><br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@",
      },
      icon: 'ASSETS/Characters/TFT10_Senna/HUD/Icons2D/TFT10_Senna_Passive.TFT_Set10.dds',
      name: {
        ko: '뇌진탕 소음',
        en: 'Concussive Noise',
      },
      variables: [
        {
          name: 'MagicDamage',
          value: [
            1.2999999523162842, 105, 155, 225, 1.2999999523162842, 1.2999999523162842,
            1.2999999523162842,
          ],
        },
        {
          name: 'RANGE',
          value: [1, 1, 1, 1, 1, 1, 1],
        },
        {
          name: 'PULSE_COUNT',
          value: [3, 3, 3, 3, 3, 3, 3],
        },
        {
          name: 'BLING_RADIUS',
          value: [1, 1, 1, 1, 1, 1, 1],
        },
        {
          name: 'BLING_BONUS',
          value: [15, 15, 15, 15, 15, 15, 15],
        },
        {
          name: 'BLING_BONUS_EMPOWERED',
          value: [30, 30, 30, 30, 30, 30, 30],
        },
        {
          name: 'PULSE_TICK_RATE',
          value: [0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75],
        },
        {
          name: 'HeadlinerAbilityPower',
          value: [5, 5, 5, 5, 5, 5, 5],
        },
      ],
    },
    apiName: 'TFT10_Senna',
    characterName: 'TFT10_Senna',
    cost: 2,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Senna.TFT_Set10.tex',
    name: {
      ko: '세나',
      en: 'Senna',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Senna_Mobile.TFT_Set10.tex',
    stats: {
      armor: 20,
      attackSpeed: 0.699999988079071,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 40,
      hp: 600,
      initialMana: 30,
      magicResist: 20,
      mana: 90,
      range: 5,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Senna/HUD/TFT10_Senna_Square.TFT_Set10.tex',
    traits: {
      ko: ['True Damage', '속사포'],
      en: ['True Damage', 'Rapidfire'],
    },
  },
  TFT10_Seraphine: {
    ability: {
      desc: {
        ko: '1칸 내의 모든 유닛에게 적중하는 고음을 가장 큰 유닛 무리로 보냅니다. 적에게 적중 시 <magicDamage>@ModifiedDamage@(%i:scaleAP%)</magicDamage>의 마법 피해를 입힙니다. 아군에게 적중 시 체력을 <scaleHealth>@ModifiedHeal@(%i:scaleAP%)</scaleHealth>만큼 회복시킵니다.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: 'Send a high note to the largest clump of units that hits all units within 1 hex. Enemies take <magicDamage>@ModifiedDamage@&nbsp;(%i:scaleAP%)</magicDamage> magic damage. Allies heal for&nbsp;<scaleHealth>@ModifiedHeal@&nbsp;(%i:scaleAP%)</scaleHealth> Health.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Seraphine/HUD/Icons2D/TFT10_Seraphine_Q1.TFT_Set10.dds',
      name: {
        ko: '고음',
        en: 'High Note',
      },
      variables: [
        {
          name: 'BaseMagicDamage',
          value: [0, 140, 210, 315, 0, 0, 0],
        },
        {
          name: 'HealAmount',
          value: [0, 80, 120, 160, 0, 0, 0],
        },
        {
          name: 'HeadlinerAbilityPower',
          value: null,
        },
        {
          name: 'HeadlinerHighNoteBonus',
          value: [
            0.4000000059604645, 0.4000000059604645, 0.4000000059604645, 0.4000000059604645,
            0.4000000059604645, 0.4000000059604645, 0.4000000059604645,
          ],
        },
      ],
    },
    apiName: 'TFT10_Seraphine',
    characterName: 'TFT10_Seraphine',
    cost: 2,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Seraphine.TFT_Set10.tex',
    name: {
      ko: '세라핀',
      en: 'Seraphine',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Seraphine_Mobile.TFT_Set10.tex',
    stats: {
      armor: 25,
      attackSpeed: 0.699999988079071,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 40,
      hp: 550,
      initialMana: 0,
      magicResist: 25,
      mana: 60,
      range: 4,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Seraphine/HUD/TFT10_Seraphine_Square.TFT_Set10.tex',
    traits: {
      ko: ['K/DA', '주문술사'],
      en: ['K/DA', 'Spellweaver'],
    },
  },
  TFT10_Sett: {
    ability: {
      desc: {
        ko: '@Duration@초 동안 <TFTBonus>@ShieldMin@</TFTBonus>의 보호막을 얻으며, 잃은 체력 @MissingHealthThreshold@당 보호막이 <TFTBonus>@ShieldIncreasePerHealthThreshold@</TFTBonus>만큼 증가합니다. 현재 대상에게 <magicDamage>@TotalDamage@(%i:scaleAP%)</magicDamage>의 마법 피해를 입히고 주변 원뿔 범위의 적에게는 <magicDamage>@TotalSecondaryDamage@(%i:scaleAP%)</magicDamage>의 마법 피해를 입힙니다.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: 'Gain a <TFTBonus>@ShieldMin@</TFTBonus> Shield for @Duration@ seconds, increased by <TFTBonus>@ShieldIncreasePerHealthThreshold@</TFTBonus> for every @MissingHealthThreshold@ missing Health. Deal <magicDamage>@TotalDamage@&nbsp;(%i:scaleAP%)</magicDamage> magic damage to the current target and <magicDamage>@TotalSecondaryDamage@&nbsp;(%i:scaleAP%)</magicDamage> magic damage to enemies in a cone around&nbsp;them.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Sett/HUD/Icons2D/TFT10_Sett_W.TFT_Set10.dds',
      name: {
        ko: '펀치라인',
        en: 'THE PUNCHLINE',
      },
      variables: [
        {
          name: 'Duration',
          value: [2, 2, 2, 2, 2, 2, 2],
        },
        {
          name: 'Damage',
          value: [0, 275, 420, 680, 0, 0, 0],
        },
        {
          name: 'SecondaryDamage',
          value: [0, 130, 210, 340, 0, 0, 0],
        },
        {
          name: 'ShieldMin',
          value: [300, 375, 425, 475, 300, 300, 300],
        },
        {
          name: 'MissingHealthThreshold',
          value: [4, 4, 4, 4, 4, 4, 4],
        },
        {
          name: 'ShieldIncreasePerHealthThreshold',
          value: [1, 1, 1, 1, 1, 1, 1],
        },
        {
          name: 'HeadlinerHealth',
          value: [250, 250, 250, 250, 250, 250, 250],
        },
        {
          name: 'HeadlinerHealthThreshold',
          value: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
        },
        {
          name: 'HeadlinerPermanentHealth',
          value: [50, 50, 50, 50, 50, 50, 50],
        },
      ],
    },
    apiName: 'TFT10_Sett',
    characterName: 'TFT10_Sett',
    cost: 3,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Sett.TFT_Set10.tex',
    name: {
      ko: '세트',
      en: 'Sett',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Sett_Mobile.TFT_Set10.tex',
    stats: {
      armor: 45,
      attackSpeed: 0.699999988079071,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 55,
      hp: 950,
      initialMana: 30,
      magicResist: 45,
      mana: 90,
      range: 1,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Sett/HUD/TFT10_Sett_Square.TFT_Set10.tex',
    traits: {
      ko: ['Heartsteel', '난동꾼', '춤꾼'],
      en: ['Heartsteel', 'Bruiser', 'Mosher'],
    },
  },
  TFT10_Sona: {
    ability: {
      desc: {
        ko: '<spellPassive>기본 지속 효과:</spellPassive> 공격 시 아군에게 비트를 보내 최대 체력의 <scaleHealth>@HealRatio*100@%</scaleHealth>만큼 회복시킵니다.<br><br><spellActive>사용 시:</spellActive> 모든 아군에게 비트를 보내 <scaleLevel>@Duration@</scaleLevel>초 동안 <TFTBonus>@ModifiedShieldAmount@(%i:scaleAP%)</TFTBonus>의 보호막을 부여합니다.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: '<spellPassive>Passive:</spellPassive> Attacks instead send a beat to an ally, healing them for <scaleHealth>@HealRatio*100@%</scaleHealth> of their maximum Health.<br><br><spellActive>Active:</spellActive> Send a beat to all allies and grant them a <TFTBonus>@ModifiedShieldAmount@&nbsp;(%i:scaleAP%)</TFTBonus> Shield for&nbsp;<scaleLevel>@Duration@</scaleLevel>&nbsp;seconds.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Sona/HUD/Icons2D/TFT10_Sona_W.TFT_Set10.dds',
      name: {
        ko: '절정 (역동)',
        en: 'The Drop (Kinetic)',
      },
      variables: [
        {
          name: 'HealRatio',
          value: [0.03999999910593033, 0.03999999910593033, 0.07000000029802322, 1, 1, 1, 1],
        },
        {
          name: 'Duration',
          value: [6, 2, 2, 30, 30, 30, 30],
        },
        {
          name: 'BaseShieldAmount',
          value: [400, 350, 550, 3333, 9000, 9000, 9000],
        },
        {
          name: 'HeadlinerAttackSpeed',
          value: [
            0.05000000074505806, 0.05000000074505806, 0.05000000074505806, 0.05000000074505806,
            0.05000000074505806, 0.05000000074505806, 0.05000000074505806,
          ],
        },
        {
          name: 'HeadlinerAttackSpeedBoost',
          value: [
            0.009999999776482582, 0.009999999776482582, 0.009999999776482582, 0.009999999776482582,
            0.009999999776482582, 0.009999999776482582, 0.009999999776482582,
          ],
        },
      ],
    },
    apiName: 'TFT10_Sona',
    characterName: 'TFT10_Sona',
    cost: 5,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Sona.TFT_Set10.tex',
    name: {
      ko: '소나',
      en: 'Sona',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Sona_Mobile.TFT_Set10.tex',
    stats: {
      armor: 40,
      attackSpeed: 0.8500000238418579,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 5,
      hp: 850,
      initialMana: 0,
      magicResist: 40,
      mana: 170,
      range: 16,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Sona/HUD/TFT10_Sona_Square.TFT_Set10.tex',
    traits: {
      ko: ['믹스마스터', '주문술사'],
      en: ['Mixmaster', 'Spellweaver'],
    },
  },
  TFT10_Taric: {
    ability: {
      desc: {
        ko: '@DURATION@초 동안 <TFTBonus>@SHIELD_TOTAL@(%i:scaleHealth%)</TFTBonus>의 보호막을 얻습니다. 타릭이 사용하는 다음 <TFTBonus>@EMPOWERED_ATTACKS@</TFTBonus>회의 공격이 <magicDamage>@BONUS_DAMAGE@(%i:scaleAP%)</magicDamage>의 추가 마법 피해를 입힙니다.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: "Gain a <TFTBonus>@SHIELD_TOTAL@&nbsp;(%i:scaleHealth%)</TFTBonus> Shield for @DURATION@ seconds. Taric's next <TFTBonus>@EMPOWERED_ATTACKS@</TFTBonus> attacks deal <magicDamage>@BONUS_DAMAGE@&nbsp;(%i:scaleAP%)</magicDamage> bonus magic&nbsp;damage.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@",
      },
      icon: 'ASSETS/Characters/TFT10_Taric/HUD/Icons2D/TFT10_Taric_R.TFT_Set10.dds',
      name: {
        ko: '미러볼의 축복',
        en: "Mirrorball's Blessing",
      },
      variables: [
        {
          name: 'SHIELD_BASE',
          value: [250, 240, 290, 330, 450, 500, 550],
        },
        {
          name: 'SHIELD_RATIO',
          value: [
            0.05999999865889549, 0.05999999865889549, 0.05999999865889549, 0.05999999865889549,
            0.05999999865889549, 0.05999999865889549, 0.05999999865889549,
          ],
        },
        {
          name: 'DURATION',
          value: [4, 4, 4, 4, 4, 4, 4],
        },
        {
          name: 'BONUS_DAMAGE_BASE',
          value: [0, 100, 150, 225, 0, 0, 0],
        },
        {
          name: 'EMPOWERED_ATTACKS',
          value: [2, 2, 2, 2, 2, 2, 2],
        },
        {
          name: 'HeadlinerHealth',
          value: [100, 100, 100, 100, 100, 100, 100],
        },
        {
          name: 'HeadlinerArmor',
          value: [15, 15, 15, 15, 15, 15, 15],
        },
      ],
    },
    apiName: 'TFT10_Taric',
    characterName: 'TFT10_Taric',
    cost: 1,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Taric.TFT_Set10.tex',
    name: {
      ko: '타릭',
      en: 'Taric',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Taric_Mobile.TFT_Set10.tex',
    stats: {
      armor: 40,
      attackSpeed: 0.550000011920929,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 55,
      hp: 650,
      initialMana: 50,
      magicResist: 40,
      mana: 140,
      range: 1,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Taric/HUD/TFT10_Taric_Square.TFT_Set10.tex',
    traits: {
      ko: ['디스코', '수호자'],
      en: ['Disco', 'Guardian'],
    },
  },
  TFT10_Thresh: {
    ability: {
      desc: {
        ko: '주위 가장 큰 적 무리를 <scaleLevel>@StunDuration@</scaleLevel>초 동안 기절시키고 각각 <magicDamage>@ModifiedDamage@의 마법 피해(%i:scaleAP%)</magicDamage>를 입힙니다. 쓰레쉬가 입힌 총 피해의 <scaleHealth>@FlatHeal@</scaleHealth>+@HealingScale*100@%에 해당하는 체력을 회복합니다.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: 'Stun the largest group of nearby enemies for <scaleLevel>@StunDuration@</scaleLevel> seconds and deal <magicDamage>@ModifiedDamage@&nbsp;(%i:scaleAP%)</magicDamage> magic damage to each. Thresh heals for <scaleHealth>@FlatHeal@</scaleHealth> + @HealingScale*100@% of the total damage&nbsp;dealt.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Thresh/HUD/Icons2D/TFT10_Thresh_Q3.TFT_Set10.dds',
      name: {
        ko: '악마의 휘몰이',
        en: "Devil's Round Up",
      },
      variables: [
        {
          name: 'StunDuration',
          value: [0, 1.75, 2, 8, 0, 0, 0],
        },
        {
          name: 'HexRange',
          value: [1, 1, 1, 1, 1, 1, 1],
        },
        {
          name: 'Damage',
          value: [50, 150, 225, 1200, 50, 50, 50],
        },
        {
          name: 'FlatHeal',
          value: [0, 250, 300, 600, 0, 0, 0],
        },
        {
          name: 'HealingScale',
          value: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
        },
        {
          name: 'HeadlinerHealth',
          value: [100, 100, 100, 100, 100, 100, 100],
        },
        {
          name: 'HeadlinerManarReduction',
          value: [25, 25, 25, 25, 25, 25, 25],
        },
      ],
    },
    apiName: 'TFT10_Thresh',
    characterName: 'TFT10_Thresh',
    cost: 4,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Thresh.TFT_Set10.tex',
    name: {
      ko: '쓰레쉬',
      en: 'Thresh',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Thresh_Mobile.TFT_Set10.tex',
    stats: {
      armor: 60,
      attackSpeed: 0.6499999761581421,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 60,
      hp: 1000,
      initialMana: 70,
      magicResist: 60,
      mana: 160,
      range: 1,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Thresh/HUD/TFT10_Thresh_Square.TFT_Set10.tex',
    traits: {
      ko: ['컨트리', '수호자'],
      en: ['Country', 'Guardian'],
    },
  },
  TFT10_Twitch: {
    ability: {
      desc: {
        ko: '현재 대상에게 병을 던져 1칸 내의 적에게 <physicalDamage>@ModifiedInitialDamage@(%i:scaleAD%)</physicalDamage>의 물리 피해를 입힙니다. 이후 병은 @SecondaryExplosions@개의 파편으로 폭발해 각 파편이 2칸 내의 무작위 적에게 <magicDamage>@ModifiedSecondaryDamage@(%i:scaleAP%)</magicDamage>의 마법 피해를 입힙니다. 병 투척이 치명타로 적중한 적 하나당 파편 @BonusExplosionsOnCrit@개를 추가로 생성합니다.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: 'Throw a bottle at the current target, which deals <physicalDamage>@ModifiedInitialDamage@&nbsp;(%i:scaleAD%)</physicalDamage> physical damage to enemies within 1 hex. It explodes into @SecondaryExplosions@ shards; each dealing <magicDamage>@ModifiedSecondaryDamage@&nbsp;(%i:scaleAP%)</magicDamage> magic damage to a random enemy within 2 hexes. Each enemy critically struck by the bottle creates @BonusExplosionsOnCrit@ more&nbsp;shard.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Twitch/HUD/Icons2D/TFT10_Twitch_W.TFT_Set10.dds',
      name: {
        ko: '병 속의 난장판',
        en: 'Bottled Anarchy',
      },
      variables: [
        {
          name: 'InitialADDamage',
          value: [2, 2, 2, 2, 2, 2, 2],
        },
        {
          name: 'SecondaryMagicDamage',
          value: [40, 35, 50, 80, 40, 40, 40],
        },
        {
          name: 'SecondaryExplosions',
          value: [6, 6, 6, 6, 6, 6, 6],
        },
        {
          name: 'BonusExplosionsOnCrit',
          value: [1, 1, 1, 1, 1, 1, 1],
        },
        {
          name: 'HeadlinerAttackDamage',
          value: [
            0.15000000596046448, 0.15000000596046448, 0.15000000596046448, 0.15000000596046448,
            0.15000000596046448, 0.15000000596046448, 0.15000000596046448,
          ],
        },
        {
          name: 'HeadlinerCritChance',
          value: [
            0.20000000298023224, 0.20000000298023224, 0.20000000298023224, 0.20000000298023224,
            0.20000000298023224, 0.20000000298023224, 0.20000000298023224,
          ],
        },
      ],
    },
    apiName: 'TFT10_Twitch',
    characterName: 'TFT10_Twitch',
    cost: 2,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Twitch.TFT_Set10.tex',
    name: {
      ko: '트위치',
      en: 'Twitch',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Twitch_Mobile.TFT_Set10.tex',
    stats: {
      armor: 20,
      attackSpeed: 0.699999988079071,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 45,
      hp: 550,
      initialMana: 20,
      magicResist: 20,
      mana: 70,
      range: 4,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Twitch/HUD/TFT10_Twitch_Square.TFT_Set10.tex',
    traits: {
      ko: ['펑크', '처형자'],
      en: ['Punk', 'Executioner'],
    },
  },
  TFT10_Urgot: {
    ability: {
      desc: {
        ko: '@Duration@초 동안 추가 공격 속도를 공격력으로 전환합니다. 공격 시 원뿔 범위에 <physicalDamage>@TotalDamage@(%i:scaleAD%%i:scaleAP%)</physicalDamage>의 물리 피해를 입히고 우르곳이 @ShieldDuration@초 동안 입힌 피해의 <TFTBonus>@ShieldRatio*100@%</TFTBonus>에 해당하는 보호막을 얻습니다.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: 'For @Duration@ seconds, convert bonus Attack Speed to Attack Damage. Attacks deal <physicalDamage>@TotalDamage@&nbsp;(%i:scaleAD%%i:scaleAP%)</physicalDamage> physical damage in a cone and grant Urgot <TFTBonus>@ShieldRatio*100@%</TFTBonus> of the damage dealt as a @ShieldDuration@ second&nbsp;Shield.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Urgot/HUD/Icons2D/TFT10_Urgot_W.TFT_Set10.dds',
      name: {
        ko: '손끝에서 피어나는 불꽃',
        en: 'Fire from his Fingertips',
      },
      variables: [
        {
          name: 'ADRatio',
          value: [
            1.7000000476837158, 1.75, 1.75, 1.7999999523162842, 1.7000000476837158,
            1.7000000476837158, 1.7000000476837158,
          ],
        },
        {
          name: 'Duration',
          value: [0, 8, 8, 8, 0, 0, 0],
        },
        {
          name: 'ShieldRatio',
          value: [
            0.30000001192092896, 0.30000001192092896, 0.30000001192092896, 0.30000001192092896,
            0.30000001192092896, 0.30000001192092896, 0.30000001192092896,
          ],
        },
        {
          name: 'ShieldDuration',
          value: [5, 5, 5, 5, 5, 5, 5],
        },
        {
          name: 'ADPerASConversion',
          value: [1, 1, 1, 1, 1, 1, 1],
        },
        {
          name: 'AbilityScaleDamage',
          value: [10, 15, 25, 40, 25, 25, 25],
        },
        {
          name: 'HeadlinerAttackDamage',
          value: [
            0.15000000596046448, 0.15000000596046448, 0.15000000596046448, 0.15000000596046448,
            0.15000000596046448, 0.15000000596046448, 0.15000000596046448,
          ],
        },
        {
          name: 'HeadlinerOmnivamp',
          value: [
            0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612,
            0.10000000149011612, 0.10000000149011612, 0.10000000149011612,
          ],
        },
      ],
    },
    apiName: 'TFT10_Urgot',
    characterName: 'TFT10_Urgot',
    cost: 3,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Urgot.TFT_Set10.tex',
    name: {
      ko: '우르곳',
      en: 'Urgot',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Urgot_Mobile.TFT_Set10.tex',
    stats: {
      armor: 45,
      attackSpeed: 0.75,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 60,
      hp: 750,
      initialMana: 0,
      magicResist: 45,
      mana: 20,
      range: 2,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Urgot/HUD/TFT10_Urgot_Square.TFT_Set10.tex',
    traits: {
      ko: ['컨트리', '춤꾼'],
      en: ['Country', 'Mosher'],
    },
  },
  TFT10_Vex: {
    ability: {
      desc: {
        ko: '현재 대상에게 그림자를 보냅니다. 그림자는 주위 1칸 내의 적을 @StunDuration@초 동안 기절시키며, 이후 1칸 내의 적에게 <magicDamage>@ModifiedDamage@(%i:scaleAP%)</magicDamage>의 마법 피해를 입힙니다.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: 'Send a shadow to the current target that Stuns enemies within 1 hex for @StunDuration@ seconds. Then, it deals <magicDamage>@ModifiedDamage@&nbsp;(%i:scaleAP%)</magicDamage> magic damage to enemies within&nbsp;1&nbsp;hex.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Vex/HUD/Icons2D/Icons_TFT10_Vex_E01.TFT_Set10.dds',
      name: {
        ko: '그대의 장례식',
        en: 'Your Funeral',
      },
      variables: [
        {
          name: 'Damage',
          value: [0, 255, 380, 610, 0, 0, 0],
        },
        {
          name: 'StunDuration',
          value: [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5],
        },
        {
          name: 'HeadlinerAbilityPower',
          value: [25, 25, 25, 25, 25, 25, 25],
        },
      ],
    },
    apiName: 'TFT10_Vex',
    characterName: 'TFT10_Vex',
    cost: 3,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Vex.TFT_Set10.tex',
    name: {
      ko: '벡스',
      en: 'Vex',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Vex_Mobile.TFT_Set10.tex',
    stats: {
      armor: 20,
      attackSpeed: 0.75,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 40,
      hp: 700,
      initialMana: 25,
      magicResist: 20,
      mana: 75,
      range: 4,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Vex/HUD/TFT10_Vex_Square.TFT_Set10.tex',
    traits: {
      ko: ['이모코어', '처형자'],
      en: ['Emo', 'Executioner'],
    },
  },
  TFT10_Vi: {
    ability: {
      desc: {
        ko: '현재 대상에게 <physicalDamage>@PUNCH_DAMAGE@(%i:scaleAD%)</physicalDamage>의 물리 피해를 입힙니다. 대상의 체력이 바이보다 높을 경우 <physicalDamage>@EMPOWERED_PUNCH_DAMAGE@(%i:scaleAD%)</physicalDamage>의 물리 피해를 입힙니다. <scaleLevel>@STUN_DURATION@</scaleLevel>초 동안 기절시킵니다. 또한 전투가 끝날 때까지 방어력을 <TFTBonus>@ModifiedArmorReduction@(%i:scaleAP%)</TFTBonus>만큼 감소시킵니다.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: 'Deal <physicalDamage>@PUNCH_DAMAGE@&nbsp;(%i:scaleAD%)</physicalDamage> physical damage to the current target, or <physicalDamage>@EMPOWERED_PUNCH_DAMAGE@&nbsp;(%i:scaleAD%)</physicalDamage> if they have more current Health than Vi. Stun them for <scaleLevel>@STUN_DURATION@</scaleLevel> seconds and reduce their Armor by <TFTBonus>@ModifiedArmorReduction@&nbsp;(%i:scaleAP%)</TFTBonus> for the rest of&nbsp;combat.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Vi/HUD/Icons2D/TFT10_ViE2.TFT_Set10.dds',
      name: {
        ko: '가중되는 고통',
        en: 'The Harder They Fall',
      },
      variables: [
        {
          name: 'ARMOR_REDUCTION',
          value: [30, 15, 18, 20, 30, 30, 30],
        },
        {
          name: 'PUNCH_RATIO',
          value: [
            2.200000047683716, 2.200000047683716, 2.200000047683716, 2.200000047683716,
            2.200000047683716, 2.200000047683716, 2.200000047683716,
          ],
        },
        {
          name: 'EMPOWERED_PUNCH_RATIO',
          value: [
            3.200000047683716, 3.200000047683716, 3.200000047683716, 3.200000047683716,
            3.200000047683716, 3.200000047683716, 3.200000047683716,
          ],
        },
        {
          name: 'STUN_DURATION',
          value: [1.5, 1.5, 1.75, 2, 1.5, 1.5, 1.5],
        },
        {
          name: 'HeadlinerHealth',
          value: [150, 150, 150, 150, 150, 150, 150],
        },
        {
          name: 'HeadlinerAttackDamage',
          value: [
            0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612,
            0.10000000149011612, 0.10000000149011612, 0.10000000149011612,
          ],
        },
        {
          name: 'HeadlinerAttackSpeed',
          value: null,
        },
      ],
    },
    apiName: 'TFT10_Vi',
    characterName: 'TFT10_Vi',
    cost: 1,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Vi.TFT_Set10.tex',
    name: {
      ko: '바이',
      en: 'Vi',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Vi_Mobile.TFT_Set10.dds',
    stats: {
      armor: 40,
      attackSpeed: 0.6000000238418579,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 55,
      hp: 650,
      initialMana: 40,
      magicResist: 40,
      mana: 80,
      range: 1,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Vi/HUD/TFT10_Vi_Square.TFT_Set10.tex',
    traits: {
      ko: ['펑크', '춤꾼'],
      en: ['Punk', 'Mosher'],
    },
  },
  TFT10_Viego: {
    ability: {
      desc: {
        ko: '근처 칸을 찍습니다. 2칸 내의 적에게 <physicalDamage>@ModifiedSlamDamage@(%i:scaleAD%)</physicalDamage>의 물리 피해를 입히고 <TFTBonus>@ModifiedMarkDuration@(%i:scaleAP%)</TFTBonus>초 동안 표식을 남깁니다. 표식이 남은 적은 받는 모든 피해가 <TFTBonus>@MarkBonusDamage*100@%</TFTBonus>만큼 증가합니다.<br><br>비에고가 표식이 남은 적을 공격할 때 <physicalDamage>@ModifiedBonusDamage@(%i:scaleAD%)</physicalDamage>의 물리 피해를 입힙니다.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: "Slam on a nearby hex. Deal <physicalDamage>@ModifiedSlamDamage@&nbsp;(%i:scaleAD%)</physicalDamage> physical damage to enemies within two hexes and mark them for <TFTBonus>@ModifiedMarkDuration@&nbsp;(%i:scaleAP%)</TFTBonus> seconds. Marked enemies take <TFTBonus>@MarkBonusDamage*100@%</TFTBonus> increased damage from all&nbsp;sources.<br><br>Viego's attacks on marked enemies deal <physicalDamage>@ModifiedBonusDamage@&nbsp;(%i:scaleAD%)</physicalDamage> physical damage&nbsp;instead.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@",
      },
      icon: 'ASSETS/Characters/TFT10_Viego/HUD/Icons2D/TFT10_Viego_R.TFT_Set10.dds',
      name: {
        ko: '몰락한 왕의 리프',
        en: 'Riff of the Ruined King',
      },
      variables: [
        {
          name: 'SlamDamage',
          value: [0, 1.5, 1.5, 3, 0, 0, 0],
        },
        {
          name: 'BonusAttackDamage',
          value: [0, 1.7000000476837158, 1.7000000476837158, 3.4000000953674316, 0, 0, 0],
        },
        {
          name: 'MarkDuration',
          value: [5, 5, 5, 5, 5, 5, 5],
        },
        {
          name: 'MarkBonusDamage',
          value: [
            0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612,
            0.10000000149011612, 0.10000000149011612, 0.10000000149011612,
          ],
        },
        {
          name: 'HeadlinerHealth',
          value: [150, 150, 150, 150, 150, 150, 150],
        },
        {
          name: 'HeadlinerAttackDamage',
          value: [
            0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612,
            0.10000000149011612, 0.10000000149011612, 0.10000000149011612,
          ],
        },
        {
          name: 'HeadlinerAbilityPower',
          value: null,
        },
        {
          name: 'HeadlinerArmor',
          value: null,
        },
        {
          name: 'HeadlinerMagicResist',
          value: null,
        },
        {
          name: 'HeadlinerAttackSpeed',
          value: null,
        },
      ],
    },
    apiName: 'TFT10_Viego',
    characterName: 'TFT10_Viego',
    cost: 4,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Viego.TFT_Set10.tex',
    name: {
      ko: '비에고',
      en: 'Viego',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Viego_Mobile.TFT_Set10.tex',
    stats: {
      armor: 65,
      attackSpeed: 0.8500000238418579,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 75,
      hp: 1000,
      initialMana: 70,
      magicResist: 65,
      mana: 120,
      range: 1,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Viego/HUD/TFT10_Viego_Square.TFT_Set10.tex',
    traits: {
      ko: ['펜타킬', '이단아'],
      en: ['Pentakill', 'Edgelord'],
    },
  },
  TFT10_Yasuo: {
    ability: {
      desc: {
        ko: '<spellPassive>기본 지속 효과:</spellPassive> 야스오가 적 챔피언을 처치할 때마다 영구적으로 공격력이 <TFTBonus>@AD_KILL_GAIN@%</TFTBonus> 증가합니다. <rules>초고속 모드에서는 효과가 두 배로 적용됩니다.</rules> <TFTTrackerLabel>(현재: @TFTUnitProperty.:TFT10_YasuoADGain@% %i:scaleAD%)</TFTTrackerLabel><br><br><spellActive>사용 시:</spellActive> 현재 대상에게 <physicalDamage>@TOTAL_DAMAGE@(%i:scaleAD%%i:scaleAP%)</physicalDamage>의 물리 피해를 입힙니다.<br><br><spellActive enabled=TFT10_BlingActive alternate=rules>반짝반짝 보너스: 신시사이저 타격 시 체력이 <TFTBonus><ShowIfNot.TFT10_BlingActive>@TFTUnitProperty.:TFT10_YasuoExecute@%</ShowIfNot.TFT10_BlingActive><ShowIf.TFT10_BlingActive>@TFTUnitProperty.:TFT10_YasuoExecute@%</ShowIf.TFT10_BlingActive></TFTBonus> 아래인 적을 처형합니다.</spellActive><br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: '<spellPassive>Passive:</spellPassive> Yasuo permanently gains <TFTBonus>@AD_KILL_GAIN@%</TFTBonus> Attack Damage when he kills an enemy champion <rules>(doubled in Hyper Roll)</rules>. <TFTTrackerLabel>(Current: @TFTUnitProperty.:TFT10_YasuoADGain@%&nbsp;%i:scaleAD%)</TFTTrackerLabel><br><br><spellActive>Active:</spellActive> Deal <physicalDamage>@TOTAL_DAMAGE@&nbsp;(%i:scaleAD%%i:scaleAP%)</physicalDamage> to the current&nbsp;target.<br><br><spellActive enabled=TFT10_BlingActive alternate=rules>Bling Bonus: Synthesizer Strike executes enemies under <TFTBonus><ShowIfNot.TFT10_BlingActive>@TFTUnitProperty.:TFT10_YasuoExecute@%</ShowIfNot.TFT10_BlingActive><ShowIf.TFT10_BlingActive>@TFTUnitProperty.:TFT10_YasuoExecute@%</ShowIf.TFT10_BlingActive></TFTBonus>&nbsp;Health</spellActive><br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Yasuo/HUD/Icons2D/TFT10_Yasuo_Passive.TFT_Set10.dds',
      name: {
        ko: '신시사이저 타격',
        en: 'Synthesizer Strike',
      },
      variables: [
        {
          name: 'DAMAGE_RATIO',
          value: [2.75, 2.75, 2.75, 2.75, 2.75, 2.75, 2.75],
        },
        {
          name: 'AD_KILL_GAIN',
          value: [1, 1, 1, 1, 1, 1, 1],
        },
        {
          name: 'AD_KILL_GAIN_HYPERROLL',
          value: [2, 2, 2, 2, 2, 2, 2],
        },
        {
          name: 'MAGIC_DAMAGE',
          value: [20, 20, 20, 20, 20, 20, 20],
        },
        {
          name: 'KILL_TOLERANCE_TIME',
          value: [
            0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612,
            0.10000000149011612, 0.10000000149011612, 0.10000000149011612,
          ],
        },
        {
          name: 'EXECUTE_PERCENT',
          value: [15, 15, 15, 15, 15, 15, 15],
        },
        {
          name: 'EXECUTE_PERCENT_EMPOWERED',
          value: [25, 25, 25, 25, 25, 25, 25],
        },
        {
          name: 'HeadlinerHealth',
          value: [100, 100, 100, 100, 100, 100, 100],
        },
        {
          name: 'HeadlinerOmnivamp',
          value: [
            0.15000000596046448, 0.15000000596046448, 0.15000000596046448, 0.15000000596046448,
            0.15000000596046448, 0.15000000596046448, 0.15000000596046448,
          ],
        },
      ],
    },
    apiName: 'TFT10_Yasuo',
    characterName: 'TFT10_Yasuo',
    cost: 1,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Yasuo.TFT_Set10.tex',
    name: {
      ko: '야스오',
      en: 'Yasuo',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Yasuo_Mobile.TFT_Set10.tex',
    stats: {
      armor: 40,
      attackSpeed: 0.75,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 45,
      hp: 600,
      initialMana: 0,
      magicResist: 40,
      mana: 50,
      range: 1,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Yasuo/HUD/TFT10_Yasuo_Square.TFT_Set10.tex',
    traits: {
      ko: ['True Damage', '이단아'],
      en: ['True Damage', 'Edgelord'],
    },
  },
  TFT10_Yone: {
    ability: {
      desc: {
        ko: '전투가 끝날 때까지 이동 속도와 <TFTBonus>@StackingOmnivamp@%(%i:scaleAP%)</TFTBonus>의 <TFTKeyword>모든 피해 흡혈</TFTKeyword>을 얻습니다. 이 효과는 중첩됩니다. 두 번 베기 공격을 날려 원뿔 범위의 적에게 각각 <physicalDamage>@ModifiedMagicDamage@(%i:scaleAD%)</physicalDamage>의 물리 피해를 입힙니다.<br><br><rules><tftbold>모든 피해 흡혈:</tftbold> 입힌 피해량의 일부만큼 체력을 회복합니다.</rules><br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: 'Gain stacking Move Speed and <TFTBonus>@StackingOmnivamp@%&nbsp;(%i:scaleAP%)</TFTBonus> <TFTKeyword>Omnivamp</TFTKeyword> for the rest of combat. Slash twice, dealing <physicalDamage>@ModifiedMagicDamage@&nbsp;(%i:scaleAD%)</physicalDamage> physical damage to enemies in a cone each&nbsp;time.<br><br><rules><tftbold>Omnivamp:</tftbold> Heal for percentage of damage dealt</rules><br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Yone/HUD/Icons2D/TFT10_YoneW.TFT_Set10.dds',
      name: {
        ko: '급살',
        en: 'Pop Off',
      },
      variables: [
        {
          name: 'Omnivamp',
          value: [
            0.07999999821186066, 0.07999999821186066, 0.07999999821186066, 0.07999999821186066,
            0.07999999821186066, 0.07999999821186066, 0.07999999821186066,
          ],
        },
        {
          name: 'ADRatio',
          value: [
            1.7999999523162842, 2, 2, 2.049999952316284, 1.7999999523162842, 1.7999999523162842,
            1.7999999523162842,
          ],
        },
        {
          name: 'HealPercent',
          value: [
            0.20000000298023224, 0.20000000298023224, 0.20000000298023224, 0.20000000298023224,
            0.20000000298023224, 0.20000000298023224, 0.20000000298023224,
          ],
        },
        {
          name: 'MovementSpeedPerCast',
          value: [150, 150, 150, 150, 150, 150, 150],
        },
        {
          name: 'HeadlinerHealth',
          value: [200, 200, 200, 200, 200, 200, 200],
        },
        {
          name: 'HeadlinerAttackDamage',
          value: [
            0.20000000298023224, 0.20000000298023224, 0.20000000298023224, 0.20000000298023224,
            0.20000000298023224, 0.20000000298023224, 0.20000000298023224,
          ],
        },
        {
          name: 'HeadlinerAttackSpeed',
          value: null,
        },
      ],
    },
    apiName: 'TFT10_Yone',
    characterName: 'TFT10_Yone',
    cost: 3,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Yone.TFT_Set10.tex',
    name: {
      ko: '요네',
      en: 'Yone',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Yone_Mobile.TFT_Set10.tex',
    stats: {
      armor: 40,
      attackSpeed: 0.800000011920929,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 65,
      hp: 750,
      initialMana: 0,
      magicResist: 40,
      mana: 70,
      range: 1,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Yone/HUD/TFT10_Yone_Square.TFT_Set10.tex',
    traits: {
      ko: ['Heartsteel', '이단아', '스테이지 다이버'],
      en: ['Heartsteel', 'Edgelord', 'Crowd Diver'],
    },
  },
  TFT10_Yorick: {
    ability: {
      desc: {
        ko: '헤드뱅잉 망령 <scaleLevel>@ZOMBIE_COUNT@</scaleLevel>마리를 소환하여 전장 중앙으로 보냅니다. 각 망령은 3회 공격에 걸쳐 <physicalDamage>@TOTAL_DAMAGE@(%i:scaleAD%)</physicalDamage>의 물리 피해를 입힙니다. 망령이 피해를 입히면 @ArmorShredDuration@초 동안 @ArmorShredPercent*100@%의 <TFTKeyword>파열</TFTKeyword>을 적용합니다.<br><br>스킬을 2번째로 사용할 때마다 <scaleHealth>@BigZombieModifiedHealth@(%i:scaleAP%)</scaleHealth>의 체력을 지녔으며 공격 시 <physicalDamage>@BigZombieModifiedDamage@(%i:scaleAD%)</physicalDamage>의 물리 피해를 입히는 거대 망령을 추가로 소환합니다.<br><br><tftitemrules><tftbold>파열:</tftbold> 방어력이 20%만큼 감소합니다.</tftitemrules><br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@<br><br><br>',
        en: "Summon <scaleLevel>@ZOMBIE_COUNT@</scaleLevel> headbanging ghouls that pile towards the center of the board. Each deals <physicalDamage>@TOTAL_DAMAGE@&nbsp;(%i:scaleAD%)</physicalDamage> physical damage over three attacks. Ghouls' damage @ArmorShredPercent*100@% <TFTKeyword>Sunders</TFTKeyword> for @ArmorShredDuration@ seconds.<br><br>Every other cast also summons a BIG ghoul with <scaleHealth>@BigZombieModifiedHealth@&nbsp;(%i:scaleAP%)</scaleHealth> Health that deals <physicalDamage>@BigZombieModifiedDamage@&nbsp;(%i:scaleAD%)</physicalDamage> physical damage each attack.<br><br><tftitemrules><tftbold>Sunder:</tftbold> Reduce Armor by&nbsp;20%</tftitemrules><br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@<br><br><br>",
      },
      icon: 'ASSETS/Characters/TFT10_Yorick/HUD/Icons2D/TFT10_Yorick_P.TFT_Set10.dds',
      name: {
        ko: '구덩이로 들어가! (ft. 망령)',
        en: 'GET IN THIS PIT! (ft. Ghouls)',
      },
      variables: [
        {
          name: 'ZOMBIE_COUNT',
          value: [0, 9, 10, 25, 0, 0, 0],
        },
        {
          name: 'AD_RATIO',
          value: [0, 1.5, 1.5, 10, 0, 0, 0],
        },
        {
          name: 'BigZombieHealth',
          value: [1000, 900, 1750, 9001, 1000, 1000, 1000],
        },
        {
          name: 'BigZombieADRatio',
          value: [
            1.2000000476837158, 2.5, 2.5, 20, 1.2000000476837158, 1.2000000476837158,
            1.2000000476837158,
          ],
        },
        {
          name: 'CastsForBigGhoul',
          value: [2, 2, 2, 1, 2, 2, 2],
        },
        {
          name: 'HeadlinerHealth',
          value: [50, 50, 50, 50, 50, 50, 50],
        },
        {
          name: 'ArmorShredPercent',
          value: [
            0.20000000298023224, 0.20000000298023224, 0.20000000298023224, 0.20000000298023224,
            0.20000000298023224, 0.20000000298023224, 0.20000000298023224,
          ],
        },
        {
          name: 'ArmorShredDuration',
          value: [3, 3, 3, 3, 3, 3, 3],
        },
        {
          name: 'HeadlinerZombieSize',
          value: [
            0.30000001192092896, 0.30000001192092896, 0.30000001192092896, 0.30000001192092896,
            0.30000001192092896, 0.30000001192092896, 0.30000001192092896,
          ],
        },
        {
          name: 'HeadlinerZombieDamage',
          value: [
            0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612,
            0.10000000149011612, 0.10000000149011612, 0.10000000149011612,
          ],
        },
        {
          name: 'HeadlinerZombieCount',
          value: [2, 2, 2, 2, 2, 2, 2],
        },
      ],
    },
    apiName: 'TFT10_Yorick',
    characterName: 'TFT10_Yorick',
    cost: 5,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Yorick.TFT_Set10.tex',
    name: {
      ko: '요릭',
      en: 'Yorick',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Yorick_Mobile.TFT_Set10.tex',
    stats: {
      armor: 60,
      attackSpeed: 0.800000011920929,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 88,
      hp: 1050,
      initialMana: 60,
      magicResist: 60,
      mana: 110,
      range: 1,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Yorick/HUD/TFT10_Yorick_Square.TFT_Set10.tex',
    traits: {
      ko: ['펜타킬', '춤꾼', '수호자'],
      en: ['Pentakill', 'Mosher', 'Guardian'],
    },
  },
  TFT10_Zac: {
    ability: {
      desc: {
        ko: '주변 적에게 @BounceCount@회 튕깁니다. 튕길 때마다 <magicDamage>@ModifiedMagicDamage@(%i:scaleAP%)</magicDamage>의 마법 피해를 입히고 @stunduration@초 동안 기절시킵니다. 추가로 자크의 체력을 <scaleHealth>@ModifiedHealing@(%i:scaleAP%)</scaleHealth>만큼 회복시킵니다.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: 'Bounce @BounceCount@ times on nearby enemies. Each bounce deals <magicDamage>@ModifiedMagicDamage@&nbsp;(%i:scaleAP%)</magicDamage> magic damage, Stuns for @stunduration@ second, and heals Zac for&nbsp;<scaleHealth>@ModifiedHealing@&nbsp;(%i:scaleAP%)</scaleHealth> Health.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Zac/HUD/Icons2D/TFT10_ZacR.TFT_Set10.dds',
      name: {
        ko: '바운스!',
        en: "Let's Bounce!",
      },
      variables: [
        {
          name: 'MagicDamage',
          value: [0, 120, 180, 1200, 0, 0, 0],
        },
        {
          name: 'StunDuration',
          value: [1, 1, 1, 1, 1, 1, 1],
        },
        {
          name: 'BaseHeal',
          value: [0, 180, 240, 800, 0.6000000238418579, 0.6000000238418579, 0.6000000238418579],
        },
        {
          name: 'BounceCount',
          value: [3, 3, 3, 3, 3, 3, 3],
        },
        {
          name: 'HeadlinerHealth',
          value: [150, 150, 150, 150, 150, 150, 150],
        },
        {
          name: 'HeadlinerAbilityPower',
          value: [10, 10, 10, 10, 10, 10, 10],
        },
      ],
    },
    apiName: 'TFT10_Zac',
    characterName: 'TFT10_Zac',
    cost: 4,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Zac.TFT_Set10.tex',
    name: {
      ko: '자크',
      en: 'Zac',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Zac_Mobile.TFT_Set10.tex',
    stats: {
      armor: 60,
      attackSpeed: 0.6499999761581421,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 50,
      hp: 1000,
      initialMana: 60,
      magicResist: 60,
      mana: 160,
      range: 1,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Zac/HUD/TFT10_Zac_Square.TFT_Set10.tex',
    traits: {
      ko: ['EDM', '난동꾼'],
      en: ['EDM', 'Bruiser'],
    },
  },
  TFT10_Zed: {
    ability: {
      desc: {
        ko: '현재 대상에게 표식을 남기고 @Duration@초 동안 대상으로 지정할 수 없는 그림자를 생성합니다. 그림자는 <TFTBonus>@FinalAttackDamage@(%i:scaleAD%)</TFTBonus>의 공격력을 지닙니다. 짧은 시간이 지나거나 표식이 남은 적의 체력이 @ModifiedHealthThreshold@% (%i:scaleAP%) 아래로 떨어지면 <physicalDamage>@TotalMarkDamage@(%i:scaleAD%)</physicalDamage>의 추가 물리 피해를 입힙니다.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@<br><br>',
        en: 'Mark the current target and spawn an untargetable Shadow with <TFTBonus>@FinalAttackDamage@&nbsp;(%i:scaleAD%)</TFTBonus> Attack Damage for @Duration@ seconds. After a brief delay or when the marked enemy falls below @ModifiedHealthThreshold@%&nbsp;(%i:scaleAP%) health, deal an additional <physicalDamage>@TotalMarkDamage@&nbsp;(%i:scaleAD%)</physicalDamage> physical&nbsp;damage.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@<br><br>',
      },
      icon: 'ASSETS/Characters/TFT10_Zed/HUD/Icons2D/shadowninja_w.TFT_Set10.dds',
      name: {
        ko: '그림자 춤',
        en: 'Shadow Dance',
      },
      variables: [
        {
          name: 'ADPercent',
          value: [0, 1.75, 1.75, 3.5, 10, 10, 10],
        },
        {
          name: 'Duration',
          value: [4, 4, 4, 4, 4, 4, 4],
        },
        {
          name: 'MarkDelayTime',
          value: [
            0, 1.100000023841858, 1.100000023841858, 1.100000023841858, 1.100000023841858,
            1.100000023841858, 1.100000023841858,
          ],
        },
        {
          name: 'MarkDamageADRatio',
          value: [0, 3.5, 3.5, 7, 3.5, 3.5, 3.5],
        },
        {
          name: 'HealthThreshold',
          value: [0, 15, 15, 15, 15, 15, 15],
        },
        {
          name: 'HeadlinerHealth',
          value: [100, 100, 100, 100, 100, 100, 100],
        },
        {
          name: 'HeadlinerAttackDamage',
          value: null,
        },
        {
          name: 'HeadlinerShadowAD',
          value: [
            0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612,
            0.10000000149011612, 0.10000000149011612, 0.10000000149011612,
          ],
        },
        {
          name: 'HeadlinerShadowAS',
          value: [
            0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612,
            0.10000000149011612, 0.10000000149011612, 0.10000000149011612,
          ],
        },
      ],
    },
    apiName: 'TFT10_Zed',
    characterName: 'TFT10_Zed',
    cost: 4,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Zed.TFT_Set10.tex',
    name: {
      ko: '제드',
      en: 'Zed',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Zed_Mobile.TFT_Set10.tex',
    stats: {
      armor: 60,
      attackSpeed: 0.949999988079071,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 75,
      hp: 1000,
      initialMana: 30,
      magicResist: 60,
      mana: 50,
      range: 1,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Zed/HUD/TFT10_Zed_Square.TFT_Set10.tex',
    traits: {
      ko: ['EDM', '스테이지 다이버'],
      en: ['EDM', 'Crowd Diver'],
    },
  },
  TFT10_Ziggs: {
    ability: {
      desc: {
        ko: '현재 대상에게 폭탄을 던져 <magicDamage>@ModifiedMagicDamage@(%i:scaleAP%)</magicDamage>의 마법 피해를 입힙니다. 폭탄은 <TFTBonus>@TFTUnitProperty.:TFT10_ZiggsSmallBombs@</TFTBonus>개의 소형 폭탄으로 분열하여 대상에게 @ShredDuration@초 동안 <TFTKeyword>파쇄</TFTKeyword>를 부여하고 <magicDamage>@ModifiedBombDamage@(%i:scaleAP%)</magicDamage>의 마법 피해를 입힙니다. 스킬을 사용할 때마다 소형 폭탄의 개수가 <TFTBonus>@NumToIncreasePerCast@</TFTBonus>개 증가합니다.<br><br><rules><tftbold>파쇄:</tftbold> 마법 저항력이 30% 감소합니다.</rules><br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: 'Throw a bomb at the current target that deals <magicDamage>@ModifiedMagicDamage@&nbsp;(%i:scaleAP%)</magicDamage> magic damage. It splits into <TFTBonus>@TFTUnitProperty.:TFT10_ZiggsSmallBombs@</TFTBonus> smaller bombs that <TFTKeyword>Shred</TFTKeyword> their target for @ShredDuration@ seconds and deal <magicDamage>@ModifiedBombDamage@&nbsp;(%i:scaleAP%)</magicDamage> magic damage. Each cast increases the number of smaller bombs by&nbsp;<TFTBonus>@NumToIncreasePerCast@</TFTBonus>. <br><br><rules><tftbold>Shred:</tftbold> Reduce Magic Resist by 30%</rules><br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Ziggs/HUD/Icons2D/TFT10_ZiggsQ.TFT_Set10.dds',
      name: {
        ko: '혼돈 이론',
        en: 'Chaos Theory',
      },
      variables: [
        {
          name: 'TargetDamage',
          value: [0, 360, 540, 4000, 0, 0, 0],
        },
        {
          name: 'BombDamage',
          value: [40, 70, 105, 400, 40, 40, 40],
        },
        {
          name: 'StartingBombs',
          value: [8, 5, 5, 35, 8, 8, 8],
        },
        {
          name: 'ShredDuration',
          value: [4, 4, 4, 4, 4, 4, 4],
        },
        {
          name: 'NumToIncreasePerCast',
          value: [2, 2, 2, 2, 2, 2, 2],
        },
        {
          name: 'HeadlinerAbilityPower',
          value: [5, 5, 5, 5, 5, 5, 5],
        },
        {
          name: 'HeadlinerManaReduction',
          value: [10, 10, 10, 10, 10, 10, 10],
        },
      ],
    },
    apiName: 'TFT10_Ziggs',
    characterName: 'TFT10_Ziggs',
    cost: 5,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Ziggs.TFT_Set10.tex',
    name: {
      ko: '직스',
      en: 'Ziggs',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Ziggs_Mobile.TFT_Set10.tex',
    stats: {
      armor: 40,
      attackSpeed: 0.800000011920929,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 45,
      hp: 800,
      initialMana: 30,
      magicResist: 40,
      mana: 70,
      range: 4,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Ziggs/HUD/TFT10_Ziggs_Square.TFT_Set10.tex',
    traits: {
      ko: ['하이퍼팝', '현혹술사'],
      en: ['Hyperpop', 'Dazzler'],
    },
  },
  TFT10_MissFortune: {
    ability: {
      desc: {
        ko: '현재 대상에게 <physicalDamage>@PrimaryTotalDamage@(%i:scaleAD%)</physicalDamage>의 물리 피해를 입히고, 그 뒤에 가장 가까운 적에게는 <physicalDamage>@SecondaryTotalDamage@(%i:scaleAD%)</physicalDamage>의 물리 피해를 입힙니다. 둘 중 하나라도 죽으면 @ASDuration@초 동안 공격 속도가 <TFTBonus>@ScaledASBuff@%(%i:scaleAP%)</TFTBonus>만큼 증가합니다.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: 'Deal <physicalDamage>@PrimaryTotalDamage@&nbsp;(%i:scaleAD%)</physicalDamage> physical damage to the current target and <physicalDamage>@SecondaryTotalDamage@&nbsp;(%i:scaleAD%)</physicalDamage> physical damage to the closest enemy behind them. If either die, gain <TFTBonus>@ScaledASBuff@%&nbsp;(%i:scaleAP%)</TFTBonus> Attack Speed for&nbsp;@ASDuration@&nbsp;seconds.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_MissFortune/HUD/Icons2D/TFT10_MissFortune_Q.TFT_Set10.dds',
      name: {
        ko: '두 배 시간',
        en: 'Double Time',
      },
      variables: [
        {
          name: 'PrimaryADRatio',
          value: [
            2.799999952316284, 2.700000047683716, 2.700000047683716, 2.75, 2.799999952316284,
            2.799999952316284, 2.799999952316284,
          ],
        },
        {
          name: 'SecondaryADRatio',
          value: [
            1.7999999523162842, 1.7999999523162842, 1.7999999523162842, 1.7999999523162842,
            1.7999999523162842, 1.7999999523162842, 1.7999999523162842,
          ],
        },
        {
          name: 'HeadlinerAttackDamage',
          value: [0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25],
        },
        {
          name: 'APRatio',
          value: [40, 40, 40, 40, 40, 40, 40],
        },
        {
          name: 'ASDuration',
          value: [4, 4, 4, 4, 4, 4, 4],
        },
      ],
    },
    apiName: 'TFT10_MissFortune',
    characterName: 'TFT10_MissFortune',
    cost: 3,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_MissFortune.TFT_Set10.tex',
    name: {
      ko: '미스 포츈',
      en: 'Miss Fortune',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_MissFortune_Mobile.TFT_Set10.tex',
    stats: {
      armor: 20,
      attackSpeed: 0.75,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 55,
      hp: 650,
      initialMana: 0,
      magicResist: 20,
      mana: 60,
      range: 5,
    },
    tileIcon: 'ASSETS/Characters/TFT10_MissFortune/HUD/TFT10_MissFortune_Square.TFT_Set10.tex',
    traits: {
      ko: ['재즈', '거물'],
      en: ['Jazz', 'Big Shot'],
    },
  },
  TFT10_Olaf: {
    ability: {
      desc: {
        ko: '<spellPassive>기본 지속 효과:</spellPassive> 공격 시 <scaleHealth>@ModifiedHealValue@(%i:scaleAP%)</scaleHealth>의 체력을 회복합니다. 잃은 체력 @PercentMissingHealth@%당 공격 속도가 <TFTBonus>@ModifiedASValue@% (%i:scaleHealth%)</TFTBonus> 증가합니다.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: '<spellPassive>Passive:</spellPassive> Heal <scaleHealth>@ModifiedHealValue@&nbsp;(%i:scaleAP%)</scaleHealth> Health on attack. For every @PercentMissingHealth@% missing Health, gain <TFTBonus>@ModifiedASValue@%&nbsp;(%i:scaleHealth%)</TFTBonus> Attack&nbsp;Speed.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Olaf/HUD/Icons2D/TFT10_Olaf_W.TFT_Set10.dds',
      name: {
        ko: '광전사의 분노',
        en: 'Berserker Rage',
      },
      variables: [
        {
          name: 'BonusAttackSpeed',
          value: [
            0.0012000000569969416, 0.0012000000569969416, 0.0012000000569969416,
            0.0012000000569969416, 0.0012000000569969416, 0.0012000000569969416,
            0.0012000000569969416,
          ],
        },
        {
          name: 'PercentMissingHealth',
          value: [1, 1, 1, 1, 1, 1, 1],
        },
        {
          name: 'HealValue',
          value: [0, 20, 25, 35, 0, 0, 0],
        },
        {
          name: 'HeadlinerHealth',
          value: [75, 75, 75, 75, 75, 75, 75],
        },
        {
          name: 'HeadlinerArmor',
          value: [10, 10, 10, 10, 10, 10, 10],
        },
        {
          name: 'HeadlinerMagicResist',
          value: [10, 10, 10, 10, 10, 10, 10],
        },
      ],
    },
    apiName: 'TFT10_Olaf',
    characterName: 'TFT10_Olaf',
    cost: 1,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Olaf.TFT_Set10.tex',
    name: {
      ko: '올라프',
      en: 'Olaf',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Olaf_Mobile.TFT_Set10.tex',
    stats: {
      armor: 35,
      attackSpeed: 0.6499999761581421,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 50,
      hp: 650,
      initialMana: 0,
      magicResist: 35,
      mana: 0,
      range: 1,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Olaf/HUD/TFT10_Olaf_Square.TFT_Set10.tex',
    traits: {
      ko: ['펜타킬', '난동꾼'],
      en: ['Pentakill', 'Bruiser'],
    },
  },
  TFT10_TahmKench: {
    ability: {
      desc: {
        ko: '<spellPassive>기본 지속 효과:</spellPassive> 피해를 받을 때 받는 피해가 <TFTBonus>@ModifiedDR@ (%i:scaleAP%)</TFTBonus> 감소합니다.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: '<spellPassive>Passive:</spellPassive> Reduce each instance of incoming damage by&nbsp;<TFTBonus>@ModifiedDR@&nbsp;(%i:scaleAP%)</TFTBonus>.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_TahmKench/HUD/Icons2D/TFT10_TahmKenchE.TFT_Set10.dds',
      name: {
        ko: '생가죽',
        en: 'Rawhide',
      },
      variables: [
        {
          name: 'BaseDR',
          value: [15, 12, 15, 25, 75, 75, 75],
        },
        {
          name: 'HeadlinerHealth',
          value: [225, 225, 225, 225, 225, 225, 225],
        },
      ],
    },
    apiName: 'TFT10_TahmKench',
    characterName: 'TFT10_TahmKench',
    cost: 1,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_TahmKench.TFT_Set10.tex',
    name: {
      ko: '탐 켄치',
      en: 'Tahm Kench',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_TahmKench_Mobile.TFT_Set10.tex',
    stats: {
      armor: 35,
      attackSpeed: 0.550000011920929,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 60,
      hp: 650,
      initialMana: 0,
      magicResist: 35,
      mana: 0,
      range: 1,
    },
    tileIcon: 'ASSETS/Characters/TFT10_TahmKench/HUD/TFT10_TahmKench_Square.TFT_Set10.tex',
    traits: {
      ko: ['컨트리', '난동꾼'],
      en: ['Country', 'Bruiser'],
    },
  },
  TFT10_TwistedFate: {
    ability: {
      desc: {
        ko: '현재 대상과 가장 가까운 적 3명에게 <TFTBonus>@ModifiedCardCount@(%i:scaleAS%)</TFTBonus>장의 카드를 나누어 던집니다. 마법 저항력을 @MRShred@만큼 감소시키고 <magicDamage>@ModifiedDamage@(%i:scaleAP%)</magicDamage>의 마법 피해를 입힙니다. <br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: 'Throw <TFTBonus>@ModifiedCardCount@&nbsp;(%i:scaleAS%)</TFTBonus> cards divided between the current target and 3 nearest enemies. They reduce Magic Resist by @MRShred@ and deal <magicDamage>@ModifiedDamage@&nbsp;(%i:scaleAP%)</magicDamage> magic&nbsp;damage. <br><br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_TwistedFate/HUD/Icons2D/Cardmaster_PowerCard.TFT_Set10.dds',
      name: {
        ko: '섞고 던지기',
        en: 'Hustle & Shuffle',
      },
      variables: [
        {
          name: 'BaseDamage',
          value: [0, 50, 75, 225, 0, 0, 0],
        },
        {
          name: 'MRShred',
          value: [1, 1, 1, 1, 1, 1, 1],
        },
        {
          name: 'CardCount',
          value: [21, 21, 21, 21, 21, 21, 21],
        },
        {
          name: 'CardsPerBonusBreakpoint',
          value: [1, 1, 1, 1, 1, 1, 1],
        },
        {
          name: 'BonusASBreakpoint',
          value: [40, 40, 40, 40, 40, 40, 40],
        },
        {
          name: 'HeadlinerAbilityPower',
          value: null,
        },
        {
          name: 'HeadlinerBonusCards',
          value: [3, 3, 3, 3, 3, 3, 3],
        },
        {
          name: 'SimulateLaunchAttackNum',
          value: [16, 16, 16, 16, 16, 16, 16],
        },
      ],
    },
    apiName: 'TFT10_TwistedFate',
    characterName: 'TFT10_TwistedFate',
    cost: 4,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_TwistedFate.TFT_Set10.tex',
    name: {
      ko: '트위스티드 페이트',
      en: 'Twisted Fate',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_TwistedFate_Mobile.TFT_Set10.tex',
    stats: {
      armor: 30,
      attackSpeed: 0.75,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 45,
      hp: 700,
      initialMana: 30,
      magicResist: 30,
      mana: 105,
      range: 5,
    },
    tileIcon: 'ASSETS/Characters/TFT10_TwistedFate/HUD/TFT10_TwistedFate_Square.TFT_Set10.tex',
    traits: {
      ko: ['디스코', '현혹술사'],
      en: ['Disco', 'Dazzler'],
    },
  },
  TFT10_KSante: {
    ability: {
      desc: {
        ko: '방어 태세를 취합니다. @Duration@초 동안 받는 피해가 <TFTBonus>@ModifiedDR@(%i:scaleAP%)</TFTBonus>만큼 감소합니다. 이후 현재 대상에게 <physicalDamage>@TotalDamage@(%i:scaleAD%)</physicalDamage>의 물리 피해를 입힙니다.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: 'Enter a defensive stance, reducing damage taken by <TFTBonus>@ModifiedDR@&nbsp;(%i:scaleAP%)</TFTBonus> for @Duration@ seconds. Afterwards, deal <physicalDamage>@TotalDamage@&nbsp;(%i:scaleAD%)</physicalDamage> physical damage to the current&nbsp;target. <br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_KSante/HUD/Icons2D/Icons_TFT10_KSante_E.TFT_Set10.dds',
      name: {
        ko: '안티 차단',
        en: 'Block the Haters',
      },
      variables: [
        {
          name: 'Duration',
          value: [2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5],
        },
        {
          name: 'BaseDR',
          value: [
            0.30000001192092896, 0.30000001192092896, 0.30000001192092896, 0.30000001192092896,
            0.30000001192092896, 0.30000001192092896, 0.30000001192092896,
          ],
        },
        {
          name: 'DRAPRatio',
          value: [0, 0.20000000298023224, 0.20000000298023224, 0.25, 0, 0, 0],
        },
        {
          name: 'ADRatio',
          value: [7, 7, 7, 7, 7, 7, 7],
        },
        {
          name: 'HeadlinerHealth',
          value: [225, 225, 225, 225, 225, 225, 225],
        },
        {
          name: 'DR_CAP_tooltip_only',
          value: [0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75],
        },
      ],
    },
    apiName: 'TFT10_KSante',
    characterName: 'TFT10_KSante',
    cost: 1,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_KSante.TFT_Set10.tex',
    name: {
      ko: '크산테',
      en: "K'Sante",
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_KSante_Mobile.TFT_Set10.tex',
    stats: {
      armor: 40,
      attackSpeed: 0.6000000238418579,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 50,
      hp: 650,
      initialMana: 0,
      magicResist: 40,
      mana: 60,
      range: 1,
    },
    tileIcon: 'ASSETS/Characters/TFT10_KSante/HUD/TFT10_KSante_Square.TFT_Set10.tex',
    traits: {
      ko: ['Heartsteel', '감시자'],
      en: ['Heartsteel', 'Sentinel'],
    },
  },
  TFT10_Kaisa: {
    ability: {
      desc: {
        ko: '최대 <TFTBonus>@DashRange@</TFTBonus>칸 돌진한 후 현재 대상에게 미사일을 발사합니다. 처음 적중하는 적에게 <physicalDamage>@TooltipDamage@(%i:scaleAD%%i:scaleAP%)</physicalDamage>의 물리 피해를 입힙니다.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: 'Dash up to <TFTBonus>@DashRange@</TFTBonus> hexes and fire a missile at the current target. It deals <physicalDamage>@TooltipDamage@ (%i:scaleAD%%i:scaleAP%)</physicalDamage> physical damage to the first enemy hit.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Kaisa/HUD/Icons2D/TFT10_Kaisa_Q2.TFT_Set10.dds',
      name: {
        ko: '웅장한 사운드',
        en: 'Got the Boom',
      },
      variables: [
        {
          name: 'ADDamage',
          value: [0, 2.5, 2.5, 2.549999952316284, 0, 0, 0],
        },
        {
          name: 'DashRange',
          value: [2, 2, 2, 2, 2, 2, 2],
        },
        {
          name: 'HeadlinerAttackDamage',
          value: [
            0.15000000596046448, 0.15000000596046448, 0.15000000596046448, 0.15000000596046448,
            0.15000000596046448, 0.15000000596046448, 0.15000000596046448,
          ],
        },
        {
          name: 'HeadlinerDashBonus',
          value: [3, 3, 3, 3, 3, 3, 3],
        },
        {
          name: 'HeadlinerBonusRange',
          value: [2, 2, 2, 2, 2, 2, 2],
        },
        {
          name: 'MagicDamage',
          value: [40, 30, 45, 65, 40, 40, 40],
        },
      ],
    },
    apiName: 'TFT10_Kaisa',
    characterName: 'TFT10_Kaisa',
    cost: 2,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Kaisa.TFT_Set10.tex',
    name: {
      ko: '카이사',
      en: "Kai'Sa",
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Kaisa_Mobile.TFT_Set10.tex',
    stats: {
      armor: 20,
      attackSpeed: 0.75,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 55,
      hp: 600,
      initialMana: 0,
      magicResist: 20,
      mana: 30,
      range: 6,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Kaisa/HUD/TFT10_Kaisa_Square.TFT_Set10.tex',
    traits: {
      ko: ['K/DA', '거물'],
      en: ['K/DA', 'Big Shot'],
    },
  },
  TFT10_DiscoBall: {
    ability: {
      desc: {
        ko: '디스코 볼은 디스코 음악을 좋아합니다.',
        en: 'Disco Ball likes disco music.',
      },
      icon: 'ASSETS/Characters/TFT7_JadeStatue/HUD/Icons2D/TFT7_JadeStatue_EyeOfTheStorm.dds',
      name: {
        ko: '디스코 볼',
        en: 'Disco Ball',
      },
      variables: [],
    },
    apiName: 'TFT10_DiscoBall',
    characterName: 'TFT10_DiscoBall',
    cost: 11,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT7_JadeStatue.dds',
    name: {
      ko: '디스코 볼',
      en: 'Disco Ball',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT7_JadeStatue_Mobile.dds',
    stats: {
      armor: 15,
      attackSpeed: 0.6499999761581421,
      critChance: 0.25,
      critMultiplier: 1.2999999523162842,
      damage: null,
      hp: 1,
      initialMana: 0,
      magicResist: 15,
      mana: 0,
      range: 1,
    },
    tileIcon: 'ASSETS/Characters/TFT_ItemUnknown/Skins/Skin0/TFT7_JadeStatue_Square.dds',
    traits: [],
  },
  TFT10_YorickGhoulMelee: {
    ability: {
      desc: {
        ko: '헤드뱅잉 망령 <scaleLevel>@ZOMBIE_COUNT@</scaleLevel>마리를 소환하여 전장 중앙으로 보냅니다. 각 망령은 3회 공격에 걸쳐 <physicalDamage>@TOTAL_DAMAGE@(%i:scaleAD%)</physicalDamage>의 물리 피해를 입힙니다. 망령이 피해를 입히면 @ArmorShredDuration@초 동안 @ArmorShredPercent*100@%의 <TFTKeyword>파열</TFTKeyword>을 적용합니다.<br><br>스킬을 2번째로 사용할 때마다 <scaleHealth>@BigZombieModifiedHealth@(%i:scaleAP%)</scaleHealth>의 체력을 지녔으며 공격 시 <physicalDamage>@BigZombieModifiedDamage@(%i:scaleAD%)</physicalDamage>의 물리 피해를 입히는 거대 망령을 추가로 소환합니다.<br><br><tftitemrules><tftbold>파열:</tftbold> 방어력이 20%만큼 감소합니다.</tftitemrules><br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@<br><br><br>',
        en: "Summon <scaleLevel>@ZOMBIE_COUNT@</scaleLevel> headbanging ghouls that pile towards the center of the board. Each deals <physicalDamage>@TOTAL_DAMAGE@&nbsp;(%i:scaleAD%)</physicalDamage> physical damage over three attacks. Ghouls' damage @ArmorShredPercent*100@% <TFTKeyword>Sunders</TFTKeyword> for @ArmorShredDuration@ seconds.<br><br>Every other cast also summons a BIG ghoul with <scaleHealth>@BigZombieModifiedHealth@&nbsp;(%i:scaleAP%)</scaleHealth> Health that deals <physicalDamage>@BigZombieModifiedDamage@&nbsp;(%i:scaleAD%)</physicalDamage> physical damage each attack.<br><br><tftitemrules><tftbold>Sunder:</tftbold> Reduce Armor by&nbsp;20%</tftitemrules><br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@<br><br><br>",
      },
      icon: 'ASSETS/Characters/TFT10_Yorick/HUD/Icons2D/TFT10_Yorick_P.TFT_Set10.dds',
      name: {
        ko: '구덩이로 들어가! (ft. 망령)',
        en: 'GET IN THIS PIT! (ft. Ghouls)',
      },
      variables: [],
    },
    apiName: 'TFT10_YorickGhoulMelee',
    characterName: 'TFT10_YorickGhoulMelee',
    cost: 11,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Yorick.TFT_Set10.tex',
    name: {
      ko: '요릭',
      en: 'Yorick',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Yorick_Mobile.TFT_Set10.tex',
    stats: {
      armor: 50,
      attackSpeed: 0.6499999761581421,
      critChance: null,
      critMultiplier: 1.399999976158142,
      damage: null,
      hp: null,
      initialMana: 0,
      magicResist: 50,
      mana: 0,
      range: 1,
    },
    tileIcon: 'ASSETS/Characters/TFT10_YorickGhoulMelee/HUD/Walker_Square.TFT_Set10.dds',
    traits: {
      ko: ['펜타킬'],
      en: ['Pentakill'],
    },
  },
  TFT10_LuluPolymorph: {
    ability: {
      desc: {
        ko: null,
        en: null,
      },
      icon: null,
      name: {
        ko: null,
        en: null,
      },
      variables: [],
    },
    apiName: 'TFT10_LuluPolymorph',
    characterName: 'TFT10_LuluPolymorph',
    cost: 11,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT_Template.dds',
    name: {
      ko: '변이된 생물',
      en: 'LuluPolymorphCritter',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT_Template_Mobile.dds',
    stats: {
      armor: null,
      attackSpeed: 0.800000011920929,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: null,
      hp: null,
      initialMana: 0,
      magicResist: 20,
      mana: 100,
      range: 1,
    },
    tileIcon: 'ASSETS/Characters/TFT_ItemUnknown/Skins/Skin0/TFT_Item_Unknown.dds',
    traits: {
      ko: [],
      en: [],
    },
  },
  TFT10_IllaoiMinion: {
    ability: {
      desc: {
        ko: null,
        en: null,
      },
      icon: 'ASSETS/Characters/TFT10_Illaoi/HUD/Icons2D/TFT10_Illaoi_P.TFT_Set10.dds',
      name: {
        ko: null,
        en: null,
      },
      variables: [],
    },
    apiName: 'TFT10_IllaoiMinion',
    characterName: 'TFT10_IllaoiMinion',
    cost: 9,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_IllaoiMinion.TFT_Set10.tex',
    name: {
      ko: '촉수',
      en: 'Tentacle',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_IllaoiMinion_Mobile.TFT_Set10.tex',
    stats: {
      armor: 30,
      attackSpeed: 0.5,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 0,
      hp: 500,
      initialMana: 0,
      magicResist: 30,
      mana: 0,
      range: 3,
    },
    tileIcon: 'ASSETS/Characters/TFT10_IllaoiMinion/HUD/TFT10_IllaoiMinion_Square.TFT_Set10.tex',
    traits: {
      ko: [],
      en: [],
    },
  },
  TFT10_AkaliTrueDamage: {
    ability: {
      desc: {
        ko: '가장 가까운 3칸 내의 적 세 명에게 <physicalDamage>@TOTAL_DAMAGE@(%i:scaleAD%)</physicalDamage>의 물리 피해를 세 번 나누어 입힙니다. 세 번의 공격 후 살아남은 적 하나당 <TFTBonus>@TOTAL_MANA_REFUND@(%i:scaleAP%)</TFTBonus>의 마나를 돌려받습니다.<br><br><spellActive enabled=TFT10_BlingActive alternate=rules>반짝반짝 보너스: 삼연타격으로 입힌 피해의 <scaleHealth><ShowIfNot.TFT10_BlingActive>@TFTUnitProperty.:TFT10_AkaliOmnivamp@%</ShowIfNot.TFT10_BlingActive><ShowIf.TFT10_BlingActive>@TFTUnitProperty.:TFT10_AkaliOmnivamp@%</ShowIf.TFT10_BlingActive></scaleHealth>만큼 체력을 회복합니다.</spellActive><br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: 'Deal <physicalDamage>@TOTAL_DAMAGE@&nbsp;(%i:scaleAD%)</physicalDamage> physical damage three times split between the three closest enemies within three hexes. For each enemy that survives all three waves, refund <TFTBonus>@TOTAL_MANA_REFUND@&nbsp;(%i:scaleAP%)</TFTBonus> Mana.<br><br><spellActive enabled=TFT10_BlingActive alternate=rules>Bling Bonus: Heal for <scaleHealth><ShowIfNot.TFT10_BlingActive>@TFTUnitProperty.:TFT10_AkaliOmnivamp@%</ShowIfNot.TFT10_BlingActive><ShowIf.TFT10_BlingActive>@TFTUnitProperty.:TFT10_AkaliOmnivamp@%</ShowIf.TFT10_BlingActive></scaleHealth> of the damage dealt with Three Point&nbsp;Strike.</spellActive><br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
      },
      icon: 'ASSETS/Characters/TFT10_Akali_TrueDamage/HUD/Icons2D/TFT10_Akali_TrueDamage_Q2.TFT_Set10.dds',
      name: {
        ko: '삼연타격',
        en: 'Three Point Strike',
      },
      variables: [
        {
          name: 'BASE_DAMAGE',
          value: [0, 2.5, 2.5, 5, 0, 0, 0],
        },
        {
          name: 'KUNAI_BASE_COUNT',
          value: [18, 18, 18, 27, 18, 18, 18],
        },
        {
          name: 'BLING_HEAL_PERCENT',
          value: [20, 20, 20, 20, 20, 20, 20],
        },
        {
          name: 'BLING_HEAL_PERCENT_EMPOWERED',
          value: [40, 40, 40, 40, 40, 40, 40],
        },
        {
          name: 'HeadlinerHealth',
          value: [100, 100, 100, 100, 100, 100, 100],
        },
        {
          name: 'HeadlinerAttackSpeed',
          value: [
            0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612,
            0.10000000149011612, 0.10000000149011612, 0.10000000149011612,
          ],
        },
        {
          name: 'MANA_REFUND',
          value: [5, 12, 12, 20, 5, 5, 5],
        },
      ],
    },
    apiName: 'TFT10_AkaliTrueDamage',
    characterName: 'TFT10_AkaliTrueDamage',
    cost: 4,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Akali_TrueDamage.TFT_Set10.tex',
    name: {
      ko: '아칼리',
      en: 'Akali',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Akali_TrueDamage_Mobile.TFT_Set10.tex',
    stats: {
      armor: 65,
      attackSpeed: 0.8500000238418579,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 70,
      hp: 1000,
      initialMana: 0,
      magicResist: 65,
      mana: 60,
      range: 1,
    },
    tileIcon:
      'ASSETS/Characters/TFT10_Akali_TrueDamage/HUD/TFT10_Akali_TrueDamage_Square.TFT_Set10.tex',
    traits: {
      ko: ['True Damage', '처형자', '빅히트'],
      en: ['True Damage', 'Executioner', 'Breakout'],
    },
  },
  TFT10_DesperadoProp: {
    ability: {
      desc: {
        ko: null,
        en: null,
      },
      icon: null,
      name: {
        ko: null,
        en: null,
      },
      variables: [],
    },
    apiName: 'TFT10_DesperadoProp',
    characterName: 'TFT10_DesperadoProp',
    cost: 11,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT_Template.dds',
    name: {
      ko: '시야 와드',
      en: 'SightWard',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT_Template_Mobile.dds',
    stats: {
      armor: null,
      attackSpeed: 0.800000011920929,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: null,
      hp: null,
      initialMana: 0,
      magicResist: 20,
      mana: 100,
      range: 1,
    },
    tileIcon: 'ASSETS/Characters/TFT_ItemUnknown/Skins/Skin0/TFT_Item_Unknown.dds',
    traits: {
      ko: [],
      en: [],
    },
  },
  TFT10_CountryHecarim: {
    ability: {
      desc: {
        ko: '헤카림이 대상에게 돌진하는 유령 기수를 소환해 @ModifiedDamage@의 마법 피해를 입히고 적을 @StunDuration@초 동안 기절시킵니다.',
        en: 'Hecarim summons spectral riders that charge through his target, dealing @ModifiedDamage@ magic damage and stunning enemies hit for @StunDuration@ seconds.',
      },
      icon: 'ASSETS/Characters/Hecarim/HUD/Icons2D/Hecarim_OnslaughtofShadows.dds',
      name: {
        ko: '그림자의 맹습',
        en: 'Onslaught of Shadows',
      },
      variables: [
        {
          name: 'AttackSpeed',
          value: [
            0.20000000298023224, 0.20000000298023224, 0.20000000298023224, 0.20000000298023224,
            0.20000000298023224, 0.20000000298023224, 0.20000000298023224,
          ],
        },
        {
          name: 'ADRatio',
          value: [2, 2, 2, 2, 2, 2, 2],
        },
      ],
    },
    apiName: 'TFT10_CountryHecarim',
    characterName: 'TFT10_CountryHecarim',
    cost: 11,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_CountryHecarim.TFT_Set10.tex',
    name: {
      ko: '공포마',
      en: 'The Dreadsteed',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_CountryHecarim_Mobile.TFT_Set10.tex',
    stats: {
      armor: 60,
      attackSpeed: 0.699999988079071,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 40,
      hp: 425,
      initialMana: 50,
      magicResist: 60,
      mana: 60,
      range: 1,
    },
    tileIcon:
      'ASSETS/Characters/TFT10_CountryHecarim/HUD/TFT10_CountryHecarim_Square.TFT_Set10.tex',
    traits: {
      ko: [],
      en: [],
    },
  },
  TFT10_PBJProp: {
    ability: {
      desc: {
        ko: null,
        en: null,
      },
      icon: null,
      name: {
        ko: null,
        en: null,
      },
      variables: [
        {
          name: 'RoundsToHatch',
          value: [2, 2, 2, 2, 2, 2, 2],
        },
      ],
    },
    apiName: 'TFT10_PBJProp',
    characterName: 'TFT10_PBJProp',
    cost: 11,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT_Template.dds',
    name: {
      ko: '시야 와드',
      en: 'SightWard',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT_Template_Mobile.dds',
    stats: {
      armor: null,
      attackSpeed: 0.800000011920929,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: null,
      hp: null,
      initialMana: 0,
      magicResist: 20,
      mana: 100,
      range: 1,
    },
    tileIcon: 'ASSETS/Characters/TFT_ItemUnknown/Skins/Skin0/TFT_Item_Unknown.dds',
    traits: {
      ko: [],
      en: [],
    },
  },
  TFT10_Garen: {
    ability: {
      desc: {
        ko: '최대 체력이 <scaleHealth>@ModifiedMaxHealthHealing@(%i:scaleAP%)</scaleHealth>만큼 증가합니다. 가렌의 다음 공격이 <physicalDamage>@BaseDamage@(%i:scaleAD%%i:scaleHealth%)</physicalDamage>의 물리 피해를 입힙니다.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@',
        en: "Gain <scaleHealth>@ModifiedMaxHealthHealing@&nbsp;(%i:scaleAP%)</scaleHealth> max Health. Garen's next attack deals <physicalDamage>@BaseDamage@&nbsp;(%i:scaleAD%%i:scaleHealth%)</physicalDamage> physical&nbsp;damage.<br><br>@TFTUnitProperty.:TFT10_Headliner_TRA@",
      },
      icon: 'ASSETS/Characters/Garen/HUD/Icons2D/Garen_Passive.dds',
      name: {
        ko: '능력 강화!',
        en: 'Power-Up!',
      },
      variables: [
        {
          name: 'PercentHealthDamage',
          value: [
            0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612,
            0.10000000149011612, 0.10000000149011612, 0.10000000149011612,
          ],
        },
        {
          name: 'PercentMaxHealthHealing',
          value: [
            0.10000000149011612, 0.10000000149011612, 0.10000000149011612, 0.10000000149011612,
            0.10000000149011612, 0.10000000149011612, 0.10000000149011612,
          ],
        },
        {
          name: 'PercentAD',
          value: [
            1.600000023841858, 1.600000023841858, 1.600000023841858, 1.600000023841858,
            1.600000023841858, 1.600000023841858, 1.600000023841858,
          ],
        },
        {
          name: 'HeadlinerHealth',
          value: [400, 400, 400, 400, 400, 400, 400],
        },
        {
          name: 'MaxHealthAPScalar',
          value: [150, 170, 190, 210, 150, 150, 150],
        },
      ],
    },
    apiName: 'TFT10_Garen',
    characterName: 'TFT10_Garen',
    cost: 2,
    icon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Garen.TFT_Set10.tex',
    name: {
      ko: '가렌',
      en: 'Garen',
    },
    squareIcon: 'ASSETS/UX/TFT/ChampionSplashes/TFT10_Garen_Mobile.TFT_Set10.tex',
    stats: {
      armor: 45,
      attackSpeed: 0.699999988079071,
      critChance: 0.25,
      critMultiplier: 1.399999976158142,
      damage: 55,
      hp: 750,
      initialMana: 40,
      magicResist: 45,
      mana: 90,
      range: 1,
    },
    tileIcon: 'ASSETS/Characters/TFT10_Garen/HUD/TFT10_Garen_Square.TFT_Set10.dds',
    traits: {
      ko: ['8비트', '감시자'],
      en: ['8-bit', 'Sentinel'],
    },
  },
};

export type ChampionName_10 = Split<keyof typeof champions_season_10, '_'>[1];
export type ChampionData_10 = DeepNullable<(typeof champions_season_10)['TFT10_Ahri']>;
