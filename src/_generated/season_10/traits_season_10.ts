import { DeepNullable, Split } from '../../types/utilType';

export const traits_season_10 = {
  "Set10_Emo": {
    "apiName": "Set10_Emo",
    "desc": {
      "ko": "이모코어 챔피언의 스킬 마나 소모량이 감소하고 아군 챔피언이 죽을 때마다 마나를 얻습니다.<br><br><row>(@MinUnits@) @InitialMana@% 감소, @StackingMana@ %i:scaleMana% 획득</row><br><row>(@MinUnits@) @InitialMana@% 감소, @StackingMana@ %i:scaleMana% 획득</row><br><row>(@MinUnits@) @BonusAP@ %i:scaleAP% @InitialMana@% 감소, @StackingMana@ %i:scaleMana% 획득 </row>",
      "en": "Emo champions' Abilities cost less Mana to cast, and they gain Mana whenever an allied champion dies.<br><br><row>(@MinUnits@) @InitialMana@%&nbsp;less, gain @StackingMana@&nbsp;%i:scaleMana%</row><br><row>(@MinUnits@) @InitialMana@%&nbsp;less, gain @StackingMana@&nbsp;%i:scaleMana%</row><br><row>(@MinUnits@) @BonusAP@&nbsp;%i:scaleAP%; @InitialMana@% less, gain @StackingMana@&nbsp;%i:scaleMana% </row>"
    },
    "effects": [
      {
        "maxUnits": 3,
        "minUnits": 2,
        "style": 1,
        "variables": {
          "{d5032a3e}": 10,
          "{fbc36e44}": 20
        }
      },
      {
        "maxUnits": 5,
        "minUnits": 4,
        "style": 4,
        "variables": {
          "{d5032a3e}": 20,
          "{fbc36e44}": 25
        }
      },
      {
        "maxUnits": 25000,
        "minUnits": 6,
        "style": 4,
        "variables": {
          "BonusAP": 20,
          "{d5032a3e}": 25,
          "{fbc36e44}": 30
        }
      }
    ],
    "icon": "ASSETS/UX/TraitIcons/Trait_Icon_10_BigSad.TFT_Set10.tex",
    "name": {
      "ko": "이모코어",
      "en": "Emo"
    }
  },
  "Set10_Sentinel": {
    "apiName": "Set10_Sentinel",
    "desc": {
      "ko": "아군이 방어력과 마법 저항력을 얻습니다. 감시자는 효과가 두 배가 됩니다.<br><br><expandRow>(@MinUnits@) @BonusArmor@ %i:scaleArmor%, @BonusArmor@ %i:scaleMR%</expandRow>",
      "en": "Your team gains Armor and Magic Resist. Sentinels gain double.<br><br><expandRow>(@MinUnits@) @BonusArmor@ %i:scaleArmor%, @BonusArmor@ %i:scaleMR%</expandRow>"
    },
    "effects": [
      {
        "maxUnits": 3,
        "minUnits": 2,
        "style": 1,
        "variables": {
          "BonusArmor": 16,
          "{a624ed1a}": 32
        }
      },
      {
        "maxUnits": 5,
        "minUnits": 4,
        "style": 3,
        "variables": {
          "BonusArmor": 35,
          "{a624ed1a}": 70
        }
      },
      {
        "maxUnits": 7,
        "minUnits": 6,
        "style": 4,
        "variables": {
          "BonusArmor": 60,
          "{a624ed1a}": 120
        }
      },
      {
        "maxUnits": 25000,
        "minUnits": 8,
        "style": 4,
        "variables": {
          "BonusArmor": 125,
          "{a624ed1a}": 250
        }
      }
    ],
    "icon": "ASSETS/UX/TraitIcons/Trait_Icon_10_Warden.TFT_Set10.tex",
    "name": {
      "ko": "감시자",
      "en": "Sentinel"
    }
  },
  "Set10_Guardian": {
    "apiName": "Set10_Guardian",
    "desc": {
      "ko": "전투당 1회 체력이 @PercentHealthThreshold@%일 때 가장 가까운 아군과 자신에게 최대 체력의 일정 비율만큼 피해를 흡수하는 보호막을 씌웁니다.<br><br><expandRow>(@MinUnits@) @ShieldPercentAmount@%</expandRow>",
      "en": "Once per combat at @PercentHealthThreshold@% Health, Guardians shield themselves and their closest ally for a percent of their max Health.<br><br><expandRow>(@MinUnits@) @ShieldPercentAmount@%</expandRow>"
    },
    "effects": [
      {
        "maxUnits": 3,
        "minUnits": 2,
        "style": 1,
        "variables": {
          "PercentHealthThreshold": 50,
          "ShieldPercentAmount": 30
        }
      },
      {
        "maxUnits": 5,
        "minUnits": 4,
        "style": 3,
        "variables": {
          "PercentHealthThreshold": 50,
          "ShieldPercentAmount": 50
        }
      },
      {
        "maxUnits": 25000,
        "minUnits": 6,
        "style": 4,
        "variables": {
          "PercentHealthThreshold": 50,
          "ShieldPercentAmount": 70
        }
      }
    ],
    "icon": "ASSETS/UX/TraitIcons/Trait_Icon_7_Guardian.tex",
    "name": {
      "ko": "수호자",
      "en": "Guardian"
    }
  },
  "Set10_TrueDamage": {
    "apiName": "Set10_TrueDamage",
    "desc": {
      "ko": "True Damage 챔피언이 추가 고정 피해를 입힙니다. True Damage 챔피언이 아이템을 보유 중일 경우 스킬에 고유 반짝반짝 보너스가 추가됩니다.<br><br><row>(@MinUnits@) 피해량 <trueDamage>@BONUS_DAMAGE*100@%</trueDamage></row><br><row>(@MinUnits@) 피해량 <trueDamage>@BONUS_DAMAGE*100@%</trueDamage></row><br><row>(@MinUnits@) 피해량 <trueDamage>@BONUS_DAMAGE*100@%</trueDamage></row><br><row>(@MinUnits@) 피해량 <trueDamage>@BONUS_DAMAGE*100@%</trueDamage>. 반짝반짝 보너스가 플래티넘이 됩니다!</row>",
      "en": "True Damage champions deal bonus true damage. If they are holding an item, they gain a unique Bling Bonus for their Ability.<br><br><row>(@MinUnits@) <trueDamage>@BONUS_DAMAGE*100@%</trueDamage> damage</row><br><row>(@MinUnits@) <trueDamage>@BONUS_DAMAGE*100@%</trueDamage> damage</row><br><row>(@MinUnits@) <trueDamage>@BONUS_DAMAGE*100@%</trueDamage> damage</row><br><row>(@MinUnits@) <trueDamage>@BONUS_DAMAGE*100@%</trueDamage> damage, Bling Bonuses go&nbsp;Platinum!</row>"
    },
    "effects": [
      {
        "maxUnits": 3,
        "minUnits": 2,
        "style": 1,
        "variables": {
          "{72ce596c}": 0.15000000596046448,
          "{744944d9}": 1,
          "{d1eaafe0}": "null"
        }
      },
      {
        "maxUnits": 5,
        "minUnits": 4,
        "style": 3,
        "variables": {
          "{72ce596c}": 0.30000001192092896,
          "{744944d9}": 1,
          "{d1eaafe0}": "null"
        }
      },
      {
        "maxUnits": 8,
        "minUnits": 6,
        "style": 4,
        "variables": {
          "{72ce596c}": 0.44999998807907104,
          "{744944d9}": 1,
          "{d1eaafe0}": "null"
        }
      },
      {
        "maxUnits": 25000,
        "minUnits": 9,
        "style": 5,
        "variables": {
          "{72ce596c}": 1.25,
          "{744944d9}": 1,
          "{d1eaafe0}": 1
        }
      }
    ],
    "icon": "ASSETS/UX/TraitIcons/Trait_Icon_10_TrueDamage.TFT_Set10.tex",
    "name": {
      "ko": "True Damage",
      "en": "True Damage"
    }
  },
  "Set10_Country": {
    "apiName": "Set10_Country",
    "desc": {
      "ko": "아군이 @HealthRatio*100@%의 체력을 잃으면 공포마를 불러 아군을 강화합니다. 컨트리 별 레벨 하나당 공포마의 체력과 공격력이 증가합니다.<br><br><row>(@MinUnits@) 공포마</row><br><row>(@MinUnits@) 한밤의 공포마</row><br><row>(@MinUnits@) 지옥의 기원 공포마</row>",
      "en": "When your team loses @HealthRatio*100@% of their Health, call a Dreadsteed that empowers your team. Each Country star&nbsp;level increases the Dreadsteed's Health and Attack&nbsp;Damage.<br><br><row>(@MinUnits@) Dreadsteed</row><br><row>(@MinUnits@) Midnight Dreadsteed</row><br><row>(@MinUnits@) Infernal Invocation Dreadsteed</row>"
    },
    "effects": [
      {
        "maxUnits": 4,
        "minUnits": 3,
        "style": 1,
        "variables": {
          "BonusResists": "null",
          "Level": 1
        }
      },
      {
        "maxUnits": 6,
        "minUnits": 5,
        "style": 4,
        "variables": {
          "BonusResists": 20,
          "Level": 2
        }
      },
      {
        "maxUnits": 25000,
        "minUnits": 7,
        "style": 4,
        "variables": {
          "BonusResists": 60,
          "Level": 3
        }
      }
    ],
    "icon": "ASSETS/UX/TraitIcons/Trait_Icon_10_Country.TFT_Set10.tex",
    "name": {
      "ko": "컨트리",
      "en": "Country"
    }
  },
  "Set10_8Bit": {
    "apiName": "Set10_8Bit",
    "desc": {
      "ko": "아군이 입힌 피해를 기록합니다. 최고 기록을 경신할 때마다 8비트 챔피언의 공격력이 증가합니다.<br><br><row>(@MinUnits@) @AttackDamage@% %i:scaleAD%</row><br><row>(@MinUnits@) @AttackDamage@% %i:scaleAD%</row><br><row>(@MinUnits@) @AttackDamage@% %i:scaleAD% 및 큰 보상을 받는 최종 최고 기록을 얻습니다.</row><br><br>보너스: @TFTUnitProperty.trait:TFT10_Trait_8bit_CurrentBonus@% %i:scaleAD% (@TFTUnitProperty.trait:TFT10_Trait_8bit_StackCount@/@NumHighScores@)",
      "en": "Keep score of your team's damage dealt. For each high score you beat, 8-bit champions gain Attack&nbsp;Damage.<br><br><row>(@MinUnits@) @AttackDamage@% %i:scaleAD%</row><br><row>(@MinUnits@) @AttackDamage@% %i:scaleAD%</row><br><row>(@MinUnits@) @AttackDamage@% %i:scaleAD% and unlock a final high score, that rewards you with a grand prize.</row><br><br>Bonus: @TFTUnitProperty.trait:TFT10_Trait_8bit_CurrentBonus@% %i:scaleAD% (@TFTUnitProperty.trait:TFT10_Trait_8bit_StackCount@/@NumHighScores@)"
    },
    "effects": [
      {
        "maxUnits": 3,
        "minUnits": 2,
        "style": 1,
        "variables": {
          "AttackDamage": 3.5
        }
      },
      {
        "maxUnits": 5,
        "minUnits": 4,
        "style": 4,
        "variables": {
          "AttackDamage": 6
        }
      },
      {
        "maxUnits": 25000,
        "minUnits": 6,
        "style": 4,
        "variables": {
          "AttackDamage": 10
        }
      }
    ],
    "icon": "ASSETS/UX/TraitIcons/Trait_Icon_10_8Bit.TFT_Set10.tex",
    "name": {
      "ko": "8비트",
      "en": "8-bit"
    }
  },
  "Set10_Breakout": {
    "apiName": "Set10_Breakout",
    "desc": {
      "ko": "(고유) 아칼리는 K/DA와 True Damage에 모두 소속되어 있으며, 전장에 있는 챔피언의 특성 수에 따라 소속이 결정됩니다. 아칼리는 취하는 형태에 따라 스킬이 달라집니다. ",
      "en": "(unique) Akali is a member of K/DA or True Damage depending on which trait has more fielded champions. She gains a different Ability depending on which form she takes. "
    },
    "effects": [
      {
        "maxUnits": 25000,
        "minUnits": 1,
        "style": 6,
        "variables": {}
      }
    ],
    "icon": "ASSETS/UX/TraitIcons/Trait_Icon_10_Breakout.TFT_Set10.tex",
    "name": {
      "ko": "빅히트",
      "en": "Breakout"
    }
  },
  "Set10_Spellweaver": {
    "apiName": "Set10_Spellweaver",
    "desc": {
      "ko": "아군이 @TeamwideAP@의 주문력을 얻습니다. 주문술사는 효과가 증가합니다. 주문술사가 스킬을 사용하면 모든 주문술사가 추가 주문력을 얻습니다.<br><br><expandRow>(@MinUnits@) +@AP@ %i:scaleAP%, 사용할 때마다 +@BonusAP@ %i:scaleAP%</expandRow>",
      "en": "Your team gains @TeamwideAP@ Ability Power. Spellweavers gain more, plus extra Ability Power whenever a Spellweaver casts an Ability.<br><br><expandRow>(@MinUnits@) +@AP@ %i:scaleAP%, +@BonusAP@ %i:scaleAP% per cast</expandRow>"
    },
    "effects": [
      {
        "maxUnits": 4,
        "minUnits": 3,
        "style": 1,
        "variables": {
          "AP": 20,
          "BonusAP": 1
        }
      },
      {
        "maxUnits": 6,
        "minUnits": 5,
        "style": 3,
        "variables": {
          "AP": 35,
          "BonusAP": 1
        }
      },
      {
        "maxUnits": 9,
        "minUnits": 7,
        "style": 4,
        "variables": {
          "AP": 60,
          "BonusAP": 2
        }
      },
      {
        "maxUnits": 25000,
        "minUnits": 10,
        "style": 5,
        "variables": {
          "AP": 120,
          "BonusAP": 10
        }
      }
    ],
    "icon": "ASSETS/UX/TraitIcons/Trait_Icon_5_Sorcerer.tex",
    "name": {
      "ko": "주문술사",
      "en": "Spellweaver"
    }
  },
  "Set10_Hyperpop": {
    "apiName": "Set10_Hyperpop",
    "desc": {
      "ko": "하이퍼팝 챔피언이 스킬 사용 시 가장 가까운 아군 @NumOfAllies@명에게 마나를 부여하고 @BuffDuration@초 동안 공격 속도를 증가시킵니다.<br><br><expandRow>(@MinUnits@) @Mana@ %i:scaleMana% 및 @AS*100@% %i:scaleAS%</expandRow>",
      "en": "When Hyperpop champions use an Ability, they grant Mana and @BuffDuration@ seconds of Attack Speed to their @NumOfAllies@ closest allies.<br><br><expandRow>(@MinUnits@) @Mana@ %i:scaleMana% and @AS*100@% %i:scaleAS%</expandRow>"
    },
    "effects": [
      {
        "maxUnits": 1,
        "minUnits": 1,
        "style": 1,
        "variables": {
          "AS": 0.10000000149011612,
          "Mana": 3
        }
      },
      {
        "maxUnits": 2,
        "minUnits": 2,
        "style": 4,
        "variables": {
          "AS": 0.20000000298023224,
          "Mana": 5
        }
      },
      {
        "maxUnits": 3,
        "minUnits": 3,
        "style": 4,
        "variables": {
          "AS": 0.3499999940395355,
          "Mana": 7
        }
      },
      {
        "maxUnits": 25000,
        "minUnits": 4,
        "style": 4,
        "variables": {
          "AS": 0.6000000238418579,
          "Mana": 10
        }
      }
    ],
    "icon": "ASSETS/UX/TraitIcons/Trait_Icon_10_Hyperpop.TFT_Set10.tex",
    "name": {
      "ko": "하이퍼팝",
      "en": "Hyperpop"
    }
  },
  "Set10_Pentakill": {
    "apiName": "Set10_Pentakill",
    "desc": {
      "ko": "펜타킬 챔피언이 받는 피해가 15% 감소하고 추가 피해를 입힙니다. 챔피언을 처치할 때마다 펜타킬 챔피언이 록의 혼을 불태워 추가 피해량이 @Kill_Bonus*100@% 증가합니다.<br><br>@Kill_Count@번째 처치마다 모든 펜타킬 챔피언이 록의 혼을 불태워 아군이 @Attack_Speed*100@%의 공격 속도를 얻습니다.<br><br><row>(@MinUnits@) 추가 피해량 @Bonus_Damage*100@%</row><br><row>(@MinUnits@) 추가 피해량 @Bonus_Damage*100@%</row><br><row>(@MinUnits@) 추가 피해량 @Bonus_Damage*100@%</row><br><row>(@MinUnits@) 피해량 감소 50%, 추가 피해량 @Bonus_Damage*100@%</row>",
      "en": "Pentakill champions reduce incoming damage by 15% and deal bonus damage. For each champon kill, a Pentakill champion rocks out and increases their damage bonus by @Kill_Bonus*100@%.<br><br>On the @Kill_Count@th kill, all Pentakill champions rock out and your team gains @Attack_Speed*100@% Attack Speed.<br><br><row>(@MinUnits@) @Bonus_Damage*100@% bonus damage</row><br><row>(@MinUnits@) @Bonus_Damage*100@% bonus damage</row><br><row>(@MinUnits@) @Bonus_Damage*100@% bonus damage</row><br><row>(@MinUnits@) 50% damage reduction and @Bonus_Damage*100@% bonus damage</row>"
    },
    "effects": [
      {
        "maxUnits": 4,
        "minUnits": 3,
        "style": 1,
        "variables": {
          "{0082059a}": 0.15000000596046448,
          "{72ce596c}": 0.15000000596046448
        }
      },
      {
        "maxUnits": 6,
        "minUnits": 5,
        "style": 3,
        "variables": {
          "{0082059a}": 0.15000000596046448,
          "{72ce596c}": 0.30000001192092896
        }
      },
      {
        "maxUnits": 9,
        "minUnits": 7,
        "style": 4,
        "variables": {
          "{0082059a}": 0.15000000596046448,
          "{72ce596c}": 0.44999998807907104
        }
      },
      {
        "maxUnits": 25000,
        "minUnits": 10,
        "style": 5,
        "variables": {
          "{0082059a}": 0.5,
          "{72ce596c}": 1.100000023841858
        }
      }
    ],
    "icon": "ASSETS/UX/TraitIcons/Trait_Icon_10_Pentakill.TFT_Set10.tex",
    "name": {
      "ko": "펜타킬",
      "en": "Pentakill"
    }
  },
  "Set10_IllBeats": {
    "apiName": "Set10_IllBeats",
    "desc": {
      "ko": "(고유) 일라오이의 별 레벨에 따라 전장에 놓을 수 있는 @1Star@/@2Star@/@3Star@성 영혼 촉수를 획득합니다. 촉수는 일라오이의 추가 방어력 및 마법 저항력을 얻습니다.",
      "en": "(unique) Gain @1Star@/@2Star@/@3Star@ placeable Spirit Tentacles, based on Illaoi's star level. Tentacles gain Illaoi's bonus Armor and Magic Resist."
    },
    "effects": [
      {
        "maxUnits": 1,
        "minUnits": 1,
        "style": 6,
        "variables": {
          "{3710b88a}": 8,
          "{a2ff8b24}": 2,
          "{aea98661}": 2
        }
      }
    ],
    "icon": "ASSETS/UX/TraitIcons/Trait_Icon_10_ILLBeats.TFT_Set10.tex",
    "name": {
      "ko": "일류 비트",
      "en": "ILLBEATS"
    }
  },
  "Set10_TwoSides": {
    "apiName": "Set10_TwoSides",
    "desc": {
      "ko": "(고유) 플레이어 대상 전투에서 승리 시 케인이 그림자 암살자가 됩니다. 그러지 못할 경우에는 라아스트가 됩니다. 케인이 적 챔피언 @NumOfKills@명을 처치할 때마다 형태에 따라 보상을 획득합니다. <br><br><TFTBonus enabled=TFT10_WildcardShadowAssassin alternate=rules>그림자 암살자: @AssassinGoldPerKill@골드</TFTBonus><br><TFTBonus enabled=TFT10_WildcardRhaast alternate=rules>라아스트: 플레이어 체력 @RhaastPlayerHealthPerKill@</TFTBonus>",
      "en": "(unique) If you win player combat, Kayn becomes the Shadow Assassin. If not, he becomes Rhaast. You receive a reward based on his form every time he kills @NumOfKills@ enemy champions. <br><br><TFTBonus enabled=TFT10_WildcardShadowAssassin alternate=rules>Shadow Assassin: @AssassinGoldPerKill@g</TFTBonus><br><TFTBonus enabled=TFT10_WildcardRhaast alternate=rules>Rhaast: @RhaastPlayerHealthPerKill@ player health</TFTBonus>"
    },
    "effects": [
      {
        "maxUnits": 25000,
        "minUnits": 1,
        "style": 6,
        "variables": {
          "{4e56df0d}": 3,
          "{72ccc5a0}": 1,
          "{f18bef8b}": 2
        }
      }
    ],
    "icon": "ASSETS/UX/TraitIcons/Trait_Icon_10_Wildcard.TFT_Set10.tex",
    "name": {
      "ko": "와일드카드",
      "en": "Wildcard"
    }
  },
  "Set10_Edgelord": {
    "apiName": "Set10_Edgelord",
    "desc": {
      "ko": "이단아가 공격 속도를 얻습니다. 대상의 체력이 @HealthRatio*100@% 아래로 떨어지면 증가량이 두 배가 됩니다. 또한 사거리가 1칸인 이단아가 다음 기본 공격 시 돌진하면서 적을 통과합니다. <br><br><expandRow>(@MinUnits@) @AttackSpeed*100@% %i:scaleAS%</expandRow><br>",
      "en": "Edgelords gain Attack Speed, which doubles when their target drops below @HealthRatio*100@% Health. Edgelords with 1-hex range also dash through them on their next&nbsp;attack. <br><br><expandRow>(@MinUnits@) @AttackSpeed*100@% %i:scaleAS%</expandRow><br>"
    },
    "effects": [
      {
        "maxUnits": 4,
        "minUnits": 3,
        "style": 1,
        "variables": {
          "AttackSpeed": 0.30000001192092896
        }
      },
      {
        "maxUnits": 6,
        "minUnits": 5,
        "style": 3,
        "variables": {
          "AttackSpeed": 0.5
        }
      },
      {
        "maxUnits": 25000,
        "minUnits": 7,
        "style": 4,
        "variables": {
          "AttackSpeed": 0.8500000238418579
        }
      }
    ],
    "icon": "ASSETS/UX/TraitIcons/Trait_Icon_10_Edgelord.TFT_Set10.tex",
    "name": {
      "ko": "이단아",
      "en": "Edgelord"
    }
  },
  "Set10_Executioner": {
    "apiName": "Set10_Executioner",
    "desc": {
      "ko": "처형자는 치명타 피해량이 증가하며, 스킬에 치명타가 적용될 수 있습니다. 대상이 잃은 체력에 따라 치명타 확률이 증가합니다.<br><br><expandRow>(@MinUnits@) @CRIT_DAMAGE*100@% %i:scaleCritMult%. 최대 @CRIT_PERCENT*100@% %i:scaleCrit%</expandRow>",
      "en": "Executioner Abilities can critically strike and they gain Critical Strike Damage. Their Critical Strike Chance is increased based on their target's missing Health.<br><br><expandRow>(@MinUnits@) @CRIT_DAMAGE*100@% %i:scaleCritMult%. Up to @CRIT_PERCENT*100@% %i:scaleCrit%</expandRow>"
    },
    "effects": [
      {
        "maxUnits": 3,
        "minUnits": 2,
        "style": 1,
        "variables": {
          "{b22e2df3}": 0.15000000596046448,
          "{c009a26f}": 0.15000000596046448
        }
      },
      {
        "maxUnits": 5,
        "minUnits": 4,
        "style": 3,
        "variables": {
          "{b22e2df3}": 0.30000001192092896,
          "{c009a26f}": 0.3499999940395355
        }
      },
      {
        "maxUnits": 25000,
        "minUnits": 6,
        "style": 4,
        "variables": {
          "{b22e2df3}": 0.44999998807907104,
          "{c009a26f}": 0.550000011920929
        }
      }
    ],
    "icon": "ASSETS/UX/TraitIcons/Trait_Icon_4_Executioner.tex",
    "name": {
      "ko": "처형자",
      "en": "Executioner"
    }
  },
  "Set10_Superfan": {
    "apiName": "Set10_Superfan",
    "desc": {
      "ko": "열혈 팬이 헤드라이너를 강화합니다.<br><br><row> (@MinUnits@) 헤드라이너가 완성 아이템을 획득합니다.</row><br><row> (@MinUnits@) 헤드라이너가 @HealthBonus@의 추가 체력 %i:scaleHealth% 및 @OmnivampBonus*100@%의 모든 피해 흡혈을 얻습니다. <TFTKeyword>모든 피해 흡혈</TFTKeyword></row><br><row> (@MinUnits@) 아이템이 찬란한 아이템으로 강화됩니다.</row><br><br><rules>모든 피해 흡혈: 입힌 피해량의 일부만큼 체력을 회복합니다.</rules>",
      "en": "Superfans improve your Headliner!<br><br><row> (@MinUnits@) Headliner gets a completed item</row><br><row> (@MinUnits@) Headliner gets @HealthBonus@ %i:scaleHealth% and @OmnivampBonus*100@% <TFTKeyword>Omnivamp</TFTKeyword></row><br><row> (@MinUnits@) Item upgrades to radiant</row><br><br><rules>Omnivamp: Heal for percentage of damage dealt</rules>"
    },
    "effects": [
      {
        "maxUnits": 3,
        "minUnits": 3,
        "style": 1,
        "variables": {}
      },
      {
        "maxUnits": 4,
        "minUnits": 4,
        "style": 3,
        "variables": {}
      },
      {
        "maxUnits": 25000,
        "minUnits": 5,
        "style": 4,
        "variables": {}
      }
    ],
    "icon": "ASSETS/UX/TraitIcons/Trait_Icon_10_Superfan.TFT_Set10.tex",
    "name": {
      "ko": "열혈 팬",
      "en": "Superfan"
    }
  },
  "Set10_DJ": {
    "apiName": "Set10_DJ",
    "desc": {
      "ko": "(고유) 모드를 선택하여 믹스마스터의 기본 공격과 스킬을 변화시킵니다.",
      "en": "(unique) Choose a mode that changes the Mixmaster's attacks and Ability!"
    },
    "effects": [
      {
        "maxUnits": 25000,
        "minUnits": 1,
        "style": 6,
        "variables": {}
      }
    ],
    "icon": "ASSETS/UX/TraitIcons/Trait_Icon_10_DJ.TFT_Set10.tex",
    "name": {
      "ko": "믹스마스터",
      "en": "Mixmaster"
    }
  },
  "Set10_Deadeye": {
    "apiName": "Set10_Deadeye",
    "desc": {
      "ko": "거물이 공격력을 얻습니다. 스킬 사용 시 @Duration@초 동안 효과가 증가합니다.<br><br><expandRow>(@MinUnits@) @PercentAD*100@% %i:scaleAD%, 사용 후 @PercentADEmpowered*100@%</expandRow>",
      "en": "Big Shots gain Attack Damage, which increases for @Duration@ seconds when they use their Ability.<br><br><expandRow>(@MinUnits@) @PercentAD*100@% %i:scaleAD%, @PercentADEmpowered*100@% after casting</expandRow>"
    },
    "effects": [
      {
        "maxUnits": 3,
        "minUnits": 2,
        "style": 1,
        "variables": {
          "PercentAD": 0.10000000149011612,
          "{4ce8f18b}": 0.4000000059604645
        }
      },
      {
        "maxUnits": 5,
        "minUnits": 4,
        "style": 4,
        "variables": {
          "PercentAD": 0.15000000596046448,
          "{4ce8f18b}": 0.6000000238418579
        }
      },
      {
        "maxUnits": 25000,
        "minUnits": 6,
        "style": 4,
        "variables": {
          "PercentAD": 0.25,
          "{4ce8f18b}": 1
        }
      }
    ],
    "icon": "ASSETS/UX/TraitIcons/Trait_Icon_10_BigShot.TFT_Set10.tex",
    "name": {
      "ko": "거물",
      "en": "Big Shot"
    }
  },
  "Set10_CrowdDive": {
    "apiName": "Set10_CrowdDive",
    "desc": {
      "ko": "스테이지 다이버가 죽은 후 가장 먼 적에게 도약해 <magicDamage>@JumpDamage@</magicDamage>의 마법 피해를 입힙니다. @StunRange@칸 내의 적을 @StunDuration@초 동안 기절시킵니다.<br><br>또한 추가 피해를 입히며, 매초 피해량이 @BonusPerSecond*100@%만큼 증가합니다.<br><br><expandRow>(@MinUnits@) 추가 피해량 @BaseBonus*100@%</expandRow>",
      "en": "After Crowd Divers die, they leap onto the furthest enemy, dealing <magicDamage>@JumpDamage@</magicDamage> magic damage. Enemies within @StunRange@ hex are Stunned for @StunDuration@ seconds.<br><br>They also deal bonus damage, increased by @BonusPerSecond*100@% each second.<br><br><expandRow>(@MinUnits@) @BaseBonus*100@% bonus damage</expandRow>"
    },
    "effects": [
      {
        "maxUnits": 3,
        "minUnits": 2,
        "style": 1,
        "variables": {
          "{a5be9a7f}": 0.05000000074505806
        }
      },
      {
        "maxUnits": 5,
        "minUnits": 4,
        "style": 4,
        "variables": {
          "{a5be9a7f}": 0.30000001192092896
        }
      },
      {
        "maxUnits": 25000,
        "minUnits": 6,
        "style": 4,
        "variables": {
          "{a5be9a7f}": 0.699999988079071
        }
      }
    ],
    "icon": "ASSETS/UX/TraitIcons/Trait_Icon_10_CrowdDiver.TFT_Set10.tex",
    "name": {
      "ko": "스테이지 다이버",
      "en": "Crowd Diver"
    }
  },
  "Set10_KDA": {
    "apiName": "Set10_KDA",
    "desc": {
      "ko": "빛나는 칸에 있는 아군이 최대 체력과 주문력, 공격력을 얻습니다. K/DA 챔피언일 경우 증가량이 두 배가 됩니다.<br><br><row>(@MinUnits@) 최대 %i:scaleHealth%의 @BonusMaxHealth*100@%, @BonusAP@% %i:scaleAP%%i:scaleAD%</row><br><row>(@MinUnits@) 최대 %i:scaleHealth%의 @BonusMaxHealth*100@%, @BonusAP@% %i:scaleAP%%i:scaleAD%</row><br><row>(@MinUnits@) 최대 %i:scaleHealth%의 @BonusMaxHealth*100@%, @BonusAP@% %i:scaleAP%%i:scaleAD%</row><br><row>(@MinUnits@) 최대 %i:scaleHealth%의 @BonusMaxHealth*100@%, @BonusAP@% %i:scaleAP%%i:scaleAD%, 초당 마나 @ManaPerSecond@ </row>",
      "en": "Your team gains max Health, Ability Power, and Attack Damage if they are in a lighted hex. K/DA champions gain double!<br><br><row>(@MinUnits@) @BonusMaxHealth*100@% max %i:scaleHealth%, @BonusAP@%&nbsp;%i:scaleAP%%i:scaleAD%</row><br><row>(@MinUnits@) @BonusMaxHealth*100@% max %i:scaleHealth%, @BonusAP@%&nbsp;%i:scaleAP%%i:scaleAD%</row><br><row>(@MinUnits@) @BonusMaxHealth*100@% max %i:scaleHealth%, @BonusAP@%&nbsp;%i:scaleAP%%i:scaleAD%</row><br><row>(@MinUnits@) @BonusMaxHealth*100@% max %i:scaleHealth%, @BonusAP@%&nbsp;%i:scaleAP%%i:scaleAD%, @ManaPerSecond@ mana per second </row>"
    },
    "effects": [
      {
        "maxUnits": 4,
        "minUnits": 3,
        "style": 1,
        "variables": {
          "BonusAP": 10,
          "BonusMaxHealth": 0.10000000149011612,
          "ManaPerSecond": "null",
          "{158db106}": 2
        }
      },
      {
        "maxUnits": 6,
        "minUnits": 5,
        "style": 3,
        "variables": {
          "BonusAP": 15,
          "BonusMaxHealth": 0.15000000596046448,
          "ManaPerSecond": "null",
          "{158db106}": 2
        }
      },
      {
        "maxUnits": 9,
        "minUnits": 7,
        "style": 4,
        "variables": {
          "BonusAP": 22,
          "BonusMaxHealth": 0.2199999988079071,
          "ManaPerSecond": "null",
          "{158db106}": 2
        }
      },
      {
        "maxUnits": 25000,
        "minUnits": 10,
        "style": 5,
        "variables": {
          "BonusAP": 50,
          "BonusMaxHealth": 0.5,
          "ManaPerSecond": 10,
          "{158db106}": 2
        }
      }
    ],
    "icon": "ASSETS/UX/TraitIcons/Trait_Icon_10_KDA.TFT_Set10.tex",
    "name": {
      "ko": "K/DA",
      "en": "K/DA"
    }
  },
  "Set10_Classical": {
    "apiName": "Set10_Classical",
    "desc": {
      "ko": "(고유) 마에스트로는 항상 고정된 속도로 공격하며 @BonusAttackSpeed@%의 추가 공격 속도를 @BonusAttackDamage@%의 공격력으로 전환합니다. ",
      "en": "(unique) The Maestro always attacks at a fixed pace, converting @BonusAttackSpeed@% bonus Attack Speed into @BonusAttackDamage@% Attack Damage. "
    },
    "effects": [
      {
        "maxUnits": 25000,
        "minUnits": 1,
        "style": 6,
        "variables": {
          "BonusAttackDamage": 0.699999988079071,
          "BonusAttackSpeed": 1,
          "{3c4f17cb}": 0.8999999761581421,
          "{48d42308}": 2,
          "{7fd29f41}": 10
        }
      }
    ],
    "icon": "ASSETS/UX/TraitIcons/Trait_Icon_10_Classical.TFT_Set10.tex",
    "name": {
      "ko": "마에스트로",
      "en": "Maestro"
    }
  },
  "Set10_Funk": {
    "apiName": "Set10_Funk",
    "desc": {
      "ko": "이동 가능한 디스코 볼을 소환합니다. <br><br>전투 시작: 디스코 볼 옆에 있는 아군이 공격 속도를 얻습니다. 또한 전투 시작 즉시, 이후 @TickRate@초마다 체력을 회복합니다.<br><br><row>(@MinUnits@) @AttackSpeed*100@% %i:scaleAS%, 최대 %i:scaleHealth%의 @Healing*100@%</row><br><row>(@MinUnits@) @AttackSpeed*100@% %i:scaleAS%, 최대 %i:scaleHealth%의 @Healing*100@%</row><br><row>(@MinUnits@) 디스코 볼 2개, @AttackSpeed*100@% %i:scaleAS%, 최대 %i:scaleHealth%의 @Healing*100@%</row><br><row>(@MinUnits@) @AttackSpeed*100@% %i:scaleAS%, 최대 %i:scaleHealth%의 @Healing*100@%</row>",
      "en": "Summon a movable Disco Ball. <br><br>Combat start: Allies next to it gain Attack Speed and healing immediately and every @TickRate@ seconds.<br><br><row>(@MinUnits@) @AttackSpeed*100@% %i:scaleAS% and @Healing*100@% max %i:scaleHealth%</row><br><row>(@MinUnits@) @AttackSpeed*100@% %i:scaleAS% and @Healing*100@% max %i:scaleHealth%</row><br><row>(@MinUnits@) 2 Disco Balls, @AttackSpeed*100@% %i:scaleAS% and @Healing*100@% max %i:scaleHealth%</row><br><row>(@MinUnits@) @AttackSpeed*100@% %i:scaleAS% and @Healing*100@% max %i:scaleHealth%</row>"
    },
    "effects": [
      {
        "maxUnits": 3,
        "minUnits": 3,
        "style": 1,
        "variables": {
          "AttackSpeed": 0.05000000074505806,
          "Healing": 0.029999999329447746,
          "{11b35e1c}": 1
        }
      },
      {
        "maxUnits": 4,
        "minUnits": 4,
        "style": 3,
        "variables": {
          "AttackSpeed": 0.10000000149011612,
          "Healing": 0.03999999910593033,
          "{11b35e1c}": 1
        }
      },
      {
        "maxUnits": 5,
        "minUnits": 5,
        "style": 4,
        "variables": {
          "AttackSpeed": 0.15000000596046448,
          "Healing": 0.03999999910593033,
          "{11b35e1c}": 2
        }
      },
      {
        "maxUnits": 25000,
        "minUnits": 6,
        "style": 4,
        "variables": {
          "AttackSpeed": 0.20000000298023224,
          "Healing": 0.05999999865889549,
          "{11b35e1c}": 2
        }
      }
    ],
    "icon": "ASSETS/UX/TraitIcons/Trait_Icon_10_Funk.TFT_Set10.tex",
    "name": {
      "ko": "디스코",
      "en": "Disco"
    }
  },
  "Set10_Fighter": {
    "apiName": "Set10_Fighter",
    "desc": {
      "ko": "춤꾼이 공격 속도와 <TFTKeyword>모든 피해 흡혈</TFTKeyword>을 얻습니다. 잃은 체력에 따라 최대 @AmountIncrease*100@%까지 증가합니다. <br><br><expandRow>(@MinUnits@) @FighterAS@% %i:scaleAS%, 모든 피해 흡혈 @FighterVamp@% </expandRow><br><br><rules>모든 피해 흡혈: 입힌 피해량의 일부만큼 체력을 회복합니다.</rules>",
      "en": "Moshers gain Attack Speed and <TFTKeyword>Omnivamp</TFTKeyword>, which increases up to @AmountIncrease*100@% based on their missing Health. <br><br><expandRow>(@MinUnits@) @FighterAS@% %i:scaleAS%, @FighterVamp@% Omnivamp </expandRow><br><br><rules>Omnivamp: Heal for percentage of damage dealt</rules>"
    },
    "effects": [
      {
        "maxUnits": 3,
        "minUnits": 2,
        "style": 1,
        "variables": {
          "{ad27681e}": 20,
          "{c771aaaa}": 10
        }
      },
      {
        "maxUnits": 5,
        "minUnits": 4,
        "style": 3,
        "variables": {
          "{ad27681e}": 30,
          "{c771aaaa}": 15
        }
      },
      {
        "maxUnits": 25000,
        "minUnits": 6,
        "style": 4,
        "variables": {
          "{ad27681e}": 50,
          "{c771aaaa}": 20
        }
      }
    ],
    "icon": "ASSETS/UX/TraitIcons/Trait_Icon_10_Mosher.TFT_Set10.tex",
    "name": {
      "ko": "춤꾼",
      "en": "Mosher"
    }
  },
  "Set10_Quickshot": {
    "apiName": "Set10_Quickshot",
    "desc": {
      "ko": "아군이 @TeamwideAttackSpeed*100@%의 공격 속도를 얻습니다.<br><br>속사포 챔피언은 기본 공격 시 중첩을 얻으며, 최대 @MaxStacks@회 중첩됩니다.<br><br><expandRow>(@MinUnits@) @PercentAS*100@% %i:scaleAS%</expandRow>",
      "en": "Your team gains @TeamwideAttackSpeed*100@% Attack Speed.<br><br>Rapidfire champions gain more on every attack, up to @MaxStacks@ stacks.<br><br><expandRow>(@MinUnits@) @PercentAS*100@% %i:scaleAS%</expandRow>"
    },
    "effects": [
      {
        "maxUnits": 3,
        "minUnits": 2,
        "style": 1,
        "variables": {
          "MaxStacks": 10,
          "{ec3d43d6}": 0.03999999910593033
        }
      },
      {
        "maxUnits": 5,
        "minUnits": 4,
        "style": 3,
        "variables": {
          "MaxStacks": 10,
          "{ec3d43d6}": 0.07000000029802322
        }
      },
      {
        "maxUnits": 25000,
        "minUnits": 6,
        "style": 4,
        "variables": {
          "MaxStacks": 10,
          "{ec3d43d6}": 0.11999999731779099
        }
      }
    ],
    "icon": "ASSETS/UX/TraitIcons/Trait_Icon_10_Rapidfire.TFT_Set10.tex",
    "name": {
      "ko": "속사포",
      "en": "Rapidfire"
    }
  },
  "Set10_PunkRock": {
    "apiName": "Set10_PunkRock",
    "desc": {
      "ko": "펑크가 추가 체력과 공격력을 얻습니다. 상점 새로고침에 골드를 소모할 때마다 효과가 1% 증가합니다.<br><br>펑크가 전투에 참여한 후 첫 상점 새로고침 비용이 1골드가 되고 @FIRST_ROLL_BONUS@%의 보너스를 얻습니다.<br><br><expandRow>(@MinUnits@) @BONUS_HEALTH@ %i:scaleHealth% 및 @BONUS_AD_AP*100@% %i:scaleAD%</expandRow><br><br>현재 보너스: @TFTUnitProperty.trait:TFT10_Punk_CurrentBonus@%<br>@TFTUnitProperty.trait:TFT10_Punk_CurrentHealthBonus@ %i:scaleHealth% 및 @TFTUnitProperty.trait:TFT10_Punk_CurrentADBonus@% %i:scaleAD%",
      "en": "Punks gain bonus Health and Attack Damage, which increases by 1% every time you spend gold on a Shop reroll.<br><br>After Punks fight in combat, your 1st Shop reroll costs 1 gold and grants @FIRST_ROLL_BONUS@% bonus instead!<br><br><expandRow>(@MinUnits@) @BONUS_HEALTH@ %i:scaleHealth% and @BONUS_AD_AP*100@% %i:scaleAD%</expandRow><br><br>Current Bonus: @TFTUnitProperty.trait:TFT10_Punk_CurrentBonus@%<br>@TFTUnitProperty.trait:TFT10_Punk_CurrentHealthBonus@ %i:scaleHealth% and @TFTUnitProperty.trait:TFT10_Punk_CurrentADBonus@% %i:scaleAD%"
    },
    "effects": [
      {
        "maxUnits": 3,
        "minUnits": 2,
        "style": 1,
        "variables": {
          "{a3869f33}": 170,
          "{f6501cf8}": 0.17000000178813934
        }
      },
      {
        "maxUnits": 5,
        "minUnits": 4,
        "style": 4,
        "variables": {
          "{a3869f33}": 280,
          "{f6501cf8}": 0.2800000011920929
        }
      },
      {
        "maxUnits": 25000,
        "minUnits": 6,
        "style": 4,
        "variables": {
          "{a3869f33}": 420,
          "{f6501cf8}": 0.41999998688697815
        }
      }
    ],
    "icon": "ASSETS/UX/TraitIcons/Trait_Icon_10_Punk.TFT_Set10.tex",
    "name": {
      "ko": "펑크",
      "en": "Punk"
    }
  },
  "Set10_Dazzler": {
    "apiName": "Set10_Dazzler",
    "desc": {
      "ko": "현혹술사가 스킬 사용 시 대상의 피해량을 @DamageDecrease*100@% 감소시키고 @Duration@초 동안 추가 마법 피해를 입힙니다.<br><br><expandRow>(@MinUnits@) <magicDamage>@DOTPercent*100@%</magicDamage>의 마법 피해</expandRow>",
      "en": "Dazzlers' Abilities reduce their target's damage by @DamageDecrease*100@% and deal bonus magic damage over @Duration@ seconds.<br><br><expandRow>(@MinUnits@) <magicDamage>@DOTPercent*100@%</magicDamage> magic damage</expandRow>"
    },
    "effects": [
      {
        "maxUnits": 3,
        "minUnits": 2,
        "style": 1,
        "variables": {
          "Duration": 2,
          "{80cf3c31}": 0.20000000298023224,
          "{bca0d684}": 0.15000000596046448
        }
      },
      {
        "maxUnits": 5,
        "minUnits": 4,
        "style": 4,
        "variables": {
          "Duration": 2,
          "{80cf3c31}": 0.6000000238418579,
          "{bca0d684}": 0.15000000596046448
        }
      },
      {
        "maxUnits": 25000,
        "minUnits": 6,
        "style": 4,
        "variables": {
          "Duration": 2,
          "{80cf3c31}": 1,
          "{bca0d684}": 0.15000000596046448
        }
      }
    ],
    "icon": "ASSETS/UX/TraitIcons/Trait_Icon_4_Dazzler.tex",
    "name": {
      "ko": "현혹술사",
      "en": "Dazzler"
    }
  },
  "Set10_PopBand": {
    "apiName": "Set10_PopBand",
    "desc": {
      "ko": "적을 처치하면 하트를 획득합니다. 플레이어 대상 전투에서 패배하면 더 많이 얻습니다. 매 @RoundCount@번째 플레이어 대상 전투에서 하트가 강력한 보상으로 전환됩니다. <br><br><row>(@MinUnits@) 하트 획득 @PercentHeartRate@배</row><br><row>(@MinUnits@) 하트 획득 @PercentHeartRate@배</row><br><row>(@MinUnits@) 하트 획득 @PercentHeartRate@배</row><br><row>(@MinUnits@) 하트 획득량이 @PercentHeartRate@배가 됩니다. 라운드마다 보상을 획득하고 하트의 @HeartKeepPercentage*100@%를 유지합니다.</row>",
      "en": "Earn Hearts by killing enemies. Gain even more by losing player combat. Every @RoundCount@ player combats, convert Hearts into powerful rewards! <br><br><row>(@MinUnits@) @PercentHeartRate@x Hearts</row><br><row>(@MinUnits@) @PercentHeartRate@x Hearts</row><br><row>(@MinUnits@) @PercentHeartRate@x Hearts</row><br><row>(@MinUnits@) @PercentHeartRate@x Hearts, Gain rewards every round and keep @HeartKeepPercentage*100@% of your Hearts!</row>"
    },
    "effects": [
      {
        "maxUnits": 4,
        "minUnits": 3,
        "style": 1,
        "variables": {
          "{7e97c18b}": "null",
          "{97244f72}": "null",
          "{b91d171c}": 1
        }
      },
      {
        "maxUnits": 6,
        "minUnits": 5,
        "style": 3,
        "variables": {
          "{7e97c18b}": "null",
          "{97244f72}": "null",
          "{b91d171c}": 2.5
        }
      },
      {
        "maxUnits": 9,
        "minUnits": 7,
        "style": 4,
        "variables": {
          "{7e97c18b}": "null",
          "{97244f72}": "null",
          "{b91d171c}": 6
        }
      },
      {
        "maxUnits": 25000,
        "minUnits": 10,
        "style": 5,
        "variables": {
          "{7e97c18b}": 1,
          "{97244f72}": 0.800000011920929,
          "{b91d171c}": 10
        }
      }
    ],
    "icon": "ASSETS/UX/TraitIcons/Trait_Icon_10_Heartsteel.TFT_Set10.tex",
    "name": {
      "ko": "Heartsteel",
      "en": "Heartsteel"
    }
  },
  "Set10_Brawler": {
    "apiName": "Set10_Brawler",
    "desc": {
      "ko": "아군이 @TeamFlatHealth@의 체력을 얻습니다. 난동꾼은 추가 최대 체력을 얻습니다.<br><br><expandRow>(@MinUnits@) 최대 %i:scaleHealth%의 @BonusPercentHealth*100@%</expandRow>",
      "en": "Your team gains @TeamFlatHealth@ Health. Bruisers gain bonus max Health.<br><br><expandRow>(@MinUnits@) @BonusPercentHealth*100@% max %i:scaleHealth%</expandRow>"
    },
    "effects": [
      {
        "maxUnits": 3,
        "minUnits": 2,
        "style": 1,
        "variables": {
          "BonusPercentHealth": 0.20000000298023224,
          "TeamFlatHealth": 100
        }
      },
      {
        "maxUnits": 5,
        "minUnits": 4,
        "style": 3,
        "variables": {
          "BonusPercentHealth": 0.4000000059604645,
          "TeamFlatHealth": 100
        }
      },
      {
        "maxUnits": 25000,
        "minUnits": 6,
        "style": 4,
        "variables": {
          "BonusPercentHealth": 0.800000011920929,
          "TeamFlatHealth": 100
        }
      }
    ],
    "icon": "ASSETS/UX/TraitIcons/Trait_Icon_3_Brawler.tex",
    "name": {
      "ko": "난동꾼",
      "en": "Bruiser"
    }
  },
  "Set10_Jazz": {
    "apiName": "Set10_Jazz",
    "desc": {
      "ko": "활성화된 특성 하나당 아군이 추가 체력과 추가 피해량을 얻습니다. (고유 특성 제외)<br><br><expandRow>(@MinUnits@) @BonusHealth*100@% %i:scaleHealth%, 피해량 @BonusDamage*100@%</expandRow><br><br>추가 체력: @TFTUnitProperty.trait:TFT10_Trait_Jazz_TraitTracker_CurrentBonus@%<br>추가 피해량: @TFTUnitProperty.trait:TFT10_Trait_Jazz_TraitTracker_CurrentBonus_Damage@%",
      "en": "For each active trait (except uniques), your team gains bonus Health and deals bonus damage.<br><br><expandRow>(@MinUnits@) @BonusHealth*100@% %i:scaleHealth%, @BonusDamage*100@% Damage</expandRow><br><br>Bonus Health: @TFTUnitProperty.trait:TFT10_Trait_Jazz_TraitTracker_CurrentBonus@%<br>Bonus Damage: @TFTUnitProperty.trait:TFT10_Trait_Jazz_TraitTracker_CurrentBonus_Damage@%"
    },
    "effects": [
      {
        "maxUnits": 2,
        "minUnits": 2,
        "style": 1,
        "variables": {
          "BonusDamage": 0.009999999776482582,
          "BonusHealth": 0.019999999552965164
        }
      },
      {
        "maxUnits": 3,
        "minUnits": 3,
        "style": 3,
        "variables": {
          "BonusDamage": 0.019999999552965164,
          "BonusHealth": 0.029999999329447746
        }
      },
      {
        "maxUnits": 25000,
        "minUnits": 4,
        "style": 4,
        "variables": {
          "BonusDamage": 0.029999999329447746,
          "BonusHealth": 0.03999999910593033
        }
      }
    ],
    "icon": "ASSETS/UX/TraitIcons/Trait_Icon_10_Jazz.TFT_Set10.tex",
    "name": {
      "ko": "재즈",
      "en": "Jazz"
    }
  },
  "Set10_EDM": {
    "apiName": "Set10_EDM",
    "desc": {
      "ko": "EDM 선택기를 사용해 EDM 챔피언을 선택하고 각 챔피언의 스킬 사용 빈도를 확인할 수 있습니다.<br><br>선택한 챔피언의 스킬 사용 빈도에 따라 아군 EDM 챔피언이 해당 스킬을 변경된 효과가 적용된 상태로 사용합니다.<br><br><row>(@MinUnits@) @EDMstats*100@%의 효과</row><br><row>(@MinUnits@) @EDMstats*100@%의 효과</row><br><row>(@MinUnits@) @EDMstats*100@%의 효과, 스킬 사용 빈도 -@EDMtimereduction@초</row><br><row>(@MinUnits@) @EDMstats*100@%의 효과, 스킬 사용 빈도 -@EDMtimereduction@초</row>",
      "en": "Use the EDM selector item to choose an EDM champion and see the frequency for each.<br><br>At the selected champion's frequency, your EDM champions cast the selected Ability with modified effectiveness.<br><br><row>(@MinUnits@) @EDMstats*100@% effectiveness</row><br><row>(@MinUnits@) @EDMstats*100@% effectiveness</row><br><row>(@MinUnits@) @EDMstats*100@% effectiveness, -@EDMtimereduction@ second</row><br><row>(@MinUnits@) @EDMstats*100@% effectiveness, -@EDMtimereduction@ seconds</row>"
    },
    "effects": [
      {
        "maxUnits": 2,
        "minUnits": 2,
        "style": 1,
        "variables": {
          "{50d03f4e}": 0.800000011920929
        }
      },
      {
        "maxUnits": 3,
        "minUnits": 3,
        "style": 1,
        "variables": {
          "{50d03f4e}": 0.8999999761581421
        }
      },
      {
        "maxUnits": 4,
        "minUnits": 4,
        "style": 3,
        "variables": {
          "{50d03f4e}": 1,
          "{78f8ea27}": 1
        }
      },
      {
        "maxUnits": 25000,
        "minUnits": 5,
        "style": 4,
        "variables": {
          "{50d03f4e}": 1.2000000476837158,
          "{78f8ea27}": 2
        }
      }
    ],
    "icon": "ASSETS/UX/TraitIcons/Trait_Icon_10_EDM.TFT_Set10.tex",
    "name": {
      "ko": "EDM",
      "en": "EDM"
    }
  }
}

export type TraitName_10 = Split<keyof typeof traits_season_10, '_'>[1];
export type TraitData_10 = DeepNullable<(typeof traits_season_10)['Set10_EDM']>;

  