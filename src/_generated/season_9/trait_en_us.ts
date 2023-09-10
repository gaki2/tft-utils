export const trait_9 = {
    'Set9_Bastion': {
    "apiName": "Set9_Bastion",
    "desc": "Bastion champions gain Armor and Magic Resist. This is increased by @BonusPercent*100@% for the first @Duration@ seconds of combat.<br><br><expandRow>(@MinUnits@) +@BonusArmor@ %i:scaleArmor%, +@BonusArmor@ %i:scaleMR%</expandRow>",
    "effects": [
        {
            "maxUnits": 3,
            "minUnits": 2,
            "style": 1,
            "variables": {
                "BonusArmor": 25,
                "BonusMR": 25,
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
                "BonusArmor": 55,
                "BonusMR": 55,
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
                "BonusArmor": 100,
                "BonusMR": 100,
                "Duration": 10,
                "{09b7d38c}": 2,
                "{b44c0eed}": 1
            }
        },
        {
            "maxUnits": 25000,
            "minUnits": 8,
            "style": 5,
            "variables": {
                "BonusArmor": 240,
                "BonusMR": 240,
                "Duration": 10,
                "{09b7d38c}": 2,
                "{b44c0eed}": 1
            }
        }
    ],
    "icon": "/img/season_9/trait/Trait_Icon_9_Bastion.TFT_Set9.png",
    "name": "Bastion"
},
    'Set9_Sorcerer': {
    "apiName": "Set9_Sorcerer",
    "desc": "Sorcerers gain bonus Ability Power.<br><br>When an enemy dies after being damaged by a Sorcerer, they deal a percentage of that enemy's maximum Health to another enemy.<br><br><row>(@MinUnits@) @BonusAP@ %i:scaleAP%; @HealthPct*100@% max %i:scaleHealth%</row><br><row>(@MinUnits@) @BonusAP@ %i:scaleAP%; @HealthPct*100@% max %i:scaleHealth%</row><br><row>(@MinUnits@) @BonusAP@ %i:scaleAP%; @HealthPct*100@% max %i:scaleHealth% to @TargetNum@ enemies</row><br><row>(@MinUnits@) @BonusAP@ %i:scaleAP%; @HealthPct*100@% max %i:scaleHealth% to @TargetNum@ enemies</row>",
    "effects": [
        {
            "maxUnits": 3,
            "minUnits": 2,
            "style": 1,
            "variables": {
                "{08335318}": 1,
                "{6266505a}": 0.10000000149011612,
                "{a34f32df}": 3,
                "{d49caf5d}": 25
            }
        },
        {
            "maxUnits": 5,
            "minUnits": 4,
            "style": 3,
            "variables": {
                "{08335318}": 1,
                "{6266505a}": 0.10000000149011612,
                "{a34f32df}": 3,
                "{d49caf5d}": 50
            }
        },
        {
            "maxUnits": 7,
            "minUnits": 6,
            "style": 4,
            "variables": {
                "{08335318}": 2,
                "{6266505a}": 0.11999999731779099,
                "{a34f32df}": 3,
                "{d49caf5d}": 80
            }
        },
        {
            "maxUnits": 25000,
            "minUnits": 8,
            "style": 5,
            "variables": {
                "{08335318}": 2,
                "{6266505a}": 0.20000000298023224,
                "{a34f32df}": 3,
                "{d49caf5d}": 120
            }
        }
    ],
    "icon": "/img/season_9/trait/Trait_Icon_3_Sorcerer.png",
    "name": "Sorcerer"
},
    'Set9_BandleCity': {
    "apiName": "Set9_BandleCity",
    "desc": "Your units gain @BonusAttackSpeed*100@% Attack Speed per star level.<br><br>If you have three 3-star champions, your Yordles can become 4-star, which gives their Ability a wacky upgrade!<br><br><row>(@MinUnits@) Your strongest 3-star Yordle</row><br><row>(@MinUnits@) Two 3-star Yordles</row><br><br><rules>Ties for most items are broken by the Yordle fielded most recently.</rules>",
    "effects": [
        {
            "maxUnits": 4,
            "minUnits": 3,
            "style": 1,
            "variables": {
                "BonusAttackSpeed": 0.10000000149011612,
                "{25ec78e1}": 1,
                "{7ccd3647}": 15,
                "{852a9a90}": 2,
                "{c235f1f1}": 0.5,
                "{c4b5579c}": 100,
                "{eae1472b}": 1
            }
        },
        {
            "maxUnits": 25000,
            "minUnits": 5,
            "style": 4,
            "variables": {
                "BonusAttackSpeed": 0.10000000149011612,
                "{25ec78e1}": 2,
                "{7ccd3647}": 15,
                "{852a9a90}": 2,
                "{c235f1f1}": 0.5,
                "{c4b5579c}": 100,
                "{eae1472b}": 2
            }
        }
    ],
    "icon": "/img/season_9/trait/Trait_Icon_6_Yordle.png",
    "name": "Yordle"
},
    'Set9_Deadeye': {
    "apiName": "Set9_Deadeye",
    "desc": "<spellPassive>Innate:</spellPassive> +@BonusRange@ Range<br><br>Every @ShotFrequency@ seconds, Deadeyes attack the enemy with the highest percent Health and deal bonus damage.<br><br><expandRow>(@MinUnits@) +@DamageAmp*100@% damage</expandRow>",
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
    "icon": "/img/season_9/trait/Trait_Icon_9_Deadeye.TFT_Set9.png",
    "name": "Deadeye"
},
    'Set9_Void': {
    "apiName": "Set9_Void",
    "desc": "Get a placeable void egg. At the start of combat, it hatches into an unspeakable horror and knocks up adjacent enemies.<br><br>Each Void star level increases the horror's Health and Ability Power by @PercentHealthAPPerStarLevel*100@%. <br><br><row>(@MinUnits@) Void Remora</row><br><row>(@MinUnits@) Rift Herald</row><br><row>(@MinUnits@) Baron Nashor</row>",
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
            "style": 5,
            "variables": {
                "{1eb1d2ae}": 0.25,
                "{a4dcb3da}": 0.4000000059604645
            }
        }
    ],
    "icon": "/img/season_9/trait/Trait_Icon_9_Void.TFT_Set9.png",
    "name": "Void"
},
    'Set9_Demacia': {
    "apiName": "Set9_Demacia",
    "desc": "Your strongest Demacians become Elite and equip a random Radiant item each combat. Elites grant Armor and Magic Resist to themselves and adjacent allies, but this does not stack.<br><br><row>(@MinUnits@) @NumElites@ Elite, +@BonusDefenses@ %i:scaleArmor%, +@BonusDefenses@ %i:scaleMR%</row><br><row>(@MinUnits@) @NumElites@ Elites, +@BonusDefenses@ %i:scaleArmor%, +@BonusDefenses@ %i:scaleMR%</row><br><row>(@MinUnits@) @NumElites@ Elites, +@BonusDefenses@ %i:scaleArmor%, +@BonusDefenses@ %i:scaleMR%</row><br><row>(@MinUnits@) @NumElites@ Elites, +@BonusDefenses@ %i:scaleArmor%, +@BonusDefenses@ %i:scaleMR%</row><br><br><rules>Radiant items are stronger versions of full items.</rules>",
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
                "{bd072701}": 30
            }
        },
        {
            "maxUnits": 8,
            "minUnits": 7,
            "style": 4,
            "variables": {
                "{a750b59f}": 4,
                "{bd072701}": 50
            }
        },
        {
            "maxUnits": 25000,
            "minUnits": 9,
            "style": 5,
            "variables": {
                "{a750b59f}": 6,
                "{bd072701}": 100
            }
        }
    ],
    "icon": "/img/season_9/trait/Trait_Icon_9_Demacia.TFT_Set9.png",
    "name": "Demacia"
},
    'Set9_Rogue': {
    "apiName": "Set9_Rogue",
    "desc": "<row>(@MinUnits@) When a Rogue falls below @HealthThreshold*100@% Health, they briefly become untargetable and dash to an enemy within @HexRange@ hexes (preferring enemy backline).</row><br><row>(@MinUnits@) Additionally, a Rogue's first attack on an enemy bleeds them for @BleedMaxHealthPct*100@% of their max Health as magic damage over @BleedDuration@ seconds.</row>",
    "effects": [
        {
            "maxUnits": 3,
            "minUnits": 2,
            "style": 1,
            "variables": {
                "DamageReduction": 100,
                "HealthThreshold": 0.5,
                "{0bc5955f}": "null",
                "{77df45b0}": "null",
                "{9b1e8f37}": 4,
                "{b1442c34}": 1.5
            }
        },
        {
            "maxUnits": 25000,
            "minUnits": 4,
            "style": 4,
            "variables": {
                "DamageReduction": 100,
                "HealthThreshold": 0.5,
                "{0bc5955f}": 5,
                "{77df45b0}": 0.5,
                "{9b1e8f37}": 4,
                "{b1442c34}": 1.5
            }
        }
    ],
    "icon": "/img/season_9/trait/Trait_Icon_9_Rogue.TFT_Set9.png",
    "name": "Rogue"
},
    'Set9_Slayer': {
    "apiName": "Set9_Slayer",
    "desc": "Slayers gain @Omnivamp@% Omnivamp.<br><br>Slayers deal bonus damage, doubled against units below @HealthThreshold*100@% Health.<br><br><expandRow>(@MinUnits@) +@BonusDamageBase@% bonus damage</expandRow>",
    "effects": [
        {
            "maxUnits": 2,
            "minUnits": 2,
            "style": 1,
            "variables": {
                "BonusDamageBase": 5,
                "HealthThreshold": 0.6600000262260437,
                "{ad16f688}": 12
            }
        },
        {
            "maxUnits": 3,
            "minUnits": 3,
            "style": 3,
            "variables": {
                "BonusDamageBase": 10,
                "HealthThreshold": 0.6600000262260437,
                "{ad16f688}": 12
            }
        },
        {
            "maxUnits": 4,
            "minUnits": 4,
            "style": 3,
            "variables": {
                "BonusDamageBase": 20,
                "HealthThreshold": 0.6600000262260437,
                "{ad16f688}": 12
            }
        },
        {
            "maxUnits": 5,
            "minUnits": 5,
            "style": 4,
            "variables": {
                "BonusDamageBase": 30,
                "HealthThreshold": 0.6600000262260437,
                "{ad16f688}": 12
            }
        },
        {
            "maxUnits": 25000,
            "minUnits": 6,
            "style": 5,
            "variables": {
                "BonusDamageBase": 40,
                "HealthThreshold": 0.6600000262260437,
                "{ad16f688}": 12
            }
        }
    ],
    "icon": "/img/season_9/trait/Trait_Icon_4_Slayer.png",
    "name": "Slayer"
},
    'Set9_Preserver': {
    "apiName": "Set9_Preserver",
    "desc": "Every @TickRate@ seconds, your units gain Mana.<br><br><row>(@MinUnits@) @TeamMana@ %i:scaleMana%</row><br><row>(@MinUnits@) Additional @SelfBonusMana@ to Invokers</row><br><row>(@MinUnits@) @TeamMana@ %i:scaleMana% to all, additional @SelfBonusMana@ to Invokers</row><br>",
    "effects": [
        {
            "maxUnits": 3,
            "minUnits": 2,
            "style": 1,
            "variables": {
                "{2af5ed55}": "null",
                "{471b1a16}": 3,
                "{dd3e2f2b}": 5
            }
        },
        {
            "maxUnits": 5,
            "minUnits": 4,
            "style": 3,
            "variables": {
                "{2af5ed55}": 15,
                "{471b1a16}": 3,
                "{dd3e2f2b}": 5
            }
        },
        {
            "maxUnits": 25000,
            "minUnits": 6,
            "style": 4,
            "variables": {
                "{2af5ed55}": 15,
                "{471b1a16}": 3,
                "{dd3e2f2b}": 20
            }
        }
    ],
    "icon": "/img/season_9/trait/Trait_Icon_9_Preserver.TFT_Set9.png",
    "name": "Invoker"
},
    'Set9_Bruiser': {
    "apiName": "Set9_Bruiser",
    "desc": "Your units gain @TeamFlatHealth@ Health. Bruisers gain additional maximum Health.<br><br><expandRow>(@MinUnits@) +@BonusPercentHealth*100@% max %i:scaleHealth%</expandRow>",
    "effects": [
        {
            "maxUnits": 3,
            "minUnits": 2,
            "style": 1,
            "variables": {
                "{392edb65}": 100,
                "{a92bb347}": 0.10000000149011612
            }
        },
        {
            "maxUnits": 5,
            "minUnits": 4,
            "style": 3,
            "variables": {
                "{392edb65}": 100,
                "{a92bb347}": 0.4000000059604645
            }
        },
        {
            "maxUnits": 25000,
            "minUnits": 6,
            "style": 4,
            "variables": {
                "{392edb65}": 100,
                "{a92bb347}": 0.699999988079071
            }
        }
    ],
    "icon": "/img/season_9/trait/Trait_Icon_6_Bruiser.png",
    "name": "Bruiser"
},
    'Set9_Noxus': {
    "apiName": "Set9_Noxus",
    "desc": "Noxus champions gain Health, Ability Power and Attack Damage. This is increased by @BonusRatio*100@% for each different opponent that either you have conquered in combat or is dead.<br><br><expandRow>(@MinUnits@) @Health@ %i:scaleHealth%, @AP@ %i:scaleAP%, @AD@% %i:scaleAD%</expandRow><br><br><TFTTrackerLabel>Conquered bonus: @TFTUnitProperty.trait:TFT9_Trait_ConquerorBonus@% / @BonusRatio*700@%</TFTTrackerLabel>",
    "effects": [
        {
            "maxUnits": 5,
            "minUnits": 3,
            "style": 1,
            "variables": {
                "AD": 17,
                "AP": 17,
                "Health": 170,
                "{d04ae9af}": 0.05000000074505806
            }
        },
        {
            "maxUnits": 8,
            "minUnits": 6,
            "style": 4,
            "variables": {
                "AD": 34,
                "AP": 34,
                "Health": 340,
                "{d04ae9af}": 0.05000000074505806
            }
        },
        {
            "maxUnits": 25000,
            "minUnits": 9,
            "style": 5,
            "variables": {
                "AD": 60,
                "AP": 60,
                "Health": 600,
                "{d04ae9af}": 0.05000000074505806
            }
        }
    ],
    "icon": "/img/season_9/trait/Trait_Icon_9_Noxus.TFT_Set9.png",
    "name": "Noxus"
},
    'Set9_Shurima': {
    "apiName": "Set9_Shurima",
    "desc": "Every @PulsePeriod@ seconds, Shurimans heal @HealthRegen*100@% maximum Health. After @SecondsToAscend@ seconds, select Shurimans Ascend and gain @BonusHealthPercent*100@% maximum Health and @BonusASPercent*100@% Attack Speed.<br><br><row>(@MinUnits@) The strongest Shuriman Ascends</row><br><row>(@MinUnits@) All Shurimans Ascend</row><br><row>(@MinUnits@) Instead, Ascend at combat start. +@AscensionStrengthBoost*100@% Ascension bonus</row><br><row>(@MinUnits@) Ascend twice, at combat start and after @SecondsToAscend@ seconds. +@AscensionStrengthBoost*100@% Ascension bonus</row>",
    "effects": [
        {
            "maxUnits": 4,
            "minUnits": 3,
            "style": 1,
            "variables": {
                "HealthRegen": 0.05000000074505806,
                "{255e11cd}": 0.44999998807907104,
                "{31128603}": 0.33000001311302185,
                "{473e51f7}": 4,
                "{975a6fed}": 8,
                "{98193878}": "null",
                "{e3dc0fc2}": 2
            }
        },
        {
            "maxUnits": 6,
            "minUnits": 5,
            "style": 3,
            "variables": {
                "HealthRegen": 0.05000000074505806,
                "{255e11cd}": 0.44999998807907104,
                "{31128603}": 0.33000001311302185,
                "{473e51f7}": 4,
                "{975a6fed}": 8,
                "{98193878}": "null",
                "{e3dc0fc2}": 2
            }
        },
        {
            "maxUnits": 8,
            "minUnits": 7,
            "style": 4,
            "variables": {
                "HealthRegen": 0.05000000074505806,
                "{255e11cd}": 0.44999998807907104,
                "{31128603}": 0.33000001311302185,
                "{473e51f7}": 4,
                "{975a6fed}": 8,
                "{98193878}": 0.25,
                "{e3dc0fc2}": 2
            }
        },
        {
            "maxUnits": 25000,
            "minUnits": 9,
            "style": 5,
            "variables": {
                "HealthRegen": 0.05000000074505806,
                "{255e11cd}": 0.44999998807907104,
                "{31128603}": 0.33000001311302185,
                "{473e51f7}": 4,
                "{975a6fed}": 8,
                "{98193878}": 0.25,
                "{e3dc0fc2}": 2
            }
        }
    ],
    "icon": "/img/season_9/trait/Trait_Icon_9_Shurima.TFT_Set9.png",
    "name": "Shurima"
},
    'Set9_Strategist': {
    "apiName": "Set9_Strategist",
    "desc": "<spellPassive>Combat Start:</spellPassive> Allies in the front 2 rows gain a Shield for @ShieldDuration@ seconds. Allies in the back 2 rows gain Ability Power.<br><br><expandRow>(@MinUnits@) @ShieldHP@ Shield; @BonusAP@ %i:scaleAP%</expandRow><br>",
    "effects": [
        {
            "maxUnits": 2,
            "minUnits": 2,
            "style": 1,
            "variables": {
                "ShieldDuration": 15,
                "{9d0939e8}": 200,
                "{d49caf5d}": 15
            }
        },
        {
            "maxUnits": 3,
            "minUnits": 3,
            "style": 3,
            "variables": {
                "ShieldDuration": 15,
                "{9d0939e8}": 350,
                "{d49caf5d}": 25
            }
        },
        {
            "maxUnits": 4,
            "minUnits": 4,
            "style": 4,
            "variables": {
                "ShieldDuration": 15,
                "{9d0939e8}": 500,
                "{d49caf5d}": 40
            }
        },
        {
            "maxUnits": 25000,
            "minUnits": 5,
            "style": 5,
            "variables": {
                "ShieldDuration": 15,
                "{9d0939e8}": 800,
                "{d49caf5d}": 60
            }
        }
    ],
    "icon": "/img/season_9/trait/Trait_Icon_9_Strategist.TFT_Set9.png",
    "name": "Strategist"
},
    'Set9_Redeemer': {
    "apiName": "Set9_Redeemer",
    "desc": "Whenever an ally gains a Shield, Senna grants them @AttackSpeed*100@% stacking Attack Speed for the rest of combat.",
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
    "icon": "/img/season_9/trait/Trait_Icon_9_Mistwalker.TFT_Set9.png",
    "name": "Redeemer"
},
    'Set9_Piltover': {
    "apiName": "Set9_Piltover",
    "desc": "Gain the T-Hex. Every time you lose a player combat, the T-Hex gains Charges. Winning converts the Charges to Power for the T-Hex and grants you loot based on the number of Charges converted.<br><br><row>(@MinUnits@) Gain the T-Hex.</row><br><row>(@MinUnits@) Gain bonus loot every round. Each loss counts as 2 losses instead.</row>",
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
    "icon": "/img/season_9/trait/Trait_Icon_9_Piltover.TFT_Set9.png",
    "name": "Piltover"
},
    'Set9_Multicaster': {
    "apiName": "Set9_Multicaster",
    "desc": "Multicasters cast their Ability multiple times. Bonus casts have @DamageReduction*100@% reduced effectiveness.<br><br><row>(@MinUnits@) @BonusCasts@ extra cast</row><br><row>(@MinUnits@) @BonusCasts@ extra casts</row>",
    "effects": [
        {
            "maxUnits": 3,
            "minUnits": 2,
            "style": 1,
            "variables": {
                "DamageReduction": 0.6600000262260437,
                "{b99088b8}": 1
            }
        },
        {
            "maxUnits": 25000,
            "minUnits": 4,
            "style": 4,
            "variables": {
                "DamageReduction": 0.6600000262260437,
                "{b99088b8}": 2
            }
        }
    ],
    "icon": "/img/season_9/trait/Trait_Icon_9_Multicaster.TFT_Set9.png",
    "name": "Multicaster"
},
    'Set9_Marksman': {
    "apiName": "Set9_Marksman",
    "desc": "When Gunner champions attack, they gain bonus Attack Damage, up to @MaxStacks@ stacks.<br><br><expandRow>(@MinUnits@) @PercentAD@% %i:scaleAD% per stack</expandRow>",
    "effects": [
        {
            "maxUnits": 3,
            "minUnits": 2,
            "style": 1,
            "variables": {
                "MaxStacks": 8,
                "{df3d2f5f}": 6
            }
        },
        {
            "maxUnits": 5,
            "minUnits": 4,
            "style": 4,
            "variables": {
                "MaxStacks": 8,
                "{df3d2f5f}": 12
            }
        },
        {
            "maxUnits": 25000,
            "minUnits": 6,
            "style": 5,
            "variables": {
                "MaxStacks": 8,
                "{df3d2f5f}": 22
            }
        }
    ],
    "icon": "/img/season_9/trait/Trait_Icon_9_Gunner.TFT_Set9.png",
    "name": "Gunner"
},
    'Set9_Empress': {
    "apiName": "Set9_Empress",
    "desc": "When Bel'Veth kills an enemy, they leave behind Void Coral that she will consume. The first Coral increases her maximum Health by @PercentBonusMaxHealth*100@%, while further Coral heals her @PercentHealthHeal*100@% maximum Health.<br><br>When a Void Coral is consumed, she deals @PercentHealthMagicDamage*100@% maximum Health as magic damage to enemies within @HexRange@ hexes.",
    "effects": [
        {
            "maxUnits": 25000,
            "minUnits": 1,
            "style": 4,
            "variables": {
                "PercentHealthHeal": 0.20000000298023224,
                "{0b0b3c63}": 0.5,
                "{1ec4c4d2}": 0.10000000149011612,
                "{9b1e8f37}": 2
            }
        }
    ],
    "icon": "/img/season_9/trait/Trait_Icon_9_Empress.TFT_Set9.png",
    "name": "Empress"
},
    'Set9_ShadowIsles': {
    "apiName": "Set9_ShadowIsles",
    "desc": "After dealing or receiving damage @DamageInstances@ times, Shadow Isles champions gain a Shield for @Duration@ seconds and become Spectral for the rest of combat. Spectral champions gain Mana every second.<br><br><expandRow>(@MinUnits@) @MaxHealthShield@% %i:scaleHealth% Shield, @ManaRegen@ %i:scaleMana%</expandRow>",
    "effects": [
        {
            "maxUnits": 3,
            "minUnits": 2,
            "style": 1,
            "variables": {
                "Duration": 15,
                "{0f5e9c98}": 10,
                "{471b1a16}": 1,
                "{4e39b1d2}": 45,
                "{d8f646f3}": 6
            }
        },
        {
            "maxUnits": 5,
            "minUnits": 4,
            "style": 4,
            "variables": {
                "Duration": 15,
                "{0f5e9c98}": 10,
                "{471b1a16}": 1,
                "{4e39b1d2}": 80,
                "{d8f646f3}": 12
            }
        },
        {
            "maxUnits": 25000,
            "minUnits": 6,
            "style": 5,
            "variables": {
                "Duration": 15,
                "{0f5e9c98}": 10,
                "{471b1a16}": 1,
                "{4e39b1d2}": 115,
                "{d8f646f3}": 18
            }
        }
    ],
    "icon": "/img/season_9/trait/Trait_Icon_9_ShadowIsles.TFT_Set9.png",
    "name": "Shadow Isles"
},
    'Set9_Freljord': {
    "apiName": "Set9_Freljord",
    "desc": "After @DelayTime@ seconds, an ice storm strikes the battlefield. Enemies take a percentage of their maximum Health as true damage and gain debuffs.<br><br><row>(@MinUnits@) @PercentHealthDamage@% %i:scaleHealth%, enemies are @ShredSunder@% <TFTKeyword>Sundered</TFTKeyword> and <TFTKeyword>Shredded</TFTKeyword></row> for @Duration@ seconds<br><row>(@MinUnits@) @PercentHealthDamage@% %i:scaleHealth%, enemies are also @Reave@% <TFTKeyword>Mana Reaved</TFTKeyword></row><br><row>(@MinUnits@) @PercentHealthDamage@% %i:scaleHealth%, enemies are also stunned for @StunDuration@ seconds</row><br><br><rules><tftbold>Sunder</tftbold>: Reduce Armor<br><tftbold>Shred</tftbold>: Reduce Magic Resist<br><tftbold>Mana Reave</tftbold>: Increase max Mana until the next cast</rules>",
    "effects": [
        {
            "maxUnits": 2,
            "minUnits": 2,
            "style": 1,
            "variables": {
                "Duration": 10,
                "PercentHealthDamage": 5,
                "{14adee04}": 40,
                "{17f82fb1}": 8,
                "{81ce23cf}": 1
            }
        },
        {
            "maxUnits": 3,
            "minUnits": 3,
            "style": 4,
            "variables": {
                "Duration": 10,
                "PercentHealthDamage": 10,
                "{17f82fb1}": 8,
                "{5e31469e}": 30,
                "{81ce23cf}": 2
            }
        },
        {
            "maxUnits": 25000,
            "minUnits": 4,
            "style": 5,
            "variables": {
                "Duration": 10,
                "PercentHealthDamage": 15,
                "StunDuration": 1.5,
                "{17f82fb1}": 8,
                "{81ce23cf}": 3
            }
        }
    ],
    "icon": "/img/season_9/trait/Trait_Icon_9_Freljord.TFT_Set9.png",
    "name": "Freljord"
},
    'Set9_Targon': {
    "apiName": "Set9_Targon",
    "desc": "All of your units' healing and shielding is improved.<br><br><expandRow>(@MinUnits@) @HealShieldIncrease*100@% increased healing and shielding </expandRow>",
    "effects": [
        {
            "maxUnits": 2,
            "minUnits": 2,
            "style": 1,
            "variables": {
                "{0b39c7c2}": 0.20000000298023224
            }
        },
        {
            "maxUnits": 3,
            "minUnits": 3,
            "style": 4,
            "variables": {
                "{0b39c7c2}": 0.4000000059604645
            }
        },
        {
            "maxUnits": 25000,
            "minUnits": 4,
            "style": 5,
            "variables": {
                "{0b39c7c2}": 0.699999988079071
            }
        }
    ],
    "icon": "/img/season_9/trait/Trait_Icon_9_Targon.TFT_Set9.png",
    "name": "Targon"
},
    'Set9_Darkin': {
    "apiName": "Set9_Darkin",
    "desc": "When Aatrox or the holder of the Darkin Blade dies, the Darkin Blade is equipped to the nearest allied champion, granting them @BonusHealth@ Health and @BonusOmnivamp*100@% Omnivamp.<br><br>After being equipped to a champion for @RespawnTimer@ seconds, Aatrox will revive upon their death instead.",
    "effects": [
        {
            "maxUnits": 25000,
            "minUnits": 1,
            "style": 4,
            "variables": {
                "BonusHealth": 350,
                "{8bdcd88d}": 0.15000000596046448,
                "{ad17ba74}": 4
            }
        }
    ],
    "icon": "/img/season_9/trait/Trait_Icon_9_Darkin.TFT_Set9.png",
    "name": "Darkin"
},
    'Set9_Wanderer': {
    "apiName": "Set9_Wanderer",
    "desc": "Ryze's spell changes depending on the Region Portal players voted for at the start of the game.",
    "effects": [
        {
            "maxUnits": 25000,
            "minUnits": 1,
            "style": 4,
            "variables": {}
        }
    ],
    "icon": "/img/season_9/trait/Trait_Icon_9_Wanderer.TFT_Set9.png",
    "name": "Wanderer"
},
    'Set9_Zaun': {
    "apiName": "Set9_Zaun",
    "desc": "Zaun champions create random chem-mods that only they can use. Champions can be modded once, and mods can be removed by benching or selling the champion.<br><br><row>(@MinUnits@) Gain 1 chem-mod</row><br><row>(@MinUnits@) Gain 2 chem-mods </row><br><row>(@MinUnits@) Gain 3 chem-mods and Overcharge them</row><br>",
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
                "{dbf68e4f}": "null"
            }
        },
        {
            "maxUnits": 25000,
            "minUnits": 6,
            "style": 5,
            "variables": {
                "{05b87026}": 3,
                "{dbf68e4f}": 1
            }
        }
    ],
    "icon": "/img/season_9/trait/Trait_Icon_9_Zaun.TFT_Set9.png",
    "name": "Zaun"
},
    'Set9_Armorclad': {
    "apiName": "Set9_Armorclad",
    "desc": "Juggernaut champions take less damage as their Health decreases.<br><br><expandRow>(@MinUnits@) @MinDR*100@% to @MaxDR*100@% damage reduction</expandRow>",
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
    "icon": "/img/season_9/trait/Trait_Icon_9_Juggernaut.TFT_Set9.png",
    "name": "Juggernaut"
},
    'Set9_Technogenius': {
    "apiName": "Set9_Technogenius",
    "desc": "Gain a placeable Apex Turret with 3 upgrade slots. Upgrades to the Apex Turret will show up in your shop for @GoldCost@ gold. The Apex Turret shares Heimerdinger's Attack Speed and Ability Power.<br><br><rules>You may only have 1 Apex Turret.</rules>",
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
    "icon": "/img/season_9/trait/Trait_Icon_9_Technogenius.TFT_Set9.png",
    "name": "Technogenius"
},
    'Set9_Challenger': {
    "apiName": "Set9_Challenger",
    "desc": "Challengers gain bonus Attack Speed. When their target dies, Challengers dash to a new target and increase their Attack Speed bonus by @IncreasePct*100@% for @BurstDuration@ seconds.<br><br><expandRow>(@MinUnits@) @BonusAS@% %i:scaleAS%</expandRow>",
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
            "style": 5,
            "variables": {
                "BonusAS": 140,
                "{17cfa971}": 2.5,
                "{89094428}": 0.5
            }
        }
    ],
    "icon": "/img/season_9/trait/Trait_Icon_6_Challenger.png",
    "name": "Challenger"
},
    'Set9_Ionia': {
    "apiName": "Set9_Ionia",
    "desc": "Each Ionian has a unique bonus within their Ability. <br><br>Every @SpiritDuration@ seconds, a number of Ionians are enlightened to their spirit form, gaining @Mana@ mana and doubling stat bonuses for @SpiritDuration@ seconds.<br><br><expandRow>(@MinUnits@) @TooltipBonus*100@% Ionian bonus, @NumberOfSpirits@ enlightened</expandRow>",
    "effects": [
        {
            "maxUnits": 5,
            "minUnits": 3,
            "style": 1,
            "variables": {
                "Mana": 20,
                "{18bfc1ac}": 10,
                "{1b8cd16a}": 20,
                "{27b17444}": 25,
                "{3076bc18}": 4,
                "{3fc62f6f}": 2,
                "{4df03474}": 200,
                "{53912082}": 1,
                "{b9a6ee1b}": 15,
                "{c5f948bd}": 1,
                "{eb0c521b}": 15,
                "{ed124bdb}": 20,
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
                "{18bfc1ac}": 20,
                "{1b8cd16a}": 40,
                "{27b17444}": 50,
                "{3076bc18}": 4,
                "{3fc62f6f}": 2,
                "{4df03474}": 400,
                "{53912082}": 1,
                "{b9a6ee1b}": 30,
                "{c5f948bd}": 2,
                "{eb0c521b}": 30,
                "{ed124bdb}": 40,
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
                "{18bfc1ac}": 32.5,
                "{1b8cd16a}": 65,
                "{27b17444}": 81.25,
                "{3076bc18}": 4,
                "{3fc62f6f}": 2,
                "{4df03474}": 650,
                "{53912082}": 1,
                "{b9a6ee1b}": 48.75,
                "{c5f948bd}": 3,
                "{eb0c521b}": 48.75,
                "{ed124bdb}": 65,
                "{f2474447}": 3.25,
                "{f6b4b588}": 10,
                "{f809601e}": 107.25
            }
        }
    ],
    "icon": "/img/season_9/trait/Trait_Icon_9_Ionia.TFT_Set9.png",
    "name": "Ionia"
}
  }