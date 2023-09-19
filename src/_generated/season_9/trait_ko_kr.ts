export const trait_season_9 = {
    'Set9_Bastion': {
    "apiName": "Set9_Bastion",
    "desc": "요새 챔피언이 방어력과 마법 저항력을 얻습니다. 이 효과는 전투 시작 후 @Duration@초 동안 @BonusPercent*100@%만큼 증가합니다.<br><br><expandRow>(@MinUnits@) %i:scaleArmor% +@BonusArmor@, %i:scaleMR% +@BonusArmor@</expandRow>",
    "effects": [
        {
            "maxUnits": 3,
            "minUnits": 2,
            "style": 1,
            "variables": {
                "BonusArmor": 20,
                "BonusMR": 20,
                "Duration": 10,
                "{09b7d38c}": 2,
                "{b44c0eed}": 1
            }
        },
        {
            "maxUnits": 5,
            "minUnits": 4,
            "style": 3,
            "variables": {
                "BonusArmor": 40,
                "BonusMR": 40,
                "Duration": 10,
                "{09b7d38c}": 2,
                "{b44c0eed}": 1
            }
        },
        {
            "maxUnits": 7,
            "minUnits": 6,
            "style": 4,
            "variables": {
                "BonusArmor": 65,
                "BonusMR": 65,
                "Duration": 10,
                "{09b7d38c}": 2,
                "{b44c0eed}": 1
            }
        },
        {
            "maxUnits": 25000,
            "minUnits": 8,
            "style": 4,
            "variables": {
                "BonusArmor": 125,
                "BonusMR": 125,
                "Duration": 10,
                "{09b7d38c}": 2,
                "{b44c0eed}": 1
            }
        }
    ],
    "icon": "https://tft-utils.s3.ap-northeast-2.amazonaws.com/season_9/traits/Trait_Icon_9_Bastion.TFT_Set9.png",
    "name": "요새"
},
    'Set9_Sorcerer': {
    "apiName": "Set9_Sorcerer",
    "desc": "마법사는 추가 주문력을 얻습니다.<br><br>적이 마법사에게 피해를 입은 뒤 사망하면 자신의 최대 체력에 비례한 피해를 다른 적에게 입힙니다.<br><br><row>(@MinUnits@) %i:scaleAP% @BonusAP@, 최대 %i:scaleHealth%의 @HealthPct*100@%</row><br><row>(@MinUnits@) %i:scaleAP% @BonusAP@, 최대 %i:scaleHealth%의 @HealthPct*100@%</row><br><row>(@MinUnits@) %i:scaleAP% @BonusAP@, @TargetNum@명의 적에게 최대 %i:scaleHealth%의 @HealthPct*100@%</row><br><row>(@MinUnits@) %i:scaleAP% @BonusAP@, @TargetNum@명의 적에게 최대 %i:scaleHealth%의 @HealthPct*100@%</row>",
    "effects": [
        {
            "maxUnits": 3,
            "minUnits": 2,
            "style": 1,
            "variables": {
                "BonusAP": 25,
                "HealthPct": 0.07000000029802322,
                "{08335318}": 1,
                "{a34f32df}": 3
            }
        },
        {
            "maxUnits": 5,
            "minUnits": 4,
            "style": 3,
            "variables": {
                "BonusAP": 45,
                "HealthPct": 0.10000000149011612,
                "{08335318}": 1,
                "{a34f32df}": 3
            }
        },
        {
            "maxUnits": 7,
            "minUnits": 6,
            "style": 4,
            "variables": {
                "BonusAP": 80,
                "HealthPct": 0.11999999731779099,
                "{08335318}": 2,
                "{a34f32df}": 3
            }
        },
        {
            "maxUnits": 25000,
            "minUnits": 8,
            "style": 4,
            "variables": {
                "BonusAP": 125,
                "HealthPct": 0.15000000596046448,
                "{08335318}": 2,
                "{a34f32df}": 3
            }
        }
    ],
    "icon": "https://tft-utils.s3.ap-northeast-2.amazonaws.com/season_9/traits/Trait_Icon_3_Sorcerer.png",
    "name": "마법사"
},
    'Set9_BandleCity': {
    "apiName": "Set9_BandleCity",
    "desc": "아군이 별 레벨 하나당 공격 속도를 @BonusAttackSpeed*100@% 얻습니다.<br><br>3성 챔피언이 3명 있으면 아군 요들이 4성이 되어 스킬이 기묘하게 변화합니다!<br><br><row>(@MinUnits@) 가장 강한 아군 3성 요들 1명</row><br><row>(@MinUnits@) 3성 요들 2명</row><br><br><rules>장착 아이템 수가 같으면 최근에 배치된 요들이 선택됩니다.</rules>",
    "effects": [
        {
            "maxUnits": 4,
            "minUnits": 3,
            "style": 1,
            "variables": {
                "BonusAttackSpeed": 0.10000000149011612,
                "DodgeChance": 100,
                "DodgeDuration": 2,
                "ManaReduction": 15,
                "{25ec78e1}": 1,
                "{c235f1f1}": 0.5,
                "{eae1472b}": 1
            }
        },
        {
            "maxUnits": 25000,
            "minUnits": 5,
            "style": 4,
            "variables": {
                "BonusAttackSpeed": 0.10000000149011612,
                "DodgeChance": 100,
                "DodgeDuration": 2,
                "ManaReduction": 15,
                "{25ec78e1}": 2,
                "{c235f1f1}": 0.5,
                "{eae1472b}": 2
            }
        }
    ],
    "icon": "https://tft-utils.s3.ap-northeast-2.amazonaws.com/season_9/traits/Trait_Icon_6_Yordle.png",
    "name": "요들"
},
    'Set9_Deadeye': {
    "apiName": "Set9_Deadeye",
    "desc": "<spellPassive>고유:</spellPassive> 사거리 +@BonusRange@<br><br>@ShotFrequency@초마다 백발백중 유닛이 체력 비율이 가장 높은 적에게 기본 공격을 가해 추가 피해를 입힙니다.<br><br><expandRow>(@MinUnits@) 피해량 +@DamageAmp*100@%</expandRow>",
    "effects": [
        {
            "maxUnits": 3,
            "minUnits": 2,
            "style": 1,
            "variables": {
                "DamageAmp": 0.20000000298023224,
                "{428a4c11}": 3
            }
        },
        {
            "maxUnits": 5,
            "minUnits": 4,
            "style": 4,
            "variables": {
                "DamageAmp": 0.6499999761581421,
                "{428a4c11}": 3
            }
        },
        {
            "maxUnits": 25000,
            "minUnits": 6,
            "style": 5,
            "variables": {
                "DamageAmp": 1.5,
                "{428a4c11}": 3
            }
        }
    ],
    "icon": "https://tft-utils.s3.ap-northeast-2.amazonaws.com/season_9/traits/Trait_Icon_9_Deadeye.TFT_Set9.png",
    "name": "백발백중"
},
    'Set9_Void': {
    "apiName": "Set9_Void",
    "desc": "전장에 놓을 수 있는 공허 알을 획득합니다. 전투 시작 시 알이 말할 수 없는 공포로 부화해 주변 적들을 공중에 띄워 올립니다.<br><br>공허의 별 레벨이 오를수록 말할 수 없는 공포의 체력과 주문력이 @PercentHealthAPPerStarLevel*100@%씩 증가합니다. <br><br><row>(@MinUnits@) 공허 빨판상어</row><br><row>(@MinUnits@) 협곡의 전령</row><br><row>(@MinUnits@) 내셔 남작</row>",
    "effects": [
        {
            "maxUnits": 5,
            "minUnits": 3,
            "style": 1,
            "variables": {
                "{1eb1d2ae}": 0.25,
                "{a4dcb3da}": 0.4000000059604645
            }
        },
        {
            "maxUnits": 7,
            "minUnits": 6,
            "style": 4,
            "variables": {
                "{1eb1d2ae}": 0.25,
                "{a4dcb3da}": 0.4000000059604645
            }
        },
        {
            "maxUnits": 25000,
            "minUnits": 8,
            "style": 4,
            "variables": {
                "{1eb1d2ae}": 0.25,
                "{a4dcb3da}": 0.4000000059604645
            }
        }
    ],
    "icon": "https://tft-utils.s3.ap-northeast-2.amazonaws.com/season_9/traits/Trait_Icon_9_Void.TFT_Set9.png",
    "name": "공허"
},
    'Set9_Demacia': {
    "apiName": "Set9_Demacia",
    "desc": "가장 강한 아군 데마시아 유닛이 정예가 되어 매 전투에서 찬란한 아이템을 장착합니다. 정예 유닛은 자신과 주변 아군에게 방어력과 마법 저항력을 부여하지만, 이 효과는 중첩되지 않습니다.<br><br><row>(@MinUnits@) 정예 @NumElites@명, %i:scaleArmor% +@BonusDefenses@, %i:scaleMR% +@BonusDefenses@</row><br><row>(@MinUnits@) 정예 @NumElites@명, %i:scaleArmor% +@BonusDefenses@, %i:scaleMR% +@BonusDefenses@</row><br><row>(@MinUnits@) 정예 @NumElites@명, %i:scaleArmor% +@BonusDefenses@, %i:scaleMR% +@BonusDefenses@</row><br><row>(@MinUnits@) 정예 @NumElites@명, %i:scaleArmor% +@BonusDefenses@, %i:scaleMR% +@BonusDefenses@</row><br><br><rules>찬란한 아이템은 완성 아이템보다 더 강력합니다.</rules>",
    "effects": [
        {
            "maxUnits": 4,
            "minUnits": 3,
            "style": 1,
            "variables": {
                "{a750b59f}": 1,
                "{bd072701}": 5
            }
        },
        {
            "maxUnits": 6,
            "minUnits": 5,
            "style": 3,
            "variables": {
                "{a750b59f}": 2,
                "{bd072701}": 15
            }
        },
        {
            "maxUnits": 8,
            "minUnits": 7,
            "style": 4,
            "variables": {
                "{a750b59f}": 3,
                "{bd072701}": 35
            }
        },
        {
            "maxUnits": 25000,
            "minUnits": 9,
            "style": 5,
            "variables": {
                "{a750b59f}": 6,
                "{bd072701}": 150
            }
        }
    ],
    "icon": "https://tft-utils.s3.ap-northeast-2.amazonaws.com/season_9/traits/Trait_Icon_9_Demacia.TFT_Set9.png",
    "name": "데마시아"
},
    'Set9_Rogue': {
    "apiName": "Set9_Rogue",
    "desc": "<row>(@MinUnits@) 불한당의 체력이 @HealthThreshold*100@% 아래로 떨어지면 잠시 대상으로 지정할 수 없는 상태가 되어 @HexRange@칸 내 적에게 돌진합니다. (후방 적 우선)</row><br><row>(@MinUnits@) 불한당에게 피해를 입은 적은 출혈로 인해 @BleedDuration@초에 걸쳐 @BleedPct*100@%의 추가 마법 피해를 입습니다.</row>",
    "effects": [
        {
            "maxUnits": 3,
            "minUnits": 2,
            "style": 1,
            "variables": {
                "BleedDuration": "null",
                "DamageReduction": 100,
                "HealthThreshold": 0.5,
                "HexRange": 4,
                "StealthDuration": 1.5,
                "{fdaf3546}": "null"
            }
        },
        {
            "maxUnits": 25000,
            "minUnits": 4,
            "style": 4,
            "variables": {
                "BleedDuration": 2.5,
                "DamageReduction": 100,
                "HealthThreshold": 0.5,
                "HexRange": 4,
                "StealthDuration": 1.5,
                "{fdaf3546}": 0.699999988079071
            }
        }
    ],
    "icon": "https://tft-utils.s3.ap-northeast-2.amazonaws.com/season_9/traits/Trait_Icon_9_Rogue.TFT_Set9.png",
    "name": "불한당"
},
    'Set9_Slayer': {
    "apiName": "Set9_Slayer",
    "desc": "학살자가 @Omnivamp@%의 모든 피해 흡혈을 얻습니다.<br><br>학살자는 추가 피해를 입힙니다. 체력이 @HealthThreshold*100@% 아래인 유닛에게는 추가 피해가 2배로 증가합니다.<br><br><expandRow>(@MinUnits@) 추가 피해 +@BonusDamageBase@%</expandRow>",
    "effects": [
        {
            "maxUnits": 3,
            "minUnits": 2,
            "style": 1,
            "variables": {
                "BonusDamageBase": 6,
                "HealthThreshold": 0.6600000262260437,
                "Omnivamp": 12
            }
        },
        {
            "maxUnits": 5,
            "minUnits": 4,
            "style": 3,
            "variables": {
                "BonusDamageBase": 20,
                "HealthThreshold": 0.6600000262260437,
                "Omnivamp": 12
            }
        },
        {
            "maxUnits": 25000,
            "minUnits": 6,
            "style": 4,
            "variables": {
                "BonusDamageBase": 40,
                "HealthThreshold": 0.6600000262260437,
                "Omnivamp": 12
            }
        }
    ],
    "icon": "https://tft-utils.s3.ap-northeast-2.amazonaws.com/season_9/traits/Trait_Icon_4_Slayer.png",
    "name": "학살자"
},
    'Set9_Preserver': {
    "apiName": "Set9_Preserver",
    "desc": "@TickRate@초마다 아군 유닛의 마나가 회복됩니다.<br><br><row>(@MinUnits@) 모든 유닛 @TeamMana@ %i:scaleMana%</row><br><row>(@MinUnits@) 기원자는 @SelfBonusMana@ 추가 회복</row><br><row>(@MinUnits@) 모든 유닛 @TeamMana@ %i:scaleMana%, 기원자는 추가 @SelfBonusMana@</row><br><row>(@MinUnits@) 모든 유닛 @TeamMana@ %i:scaleMana%, 시작 시 추가 주문력 @TeamAP@</row><br>",
    "effects": [
        {
            "maxUnits": 3,
            "minUnits": 2,
            "style": 1,
            "variables": {
                "TickRate": 3,
                "{2098e1a5}": "null",
                "{2af5ed55}": "null",
                "{dd3e2f2b}": 5
            }
        },
        {
            "maxUnits": 5,
            "minUnits": 4,
            "style": 3,
            "variables": {
                "TickRate": 3,
                "{2098e1a5}": "null",
                "{2af5ed55}": 15,
                "{dd3e2f2b}": 5
            }
        },
        {
            "maxUnits": 7,
            "minUnits": 6,
            "style": 4,
            "variables": {
                "TickRate": 3,
                "{2098e1a5}": "null",
                "{2af5ed55}": 15,
                "{dd3e2f2b}": 15
            }
        },
        {
            "maxUnits": 25000,
            "minUnits": 8,
            "style": 4,
            "variables": {
                "TickRate": 3,
                "{2098e1a5}": 30,
                "{2af5ed55}": "null",
                "{dd3e2f2b}": 40
            }
        }
    ],
    "icon": "https://tft-utils.s3.ap-northeast-2.amazonaws.com/season_9/traits/Trait_Icon_9_Preserver.TFT_Set9.png",
    "name": "기원자"
},
    'Set9_Bruiser': {
    "apiName": "Set9_Bruiser",
    "desc": "아군 유닛이 체력을 @TeamFlatHealth@ 얻습니다. 난동꾼은 추가 최대 체력을 얻습니다.<br><br><expandRow>(@MinUnits@) 최대 %i:scaleHealth% +@BonusPercentHealth*100@%</expandRow>",
    "effects": [
        {
            "maxUnits": 3,
            "minUnits": 2,
            "style": 1,
            "variables": {
                "BonusPercentHealth": 0.10000000149011612,
                "{392edb65}": 100
            }
        },
        {
            "maxUnits": 5,
            "minUnits": 4,
            "style": 3,
            "variables": {
                "BonusPercentHealth": 0.44999998807907104,
                "{392edb65}": 100
            }
        },
        {
            "maxUnits": 25000,
            "minUnits": 6,
            "style": 4,
            "variables": {
                "BonusPercentHealth": 0.800000011920929,
                "{392edb65}": 100
            }
        }
    ],
    "icon": "https://tft-utils.s3.ap-northeast-2.amazonaws.com/season_9/traits/Trait_Icon_6_Bruiser.png",
    "name": "난동꾼"
},
    'Set9_Noxus': {
    "apiName": "Set9_Noxus",
    "desc": "녹서스 챔피언은 체력, 주문력, 공격력을 얻습니다. 해당 효과는 전투에서 정복하거나 탈락한 상대 1명당 @BonusRatio*100@% 증가합니다.<br><br><expandRow>(@MinUnits@) %i:scaleHealth% @Health@, %i:scaleAP% @AP@, %i:scaleAD% @AD@%</expandRow><br><br><TFTTrackerLabel>정복 추가 효과: @TFTUnitProperty.trait:TFT9_Trait_ConquerorBonus@%/@BonusRatio*700@%</TFTTrackerLabel>",
    "effects": [
        {
            "maxUnits": 4,
            "minUnits": 3,
            "style": 1,
            "variables": {
                "AD": 16,
                "AP": 16,
                "BonusRatio": 0.05000000074505806,
                "Health": 160
            }
        },
        {
            "maxUnits": 6,
            "minUnits": 5,
            "style": 3,
            "variables": {
                "AD": 30,
                "AP": 30,
                "BonusRatio": 0.05000000074505806,
                "Health": 300
            }
        },
        {
            "maxUnits": 8,
            "minUnits": 7,
            "style": 4,
            "variables": {
                "AD": 45,
                "AP": 45,
                "BonusRatio": 0.05000000074505806,
                "Health": 450
            }
        },
        {
            "maxUnits": 25000,
            "minUnits": 9,
            "style": 5,
            "variables": {
                "AD": 75,
                "AP": 75,
                "BonusRatio": 0.05000000074505806,
                "Health": 750
            }
        }
    ],
    "icon": "https://tft-utils.s3.ap-northeast-2.amazonaws.com/season_9/traits/Trait_Icon_9_Noxus.TFT_Set9.png",
    "name": "녹서스"
},
    'Set9_Shurima': {
    "apiName": "Set9_Shurima",
    "desc": "@PulsePeriod@초마다 슈리마 유닛이 최대 체력의 @HealthRegen*100@%만큼 회복합니다. @SecondsToAscend@초 후 특정 슈리마 유닛이 초월해 최대 체력이 @BonusHealthPercent*100@%, 공격 속도가 @BonusASPercent*100@% 증가합니다.<br><br><row>(@MinUnits@) 가장 강한 슈리마 유닛 초월</row><br><row>(@MinUnits@) 모든 슈리마 유닛 초월. 초월 추가 효과 +@AscensionStrengthBoost*100@%</row><br><row>(@MinUnits@) 전투 시작 시 초월. 초월 추가 효과 +@AscensionStrengthBoost*100@%</row><br><row>(@MinUnits@) 2회 초월(전투 시작 시 및 @SecondsToAscend@초 후). 초월 추가 효과 +@AscensionStrengthBoost*100@%</row>",
    "effects": [
        {
            "maxUnits": 3,
            "minUnits": 2,
            "style": 1,
            "variables": {
                "HealthRegen": 0.05000000074505806,
                "{255e11cd}": 0.30000001192092896,
                "{31128603}": 0.20000000298023224,
                "{473e51f7}": 4,
                "{975a6fed}": 8,
                "{98193878}": "null",
                "{e3dc0fc2}": 2
            }
        },
        {
            "maxUnits": 5,
            "minUnits": 4,
            "style": 3,
            "variables": {
                "HealthRegen": 0.05000000074505806,
                "{255e11cd}": 0.30000001192092896,
                "{31128603}": 0.20000000298023224,
                "{473e51f7}": 4,
                "{975a6fed}": 8,
                "{98193878}": 0.15000000596046448,
                "{e3dc0fc2}": 2
            }
        },
        {
            "maxUnits": 8,
            "minUnits": 6,
            "style": 4,
            "variables": {
                "HealthRegen": 0.05000000074505806,
                "{255e11cd}": 0.30000001192092896,
                "{31128603}": 0.20000000298023224,
                "{473e51f7}": 4,
                "{975a6fed}": 8,
                "{98193878}": 0.44999998807907104,
                "{e3dc0fc2}": 2
            }
        },
        {
            "maxUnits": 25000,
            "minUnits": 9,
            "style": 5,
            "variables": {
                "HealthRegen": 0.05000000074505806,
                "{255e11cd}": 0.30000001192092896,
                "{31128603}": 0.20000000298023224,
                "{473e51f7}": 4,
                "{975a6fed}": 8,
                "{98193878}": 0.75,
                "{e3dc0fc2}": 2
            }
        }
    ],
    "icon": "https://tft-utils.s3.ap-northeast-2.amazonaws.com/season_9/traits/Trait_Icon_9_Shurima.TFT_Set9.png",
    "name": "슈리마"
},
    'Set9_Strategist': {
    "apiName": "Set9_Strategist",
    "desc": "<spellPassive>전투 시작:</spellPassive> 전방 2열의 아군들이 @ShieldDuration@초 동안 보호막을 얻습니다. 후방 2열의 아군들이 주문력을 얻습니다.<br><br><expandRow>(@MinUnits@) 보호막 @ShieldHP@, %i:scaleAP% @BonusAP@</expandRow><br>",
    "effects": [
        {
            "maxUnits": 2,
            "minUnits": 2,
            "style": 1,
            "variables": {
                "BonusAP": 15,
                "ShieldDuration": 15,
                "{9d0939e8}": 250
            }
        },
        {
            "maxUnits": 3,
            "minUnits": 3,
            "style": 3,
            "variables": {
                "BonusAP": 25,
                "ShieldDuration": 15,
                "{9d0939e8}": 400
            }
        },
        {
            "maxUnits": 4,
            "minUnits": 4,
            "style": 4,
            "variables": {
                "BonusAP": 40,
                "ShieldDuration": 15,
                "{9d0939e8}": 600
            }
        },
        {
            "maxUnits": 25000,
            "minUnits": 5,
            "style": 4,
            "variables": {
                "BonusAP": 60,
                "ShieldDuration": 15,
                "{9d0939e8}": 900
            }
        }
    ],
    "icon": "https://tft-utils.s3.ap-northeast-2.amazonaws.com/season_9/traits/Trait_Icon_9_Strategist.TFT_Set9.png",
    "name": "책략가"
},
    'Set9_Redeemer': {
    "apiName": "Set9_Redeemer",
    "desc": "아군이 보호막을 얻을 때마다 세나가 해당 아군에게 전투가 끝날 때까지 공격 속도를 @AttackSpeed*100@% 부여합니다. 이 효과는 중첩됩니다.",
    "effects": [
        {
            "maxUnits": 25000,
            "minUnits": 1,
            "style": 4,
            "variables": {
                "AttackSpeed": 0.05999999865889549
            }
        }
    ],
    "icon": "https://tft-utils.s3.ap-northeast-2.amazonaws.com/season_9/traits/Trait_Icon_9_Mistwalker.TFT_Set9.png",
    "name": "구원자"
},
    'Set9_Piltover': {
    "apiName": "Set9_Piltover",
    "desc": "T-헥스를 획득합니다. 플레이어 전투에서 패배할 때마다 T-헥스가 충전을 얻습니다. 승리 시 충전량이 동력으로 전환되며 전환된 충전량에 비례해 전리품을 얻습니다.<br><br><row>(@MinUnits@) T-헥스를 얻습니다.</row><br><row>(@MinUnits@) 매 라운드 추가 전리품을 획득합니다. 패배 시 2패로 간주합니다.</row>",
    "effects": [
        {
            "maxUnits": 5,
            "minUnits": 3,
            "style": 4,
            "variables": {
                "{7714a401}": "null",
                "{af532c9d}": 1
            }
        },
        {
            "maxUnits": 25000,
            "minUnits": 6,
            "style": 5,
            "variables": {
                "{7714a401}": 1,
                "{af532c9d}": 1
            }
        }
    ],
    "icon": "https://tft-utils.s3.ap-northeast-2.amazonaws.com/season_9/traits/Trait_Icon_9_Piltover.TFT_Set9.png",
    "name": "필트오버"
},
    'Set9_Multicaster': {
    "apiName": "Set9_Multicaster",
    "desc": "연쇄마법사는 스킬을 여러 번 사용할 수 있습니다. 추가로 사용하는 스킬은 효과가 @DamageReduction*100@% 감소합니다.<br><br><row>(@MinUnits@) 추가 사용 @BonusCasts@회</row><br><row>(@MinUnits@) 추가 사용 @BonusCasts@회</row>",
    "effects": [
        {
            "maxUnits": 3,
            "minUnits": 2,
            "style": 1,
            "variables": {
                "DamageReduction": 0.6000000238418579,
                "{b99088b8}": 1
            }
        },
        {
            "maxUnits": 25000,
            "minUnits": 4,
            "style": 4,
            "variables": {
                "DamageReduction": 0.6000000238418579,
                "{b99088b8}": 2
            }
        }
    ],
    "icon": "https://tft-utils.s3.ap-northeast-2.amazonaws.com/season_9/traits/Trait_Icon_9_Multicaster.TFT_Set9.png",
    "name": "연쇄마법사"
},
    'Set9_Marksman': {
    "apiName": "Set9_Marksman",
    "desc": "사수 유닛이 기본 공격 시 추가 공격력을 얻습니다. (최대 @MaxStacks@회 중첩)<br><br><expandRow>(@MinUnits@) 중첩당 @PercentAD@% %i:scaleAD%</expandRow>",
    "effects": [
        {
            "maxUnits": 3,
            "minUnits": 2,
            "style": 1,
            "variables": {
                "MaxStacks": 8,
                "PercentAD": 6
            }
        },
        {
            "maxUnits": 5,
            "minUnits": 4,
            "style": 4,
            "variables": {
                "MaxStacks": 8,
                "PercentAD": 14
            }
        },
        {
            "maxUnits": 25000,
            "minUnits": 6,
            "style": 4,
            "variables": {
                "MaxStacks": 8,
                "PercentAD": 25
            }
        }
    ],
    "icon": "https://tft-utils.s3.ap-northeast-2.amazonaws.com/season_9/traits/Trait_Icon_9_Gunner.TFT_Set9.png",
    "name": "사수"
},
    'Set9_Empress': {
    "apiName": "Set9_Empress",
    "desc": "벨베스가 적을 처치하면 벨베스가 먹을 수 있는 공허 산호가 떨어집니다. 첫 공허 산호는 벨베스의 최대 체력을 @PercentBonusMaxHealth*100@% 증가시키며 이후로는 @PercentHealthHeal*100@%씩 증가시킵니다.<br><br>공허 산호를 먹으면 @HexRange@칸 내 적들에게 최대 체력의 @PercentHealthMagicDamage*100@%에 해당하는 마법 피해를 입힙니다.",
    "effects": [
        {
            "maxUnits": 25000,
            "minUnits": 1,
            "style": 4,
            "variables": {
                "HexRange": 2,
                "PercentHealthHeal": 0.20000000298023224,
                "{0b0b3c63}": 0.5,
                "{1ec4c4d2}": 0.10000000149011612
            }
        }
    ],
    "icon": "https://tft-utils.s3.ap-northeast-2.amazonaws.com/season_9/traits/Trait_Icon_9_Empress.TFT_Set9.png",
    "name": "여제"
},
    'Set9_ShadowIsles': {
    "apiName": "Set9_ShadowIsles",
    "desc": "@DamageInstances@번 피해를 입히거나 받으면 그림자 군도 챔피언이 @Duration@초 동안 보호막을 얻고 전투가 끝날 때까지 유령 상태가 됩니다. 유령 챔피언은 매초 마나를 회복합니다.<br><br><expandRow>(@MinUnits@) %i:scaleHealth% 보호막 @MaxHealthShield@% , %i:scaleMana% @ManaRegen@</expandRow>",
    "effects": [
        {
            "maxUnits": 3,
            "minUnits": 2,
            "style": 1,
            "variables": {
                "Duration": 15,
                "ManaRegen": 6,
                "MaxHealthShield": 45,
                "TickRate": 1,
                "{0f5e9c98}": 10
            }
        },
        {
            "maxUnits": 5,
            "minUnits": 4,
            "style": 4,
            "variables": {
                "Duration": 15,
                "ManaRegen": 12,
                "MaxHealthShield": 80,
                "TickRate": 1,
                "{0f5e9c98}": 10
            }
        },
        {
            "maxUnits": 25000,
            "minUnits": 6,
            "style": 5,
            "variables": {
                "Duration": 15,
                "ManaRegen": 18,
                "MaxHealthShield": 115,
                "TickRate": 1,
                "{0f5e9c98}": 10
            }
        }
    ],
    "icon": "https://tft-utils.s3.ap-northeast-2.amazonaws.com/season_9/traits/Trait_Icon_9_ShadowIsles.TFT_Set9.png",
    "name": "그림자 군도"
},
    'Set9_Freljord': {
    "apiName": "Set9_Freljord",
    "desc": "@DelayTime@초 후에 전장에 얼음 폭풍이 붑니다. 적들은 최대 체력 비례 고정 피해를 입고 해로운 효과를 받습니다.<br><br><row>(@MinUnits@) %i:scaleHealth% @PercentHealthDamage@%, @Duration@초 동안 적 @ShredSunder@% <TFTKeyword>파열</TFTKeyword> 및 <TFTKeyword>파쇄</TFTKeyword></row><br><row>(@MinUnits@) %i:scaleHealth% @PercentHealthDamage@%, @StunDuration@초 동안 적 <TFTKeyword>기절</TFTKeyword></row><br><br><rules><tftbold>파열</tftbold>: 방어력을 감소시킵니다.<br><tftbold>파쇄</tftbold>: 마법 저항력을 감소시킵니다.</rules>",
    "effects": [
        {
            "maxUnits": 2,
            "minUnits": 2,
            "style": 1,
            "variables": {
                "Duration": 10,
                "PercentHealthDamage": 8,
                "{14adee04}": 30,
                "{17f82fb1}": 8,
                "{81ce23cf}": 1
            }
        },
        {
            "maxUnits": 25000,
            "minUnits": 3,
            "style": 4,
            "variables": {
                "Duration": 10,
                "PercentHealthDamage": 15,
                "StunDuration": 1.5,
                "{17f82fb1}": 8,
                "{81ce23cf}": 2
            }
        }
    ],
    "icon": "https://tft-utils.s3.ap-northeast-2.amazonaws.com/season_9/traits/Trait_Icon_9_Freljord.TFT_Set9.png",
    "name": "프렐요드"
},
    'Set9_Targon': {
    "apiName": "Set9_Targon",
    "desc": "모든 아군 유닛의 체력 회복량과 보호막 흡수량이 증가합니다.<br><br><expandRow>(@MinUnits@) 체력 회복량과 보호막 흡수량 @HealShieldIncrease*100@% 증가 </expandRow>",
    "effects": [
        {
            "maxUnits": 2,
            "minUnits": 2,
            "style": 1,
            "variables": {
                "HealShieldIncrease": 0.18000000715255737
            }
        },
        {
            "maxUnits": 3,
            "minUnits": 3,
            "style": 4,
            "variables": {
                "HealShieldIncrease": 0.3499999940395355
            }
        },
        {
            "maxUnits": 25000,
            "minUnits": 4,
            "style": 4,
            "variables": {
                "HealShieldIncrease": 0.550000011920929
            }
        }
    ],
    "icon": "https://tft-utils.s3.ap-northeast-2.amazonaws.com/season_9/traits/Trait_Icon_9_Targon.TFT_Set9.png",
    "name": "타곤"
},
    'Set9_Darkin': {
    "apiName": "Set9_Darkin",
    "desc": "아트록스 또는 다르킨의 검 장착 유닛이 사망하면 다르킨의 검이 가장 가까운 아군 챔피언에게 옮겨 가 @BonusHealth@의 체력과 @BonusOmnivamp*100@%의 모든 피해 흡혈을 부여합니다.<br><br>챔피언에게 옮겨 가고 @RespawnTimer@초 후 해당 챔피언이 사망하면 아트록스가 부활합니다.",
    "effects": [
        {
            "maxUnits": 25000,
            "minUnits": 1,
            "style": 4,
            "variables": {
                "BonusHealth": 350,
                "BonusOmnivamp": 0.15000000596046448,
                "{ad17ba74}": 4
            }
        }
    ],
    "icon": "https://tft-utils.s3.ap-northeast-2.amazonaws.com/season_9/traits/Trait_Icon_9_Darkin.TFT_Set9.png",
    "name": "다르킨"
},
    'Set9_Wanderer': {
    "apiName": "Set9_Wanderer",
    "desc": "라이즈의 스킬이 게임 시작 시 지역 차원문 투표 결과에 따라 변화합니다.",
    "effects": [
        {
            "maxUnits": 25000,
            "minUnits": 1,
            "style": 4,
            "variables": {}
        }
    ],
    "icon": "https://tft-utils.s3.ap-northeast-2.amazonaws.com/season_9/traits/Trait_Icon_9_Wanderer.TFT_Set9.png",
    "name": "방랑자"
},
    'Set9_Zaun': {
    "apiName": "Set9_Zaun",
    "desc": "자운 유닛은 자신들만 사용할 수 있는 무작위 화학공학 개조체를 생성합니다. 유닛은 하나의 개조체만 장착할 수 있습니다. 개조체를 제거하려면 유닛을 판매하거나 대기석에 보내야 합니다.<br><br><row>(@MinUnits@) 화학공학 개조체 1개 획득</row><br><row>(@MinUnits@) 과충전 효과가 부여된 화학공학 개조체 2개 획득</row><br><row>(@MinUnits@) 과충전 효과가 부여된 화학공학 개조체 5개 획득</row><br>",
    "effects": [
        {
            "maxUnits": 3,
            "minUnits": 2,
            "style": 1,
            "variables": {
                "{05b87026}": 1,
                "{dbf68e4f}": "null"
            }
        },
        {
            "maxUnits": 5,
            "minUnits": 4,
            "style": 4,
            "variables": {
                "{05b87026}": 2,
                "{dbf68e4f}": 1
            }
        },
        {
            "maxUnits": 25000,
            "minUnits": 6,
            "style": 4,
            "variables": {
                "{05b87026}": 5,
                "{dbf68e4f}": 1
            }
        }
    ],
    "icon": "https://tft-utils.s3.ap-northeast-2.amazonaws.com/season_9/traits/Trait_Icon_9_Zaun.TFT_Set9.png",
    "name": "자운"
},
    'Set9b_Vanquisher': {
    "apiName": "Set9b_Vanquisher",
    "desc": "토벌자는 추가 치명타 피해량과 확률을 획득하며, 스킬에 치명타가 적용될 수 있습니다.<br><br><expandRow>(@MinUnits@) @BaseCritChance@% %i:scaleCrit%, @CritDmg@% %i:scaleCritMult%</expandRow><br>",
    "effects": [
        {
            "maxUnits": 3,
            "minUnits": 2,
            "style": 1,
            "variables": {
                "{c4441218}": 15,
                "{ecb9c76f}": 10
            }
        },
        {
            "maxUnits": 5,
            "minUnits": 4,
            "style": 4,
            "variables": {
                "{c4441218}": 35,
                "{ecb9c76f}": 25
            }
        },
        {
            "maxUnits": 25000,
            "minUnits": 6,
            "style": 4,
            "variables": {
                "{c4441218}": 55,
                "{ecb9c76f}": 40
            }
        }
    ],
    "icon": "https://tft-utils.s3.ap-northeast-2.amazonaws.com/season_9/traits/Trait_Icon_9_Vanquisher.TFT_Set9_Stage2.png",
    "name": "토벌자"
},
    'Set9_Armorclad': {
    "apiName": "Set9_Armorclad",
    "desc": "전쟁기계 챔피언은 체력이 낮아질수록 더 적은 피해를 받습니다.<br><br><expandRow>(@MinUnits@) 피해량 감소 @MinDR*100@%~@MaxDR*100@%</expandRow>",
    "effects": [
        {
            "maxUnits": 3,
            "minUnits": 2,
            "style": 1,
            "variables": {
                "Duration": 7,
                "{012399e1}": 0.15000000596046448,
                "{5532c3ef}": 0.25
            }
        },
        {
            "maxUnits": 5,
            "minUnits": 4,
            "style": 3,
            "variables": {
                "Duration": 7,
                "{012399e1}": 0.25,
                "{5532c3ef}": 0.4000000059604645
            }
        },
        {
            "maxUnits": 25000,
            "minUnits": 6,
            "style": 4,
            "variables": {
                "Duration": 7,
                "{012399e1}": 0.3499999940395355,
                "{5532c3ef}": 0.5
            }
        }
    ],
    "icon": "https://tft-utils.s3.ap-northeast-2.amazonaws.com/season_9/traits/Trait_Icon_9_Juggernaut.TFT_Set9.png",
    "name": "전쟁기계"
},
    'Set9_Technogenius': {
    "apiName": "Set9_Technogenius",
    "desc": "업그레이드 슬롯이 3개 장착되고 전장에 놓을 수 있는 최첨단 포탑을 획득합니다. 포탑 업그레이드는 상점에서 @GoldCost@골드로 구매 가능합니다. 최첨단 포탑은 하이머딩거와 공격 속도 및 주문력을 공유합니다.<br><br><rules>하나의 최첨단 포탑만 보유할 수 있습니다.</rules>",
    "effects": [
        {
            "maxUnits": 25000,
            "minUnits": 1,
            "style": 4,
            "variables": {
                "{8063e2fe}": 1,
                "{cc5f430a}": 6,
                "{db5e6ace}": 100
            }
        }
    ],
    "icon": "https://tft-utils.s3.ap-northeast-2.amazonaws.com/season_9/traits/Trait_Icon_9_Technogenius.TFT_Set9.png",
    "name": "발명의 대가"
},
    'Set9_Challenger': {
    "apiName": "Set9_Challenger",
    "desc": "도전자는 추가 공격 속도를 얻습니다. 대상이 사망하면 새로운 대상에게 돌진하며 @BurstDuration@초 동안 공격 속도 상승 효과가 @IncreasePct*100@% 증가합니다.<br><br><expandRow>(@MinUnits@) %i:scaleAS% @BonusAS@%</expandRow>",
    "effects": [
        {
            "maxUnits": 3,
            "minUnits": 2,
            "style": 1,
            "variables": {
                "BonusAS": 30,
                "{17cfa971}": 2.5,
                "{89094428}": 0.5
            }
        },
        {
            "maxUnits": 5,
            "minUnits": 4,
            "style": 3,
            "variables": {
                "BonusAS": 60,
                "{17cfa971}": 2.5,
                "{89094428}": 0.5
            }
        },
        {
            "maxUnits": 7,
            "minUnits": 6,
            "style": 4,
            "variables": {
                "BonusAS": 95,
                "{17cfa971}": 2.5,
                "{89094428}": 0.5
            }
        },
        {
            "maxUnits": 25000,
            "minUnits": 8,
            "style": 4,
            "variables": {
                "BonusAS": 140,
                "{17cfa971}": 2.5,
                "{89094428}": 0.5
            }
        }
    ],
    "icon": "https://tft-utils.s3.ap-northeast-2.amazonaws.com/season_9/traits/Trait_Icon_6_Challenger.png",
    "name": "도전자"
},
    'Set9_Ionia': {
    "apiName": "Set9_Ionia",
    "desc": "각 아이오니아 유닛의 스킬에는 고유 추가 효과가 있습니다. <br><br>@SpiritDuration@초마다 몇몇 아이오니아 유닛이 혼령 형태로 각성합니다. 각성 시 @SpiritDuration@초 동안 마나를 @Mana@ 얻고 추가 능력치가 2배로 늘어납니다.<br><br><expandRow>(@MinUnits@) 아이오니아 추가 효과 @TooltipBonus*100@%, @NumberOfSpirits@명 각성</expandRow>",
    "effects": [
        {
            "maxUnits": 5,
            "minUnits": 3,
            "style": 1,
            "variables": {
                "Mana": 20,
                "{18bfc1ac}": 8,
                "{1b8cd16a}": 20,
                "{27b17444}": 25,
                "{3076bc18}": 4,
                "{3fc62f6f}": 2,
                "{4df03474}": 200,
                "{53912082}": 1,
                "{7d34708f}": 5,
                "{b9a6ee1b}": 15,
                "{c5f948bd}": 1,
                "{eb0c521b}": 15,
                "{ed124bdb}": 25,
                "{f2474447}": 1,
                "{f6b4b588}": 3,
                "{f809601e}": 33
            }
        },
        {
            "maxUnits": 8,
            "minUnits": 6,
            "style": 4,
            "variables": {
                "Mana": 20,
                "{18bfc1ac}": 16,
                "{1b8cd16a}": 40,
                "{27b17444}": 50,
                "{3076bc18}": 4,
                "{3fc62f6f}": 2,
                "{4df03474}": 400,
                "{53912082}": 1,
                "{7d34708f}": 10,
                "{b9a6ee1b}": 30,
                "{c5f948bd}": 2,
                "{eb0c521b}": 30,
                "{ed124bdb}": 50,
                "{f2474447}": 2,
                "{f6b4b588}": 6,
                "{f809601e}": 66
            }
        },
        {
            "maxUnits": 25000,
            "minUnits": 9,
            "style": 5,
            "variables": {
                "Mana": 20,
                "{18bfc1ac}": 34.20000076293945,
                "{1b8cd16a}": 76,
                "{27b17444}": 95,
                "{3076bc18}": 4,
                "{3fc62f6f}": 2,
                "{4df03474}": 760,
                "{53912082}": 1,
                "{7d34708f}": 19,
                "{b9a6ee1b}": 57,
                "{c5f948bd}": 4,
                "{eb0c521b}": 57,
                "{ed124bdb}": 95,
                "{f2474447}": 3.799999952316284,
                "{f6b4b588}": 11.399999618530273,
                "{f809601e}": 125.4000015258789
            }
        }
    ],
    "icon": "https://tft-utils.s3.ap-northeast-2.amazonaws.com/season_9/traits/Trait_Icon_9_Ionia.TFT_Set9.png",
    "name": "아이오니아"
}
  }