import { DeepNullable, SplitTwice } from '../../types/utilType';

export const augments_season_10 = {
  "TFT6_Augment_SalvageBin": {
    "apiName": "TFT6_Augment_SalvageBin",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "지금 무작위 완성 아이템을 획득하고 플레이어 전투 @NumRounds@회 후에 조합 아이템을 획득합니다. 챔피언을 판매하면 완성 아이템이 조합 아이템으로 분해됩니다. (전략가의 왕관 제외)",
      "en": "Gain 1 random completed item now, and 1 component after @NumRounds@ player combats. Selling champions breaks completed items into components (excluding Tactician's Crown)."
    },
    "effects": {
      "NumRounds": 7
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Salvage2.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "재활용 쓰레기통",
      "en": "Salvage Bin"
    },
    "unique": false
  },
  "TFT6_Augment_SlowAndSteady": {
    "apiName": "TFT6_Augment_SlowAndSteady",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "지금 @Exp@의 경험치를 획득하고 플레이어 전투 라운드를 시작할 때마다 레벨과 동일한 추가 경험치를 획득합니다. 더는 골드를 사용해 레벨 업할 수 없습니다.",
      "en": "Gain @Exp@ XP now, and bonus XP equal to your level at the start of every player combat round. You can no longer use gold to level up."
    },
    "effects": {
      "EXP": 3
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/SlowAndSteady3.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "진보의 행진",
      "en": "March of Progress"
    },
    "unique": false
  },
  "TFT6_Augment_PortableForge": {
    "apiName": "TFT6_Augment_PortableForge",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "유물 @ArmoryChoiceCount@개 중 하나를 선택합니다.<br><br><rules>유물은 고유한 효과를 지닌 강력한 아이템입니다.</rules>",
      "en": "Choose 1 of @ArmoryChoiceCount@ Artifacts.<br><br><rules>Artifacts are more powerful items with a unique effect.</rules>"
    },
    "effects": {
      "ArmoryChoiceCount": 2
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/PortableForge2.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "휴대용 대장간",
      "en": "Portable Forge"
    },
    "unique": false
  },
  "TFT6_Augment_BinaryAirdrop": {
    "apiName": "TFT6_Augment_BinaryAirdrop",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "전투 시작: 아이템 2개를 보유한 챔피언이 무작위 세 번째 완성 아이템을 획득합니다.<br><br>무작위 조합 아이템 1개를 획득합니다.",
      "en": "Combat start: champions holding 2 items gain a random 3rd completed item.<br><br>Gain 1 random component now."
    },
    "effects": {},
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/BinaryAirdrop3.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "이중 공중 보급",
      "en": "Binary Airdrop"
    },
    "unique": false
  },
  "TFT6_Augment_Recombobulator": {
    "apiName": "TFT6_Augment_Recombobulator",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "전장에 있는 챔피언들이 비용이 1 높은 무작위 챔피언으로 영구히 바뀝니다. 자석 제거기 @NumRemovers@개를 획득합니다.",
      "en": "Champions on your board permanently transform into random champions 1 cost tier higher. Gain @NumRemovers@ Magnetic Removers."
    },
    "effects": {
      "NumRemovers": 2
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Recombobulator-I.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "대격변 생성기",
      "en": "Recombobulator"
    },
    "unique": false
  },
  "TFT9_Augment_JeweledLotus": {
    "apiName": "TFT9_Augment_JeweledLotus",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "아군의 치명타 확률이 @critchance@% 증가하며 스킬에 치명타가 적용될 수 있습니다.",
      "en": "Your team gains @critchance@% Critical Strike chance, and their Abilities can critically strike."
    },
    "effects": {
      "CritChance": 15
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Jeweled-Lotus-II.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "보석 연꽃 II",
      "en": "Jeweled Lotus II"
    },
    "unique": false
  },
  "TFT7_Augment_SacrificialPact": {
    "apiName": "TFT7_Augment_SacrificialPact",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "경험치를 4골드 대신 @HealthCost@의 플레이어 체력으로 구매합니다. 각 플레이어 대상 전투 이전에 체력을 @Heal@만큼 회복합니다.",
      "en": "Buying XP costs @HealthCost@ player health instead of 4 gold. Heal @Heal@ player health before each player combat."
    },
    "effects": {
      "Heal": 3,
      "HealthCost": 6
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Sacrificial-Pact-III.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "잔혹한 계약",
      "en": "Cruel Pact"
    },
    "unique": false
  },
  "TFT6_Augment_ThreesCompany": {
    "apiName": "TFT6_Augment_ThreesCompany",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "무작위 3단계 챔피언 @NumChamps@명을 획득합니다.",
      "en": "Gain @NumChamps@ random 3-cost champions."
    },
    "effects": {
      "NumChamps": 4
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Threes-Company-II.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "삼총사",
      "en": "Three's Company"
    },
    "unique": false
  },
  "TFT7_Augment_LivingForge": {
    "apiName": "TFT7_Augment_LivingForge",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "지금 그리고 플레이어 대상 전투 @NumberOfCombats@번마다 유물 모루를 획득합니다.<br><br><rules>유물은 고유한 효과를 지닌 강력한 아이템입니다.</rules>",
      "en": "Gain an Artifact anvil now and after every @NumberOfCombats@ player combats.<br><br><rules>Artifacts are more powerful items with a unique effect.</rules>"
    },
    "effects": {
      "Numberofcombats": 10
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Living-Forge-III.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "간이 대장간",
      "en": "Living Forge"
    },
    "unique": false
  },
  "TFT7_Augment_AFK": {
    "apiName": "TFT7_Augment_AFK",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "다음 @RoundsToSkip@라운드 동안 아무 행동을 취할 수 없습니다. 이후 @Gold@골드를 얻습니다.",
      "en": "You cannot perform actions for the next @RoundsToSkip@ rounds. Afterwards, gain @Gold@ gold."
    },
    "effects": {
      "Gold": 18,
      "RoundsToSkip": 3
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/AFK-I.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "자리 비움",
      "en": "AFK"
    },
    "unique": false
  },
  "TFT7_Augment_LastStand": {
    "apiName": "TFT7_Augment_LastStand",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "처음으로 탈락할 상황에서 죽음을 모면하고 아군이 영구적으로 @Health@의 체력, @Resists@의 방어력과 마법 저항력, @Omnivamp@%의 모든 피해 흡혈을 얻습니다.",
      "en": "The first time you would be eliminated, you escape death and your team permanently gains @Health@ Health, @Resists@ Armor and Magic Resist, and @Omnivamp@% Omnivamp."
    },
    "effects": {
      "Health": 180,
      "Omnivamp": 18,
      "Resists": 18
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Last-Stand-II.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "최후의 저항",
      "en": "Last Stand"
    },
    "unique": false
  },
  "TFT6_Augment_RichGetRicher": {
    "apiName": "TFT6_Augment_RichGetRicher",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "@Gold@골드를 획득합니다. 최대 이자가 @InterestCap@골드로 증가합니다.<br><br><rules>이자는 저축한 10골드당 추가로 획득하는 골드입니다.</rules>",
      "en": "Gain @Gold@ gold. Your max interest is increased to @InterestCap@.<br><br><rules>Interest is extra gold you gain per 10g saved.</rules>"
    },
    "effects": {
      "Gold": 12,
      "InterestCap": 7
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/RichGetRicher2.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "부익부",
      "en": "Rich Get Richer"
    },
    "unique": false
  },
  "TFT6_Augment_RichGetRicherPlus": {
    "apiName": "TFT6_Augment_RichGetRicherPlus",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "@Gold@골드를 획득합니다. 최대 이자가 @InterestCap@골드로 증가합니다.<br><br><rules>이자는 저축한 10골드당 추가로 획득하는 골드입니다.</rules>",
      "en": "Gain @Gold@ gold. Your max interest is increased to @InterestCap@.<br><br><rules>Interest is extra gold you gain per 10g saved.</rules>"
    },
    "effects": {
      "Gold": 18,
      "InterestCap": 7
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/RichGetRicher2.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "부익부+",
      "en": "Rich Get Richer+"
    },
    "unique": false
  },
  "TFT7_Augment_BirthdayPresents": {
    "apiName": "TFT7_Augment_BirthdayPresents",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "레벨 업할 때마다 2성 챔피언을 획득합니다. 획득하는 챔피언의 단계는 상점 레벨보다 4 낮습니다. (최소 1단계)",
      "en": "Gain a 2-star champion every time you level up. The champion's cost tier is your level minus 4 (min: 1-cost)."
    },
    "effects": {
      "Gold": "null"
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Golden-Gifts-III.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "생일 선물",
      "en": "Birthday Present"
    },
    "unique": false
  },
  "TFT6_Augment_GachaAddict": {
    "apiName": "TFT6_Augment_GachaAddict",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "상점을 새로고침할 때마다 @RerollPercent@% 확률로 무료 새로고침을 획득합니다.",
      "en": "Each time your Shop is rerolled, you have a @RerollPercent@% chance to gain a free reroll."
    },
    "effects": {
      "RerollPercent": 45
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/GoldenTicket3.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "프리즘 티켓",
      "en": "Prismatic Ticket"
    },
    "unique": false
  },
  "TFT9_Augment_SilverTicket": {
    "apiName": "TFT9_Augment_SilverTicket",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "상점을 새로고침할 때마다 @RerollPercent@% 확률로 무료 새로고침을 획득합니다.",
      "en": "Each time your Shop is rerolled, you have a @RerollPercent@% chance to gain a free reroll."
    },
    "effects": {
      "RerollPercent": 30
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/GoldenTicket2.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "골드 티켓",
      "en": "Golden Ticket"
    },
    "unique": false
  },
  "TFT9_Augment_YoungAndWildAndFree": {
    "apiName": "TFT9_Augment_YoungAndWildAndFree",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "공동 선택 라운드에서 언제나 자유롭게 움직일 수 있습니다. @Gold@골드를 획득합니다.",
      "en": "You can always move freely on Carousel rounds. Gain @Gold@ gold."
    },
    "effects": {
      "Gold": 3
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Young-and-wild-and-free-I.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "젊음, 광란, 자유",
      "en": "Young and Wild and Free"
    },
    "unique": false
  },
  "TFT9_Augment_CyberneticBulk2": {
    "apiName": "TFT9_Augment_CyberneticBulk2",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "아이템을 장착한 아군 챔피언이 @health@의 체력을 얻습니다.",
      "en": "Your champions holding an item gain @health@ health."
    },
    "effects": {
      "Health": 333
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Cybernetic-Bulk-II.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "사이버네틱 신체 II",
      "en": "Cybernetic Bulk II"
    },
    "unique": false
  },
  "TFT9_Augment_PhreakyFriday": {
    "apiName": "TFT9_Augment_PhreakyFriday",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "무한한 삼위일체를 획득합니다. 플레이어 전투를 @CombatNum@번 치른 후 무한한 삼위일체를 하나 더 획득합니다.<br><br><rules>무한한 삼위일체: 공격 및 방어 능력치를 막대하게 증가시키는 유물입니다.</rules>",
      "en": "Gain an Infinity Force. After @CombatNum@ player combats, gain another.<br><br><rules>Infinity Force: Artifact that offers tons of offensive and defensive stats</rules>"
    },
    "effects": {
      "CombatNum": 5
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Phreaky-Friday-III.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "이상한 금요일",
      "en": "Phreaky Friday"
    },
    "unique": false
  },
  "TFT9_Augment_CyberneticBulk1": {
    "apiName": "TFT9_Augment_CyberneticBulk1",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "아이템을 장착한 아군 유닛이 @health@의 체력을 얻습니다.",
      "en": "Your champions holding an item gain @health@ Health."
    },
    "effects": {
      "Health": 222
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Cybernetic-Bulk-I.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "사이버네틱 신체 I",
      "en": "Cybernetic Bulk I"
    },
    "unique": false
  },
  "TFT9_Augment_CapriciousForge": {
    "apiName": "TFT9_Augment_CapriciousForge",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "대장장이의 장갑을 획득합니다. 매 라운드 무작위 유물 2개를 장착합니다.<br><br><rules>유물은 고유한 효과를 지닌 강력한 아이템입니다.</rules>",
      "en": "Gain a Blacksmith's Gloves, which equips two random Artifacts each round.<br><br><rules>Artifacts are more powerful items with a unique effect.</rules>"
    },
    "effects": {},
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Prototype-Forge-II.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "변덕스러운 대장간",
      "en": "Capricious Forge"
    },
    "unique": false
  },
  "TFT9_Augment_CyberneticBulk3": {
    "apiName": "TFT9_Augment_CyberneticBulk3",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "아이템을 장착한 아군 챔피언이 @health@의 체력을 얻습니다.",
      "en": "Your champions holding an item gain @health@ health."
    },
    "effects": {
      "Health": 555
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Cybernetic-Bulk-III.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "사이버네틱 신체 III",
      "en": "Cybernetic Bulk III"
    },
    "unique": false
  },
  "TFT9_Augment_StarterKit": {
    "apiName": "TFT9_Augment_StarterKit",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "4단계 챔피언과 더불어, 해당 유닛과 특성이 같은 2성 1단계 챔피언을 획득합니다. <br><br>다음 @FutureChampionCount@번의 스테이지 시작 시 4단계 챔피언을 다시 획득합니다.",
      "en": "Gain a 4-cost champion and a 2-star 1-cost champion that shares a trait with them. <br><br>At the start of the next @FutureChampionCount@ stages, gain that 4-cost champion again."
    },
    "effects": {
      "FutureChampionCount": 2
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Starter-Kit-III.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "입문용 키트",
      "en": "Starter Kit"
    },
    "unique": false
  },
  "TFT6_Augment_CyberneticUplink1": {
    "apiName": "TFT6_Augment_CyberneticUplink1",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "아이템을 장착한 아군 챔피언이 @Health@의 체력을 얻고 매초 @ManaRegen@의 마나를 회복합니다.",
      "en": "Your champions holding an item gain @Health@ Health and restore @ManaRegen@ Mana per second."
    },
    "effects": {
      "Health": 80,
      "ManaRegen": 2
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Cybernetic-Uplink-I.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "사이버네틱 통신 I",
      "en": "Cybernetic Uplink I"
    },
    "unique": false
  },
  "TFT6_Augment_CyberneticUplink2": {
    "apiName": "TFT6_Augment_CyberneticUplink2",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "아이템을 장착한 아군 챔피언이 @Health@의 체력을 얻고 매초 @ManaRegen@의 마나를 회복합니다.",
      "en": "Your champions holding an item gain @Health@ Health and restore @ManaRegen@ Mana per second."
    },
    "effects": {
      "Health": 120,
      "ManaRegen": 2.5
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Cybernetic-Uplink-II.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "사이버네틱 통신 II",
      "en": "Cybernetic Uplink II"
    },
    "unique": false
  },
  "TFT9_Augment_LongTimeCrafting": {
    "apiName": "TFT9_Augment_LongTimeCrafting",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "플레이어 대상 전투를 @NumberOfCombats@번 치른 후 유물 모루를 획득합니다. <br><br><rules>모루가 4가지 선택지를 제시합니다. 유물은 고유한 효과를 지닌 강력한 아이템입니다.</rules>",
      "en": "After @NumberOfCombats@ player combats, gain an Artifact anvil. <br><br><rules>The anvil offers 4 choices. Artifacts are more powerful items with a unique effect.</rules>"
    },
    "effects": {
      "Numberofcombats": 8
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Long-time-Crafting-I.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "신중한 제작",
      "en": "Latent Forge"
    },
    "unique": false
  },
  "TFT6_Augment_CyberneticUplink3": {
    "apiName": "TFT6_Augment_CyberneticUplink3",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "아이템을 장착한 아군 챔피언이 @Health@의 체력을 얻고 매초 @ManaRegen@의 마나를 회복합니다.",
      "en": "Your champions holding an item gain @Health@ Health and restore @ManaRegen@ Mana per second."
    },
    "effects": {
      "Health": 200,
      "ManaRegen": 3.5
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Cybernetic-Uplink-III.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "사이버네틱 통신 III",
      "en": "Cybernetic Uplink III"
    },
    "unique": false
  },
  "TFT9_Augment_Formation2": {
    "apiName": "TFT9_Augment_Formation2",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "전투 시작 시 같은 열에 챔피언이 3명 이상 있으면 방어력 및 마법 저항력이 @armor@ 증가합니다. ",
      "en": "If you have 3 or more champions in the same row at the start of combat, they all gain @armor@ Armor and Magic Resist. "
    },
    "effects": {
      "Armor": 25,
      "MR": 25
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Red-Rover-II.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "단결 II",
      "en": "Unified Resistance II"
    },
    "unique": false
  },
  "TFT9_Augment_TonsOfStats": {
    "apiName": "TFT9_Augment_TonsOfStats",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "아군이 체력 @Health@, 공격력 @AttackDamage@%, 주문력 @AbilityPower@, 방어력 @Armor@, 마법 저항력 @MR@, 공격 속도 @AttackSpeed@%, @Mana@의 마나를 획득합니다.",
      "en": "Your team gains @Health@ Health, @AttackDamage@% Attack Damage, @AbilityPower@ Ability Power, @Armor@ Armor, @MR@ Magic Resist, @AttackSpeed@% Attack Speed, and @Mana@ Mana."
    },
    "effects": {
      "AbilityPower": 4,
      "Armor": 4,
      "AttackDamage": 4,
      "AttackSpeed": 4,
      "Health": 44,
      "MR": 4,
      "Mana": 4
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Tons-of-Stats-II.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "엄청나게 이로운 효과!",
      "en": "Tons of Stats!"
    },
    "unique": false
  },
  "TFT9_Augment_Formation1": {
    "apiName": "TFT9_Augment_Formation1",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "전투 시작 시 같은 열에 챔피언이 3명 이상 있으면 방어력 및 마법 저항력이 @armor@ 증가합니다. ",
      "en": "If you have 3 or more champions in the same row at the start of combat, they all gain @armor@ Armor and Magic Resist. "
    },
    "effects": {
      "Armor": 15,
      "MR": 15
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Red-Rover-I.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "단결 I",
      "en": "Unified Resistance I"
    },
    "unique": false
  },
  "TFT9_Augment_SilverSpoon": {
    "apiName": "TFT9_Augment_SilverSpoon",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "@Experience@의 경험치를 획득합니다.<br>",
      "en": "Gain @Experience@ XP.<br>"
    },
    "effects": {
      "Experience": 10
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Silver-Spoon-I.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "은수저",
      "en": "Silver Spoon"
    },
    "unique": false
  },
  "TFT9_Augment_CustomerIsAlwaysRight": {
    "apiName": "TFT9_Augment_CustomerIsAlwaysRight",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "조합 아이템을 얻을 때마다 조합 아이템 모루를 대신 획득합니다. 무작위 조합 아이템을 획득합니다.<br><br><rules>모루가 4가지 선택지를 제시합니다.</rules>",
      "en": "Whenever you would get a component, gain a component anvil instead. Gain a random component.<br><br><rules>The anvil offers 4 choices.</rules>"
    },
    "effects": {},
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/The-customer-is-always-right-I.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "입맛대로 고르는 부품",
      "en": "Component Buffet"
    },
    "unique": false
  },
  "TFT9_Augment_IronAssets": {
    "apiName": "TFT9_Augment_IronAssets",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "조합 아이템 모루와 @Gold@골드를 획득합니다.<br><br><rules>모루가 4가지 선택지를 제시합니다.</rules>",
      "en": "Gain a component anvil and @Gold@ gold.<br><br><rules>The anvil offers 4 choices.</rules>"
    },
    "effects": {
      "Gold": 4
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Iron-Assets-I.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "유용한 금속",
      "en": "Iron Assets"
    },
    "unique": false
  },
  "TFT9_Augment_OnARoll": {
    "apiName": "TFT9_Augment_OnARoll",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "챔피언을 업그레이드할 때마다 해당 라운드에 무료 상점 새로고침 기회를 최대 @TurnLimit@번 획득합니다. @Gold@골드를 획득합니다.",
      "en": "Whenever you star up a champion, gain up to @TurnLimit@ free Shop rerolls per round. Gain @Gold@ gold."
    },
    "effects": {
      "Gold": 2,
      "TurnLimit": 2
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/On-a-Roll-I.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "승승장구",
      "en": "On a Roll"
    },
    "unique": false
  },
  "TFT9_Augment_StarsAreBorn": {
    "apiName": "TFT9_Augment_StarsAreBorn",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "처음 구매하는 1단계 및 2단계 챔피언이 즉시 2성으로 업그레이드됩니다. @Gold@골드를 획득합니다.",
      "en": "The first 1-cost and 2-cost champions you buy are instantly upgraded to 2-star. Gain @Gold@ gold."
    },
    "effects": {
      "Gold": 1
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Stars-are-born-II.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "별들의 탄생",
      "en": "Stars are Born"
    },
    "unique": false
  },
  "TFT9_Augment_ImpromptuInventions": {
    "apiName": "TFT9_Augment_ImpromptuInventions",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "전투 시작: 장착 중인 최대 @MaxComponents@개의 조합 아이템이 전투가 끝날 때까지 완성 아이템으로 변합니다. 다음 @NumStages@번의 스테이지 시작 시 조합 아이템을 획득합니다.",
      "en": "Combat start: Up to @MaxComponents@ equipped components turn into completed items for the rest of combat. Gain a component at the start of the next @NumStages@ stages."
    },
    "effects": {
      "MaxComponents": 5,
      "NumStages": 2
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Impromptu-Invention-II.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "고물상의 발명품",
      "en": "Scrappy Inventions"
    },
    "unique": false
  },
  "TFT9_Augment_OneTwosThree": {
    "apiName": "TFT9_Augment_OneTwosThree",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "1단계 챔피언 @tier1champs@명, 2단계 챔피언 @numchamps@명, 3단계 챔피언 1명을 획득합니다.",
      "en": "Gain @tier1champs@ 1-cost champion, @numchamps@ 2-cost champions, and 1 3-cost champion."
    },
    "effects": {
      "NumChamps": 2,
      "{02812a48}": 3
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Threes-Company-I.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "하나, 둘, 셋",
      "en": "Ones Twos Three"
    },
    "unique": false
  },
  "TFT9_Augment_IndomitableWill": {
    "apiName": "TFT9_Augment_IndomitableWill",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "아군이 처치 관여 시 모든 해로운 효과를 제거하고 @duration@초 동안 군중 제어기에 면역이 됩니다.",
      "en": "When your team scores a takedown, they shed all negative effects and become immune to crowd control for @duration@ seconds."
    },
    "effects": {
      "Duration": 10
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Indomitable-Will-I.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "불굴의 의지",
      "en": "Indomitable Will"
    },
    "unique": false
  },
  "TFT9_Augment_FinalReserves": {
    "apiName": "TFT9_Augment_FinalReserves",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "처음으로 탈락할 상황에서 생존합니다. 이 효과가 발동된 후, @xp@의 경험치를 획득하고 골드 잔액을 @gold@골드로 조정합니다. 골드 초과분은 경험치로 전환됩니다.",
      "en": "The first time you would be eliminated, you instead remain alive. After this happens, gain @xp@ XP and set your gold to @gold@. Excess gold is converted to XP."
    },
    "effects": {
      "Gold": 50,
      "XP": 70,
      "{9652277e}": 1
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Final-Reserves-III.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "최후의 보루",
      "en": "Final Reserves"
    },
    "unique": false
  },
  "TFT9_Augment_MissedConnections": {
    "apiName": "TFT9_Augment_MissedConnections",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "1단계 챔피언의 복사본을 1명씩 획득합니다.",
      "en": "Gain a copy of each 1-cost champion."
    },
    "effects": {},
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Missed-Connections-I.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "연결 불가",
      "en": "Missed Connections"
    },
    "unique": false
  },
  "TFT9_Augment_Infusion": {
    "apiName": "TFT9_Augment_Infusion",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "아군이 @Interval@초마다 마나를 @Mana@ 회복합니다.",
      "en": "Your team restores @Mana@ Mana every @Interval@ seconds."
    },
    "effects": {
      "Interval": 5,
      "Mana": 20
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Infusion-II.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "마력 집중",
      "en": "Infusion"
    },
    "unique": false
  },
  "TFT9_Augment_RollTheDice": {
    "apiName": "TFT9_Augment_RollTheDice",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "장난꾸러기의 장갑을 획득합니다. 장난꾸러기의 장갑은 라운드마다 두 개의 무작위 찬란한 아이템을 장착시킵니다.<br><br><rules>찬란한 아이템은 매우 강력한 완성 아이템입니다.</rules>",
      "en": "Gain a Rascal's Gloves item. This equips 2 random Radiant items every round.<br><br><rules>Radiant items are very powerful versions of completed items.</rules>"
    },
    "effects": {},
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Roll-the-Dice-III.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "주사위 던지기",
      "en": "Roll The Dice"
    },
    "unique": false
  },
  "TFT9_Augment_WhatTheForge": {
    "apiName": "TFT9_Augment_WhatTheForge",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "보유 완성 아이템이 무작위 유물로 재련됩니다. (전략가의 왕관, 상징 제외) 챔피언들이 장착한 유물 하나당 @Health@의 체력을 얻습니다.",
      "en": "Completed items you own (except Tactician's Crown and Emblems) are transformed into random Artifacts. Champions gain @Health@ Health per equipped Artifact."
    },
    "effects": {
      "Health": 110
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/What-The-Forge-III.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "모루가 물렁해질 노릇",
      "en": "What The Forge"
    },
    "unique": false
  },
  "TFT9_Augment_Sleightofhand": {
    "apiName": "TFT9_Augment_Sleightofhand",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "도적의 장갑을 획득합니다. 도적의 장갑을 장착한 챔피언의 체력이 @Health@, 공격 속도가 @AS@% 증가합니다.",
      "en": "Gain a Thief's Gloves. Champions holding this item gain @Health@ Health and @AS@% Attack Speed."
    },
    "effects": {
      "AS": 20,
      "Health": 200
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Sleight-of-Hand-II.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "현란한 손놀림",
      "en": "Sleight of Hand"
    },
    "unique": false
  },
  "TFT9_Augment_BloodMoney": {
    "apiName": "TFT9_Augment_BloodMoney",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "전략가가 체력을 @HealthPerGold@ 잃을 때마다 @Gold@골드를 획득합니다.",
      "en": "Gain @Gold@ gold per @HealthPerGold@ Health your Tactician loses."
    },
    "effects": {
      "Gold": 3,
      "HealthPerGold": 10
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Blood-Money-I.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "목숨값",
      "en": "Blood Money"
    },
    "unique": false
  },
  "TFT9_Augment_ACutAbove": {
    "apiName": "TFT9_Augment_ACutAbove",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "죽음의 검을 획득합니다. 죽음의 검을 장착한 챔피언이 적을 처치 시 @ProcChance*100@% 확률로 @Gold@골드를 획득합니다.",
      "en": "Gain a Deathblade. Champions holding this item have a @ProcChance*100@% chance to drop @Gold@ gold on kill."
    },
    "effects": {
      "Gold": 1,
      "ProcChance": 0.20000000298023224
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/A-Cut-Above-II.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "한 수 위",
      "en": "A Cut Above"
    },
    "unique": false
  },
  "TFT9_Augment_Idealism": {
    "apiName": "TFT9_Augment_Idealism",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "정의의 손길을 획득합니다. 정의의 손길을 장착한 챔피언의 피해량이 @DamageAmp*100@% 증가합니다.",
      "en": "Gain a Hand of Justice. Champions holding this item deal @DamageAmp*100@% increased damage."
    },
    "effects": {
      "DamageAmp": 0.11999999731779099
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Idealism-II.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "이상주의",
      "en": "Idealism"
    },
    "unique": false
  },
  "TFT9_Augment_HealingOrbsI": {
    "apiName": "TFT9_Augment_HealingOrbsI",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "적이 사망하면 가장 가까운 아군이 체력을 @Heal@ 회복합니다.",
      "en": "When an enemy dies, the nearest ally is healed for @Heal@."
    },
    "effects": {
      "Heal": 225
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Healing-Orbs-I.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "회복의 구 I",
      "en": "Healing Orbs I"
    },
    "unique": false
  },
  "TFT9_Augment_HealingOrbsII": {
    "apiName": "TFT9_Augment_HealingOrbsII",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "적이 사망하면 가장 가까운 아군이 체력을 @Heal@ 회복합니다.",
      "en": "When an enemy dies, the nearest ally is healed for @Heal@."
    },
    "effects": {
      "Heal": 450
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Healing-Orbs-II.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "회복의 구 II",
      "en": "Healing Orbs II"
    },
    "unique": false
  },
  "TFT9_Augment_GargantuanResolve": {
    "apiName": "TFT9_Augment_GargantuanResolve",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "거인의 결의를 획득합니다. 아군이 장착한 거인의 결의가 25회가 아닌 @MaxStacks@회까지 중첩됩니다.",
      "en": "Gain a Titan's Resolve. Your Titan's Resolves can continue stacking to @MaxStacks@ instead of 25."
    },
    "effects": {
      "MaxStacks": 40
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Gargantuan-Resolve-II.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "위대한 결의",
      "en": "Gargantuan Resolve"
    },
    "unique": false
  },
  "TFT9_Augment_GiftsFromTheFallen": {
    "apiName": "TFT9_Augment_GiftsFromTheFallen",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "아군의 공격력이 @AD@%, 주문력이 @ap@, 방어력이 @Armor@, 마법 저항력이 @MR@ 증가합니다. <br><br>아군이 죽을 때마다 능력치가 다시 증가합니다.",
      "en": "Your team gains @AD@% Attack Damage, @ap@ Ability Power, @Armor@ Armor, and @MR@ Magic Resist. <br><br>Each time an ally dies, gain these stats again."
    },
    "effects": {
      "AD": 3,
      "AP": 3,
      "Armor": 3,
      "MR": 3
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Gifts-from-the-Fallen-II.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "망자의 선물",
      "en": "Gifts from the Fallen"
    },
    "unique": false
  },
  "TFT9_Augment_HedgeFund": {
    "apiName": "TFT9_Augment_HedgeFund",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "@Gold@골드를 획득합니다. 최대 이자가 @InterestCap@골드로 증가합니다.<br><br><rules>이자는 저축한 10골드당 추가로 획득하는 골드입니다.</rules>",
      "en": "Gain @Gold@ gold. Your max interest is increased to @InterestCap@.<br><br><rules>Interest is extra gold you gain per 10g saved.</rules>"
    },
    "effects": {
      "Gold": 20,
      "InterestCap": 10
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/RichGetRicher3.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "헤지 펀드",
      "en": "Hedge Fund"
    },
    "unique": false
  },
  "TFT9_Augment_HedgeFundPlus": {
    "apiName": "TFT9_Augment_HedgeFundPlus",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "@Gold@골드를 획득합니다. 최대 이자가 @InterestCap@골드로 증가합니다.<br><br><rules>이자는 저축한 10골드당 추가로 획득하는 골드입니다.</rules>",
      "en": "Gain @Gold@ gold. Your max interest is increased to @InterestCap@.<br><br><rules>Interest is extra gold you gain per 10g saved.</rules>"
    },
    "effects": {
      "Gold": 30,
      "InterestCap": 10
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/RichGetRicher3.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "헤지 펀드+",
      "en": "Hedge Fund+"
    },
    "unique": false
  },
  "TFT9_Augment_Martyr": {
    "apiName": "TFT9_Augment_Martyr",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "아군이 죽을 때마다 모든 아군이 최대 체력의 @Missinghealth@%만큼 회복합니다.",
      "en": "Whenever one of your allies die, your team heals for @Missinghealth@% of their max Health."
    },
    "effects": {
      "Missinghealth": 9
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Martyr-II.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "순교자",
      "en": "Martyr"
    },
    "unique": false
  },
  "TFT9_Augment_LongDistanceRelationship2": {
    "apiName": "TFT9_Augment_LongDistanceRelationship2",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "전투 시작: 서로 가장 멀리 떨어진 아군 유닛 2명이 유대를 형성해 방어력, 마법 저항력, 공격력, 주문력의 @PercentShare*100@%를 서로 공유합니다.",
      "en": "Combat start: Your 2 units furthest from each other form a bond, sharing @PercentShare*100@% of their Armor, Magic Resist, Attack Damage, and Ability Power with each other."
    },
    "effects": {
      "PercentShare": 0.20000000298023224
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Long-Distance-Relationship-II.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "먼 친구",
      "en": "Long Distance Pals"
    },
    "unique": false
  },
  "TFT9_Augment_Contagion": {
    "apiName": "TFT9_Augment_Contagion",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "전투 시작: 체력이 가장 높은 적이 받는 피해를 @DamageAmp*100@% 증가시킵니다. 이 효과는 @SpreadTimer@초가 지날 때마다 주변 @SpreadTargets@명의 적에게 전염됩니다.",
      "en": "Combat start: The highest Health enemy takes @DamageAmp*100@% more damage. Every @SpreadTimer@ seconds, this effect spreads to @SpreadTargets@ nearby enemies."
    },
    "effects": {
      "DamageAmp": 0.18000000715255737,
      "SpreadTargets": 2,
      "SpreadTimer": 5
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Contagion-II.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "전염",
      "en": "Contagion"
    },
    "unique": false
  },
  "TFT9_Augment_GreaterJeweledLotus": {
    "apiName": "TFT9_Augment_GreaterJeweledLotus",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "아군의 치명타 확률이 @critchance@% 증가하며 스킬에 치명타가 적용될 수 있습니다.",
      "en": "Your team gains @critchance@% Critical Strike chance, and their Abilities can critically strike."
    },
    "effects": {
      "CritChance": 40
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Jeweled-Lotus-III.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "보석 연꽃 III",
      "en": "Jeweled Lotus III"
    },
    "unique": false
  },
  "TFT9_Augment_BronzeTicket": {
    "apiName": "TFT9_Augment_BronzeTicket",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "상점을 @RollNumber@번 새로고칠 때마다 무료 상점 새로고침 기회를 획득합니다.",
      "en": "Gain a free Shop reroll after every @RollNumber@ rerolls."
    },
    "effects": {
      "RollNumber": 4
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/GoldenTicket1.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "실버 티켓",
      "en": "Silver Ticket"
    },
    "unique": false
  },
  "TFT9_Augment_BuildingACollection": {
    "apiName": "TFT9_Augment_BuildingACollection",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "다음 @roundsofbonusitems@번의 라운드 시작 시 무작위 조합 아이템을 획득합니다. (이번 라운드 포함)",
      "en": "Gain a random item component at the start of the next @roundsofbonusitems@ rounds (including this round)."
    },
    "effects": {
      "Gold": "null",
      "roundsofbonusitems": 2
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Buried-Treasures-I.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "파묻힌 보물 I",
      "en": "Buried Treasures I"
    },
    "unique": false
  },
  "TFT9_Augment_BuildingACollectionPlus": {
    "apiName": "TFT9_Augment_BuildingACollectionPlus",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "다음 @roundsofbonusitems@번의 라운드 시작 시 무작위 조합 아이템을 획득합니다. (이번 라운드 포함)",
      "en": "Gain a random item component at the start of the next @roundsofbonusitems@ rounds (including this round)."
    },
    "effects": {
      "Gold": "null",
      "roundsofbonusitems": 3
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Buried-Treasures-II.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "파묻힌 보물 II",
      "en": "Buried Treasures II"
    },
    "unique": false
  },
  "TFT9_Augment_BuildingACollectionPlusPlus": {
    "apiName": "TFT9_Augment_BuildingACollectionPlusPlus",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "다음 @roundsofbonusitems@번의 라운드 시작 시 무작위 조합 아이템을 획득합니다. (이번 라운드 포함)",
      "en": "Gain a random item component at the start of the next @roundsofbonusitems@ rounds (including this round)."
    },
    "effects": {
      "Gold": "null",
      "roundsofbonusitems": 6
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Buried-Treasures-III.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "파묻힌 보물 III",
      "en": "Buried Treasures III"
    },
    "unique": false
  },
  "TFT9_Augment_KnowYourEnemy": {
    "apiName": "TFT9_Augment_KnowYourEnemy",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "아군의 피해량이 @BaseDamageAmp@% 증가합니다.<br><br>상대와 같은 특성을 활성화한 경우 피해량이 @FullDamageAmp@% 증가합니다.",
      "en": "Your team deals @BaseDamageAmp@% more damage.<br><br>Deal @FullDamageAmp@% more damage instead if you and your opponent have any of the same traits active."
    },
    "effects": {
      "BaseDamageAmp": 10,
      "FullDamageAmp": 15
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Know-Your-Enemy-II.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "적을 알라",
      "en": "Know Your Enemy"
    },
    "unique": false
  },
  "TFT6_Augment_TinyTitans": {
    "apiName": "TFT6_Augment_TinyTitans",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "현재 및 최대 플레이어 체력이 @heal@ 증가합니다.",
      "en": "Increase your current and maximum player health by @heal@."
    },
    "effects": {
      "Heal": 30
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Tiny-Titans-I.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "꼬마 거인",
      "en": "Tiny Titans"
    },
    "unique": false
  },
  "TFT6_Augment_MetabolicAccelerator": {
    "apiName": "TFT6_Augment_MetabolicAccelerator",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "플레이어 대상 전투가 끝날 때마다 @Heal@의 플레이어 체력을 얻습니다. 또한 전략가의 이동 속도가 증가합니다.",
      "en": "Gain @Heal@ player health after every player combat. Your Tactician also moves faster."
    },
    "effects": {
      "Heal": 2
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/MetabolicAccel2.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "대사 촉진제",
      "en": "Metabolic Accelerator"
    },
    "unique": false
  },
  "TFT9_Augment_Harmacist1": {
    "apiName": "TFT9_Augment_Harmacist1",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "아군이 @Omnivamp@%의 모든 피해 흡혈을 얻고, 다음 기본 공격 시 체력 회복 초과분의 @Conversion@%에 해당하는 고정 피해를 입힙니다.<br><br><rules>(모든 피해 흡혈: 입힌 모든 피해 비례 체력 회복)</rules>",
      "en": "Your team has @Omnivamp@% Omnivamp and converts @Conversion@% of excess healing to true damage on their next attack.<br><br><rules>(Omnivamp: healing for a percent of damage dealt)</rules>"
    },
    "effects": {
      "Conversion": 20,
      "Omnivamp": 10
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Harmacist-1-2-3-I.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "살인술사 I",
      "en": "Harmacist I"
    },
    "unique": false
  },
  "TFT9_Augment_Harmacist2": {
    "apiName": "TFT9_Augment_Harmacist2",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "아군이 @Omnivamp@%의 모든 피해 흡혈을 얻고, 다음 기본 공격 시 체력 회복 초과분의 @Conversion@%에 해당하는 고정 피해를 입힙니다.<br><br><rules>(모든 피해 흡혈: 입힌 모든 피해 비례 체력 회복)</rules>",
      "en": "Your team has @Omnivamp@% Omnivamp and converts @Conversion@% of excess healing to true damage on their next attack.<br><br><rules>(Omnivamp: healing for a percent of damage dealt)</rules>"
    },
    "effects": {
      "Conversion": 25,
      "Omnivamp": 15
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Harmacist-1-2-3-II.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "살인술사 II",
      "en": "Harmacist II"
    },
    "unique": false
  },
  "TFT9_Augment_Harmacist3": {
    "apiName": "TFT9_Augment_Harmacist3",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "아군이 @Omnivamp@%의 모든 피해 흡혈을 얻고, 다음 기본 공격 시 체력 회복 초과분의 @Conversion@%에 해당하는 고정 피해를 입힙니다.<br><br><rules>(모든 피해 흡혈: 입힌 모든 피해 비례 체력 회복)</rules>",
      "en": "Your team has @Omnivamp@% Omnivamp and converts @Conversion@% of excess healing to true damage on their next attack.<br><br><rules>(Omnivamp: healing for a percent of damage dealt)</rules>"
    },
    "effects": {
      "Conversion": 30,
      "Omnivamp": 25
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Harmacist-1-2-3-III.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "살인술사 III",
      "en": "Harmacist III"
    },
    "unique": false
  },
  "TFT6_Augment_PandorasItems": {
    "apiName": "TFT6_Augment_PandorasItems",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "라운드 시작: 대기석의 아이템이 무작위로 변합니다. (전략가의 왕관과 뒤집개 제외) <br><br>무작위 조합 아이템 @NumComponents@개를 획득합니다.",
      "en": "Round start: items on your bench are randomized (except Tactician's Crown and Spatula). <br><br>Gain @NumComponents@ random component."
    },
    "effects": {
      "NumComponents": 1
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Pandora1.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "판도라의 아이템",
      "en": "Pandora's Items"
    },
    "unique": false
  },
  "TFT9_Augment_PandorasRadiantBox": {
    "apiName": "TFT9_Augment_PandorasRadiantBox",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "라운드 시작: 대기석의 아이템이 무작위로 변합니다. (전략가의 왕관, 뒤집개 제외) <br><br>무작위 찬란한 아이템 1개를 획득합니다.",
      "en": "Round start: items on your bench are randomized (excluding Tactician's Crown and Spatula). <br><br>Gain 1 random Radiant item."
    },
    "effects": {},
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Pandora3.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "판도라의 아이템 III",
      "en": "Pandora's Items III"
    },
    "unique": false
  },
  "TFT9_Augment_PandorasItems2": {
    "apiName": "TFT9_Augment_PandorasItems2",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "라운드 시작: 대기석의 아이템이 무작위로 변합니다. (전략가의 왕관, 뒤집개 제외)<br><br>무작위 완성 아이템 @NumCompletedItems@개를 획득합니다.",
      "en": "Round start: items on your bench are randomized (excluding Tactician's Crown and Spatula).<br><br>Gain @NumCompletedItems@ random completed item."
    },
    "effects": {
      "NumCompletedItems": 1,
      "NumComponents": "null"
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Pandora2.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "판도라의 아이템 II",
      "en": "Pandora's Items II"
    },
    "unique": false
  },
  "TFT9_Augment_WhatDoesntKillYou": {
    "apiName": "TFT9_Augment_WhatDoesntKillYou",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "플레이어 대상 전투 패배 후 @Gold@골드를 획득합니다. @RoundsPerComponent@번 패배할 때마다 무작위 조합 아이템을 획득합니다.<br><br><tftitemrules>다음 조합 아이템 획득까지 남은 패배 수: @TFTUnitProperty.item:TFT9_Augment_WhatDoesntKillYou_Counter@</tftitemrules>",
      "en": "Gain @Gold@ gold after losing a player combat. Gain a random component after every @RoundsPerComponent@ losses.<br><br><tftitemrules>Losses until next component: @TFTUnitProperty.item:TFT9_Augment_WhatDoesntKillYou_Counter@</tftitemrules>"
    },
    "effects": {
      "Gold": 2,
      "RoundsPerComponent": 4
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/What-Doesn_t-Kill-You-II.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "죽음의 고통",
      "en": "What Doesn't Kill You"
    },
    "unique": false
  },
  "TFT9_Augment_ArmyBuilding": {
    "apiName": "TFT9_Augment_ArmyBuilding",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "하급 챔피언 복제기를 획득합니다. 플레이어 대상 전투를 @PlayerCombatNum@회 치른 후 다시 획득합니다.<br><br><rules>3단계 이하의 챔피언을 복제할 수 있습니다.</rules>",
      "en": "Gain a Lesser Champion Duplicator. Gain another after @PlayerCombatNum@ player combats.<br><br><rules>This item allows you to copy a 3-cost or less champion.</rules>"
    },
    "effects": {
      "PlayerCombatNum": 7
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Building-an-army-I.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "끈끈한 우정",
      "en": "Team Building"
    },
    "unique": false
  },
  "TFT9_Augment_RiskyMoves": {
    "apiName": "TFT9_Augment_RiskyMoves",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "아군 전략가가 체력을 @Health@ 잃지만, 플레이어 전투를 @PlayerCombatNum@번 치른 후 @Gold@골드를 획득합니다.",
      "en": "Your Tactician loses @Health@ Health, but after @PlayerCombatNum@ player combats, gain @Gold@ gold."
    },
    "effects": {
      "Gold": 30,
      "Health": 20,
      "PlayerCombatNum": 7
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Risky-Moves-I.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "위험한 행보",
      "en": "Risky Moves"
    },
    "unique": false
  },
  "TFT9_Augment_NotToday": {
    "apiName": "TFT9_Augment_NotToday",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "밤의 끝자락을 획득합니다. 밤의 끝자락을 장착한 챔피언의 공격 속도가 @AS@% 증가합니다.",
      "en": "Gain an Edge of Night. Champions holding this item gain @AS@% Attack Speed."
    },
    "effects": {
      "AS": 35
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Not-Today-II.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "오늘은 아니야",
      "en": "Not Today"
    },
    "unique": false
  },
  "TFT6_Augment_OneTwoFive": {
    "apiName": "TFT6_Augment_OneTwoFive",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "무작위 조합 아이템 @NumComponents@개, @Gold@골드, 무작위 5단계 챔피언 @NumChamps@명을 획득합니다.",
      "en": "Gain @NumComponents@ random component, @Gold@ gold, and @NumChamps@ random 5-cost champion."
    },
    "effects": {
      "Gold": 2,
      "NumChamps": 1,
      "NumComponents": 1
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/One-Two-Five-I.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "하나, 둘, 다섯!",
      "en": "One, Two, Five!"
    },
    "unique": false
  },
  "TFT9_Augment_ReturnOnInvestment": {
    "apiName": "TFT9_Augment_ReturnOnInvestment",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "상점을 @RollCount@번 새로고침하면 전략가의 왕관을 획득합니다.<br><br>(이번 게임의 새로고침 횟수: @TFTUnitProperty.item:TFT9_ReturnOnInvestmentRolls@)",
      "en": "When you reroll your Shop @RollCount@ times, gain a Tactician's Crown.<br><br>(Refreshes this game: @TFTUnitProperty.item:TFT9_ReturnOnInvestmentRolls@)"
    },
    "effects": {
      "RollCount": 18
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/GoldReserves2.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "투자 수익률",
      "en": "Return on Investment"
    },
    "unique": false
  },
  "TFT9_Augment_DravenSpoilsOfWar": {
    "apiName": "TFT9_Augment_DravenSpoilsOfWar",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "적 처치 시 @LootDropChance*100@% 확률로 전리품을 획득합니다.",
      "en": "Enemies have a @LootDropChance*100@% chance to drop loot when killed."
    },
    "effects": {
      "LootDropChance": 0.25,
      "{ac7ef35a}": 0.25
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Spoils-Of-War-Legend-I.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "전리품 I",
      "en": "Spoils of War I"
    },
    "unique": false
  },
  "TFT9_Augment_DravenSpoilsOfWar2": {
    "apiName": "TFT9_Augment_DravenSpoilsOfWar2",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "적 처치 시 @LootDropChance*100@% 확률로 전리품을 획득합니다.",
      "en": "Enemies have a @LootDropChance*100@% chance to drop loot when killed."
    },
    "effects": {
      "LootDropChance": 0.30000001192092896,
      "{ac7ef35a}": 0.30000001192092896
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Spoils-Of-War-Legend-II.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "전리품 II",
      "en": "Spoils of War II"
    },
    "unique": false
  },
  "TFT9_Augment_DravenSpoilsOfWar3": {
    "apiName": "TFT9_Augment_DravenSpoilsOfWar3",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "적 처치 시 @LootDropChance*100@% 확률로 전리품을 획득합니다.",
      "en": "Enemies have a @LootDropChance*100@% chance to drop loot when killed."
    },
    "effects": {
      "LootDropChance": 0.4000000059604645,
      "{ac7ef35a}": 0.4000000059604645
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Spoils-Of-War-Legend-III.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "전리품 III",
      "en": "Spoils of War III"
    },
    "unique": false
  },
  "TFT9_Augment_PumpingUp": {
    "apiName": "TFT9_Augment_PumpingUp",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "아군의 공격 속도가 즉시 @BaseAS@% 증가합니다. 매 라운드 종료 후에 효과가 @IncreasePerRound@% 추가로 증가합니다. (현재 공격 속도: @TFTUnitProperty.item:TFT9_PumpingUpRounds@%)",
      "en": "Your team gains @BaseAS@% Attack Speed now. Each round after, they gain @IncreasePerRound@% more. (current Attack Speed: @TFTUnitProperty.item:TFT9_PumpingUpRounds@%)"
    },
    "effects": {
      "BaseAS": 8,
      "IncreasePerRound": 0.5
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Pumping-Up-I.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "준비 운동 I",
      "en": "Pumping Up I"
    },
    "unique": false
  },
  "TFT9_Augment_PumpingUp2": {
    "apiName": "TFT9_Augment_PumpingUp2",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "아군의 공격 속도가 즉시 @BaseAS@% 증가합니다. 매 라운드 종료 후에 효과가 @IncreasePerRound@% 추가로 증가합니다. (현재 공격 속도: @TFTUnitProperty.item:TFT9_PumpingUp2Rounds@%)",
      "en": "Your team gains @BaseAS@% Attack Speed now. Each round after, they gain @IncreasePerRound@% more. (current Attack Speed: @TFTUnitProperty.item:TFT9_PumpingUp2Rounds@%)"
    },
    "effects": {
      "BaseAS": 8,
      "IncreasePerRound": 1
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Pumping-Up-II.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "준비 운동 II",
      "en": "Pumping Up II"
    },
    "unique": false
  },
  "TFT9_Augment_PumpingUp3": {
    "apiName": "TFT9_Augment_PumpingUp3",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "아군의 공격 속도가 즉시 @BaseAS@% 증가합니다. 매 라운드 종료 후에 효과가 @IncreasePerRound@% 추가로 증가합니다. (현재 공격 속도: @TFTUnitProperty.item:TFT9_PumpingUp3Rounds@%)",
      "en": "Your team gains @BaseAS@% Attack Speed now. Each round after, they gain @IncreasePerRound@% more. (current Attack Speed: @TFTUnitProperty.item:TFT9_PumpingUp3Rounds@%)"
    },
    "effects": {
      "BaseAS": 12,
      "IncreasePerRound": 2
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Pumping-Up-III.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "준비 운동 III",
      "en": "Pumping Up III"
    },
    "unique": false
  },
  "TFT9_Augment_TiniestTitan": {
    "apiName": "TFT9_Augment_TiniestTitan",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "플레이어 대상 전투가 끝날 때마다 @Heal@의 플레이어 체력과 @Gold@골드를 얻습니다. 또한 전략가의 이동 속도가 증가합니다.",
      "en": "Gain @Heal@ player health and @Gold@ gold after every player combat. Your Tactician also moves faster."
    },
    "effects": {
      "Gold": 1,
      "Heal": 2
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Tiniest-TitanIII.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "꼬꼬마 거인",
      "en": "Tiniest Titan"
    },
    "unique": false
  },
  "TFT6_Augment_TradeSector": {
    "apiName": "TFT6_Augment_TradeSector",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "라운드마다 무료 상점 새로고침을 획득합니다. @Gold@골드를 획득합니다.",
      "en": "Gain a free Shop reroll every round. Gain @Gold@ gold."
    },
    "effects": {
      "Gold": 2
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Trade2.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "교환의 장",
      "en": "Trade Sector"
    },
    "unique": false
  },
  "TFT6_Augment_MaxLevel10": {
    "apiName": "TFT6_Augment_MaxLevel10",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "경험치를 구매하면 @XP@의 추가 경험치를 얻습니다. 즉시 @InitialXP@의 경험치를 얻습니다.",
      "en": "When you buy XP, gain an additional @XP@. Gain @InitialXP@ immediately."
    },
    "effects": {
      "InitialXP": 8,
      "XP": 2
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/LevelUp3.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "레벨 업!",
      "en": "Level Up!"
    },
    "unique": false
  },
  "TFT9_Augment_DangerousToGoAlone": {
    "apiName": "TFT9_Augment_DangerousToGoAlone",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "챔피언이 죽으면 빈 아이템 칸이 있는 가장 가까운 아군이 죽은 챔피언이 보유한 아이템의 복사본을 일시적으로 획득하고 최대 체력의 @shieldratio*100@%에 해당하는 보호막을 얻습니다.",
      "en": "When a champion dies, the nearest ally with open slots receives a temporary copy of an item they were holding and a @shieldratio*100@% max Health Shield."
    },
    "effects": {
      "ShieldRatio": 0.10000000149011612
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/It_s-Dangerous-to-Go-Alone-I.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "작별 선물",
      "en": "Parting Gifts"
    },
    "unique": false
  },
  "TFT9_Augment_YouHaveMySword": {
    "apiName": "TFT9_Augment_YouHaveMySword",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "B.F. 대검을 획득합니다. 아군 유닛의 공격력이 @AD@% 증가합니다. ",
      "en": "Gain a B.F. Sword. Your units gain @AD@% Attack Damage. "
    },
    "effects": {
      "AD": 15
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/You-Have-My-Sword-II.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "검의 수호자",
      "en": "You Have My Sword"
    },
    "unique": false
  },
  "TFT9_Augment_YouHaveMyBow": {
    "apiName": "TFT9_Augment_YouHaveMyBow",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "곡궁을 획득합니다. 아군 유닛의 공격 속도가 @AS@% 증가합니다. ",
      "en": "Gain a Recurve Bow. Your units gain @AS@% Attack Speed. "
    },
    "effects": {
      "AS": 12
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/You-Have-My-Bow-II.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "활의 수호자",
      "en": "You Have My Bow"
    },
    "unique": false
  },
  "TFT9_Augment_OldMansWalkingStick": {
    "apiName": "TFT9_Augment_OldMansWalkingStick",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "쓸데없이 큰 지팡이를 획득합니다. 아군 유닛의 주문력이 @AP@ 증가합니다.",
      "en": "Gain a Needlessly Large Rod. Your units gain @AP@ Ability Power."
    },
    "effects": {
      "AP": 18
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Old-Man_s-Walking-Stick-II.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "마법 지팡이",
      "en": "Magic Wand"
    },
    "unique": false
  },
  "TFT9_Augment_EscortQuest": {
    "apiName": "TFT9_Augment_EscortQuest",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "훈련 봇을 획득합니다. 훈련 봇이 플레이어 대상 전투에서 생존할 때마다 @Gold@골드를 획득합니다.",
      "en": "Gain a Training Dummy. You gain @Gold@ gold every time it survives player combat."
    },
    "effects": {
      "Gold": 3
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Escort-Quest-II.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "호위 임무",
      "en": "Escort Quest"
    },
    "unique": false
  },
  "TFT9_Augment_ThreesACrowd": {
    "apiName": "TFT9_Augment_ThreesACrowd",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "전장에 배치한 아군 @Tier@단계 챔피언 한 종류당 아군의 체력이 @HealthPerUnit@ 증가합니다.",
      "en": "Your team gains @HealthPerUnit@ Health for each unique @Tier@-cost champion on your board."
    },
    "effects": {
      "HealthPerUnit": 100,
      "Tier": 3
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Three_s-a-Crowd-II.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "셋부터 남남",
      "en": "Three's a Crowd"
    },
    "unique": false
  },
  "TFT9_Augment_TwoHealthy": {
    "apiName": "TFT9_Augment_TwoHealthy",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "전장에 배치한 아군 @Tier@단계 챔피언 한 종류당 아군의 체력이 @HealthPerUnit@ 증가합니다.",
      "en": "Your team gains @HealthPerUnit@ Health for each unique @Tier@-cost champion on your board."
    },
    "effects": {
      "HealthPerUnit": 110,
      "Tier": 2
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Two-Healthy-II.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "건강 또 건강",
      "en": "Two Healthy"
    },
    "unique": false
  },
  "TFT9_Augment_RedBuff": {
    "apiName": "TFT9_Augment_RedBuff",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "아군의 기본 공격이 대상을 태워 @Duration@초 동안 대상 최대 체력의 @BurnPercent@%에 해당하는 피해를 입힙니다. 또한 기본 공격 시 받는 치유 효과를 @HealingReductionPct@% 감소시킵니다.",
      "en": "Your team's attacks burn their targets for @BurnPercent@% of their max Health over @Duration@ seconds. Attacks also reduce their targets' healing received by @HealingReductionPct@%."
    },
    "effects": {
      "BurnPercent": 5,
      "Duration": 5,
      "HealingReductionPct": 33
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Red-Buff-I.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "맹렬한 공세",
      "en": "Blistering Strikes"
    },
    "unique": false
  },
  "TFT9_Augment_MoneyHealsAllWounds": {
    "apiName": "TFT9_Augment_MoneyHealsAllWounds",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "라운드 시작: @GoldPerTurn@골드를 획득합니다. @GoldThreshhold@골드 이상 가지고 있으면 플레이어 체력을 @Health@ 회복합니다.",
      "en": "Round start: Gain @GoldPerTurn@ gold. If you have at least @GoldThreshhold@ gold, heal @Health@ player health."
    },
    "effects": {
      "GoldPerTurn": 3,
      "GoldThreshhold": 40,
      "Health": 2
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Money-Heals-all-Wounds-III.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "건강 관리",
      "en": "Wellness Trust"
    },
    "unique": false
  },
  "TFT9_Augment_LearningFromExperience2": {
    "apiName": "TFT9_Augment_LearningFromExperience2",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "플레이어 전투가 끝나고 승리 시 @winxp@의 경험치, 패배 시 @lossxp@의 경험치를 획득합니다.",
      "en": "After player combat, gain @winxp@ XP if you won or @lossxp@ XP if you lost."
    },
    "effects": {
      "lossxp": 3,
      "winxp": 2
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Learning-From-Experience-II.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "끈질긴 연구",
      "en": "Patient Study"
    },
    "unique": false
  },
  "TFT6_Augment_RadiantRelics": {
    "apiName": "TFT6_Augment_RadiantRelics",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "찬란한 아이템 @ArmoryChoiceCount@개 중 하나를 선택합니다. 자석 제거기를 획득합니다.<br><br><rules>찬란한 아이템은 매우 강력한 완성 아이템입니다.</rules>",
      "en": "Choose 1 of @ArmoryChoiceCount@ Radiant items. Gain a Magnetic Remover.<br><br><rules>Radiant items are very powerful versions of completed items.</rules>"
    },
    "effects": {
      "ArmoryChoiceCount": 5
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/RadiantRelic-III.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "찬란한 유물",
      "en": "Radiant Relics"
    },
    "unique": false
  },
  "TFT6_Augment_ItemGrabBag1": {
    "apiName": "TFT6_Augment_ItemGrabBag1",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "무작위 완성 아이템 @NumItems@개를 획득합니다.",
      "en": "Gain @NumItems@ random completed item."
    },
    "effects": {
      "NumItems": 1
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/ItemGrabBag1.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "아이템 꾸러미 I",
      "en": "Item Grab Bag I"
    },
    "unique": false
  },
  "TFT9_Augment_CombatCaster": {
    "apiName": "TFT9_Augment_CombatCaster",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "아군이 스킬을 사용한 후에 @Duration@초 동안 @shieldamount1@~@shieldamount4@의 피해를 흡수하는 보호막을 얻습니다. 보호막의 흡수량은 라운드가 진행될수록 증가합니다.",
      "en": "Your team gains @shieldamount1@-@shieldamount4@ Shield for @Duration@ seconds after casting their Ability. The Shield amount scales with round of the game."
    },
    "effects": {
      "Duration": 6,
      "ShieldAmount1": 90,
      "ShieldAmount2": 115,
      "ShieldAmount3": 145,
      "ShieldAmount4": 170
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Combat-Caster-II.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "전투 마법사",
      "en": "Combat Caster"
    },
    "unique": false
  },
  "TFT9_Augment_BlindingSpeed": {
    "apiName": "TFT9_Augment_BlindingSpeed",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "붉은 덩굴정령, 구인수의 격노검, 곡궁, 자석 제거기를 획득합니다.<br><br><rules>공격력 기반 원거리 딜러에게 유용합니다!</rules>",
      "en": "Gain a Red Buff, Guinsoo's Rageblade, a Recurve Bow and a Magnetic Remover.<br><br><rules>Useful for Attack Carries!</rules>"
    },
    "effects": {},
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Berserk-III.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "빛의 속도",
      "en": "Blinding Speed"
    },
    "unique": false
  },
  "TFT9_Augment_ImpenetrableBulwark": {
    "apiName": "TFT9_Augment_ImpenetrableBulwark",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "덤불 조끼, 용의 발톱, 거인의 허리띠, 자석 제거기를 획득합니다.<br><br><rules>주문력 기반 탱커 또는 공격력 기반 탱커에게 유용합니다!</rules>",
      "en": "Gain a Bramble Vest, a Dragon's Claw, a Giant's Belt, and a Magnetic Remover.<br><br><rules>Useful for Magic Tanks or Attack Tanks!</rules>"
    },
    "effects": {},
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/StandBehind3.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "난공불락",
      "en": "Impenetrable Bulwark"
    },
    "unique": false
  },
  "TFT9_Augment_UnleashedArcana": {
    "apiName": "TFT9_Augment_UnleashedArcana",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "보석 건틀릿, 라바돈의 죽음모자, 쓸데없이 큰 지팡이, 자석 제거기를 획득합니다.<br><br><rules>주문력 기반 원거리 딜러 또는 주문력 기반 마법사에게 유용합니다!</rules>",
      "en": "Gain a Jeweled Gauntlet, a Rabadon's Deathcap, a Needlessly Large Rod, and a Magnetic Remover.<br><br><rules>Useful for Magic Carries or Magic Casters!</rules>"
    },
    "effects": {},
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/LifelongLearner3.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "풀려난 아르카나",
      "en": "Unleashed Arcana"
    },
    "unique": false
  },
  "TFT9_Augment_OverwhelmingForce": {
    "apiName": "TFT9_Augment_OverwhelmingForce",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "죽음의 검, 무한의 대검, B.F. 대검, 자석 제거기를 획득합니다.<br><br><rules>공격력 기반 원거리 딜러 또는 공격력 기반 전사에게 유용합니다!</rules>",
      "en": "Gain a Deathblade, an Infinity Edge, a BF Sword, and a Magnetic Remover.<br><br><rules>Useful for Attack Carries or Attack Fighters!</rules>"
    },
    "effects": {},
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Eagle-Eye-III.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "압도적인 힘",
      "en": "Overwhelming Force"
    },
    "unique": false
  },
  "TFT7_Augment_Consistency": {
    "apiName": "TFT7_Augment_Consistency",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "연승 골드와 연패 골드를 두 배로 얻습니다.",
      "en": "Gain double win and loss streak gold."
    },
    "effects": {},
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Consistency-I.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "일관성",
      "en": "Consistency"
    },
    "unique": false
  },
  "TFT7_Augment_LategameSpecialist": {
    "apiName": "TFT7_Augment_LategameSpecialist",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "@LevelReq@레벨에 도달하면 @Gold@골드를 획득합니다.",
      "en": "When you reach Level @LevelReq@, gain @Gold@ gold."
    },
    "effects": {
      "Gold": 30,
      "LevelReq": 9
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Late-Game-Specialist-I.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "후반 전문가",
      "en": "Lategame Specialist"
    },
    "unique": false
  },
  "TFT7_Augment_CursedCrown": {
    "apiName": "TFT7_Augment_CursedCrown",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "최대 팀 규모가 @MaxArmySizeIncrease@ 증가하지만, 플레이어 대상 전투 패배 시 플레이어가 받는 피해량이 @PlayerCombatDamageIncrease@% 증가합니다.",
      "en": "Gain +@MaxArmySizeIncrease@ max team size, but take @PlayerCombatDamageIncrease@% more player damage when you lose a player combat."
    },
    "effects": {
      "MaxArmySizeIncrease": 2,
      "PlayerCombatDamageIncrease": 100
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/CursedCrown-III.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "저주받은 왕관",
      "en": "Cursed Crown"
    },
    "unique": false
  },
  "TFT6_Augment_TheGoldenEgg": {
    "apiName": "TFT6_Augment_TheGoldenEgg",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "@EggTurns@턴 후 부화하는 황금 알을 획득합니다. 알이 부화하면 막대한 전리품을 얻습니다. 플레이어 대상 전투에서 승리하면 부화기 타이머를 한 턴만큼 가속합니다.",
      "en": "Gain a golden egg that hatches in @EggTurns@ turns for a huge amount of loot. Winning player combat speeds up the hatch timer by an extra turn."
    },
    "effects": {
      "EggTurns": 11,
      "{ecb4463d}": "null"
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/The-Golden-Egg-III.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "황금 알",
      "en": "The Golden Egg"
    },
    "unique": false
  },
  "TFT9_Augment_HighEndSector": {
    "apiName": "TFT9_Augment_HighEndSector",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "라운드마다 @gold@골드를 획득합니다. 레벨 업하면 레벨과 동일한 수의 무료 상점 새로고침 기회를 얻습니다. 라운드 종료 후에도 사라지지 않습니다.",
      "en": "Gain @gold@ gold per round. When you level up, gain a number of free shop refreshes equal to your level, which carry over between rounds."
    },
    "effects": {
      "Gold": 1,
      "{a9ad6d1b}": 8
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Trade3.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "흥청망청",
      "en": "Shopping Spree"
    },
    "unique": false
  },
  "TFT9_Augment_BardPlaybook1": {
    "apiName": "TFT9_Augment_BardPlaybook1",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "즉시 무작위 @UnitTier@단계 챔피언을 획득합니다. 레벨을 올릴 때마다 동일한 챔피언을 획득합니다.",
      "en": "Gain a random @UnitTier@-cost champion now. Gain the same one again every time you level up."
    },
    "effects": {
      "UnitTier": 2
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Caretaker_s-Chosen-I.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "수호자의 친구",
      "en": "Caretaker's Ally"
    },
    "unique": false
  },
  "TFT9_Augment_BardPlaybook2": {
    "apiName": "TFT9_Augment_BardPlaybook2",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "@levelreqa@, @levelreqb@, @levelreqc@, @levelreqd@레벨에 도달하면 조합 아이템 모루를 획득합니다.<br><br><rules>모루가 4가지 선택지를 제시합니다.</rules>",
      "en": "Gain a component anvil when you reach level @levelreqa@, @levelreqb@, @levelreqc@, and @levelreqd@.<br><br><rules>The anvil offers 4 choices.</rules>"
    },
    "effects": {
      "levelreqa": 5,
      "levelreqb": 6,
      "levelreqc": 7,
      "levelreqd": 8
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Caretaker_s-Chosen-II.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "수호자의 호의",
      "en": "Caretaker's Favor"
    },
    "unique": false
  },
  "TFT9_Augment_BardPlaybook3": {
    "apiName": "TFT9_Augment_BardPlaybook3",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "레벨 업하면 강력한 아이템을 획득합니다.<br>@levelreqa@레벨: 조합 아이템 모루<br>@levelreqb@레벨: 완성 아이템 모루<br>@levelreqc@레벨: 찬란한 아이템 5가지 중 1개 선택",
      "en": "As you level, gain more powerful items.<br>Level @levelreqa@: component anvil<br>Level @levelreqb@: completed item anvil<br>Level @levelreqc@: choose 1 of 5 Radiant items"
    },
    "effects": {
      "levelreqa": 4,
      "levelreqb": 6,
      "levelreqc": 8
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Caretaker_s-Chosen-III.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "수호자의 선택",
      "en": "Caretaker's Chosen"
    },
    "unique": false
  },
  "TFT9_Augment_PhreakyFridayPlus": {
    "apiName": "TFT9_Augment_PhreakyFridayPlus",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "무한한 삼위일체를 획득합니다. 플레이어 전투를 @CombatNum@번 치른 후 무한한 삼위일체를 하나 더 획득합니다.<br><br><rules>무한한 삼위일체: 공격 및 방어 능력치를 막대하게 증가시키는 유물입니다.</rules>",
      "en": "Gain an Infinity Force. After @CombatNum@ player combats, gain another.<br><br><rules>Infinity Force: Artifact that offers tons of offensive and defensive stats</rules>"
    },
    "effects": {
      "CombatNum": 3
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Phreaky-Friday-III.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "이상한 금요일 +",
      "en": "Phreaky Friday +"
    },
    "unique": false
  },
  "TFT9_Augment_InfernalContract": {
    "apiName": "TFT9_Augment_InfernalContract",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "최대 레벨이 7이 됩니다. @augmentgold@골드를 획득합니다.",
      "en": "Your max level is 7. Gain @augmentgold@ gold."
    },
    "effects": {
      "AugmentGold": 75
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Infernal-Contract-III.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "지옥의 계약",
      "en": "Infernal Contract"
    },
    "unique": false
  },
  "TFT9_Augment_CuttingCorners": {
    "apiName": "TFT9_Augment_CuttingCorners",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "레벨 업에 필요한 경험치가 @Experience@ 감소합니다.<br><br><rules>(4레벨에서 5레벨로 올리는 데 필요한 경험치가 10이 아닌 6이 됩니다.)</rules>",
      "en": "Leveling up costs @Experience@ XP less.<br><br><rules>(Level 4 to 5 costs 6 XP instead of 10.)</rules>"
    },
    "effects": {
      "Experience": 4
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Cutting-Corners-I.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "편법",
      "en": "Cutting Corners"
    },
    "unique": false
  },
  "TFT9_Augment_HedgeFundPlusPlus": {
    "apiName": "TFT9_Augment_HedgeFundPlusPlus",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "@Gold@골드를 획득합니다. 최대 이자가 @InterestCap@골드로 증가합니다.<br><br><rules>이자는 저축한 10골드당 추가로 획득하는 골드입니다.</rules>",
      "en": "Gain @Gold@ gold. Your max interest is increased to @InterestCap@.<br><br><rules>Interest is extra gold you gain per 10g saved.</rules>"
    },
    "effects": {
      "Gold": 40,
      "InterestCap": 10
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/RichGetRicher3.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "헤지 펀드++",
      "en": "Hedge Fund++"
    },
    "unique": false
  },
  "TFT8_Augment_SalvageBinPlus": {
    "apiName": "TFT8_Augment_SalvageBinPlus",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "지금 무작위 완성 아이템을 획득하고 플레이어 전투 @NumRounds@회 후에 조합 아이템을 획득합니다. 챔피언을 판매하면 완성 아이템이 조합 아이템으로 분해됩니다. (전략가의 왕관 제외)",
      "en": "Gain 1 random completed item now, and 1 component after @NumRounds@ player combats. Selling champions breaks completed items into components (excluding Tactician's Crown)."
    },
    "effects": {
      "NumRounds": 4
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Salvage2.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "재활용 쓰레기통+",
      "en": "Salvage Bin+"
    },
    "unique": false
  },
  "TFT9_Augment_OneHundredDuckSizedHorses": {
    "apiName": "TFT9_Augment_OneHundredDuckSizedHorses",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "최대 팀 규모가 @TeamSize@ 증가하지만, 유닛이 1개의 아이템만 소지할 수 있고 유닛의 최대 체력이 @HealthReduction*100@% 감소합니다. @Gold@골드를 획득합니다.",
      "en": "Gain +@TeamSize@ maximum team size, but your units can only hold 1 item and their total health is reduced by @HealthReduction*100@%. Gain @Gold@ gold."
    },
    "effects": {
      "Gold": 4,
      "HealthReduction": 0.15000000596046448,
      "TeamSize": 3
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/100-Duck-Sized-Horses-III.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "천군만마",
      "en": "Endless Hordes"
    },
    "unique": false
  },
  "TFT10_Augment_SpellweaverHalftimeShow": {
    "apiName": "TFT10_Augment_SpellweaverHalftimeShow",
    "associatedTraits": [
      "Set10_Spellweaver"
    ],
    "composition": [],
    "desc": {
      "ko": "매 전투에서 주문술사가 스킬을 2번 사용할 때마다 즉시 해당 스킬을 다시 사용하여 @DamagePercent*100@%의 효과를 발휘합니다. 그라가스와 세라핀을 획득합니다.",
      "en": "When your Spellweavers cast their 2nd Ability each combat, they instantly cast it again at @DamagePercent*100@% effectiveness. Gain a Gragas and a Seraphine."
    },
    "effects": {
      "DamagePercent": 0.5
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Raise-The-Tempo-II.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "템포를 높여라",
      "en": "Raise the Tempo"
    },
    "unique": false
  },
  "TFT10_Augment_CrashTestDummies": {
    "apiName": "TFT10_Augment_CrashTestDummies",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "훈련 봇 @Numdummies@개를 획득합니다. 전투가 시작될 때 훈련 봇이 가장 큰 적 무리에게로 날아가 @stun@초 동안 기절시킵니다. ",
      "en": "Gain @Numdummies@ Target Dummies. Combat start: Your Target Dummies launch themselves towards the largest clump of enemies and Stun them for @stun@ seconds. "
    },
    "effects": {
      "NumDummies": 2,
      "Stun": 2,
      "{f2863276}": 3
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crash-Test-Dummies-II.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "충돌 시험용 봇",
      "en": "Crash Test Dummies"
    },
    "unique": false
  },
  "TFT10_Augment_RememberYourRoots": {
    "apiName": "TFT10_Augment_RememberYourRoots",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "헤드라이너와 특성을 공유하는 아군이 @health@의 체력과 @as@%의 공격 속도를 얻습니다.",
      "en": "Allies sharing a trait with your Headliner gain @health@ Health and @as@% Attack Speed."
    },
    "effects": {
      "AS": 10,
      "Health": 200
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Remember-Your-Roots-II.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "우리는 하나",
      "en": "Remember Your Roots"
    },
    "unique": false
  },
  "TFT10_Augment_TalentSearch": {
    "apiName": "TFT10_Augment_TalentSearch",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "모든 챔피언이 고유 헤드라이너 특성을 획득합니다. 추가로 아군 헤드라이너가 @HLHealth@의 체력과 @HLAttackspeed*100@%의 공격 속도를 얻습니다.",
      "en": "All of your champions gain their unique Headliner effect. In Addition, your Headliner gains @HLHealth@ Health and @HLAttackspeed*100@% Attack Speed."
    },
    "effects": {
      "{46364c93}": 100,
      "{76821384}": 0.10000000149011612
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Talent-Search-III.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "인재 물색",
      "en": "Talent Search"
    },
    "unique": false
  },
  "TFT10_Augment_EmotionalConnection": {
    "apiName": "TFT10_Augment_EmotionalConnection",
    "associatedTraits": [
      "Set10_Emo"
    ],
    "composition": [],
    "desc": {
      "ko": "이모코어 챔피언의 아군이 아군 사망 시 이모코어 추가 마나의 @percenteffect*100@%를 얻습니다. 애니와 벡스를 획득합니다.",
      "en": "Allies of your Emo champions gain @percenteffect*100@% of the Emo Mana bonus when any ally dies. Gain an Annie and a Vex."
    },
    "effects": {
      "{545bdd47}": 0.6000000238418579
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Emotional-Connection-II.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "감정의 유대",
      "en": "Emotional Connection"
    },
    "unique": false
  },
  "TFT10_Augment_MetalHeads": {
    "apiName": "TFT10_Augment_MetalHeads",
    "associatedTraits": [
      "Set10_Pentakill"
    ],
    "composition": [],
    "desc": {
      "ko": "펜타킬 챔피언이 전투 개시 후 @immuneduration@초 동안 군중 제어 효과에 면역이 됩니다. 처치 관여 시 최대 체력의 @heal*100@%에 해당하는 체력을 회복합니다. 케일과 나르를 획득합니다.",
      "en": "Your Pentakill champions are immune to crowd control for the first @immuneduration@ seconds of combat. They heal @heal*100@% of their max Health on takedown. Gain a Kayle and a Gnar."
    },
    "effects": {
      "Heal": 0.03999999910593033,
      "{57482ad4}": 12
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Metalheads-II.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "메탈 마니아",
      "en": "Metalheads"
    },
    "unique": false
  },
  "TFT10_Augment_HeadlinerWoodlandCharm": {
    "apiName": "TFT10_Augment_HeadlinerWoodlandCharm",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "헤드라이너 챔피언의 분신을 생성합니다. 분신은 스테이지 레벨에 따라 해당 헤드라이너 챔피언 기본 체력의 @MinBonusTOOLTIPONLY*100@%~@MaxBonusTOOLTIPONLY*100@%에 해당하는 체력을 갖습니다. 분신에게는 아이템을 장착할 수 없습니다.",
      "en": "Create a clone of your Headliner champion with @MinBonusTOOLTIPONLY*100@% -@MaxBonusTOOLTIPONLY*100@% of its base health (based on stage level). You cannot equip items on the clone."
    },
    "effects": {
      "{1a08838d}": 1.2999999523162842,
      "{2100fa3b}": 1,
      "{2fbb7884}": 0.15000000596046448,
      "{30bb7a17}": 0.30000001192092896,
      "{32bb7d3d}": "null"
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Hologram-III.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "홀로그램",
      "en": "Hologram"
    },
    "unique": false
  },
  "TFT10_Augment_RampingRhythm": {
    "apiName": "TFT10_Augment_RampingRhythm",
    "associatedTraits": [
      "Set10_Quickshot"
    ],
    "composition": [],
    "desc": {
      "ko": "속사포 챔피언이 특성으로 얻는 공격 속도 증가 효과가 최대 @NewMaxStacks@회까지 중첩됩니다. 징크스와 세나를 획득합니다.",
      "en": "Rapidfire champions can gain Attack Speed from their trait up to @NewMaxStacks@ stacks. Gain a Jinx and a Senna."
    },
    "effects": {
      "StartingStacks": 3,
      "{fdf21c94}": 30
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Ramping-Rhythm-II.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "빨라지는 리듬",
      "en": "Ramping Rhythm"
    },
    "unique": false
  },
  "TFT10_Augment_BiggerShot": {
    "apiName": "TFT10_Augment_BiggerShot",
    "associatedTraits": [
      "Set10_Deadeye"
    ],
    "composition": [],
    "desc": {
      "ko": "거물 챔피언의 @BonusAttackThreshold@번째 기본 공격이 추가로 폭탄을 발사하여 대상의 1칸 내 적에게 공격력의 @ADPercent*100@%에 해당하는 피해를 입힙니다. 카이사를 획득합니다.",
      "en": "Every @BonusAttackThreshold@ attacks, Big Shots also fire a bomb that deals @ADPercent*100@% Attack Damage to enemies within 1 hex of the target. Gain a Kaisa."
    },
    "effects": {
      "ADPercent": 0.6499999761581421,
      "{063ab443}": 3
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Bigger-Shot-II.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "거물 중의 거물",
      "en": "Bigger Shot"
    },
    "unique": false
  },
  "TFT10_Augment_LiveForDanger": {
    "apiName": "TFT10_Augment_LiveForDanger",
    "associatedTraits": [
      "Set10_Edgelord"
    ],
    "composition": [],
    "desc": {
      "ko": "이단아의 기본 공격이 대상 @HexRange@칸 내의 적에게 공격력의 @cleave*10@%에 해당하는 피해를 입힙니다. 야스오와 케일을 획득합니다.",
      "en": "Edgelords attacks deal @cleave*10@% of their damage to enemies within @HexRange@ hexes of their target. Gain a Yasuo and a Kayle."
    },
    "effects": {
      "HexRange": 1,
      "{e83c6ac9}": 3
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Cold-Steel-II.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "칼끝에 올라선 삶",
      "en": "Live for Danger"
    },
    "unique": false
  },
  "TFT10_Augment_TooBigToFail": {
    "apiName": "TFT10_Augment_TooBigToFail",
    "associatedTraits": [
      "Set10_Brawler"
    ],
    "composition": [],
    "desc": {
      "ko": "난동꾼이 죽을 때 폭발하여 @Hex@칸 내의 적에게 자신의 최대 체력의 @ExplosionMaxHealthPercent@%에 해당하는 피해를 입힙니다. @TimeInCombat@초가 지나면 폭발 범위가 @ImprovedHex@칸으로 증가합니다. 올라프와 그라가스를 획득합니다.",
      "en": "On death, Bruisers deal @ExplosionMaxHealthPercent@% of their max Health to enemies within @Hex@ hex. After @TimeInCombat@ seconds, expand the range to @ImprovedHex@ hexes. Gain an Olaf and a Gragas."
    },
    "effects": {
      "ExplosionMaxHealthPercent": 30,
      "{867b15cb}": 20,
      "{e2219cd2}": 2,
      "{feb49d4a}": 1
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Too-Big-To-Fail-II.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "대마불사",
      "en": "Too Big to Fail"
    },
    "unique": false
  },
  "TFT10_Augment_LuckyStreak": {
    "apiName": "TFT10_Augment_LuckyStreak",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "도박꾼의 칼날과 자석 제거기를 획득합니다.<br><br><rules>도박꾼의 칼날은 골드 획득에 보탬이 됩니다.</rules>",
      "en": "Gain a Gambler's Blade and a Magnetic Remover.<br><br><rules>Gambler's Blade helps you gain gold.</rules>"
    },
    "effects": {},
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Lucky-Streak-II.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "행운의 연속",
      "en": "Lucky Streak"
    },
    "unique": false
  },
  "TFT10_Augment_BlankSlate": {
    "apiName": "TFT10_Augment_BlankSlate",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "즉시 대기석을 포함한 팀 전체를 판매하고 판매 금액의 @BonusGoldTOOLTIPONLY*100@%에 해당하는 골드를 획득합니다. 다음 @FreeRerolls@회의 상점 새로고침이 무료가 됩니다.",
      "en": "Immediately sell your team (including bench) for @BonusGoldTOOLTIPONLY*100@% of their value. Your next @FreeRerolls@ Shop rerolls are free."
    },
    "effects": {
      "{13a2134b}": 2,
      "{678004c2}": 8,
      "{7da8363b}": 1
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Blank-Slate-II.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "새로운 출발",
      "en": "Blank Slate"
    },
    "unique": false
  },
  "TFT10_Augment_Determinedinvestors": {
    "apiName": "TFT10_Augment_Determinedinvestors",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "전투가 끝날 때 처음으로 @goldrequired@골드를 보유 중일 경우 다이아몬드 손과 무작위 조합 아이템 @numcomponents@개를 획득합니다.<br><br><rules>이 방어 아이템은 골드를 추가로 획득하는 데 보탬이 됩니다.</rules>",
      "en": "The first time you have @goldrequired@ gold at the end of combat, gain Diamond Hands and @numcomponents@ random component(s).<br><br><rules>This defensive item helps you gain more gold.</rules>"
    },
    "effects": {
      "NumComponents": 2,
      "{c866112e}": 40
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/A-Determined-Investor-III.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "결단력 있는 투자자",
      "en": "Determined Investors"
    },
    "unique": false
  },
  "TFT10_Augment_DoubleTheFunk": {
    "apiName": "TFT10_Augment_DoubleTheFunk",
    "associatedTraits": [
      "Set10_Funk"
    ],
    "composition": [],
    "desc": {
      "ko": "디스코 볼이 최대 @DiscoRadius@칸 떨어져 있는 아군에게 영향을 주고 @newtickrate@초마다 파동을 방출합니다. 나미와 그라가스를 획득합니다.",
      "en": "Your Disco Balls affect allies up to @DiscoRadius@ hexes away and pulse every @newtickrate@ seconds. Gain a Nami and a Gragas."
    },
    "effects": {
      "{ab261e47}": 2,
      "{fa835d2a}": 2.5
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Double-The-Funk-II.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "더블 펑크",
      "en": "Double the Funk"
    },
    "unique": false
  },
  "TFT10_Augment_GuardianHeroicPresence": {
    "apiName": "TFT10_Augment_GuardianHeroicPresence",
    "associatedTraits": [
      "Set10_Guardian"
    ],
    "composition": [],
    "desc": {
      "ko": "적이 수호자의 보호막을 공격하면 보호막이 적용된 유닛 최대 체력의 @HealthPercent@%만큼 마법 피해를 입습니다. (초당 최대 한 번) 판테온을 획득합니다.",
      "en": "Enemies that attack a Guardian�s shield take magic damage equal to @HealthPercent@% of the shielded unit�s max Health (up to once per second). Gain a Pantheon."
    },
    "effects": {
      "HealthPercent": 7,
      "TauntInterval": 2
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Heroic-Presence-II.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "영웅적인 존재",
      "en": "Heroic Presence"
    },
    "unique": false
  },
  "TFT10_Augment_Bedazzled": {
    "apiName": "TFT10_Augment_Bedazzled",
    "associatedTraits": [
      "Set10_Dazzler"
    ],
    "composition": [],
    "desc": {
      "ko": "현혹술사의 지속 피해 효과 지속시간이 @duration@초 증가하고 @damageamp@%의 추가 피해를 입힙니다. 나미와 바드를 획득합니다.",
      "en": "The damage over time effect from your Dazzlers lasts @duration@ seconds longer and deals @damageamp@% more damage. Gain a Nami and a Bard."
    },
    "effects": {
      "DamageAmp": 100,
      "Duration": 2
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/The-Ole-Razzle-Dazzle-II.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "영롱하고 황홀한",
      "en": "The Ol' Razzle Dazzle"
    },
    "unique": false
  },
  "TFT10_Augment_RepetitiveRiffing": {
    "apiName": "TFT10_Augment_RepetitiveRiffing",
    "associatedTraits": [
      "Set10_PunkRock"
    ],
    "composition": [],
    "desc": {
      "ko": "펑크 챔피언을 업그레이드하면 추가 효과를 얻습니다.<br>2성: 다음 상점 새로고침 비용 @costreduction@골드 감소<br>3성: 조합 아이템 @numcomponents@개 획득",
      "en": "Gain bonuses for starring Punk champions.<br>2-star: Your next Shop reroll costs @costreduction@ gold less<br>3-star: Gain @numcomponents@ component"
    },
    "effects": {
      "NumComponents": 1,
      "{b2630e29}": 1
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Repetitive-Riffing-II.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "공연 연장",
      "en": "Extended Play"
    },
    "unique": false
  },
  "TFT10_Augment_HeartCollector": {
    "apiName": "TFT10_Augment_HeartCollector",
    "associatedTraits": [
      "Set10_PopBand"
    ],
    "composition": [],
    "desc": {
      "ko": "Heartsteel 하트를 보상으로 전환할 때 @percent*100@%의 하트가 유지됩니다. 아군 Heartsteel 챔피언이 @Health@의 체력을 얻습니다. 크산테와 아펠리오스를 획득합니다.",
      "en": "Keep @percent*100@% of the Heartsteel hearts you convert into rewards. Your Heartsteel champions gain @Health@ Health. Gain a K'Sante and an Aphelios."
    },
    "effects": {
      "Health": 200,
      "{75f9fa5a}": 0.20000000298023224
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Heart-Collector-II.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "두근두근",
      "en": "Heartthrobs"
    },
    "unique": false
  },
  "TFT10_Augment_ThatsJazzBaby": {
    "apiName": "TFT10_Augment_ThatsJazzBaby",
    "associatedTraits": [
      "Set10_Jazz"
    ],
    "composition": [],
    "desc": {
      "ko": "바드를 획득합니다. 전투 시작 시 재즈 챔피언이 활성화된 특성 수에 따라 영구적인 보너스를 획득합니다. <br>@firstBreakpoint@개: @Health@의 최대 체력<br>@secondBreakpoint@개: @AS@%의 공격 속도<br>@thirdBreakpoint@개: @ad@%의 공격력 및 @ap@의 주문력",
      "en": "Gain a Bard. Combat start: Jazz champions gain permanent bonuses based on the number of active traits. <br>@firstBreakpoint@: @Health@ max Health<br>@secondBreakpoint@: and @AS@% Attack Speed<br>@thirdBreakpoint@: and @ad@% Attack Damage and @ap@ Ability Power"
    },
    "effects": {
      "AD": 2,
      "AP": 2,
      "AS": 3,
      "Health": 40,
      "{0f109a01}": 7,
      "{19ed613a}": 3,
      "{dc055ca6}": 5
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Thats-Jazz-Baby-II.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "이게 재즈다",
      "en": "That's Jazz, Baby!"
    },
    "unique": false
  },
  "TFT10_Augment_SubmitToThePit": {
    "apiName": "TFT10_Augment_SubmitToThePit",
    "associatedTraits": [
      "Set10_Fighter"
    ],
    "composition": [],
    "desc": {
      "ko": "춤꾼이 주변 적 하나당 @Stats@의 방어력, @Stats@의 마법 저항력, @Stats@%의 공격력, @Stats@의 주문력, @Stats@%의 공격 속도를 얻습니다. 잭스와 나르를 획득합니다.",
      "en": "For each adjacent enemy, Moshers gain @Stats@ Armor, @Stats@ Magic Resist, @Stats@% Attack Damage, @Stats@ Ability Power, and @Stats@% Attack Speed. Gain a Jax and a Gnar."
    },
    "effects": {
      "Stats": 3
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Submit-To-The-Pit-II.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "구덩이에 굴복하라",
      "en": "Submit to the Pit"
    },
    "unique": false
  },
  "TFT7_Augment_BestFriends1": {
    "apiName": "TFT7_Augment_BestFriends1",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "둘이서 고립된 유닛은 전투 시작 시 공격 속도가 @AS*100@%, 방어력이 @Armor@ 증가합니다.",
      "en": "Units isolated in pairs gain @AS*100@% Attack Speed and @Armor@ Armor at the start of combat."
    },
    "effects": {
      "AS": 0.10000000149011612,
      "Armor": 10
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Best-Friends-I.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "최고의 친구 I",
      "en": "Best Friends I"
    },
    "unique": false
  },
  "TFT10_Augment_TwinTerror1": {
    "apiName": "TFT10_Augment_TwinTerror1",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "전장에 똑같은 챔피언이 정확히 2명 있다면 둘 다 체력이 @BonusStats*10@, 공격 속도가 @BonusStats@%, 치명타 확률이 @BonusStats@% 증가합니다. 챔피언을 3성으로 업그레이드하면 동일한 2성 챔피언 하나를 획득합니다.",
      "en": "When you field exactly 2 copies of a champion, they both gain @BonusStats*10@ Health, @BonusStats@% Attack Speed, and @BonusStats@% Critical Strike Chance. Anytime you 3-star, gain a 2-star copy."
    },
    "effects": {
      "BonusStats": 25
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Twin-Terror-II.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "쌍둥이 공포 I",
      "en": "Twin Terror I"
    },
    "unique": false
  },
  "TFT7_Augment_BestFriends2": {
    "apiName": "TFT7_Augment_BestFriends2",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "둘이서 고립된 유닛은 전투 시작 시 공격 속도가 @AS*100@%, 방어력이 @Armor@ 증가합니다.",
      "en": "Units isolated in pairs gain @AS*100@% Attack Speed and @Armor@ Armor at the start of combat."
    },
    "effects": {
      "AS": 0.15000000596046448,
      "Armor": 20
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Best-Friends-II.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "최고의 친구 II",
      "en": "Best Friends II"
    },
    "unique": false
  },
  "TFT10_Augment_TwinTerror2": {
    "apiName": "TFT10_Augment_TwinTerror2",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "전장에 똑같은 챔피언이 정확히 2명 있다면 둘 다 체력이 @BonusStats*10@, 공격 속도가 @BonusStats@%, 치명타 확률이 @BonusStats@% 증가합니다. 챔피언을 3성으로 업그레이드하면 동일한 2성 챔피언 하나를 획득합니다.",
      "en": "When you field exactly 2 copies of a champion, they both gain @BonusStats*10@ Health, @BonusStats@% Attack Speed, and @BonusStats@% Critical Strike Chance. Anytime you 3-star, gain a 2-star copy."
    },
    "effects": {
      "BonusStats": 35
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Twin-Terror-III.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "쌍둥이 공포 II",
      "en": "Twin Terror II"
    },
    "unique": false
  },
  "TFT10_Augment_LearningToSpell": {
    "apiName": "TFT10_Augment_LearningToSpell",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "아군이 적 처치에 @NumTakedowns@회 관여할 때마다 @StartingAP@의 추가 주문력을 얻고, 주문력이 영구적으로 @AP@만큼 증가합니다.",
      "en": "Your team gains @StartingAP@ bonus Ability Power, and permanently gains @AP@ Ability Power every @NumTakedowns@ takedowns."
    },
    "effects": {
      "AP": 1,
      "StartingAP": 10,
      "{7d89bfed}": 2
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Learning-To-Spell-II.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "주문 습득",
      "en": "Learning to Spell"
    },
    "unique": false
  },
  "TFT6_Augment_Keepers1": {
    "apiName": "TFT6_Augment_Keepers1",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "전투 시작: 주변에 아군이 있는 유닛이 @ShieldDuration@초 동안 @ShieldHealth@의 보호막을 얻습니다. 이 보호막은 중첩됩니다.",
      "en": "Combat start: grant units with adjacent allies a @ShieldHealth@ Health Shield for @ShieldDuration@ seconds. This Shield stacks."
    },
    "effects": {
      "ShieldDuration": 8,
      "ShieldHealth": 150
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Keepers-I.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "수호자 I",
      "en": "Keepers I"
    },
    "unique": false
  },
  "TFT10_Augment_HeavyHitters": {
    "apiName": "TFT10_Augment_HeavyHitters",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "최대 체력이 @MaxHealthThreshold@ 이상인 아군 유닛이 최대 체력의 @PercentMaxHealthDamage*100@%에 해당하는 공격력과 주문력을 얻습니다.",
      "en": "Your units with at least @MaxHealthThreshold@ max Health gain Attack Damage and Ability Power equal to @PercentMaxHealthDamage*100@% of their max Health."
    },
    "effects": {
      "PercentMaxHealthDamage": 0.009999999776482582,
      "{af701916}": 1500
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Heavy-Hitters-II.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "강타자",
      "en": "Heavy Hitters"
    },
    "unique": false
  },
  "TFT6_Augment_Keepers2": {
    "apiName": "TFT6_Augment_Keepers2",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "전투 시작: 주변에 아군이 있는 유닛이 @ShieldDuration@초 동안 @ShieldHealth@의 보호막을 얻습니다. 이 보호막은 중첩됩니다.",
      "en": "Combat start: grant units with adjacent allies a @ShieldHealth@ Health Shield for @ShieldDuration@ seconds. This Shield stacks."
    },
    "effects": {
      "ShieldDuration": 8,
      "ShieldHealth": 220
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Keepers-II.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "수호자 II",
      "en": "Keepers II"
    },
    "unique": false
  },
  "TFT10_Augment_BigGains": {
    "apiName": "TFT10_Augment_BigGains",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "아군이 적 처치에 @NumTakedowns@회 관여할 때마다 @StartingHealth@의 추가 체력을 얻고, 체력이 영구적으로 @Health@만큼 증가합니다.",
      "en": "Your team gains @StartingHealth@ bonus Health, and permanently gains @Health@ Health every @NumTakedowns@ takedowns."
    },
    "effects": {
      "Health": 10,
      "StartingHealth": 80,
      "{7d89bfed}": 2
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Big-Gains-II.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "막대한 이익",
      "en": "Big Gains"
    },
    "unique": false
  },
  "TFT10_Augment_Country_BountyHunters": {
    "apiName": "TFT10_Augment_Country_BountyHunters",
    "associatedTraits": [
      "Set10_Country"
    ],
    "composition": [],
    "desc": {
      "ko": "컨트리 챔피언이 적을 처치할 때 @GoldChance@%의 확률로 @BonusKillGold@골드가 떨어집니다. 공포마는 확률이 두 배가 됩니다. 사미라를 획득합니다.",
      "en": "Country champions have a @GoldChance@% chance to drop @BonusKillGold@ gold on kill. Your Dreadsteed's chances are doubled. Gain a Samira."
    },
    "effects": {
      "BonusKillGold": 1,
      "GoldChance": 20
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Bounty-Hunters-II.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "현상금 사냥꾼",
      "en": "Bounty Hunters"
    },
    "unique": false
  },
  "TFT10_Augment_InspiringEpitaph": {
    "apiName": "TFT10_Augment_InspiringEpitaph",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "유닛이 죽으면 가장 가까운 아군이 최대 체력의 @ShieldRatio*100@%에 해당하는 보호막을 얻고 중첩되는 공격 속도가 @AttackSpeed*100@%만큼 증가합니다.",
      "en": "When a unit dies, the nearest ally gains a @ShieldRatio*100@% max Health Shield and @AttackSpeed*100@% stacking Attack Speed."
    },
    "effects": {
      "AttackSpeed": 0.10000000149011612,
      "ShieldRatio": 0.30000001192092896
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Inspiring-Epitaph-II.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "영감적인 비문",
      "en": "Inspiring Epitaph"
    },
    "unique": false
  },
  "TFT10_Augment_Vampirism": {
    "apiName": "TFT10_Augment_Vampirism",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "아군의 체력이 @BaseHP@ 증가합니다. 플레이어가 잃은 체력 5당 @BonusHPPer5MissingHealth@의 체력과 @OmnivampPercentPer5MissingHealth*100@%의 모든 피해 흡혈을 추가로 얻습니다.<br><rules>(모든 피해 흡혈: 입힌 모든 피해 비례 체력 회복)</rules>",
      "en": "Your team gains @BaseHP@ Health. Gain another @BonusHPPer5MissingHealth@ Health and @OmnivampPercentPer5MissingHealth*100@% Omnivamp per 5 missing player health.<br><rules>(Omnivamp: healing for a percent of damage dealt)</rules>"
    },
    "effects": {
      "BaseHP": 20,
      "{26c36394}": 4,
      "{635778ef}": 0.009999999776482582
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Vampirism-I.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "흡혈 I",
      "en": "Vampirism I"
    },
    "unique": false
  },
  "TFT10_Augment_VampirismPlus": {
    "apiName": "TFT10_Augment_VampirismPlus",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "아군의 체력이 @BaseHP@ 증가합니다. 플레이어가 잃은 체력 5당 @BonusHPPer5MissingHealth@의 체력과 @OmnivampPercentPer5MissingHealth*100@%의 모든 피해 흡혈을 추가로 얻습니다.<br><rules>(모든 피해 흡혈: 입힌 모든 피해 비례 체력 회복)</rules>",
      "en": "Your team gains @BaseHP@ Health. Gain another @BonusHPPer5MissingHealth@ Health and @OmnivampPercentPer5MissingHealth*100@% Omnivamp per 5 missing player health.<br><rules>(Omnivamp: healing for a percent of damage dealt)</rules>"
    },
    "effects": {
      "BaseHP": 50,
      "{26c36394}": 6,
      "{635778ef}": 0.009999999776482582
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Vampirism-II.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "흡혈 II",
      "en": "Vampirism II"
    },
    "unique": false
  },
  "TFT6_Augment_ForceOfNature": {
    "apiName": "TFT6_Augment_ForceOfNature",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "최대 팀 규모가 @MaxArmySizeIncrease@ 증가하고 챔피언 복제기를 획득합니다.",
      "en": "Gain +@MaxArmySizeIncrease@ max team size and a Champion Duplicator."
    },
    "effects": {
      "MaxArmySizeIncrease": 1,
      "{4a99a5b2}": 1
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/NewRecruit3.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "신병",
      "en": "New Recruit"
    },
    "unique": false
  },
  "TFT10_Augment_Superfan_ForTheFans": {
    "apiName": "TFT10_Augment_Superfan_ForTheFans",
    "associatedTraits": [
      "Set10_Superfan"
    ],
    "composition": [],
    "desc": {
      "ko": "헤드라이너가 피해를 입히면 열혈 팬이 자신이 입힌 피해의 @HealPercent*100@%에 해당하는 체력을 회복합니다. 나르를 획득합니다.",
      "en": "Your Headliner's damage heals your Superfans for @HealPercent*100@% of the damage dealt. Gain a Gnar."
    },
    "effects": {
      "HealPercent": 0.2199999988079071
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/For-The-Fans-II.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "팬을 위하여",
      "en": "Do It for the Fans"
    },
    "unique": false
  },
  "TFT10_Augment_ShockTreatment": {
    "apiName": "TFT10_Augment_ShockTreatment",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "스태틱의 단검을 획득합니다. 스태틱의 단검 연쇄 번개 피해량이 스테이지 레벨에 따라 @tooltipincreaseddamage1*100@~@tooltipincreaseddamage2*100@% 증가합니다.",
      "en": "Gain a Statikk Shiv. Your Statikk Shivs' chain lightning effects deal @tooltipincreaseddamage1*100@-@tooltipincreaseddamage2*100@% more damage (based on stage level)."
    },
    "effects": {
      "{1373fd24}": 1.7999999523162842,
      "{1473feb7}": 2.25,
      "{167401dd}": 1.399999976158142,
      "{e61943dc}": 0.4000000059604645,
      "{e9194895}": 1.25
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Shock-Treatment-II.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "충격 요법",
      "en": "Shock Treatment"
    },
    "unique": false
  },
  "TFT10_Augment_LowInterestRates": {
    "apiName": "TFT10_Augment_LowInterestRates",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "최대 이자가 @InterestCap@골드로 제한되는 대신 플레이어 전투 라운드를 시작할 때마다 @Gold@골드를 얻습니다.<br><br><rules>이자는 저축한 10골드당 추가로 획득하는 골드입니다.</rules>",
      "en": "Your max interest is capped at @InterestCap@ gold but you gain @Gold@ gold at the start of every player combat.<br><br><rules>Interest is extra gold you gain per 10g saved.</rules>"
    },
    "effects": {
      "Gold": 2,
      "InterestCap": 2
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Low-Interest-Rates-II.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "저금리",
      "en": "Low Interest Rates"
    },
    "unique": false
  },
  "TFT10_Augment_Executioner_ExposeWeakness": {
    "apiName": "TFT10_Augment_Executioner_ExposeWeakness",
    "associatedTraits": [
      "Set10_Executioner"
    ],
    "composition": [],
    "desc": {
      "ko": "처형자 챔피언이 기본 공격과 스킬로 적에게 피해를 입히면 @Duration@초 동안 @ShredSunder@%의 파쇄와 파열을 적용합니다. 트위치를 획득합니다.<br><br><rules>(파쇄: 마법 저항력 감소, 파열: 방어력 감소)</rules>",
      "en": "Damage from Executioners' attacks and spells Shred and Sunder enemies by @ShredSunder@% for @Duration@ seconds. Gain a Twitch.<br><br><rules>(Shred: reduce Magic Resist, Sunder: reduce Armor)</rules>"
    },
    "effects": {
      "Duration": 3,
      "ShredSunder": 40
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Expose-Weakness-II.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "약점 노출",
      "en": "Expose Weakness"
    },
    "unique": false
  },
  "TFT10_Augment_SwitchingGears": {
    "apiName": "TFT10_Augment_SwitchingGears",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "연승 혹은 연패 기록이 깨질 때마다 @Gold@골드를 얻습니다.",
      "en": "Gain @Gold@ gold whenever you break your win or loss streak."
    },
    "effects": {
      "Gold": 2,
      "{379448fe}": 3
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Switching-Gears-I.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "변속",
      "en": "Switching Gears"
    },
    "unique": false
  },
  "TFT10_Augment_HeroicGrabBag": {
    "apiName": "TFT10_Augment_HeroicGrabBag",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "하급 챔피언 복제기 @LesserDuplicatorAmount@개와 @gold@골드를 획득합니다.<br><br><rules>3단계 이하의 챔피언을 복제할 수 있습니다.</rules>",
      "en": "Gain @LesserDuplicatorAmount@ Lesser Champion Duplicators and @gold@ gold.<br><br><rules>This item allows you to copy a 3-cost or less champion.</rules>"
    },
    "effects": {
      "Gold": 2,
      "{56ba63f8}": 2
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Heroic-Grab-Bag-II.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "영웅 꾸러미",
      "en": "Heroic Grab Bag"
    },
    "unique": false
  },
  "TFT10_Augment_ReachTheSummit": {
    "apiName": "TFT10_Augment_ReachTheSummit",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "@LevelReq@레벨에 도달하면 @ExpBonus@의 경험치를 획득합니다.",
      "en": "When you reach Level @LevelReq@, gain @ExpBonus@ XP."
    },
    "effects": {
      "LevelReq": 9,
      "{0777a7af}": 50
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Reach-The-Summit-I.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "정상을 향해",
      "en": "Reach the Summit"
    },
    "unique": false
  },
  "TFT10_Augment_FullyAdapted": {
    "apiName": "TFT10_Augment_FullyAdapted",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "적응형 투구를 획득합니다. 적응형 투구를 보유한 챔피언은 위치에 상관없이 두 가지 효과를 모두 획득합니다.",
      "en": "Gain an Adaptive Helm. Champions holding this item gain both effects, regardless of position."
    },
    "effects": {},
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Fully-Adapted-II.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "완벽한 적응",
      "en": "Fully Adapted"
    },
    "unique": false
  },
  "TFT9_Augment_Commander_FinalAscension": {
    "apiName": "TFT9_Augment_Commander_FinalAscension",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "아군의 피해량이 @damageamp@% 증가합니다. @delay@초 후 @AscendedAmpTOOLTIPONLY@%의 추가 피해를 입힙니다.",
      "en": "Your team deals @damageamp@% more damage. After @delay@ seconds, they deal @AscendedAmpTOOLTIPONLY@% more damage."
    },
    "effects": {
      "DamageAmp": 15,
      "Delay": 15,
      "{7acb7cbd}": 45
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Ascension3.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "최후의 초월",
      "en": "Final Ascension"
    },
    "unique": false
  },
  "TFT9_Augment_Commander_PartialAscension": {
    "apiName": "TFT9_Augment_Commander_PartialAscension",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "전투 @Delay@초 후 아군 유닛의 피해량이 @DamageAmp@% 증가합니다.",
      "en": "After @Delay@ seconds of combat, your units deal @DamageAmp@% more damage."
    },
    "effects": {
      "DamageAmp": 30,
      "Delay": 15
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Ascension1.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "불완전한 초월",
      "en": "Partial Ascension"
    },
    "unique": false
  },
  "TFT9_Augment_Commander_Ascension": {
    "apiName": "TFT9_Augment_Commander_Ascension",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "전투 @Delay@초 후 아군 유닛의 피해량이 @DamageAmp@% 증가합니다.",
      "en": "After @Delay@ seconds of combat, your units deal @DamageAmp@% more damage."
    },
    "effects": {
      "DamageAmp": 50,
      "Delay": 15
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Ascension2.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "초월",
      "en": "Ascension"
    },
    "unique": false
  },
  "TFT6_Augment_ClearMind": {
    "apiName": "TFT6_Augment_ClearMind",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "플레이어 전투 종료 시 아군 대기석에 챔피언이 없다면 @XP@의 경험치를 획득합니다.",
      "en": "If there are no champions on your bench at the end of player combat, gain @XP@ XP."
    },
    "effects": {
      "XP": 3
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/ClearMind2.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "맑은 정신",
      "en": "Clear Mind"
    },
    "unique": false
  },
  "TFT7_Augment_ClutteredMind": {
    "apiName": "TFT7_Augment_ClutteredMind",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "즉시 무작위 1단계 챔피언 @Units@명을 획득합니다. 플레이어 전투 라운드 종료 시 대기석에 챔피언이 가득 찼다면 @XP@의 경험치를 획득합니다. ",
      "en": "Gain @Units@ random 1-cost champions now. If your bench is full at the end of player combat, gain @XP@ XP. "
    },
    "effects": {
      "Units": 4,
      "XP": 3
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Dizzy-II.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "어수선한 마음",
      "en": "Cluttered Mind"
    },
    "unique": false
  },
  "TFT10_Augment_InsertCoin": {
    "apiName": "TFT10_Augment_InsertCoin",
    "associatedTraits": [
      "Set10_8Bit"
    ],
    "composition": [],
    "desc": {
      "ko": "8비트 챔피언이 체력이 @ExecuteThreshold*100@% 아래인 대상을 처형합니다. 처형 시 @BaseDropChance@%의 확률로 @Gold@골드를 떨어뜨리며, 최고 점수를 달성한 챔피언 하나당 @LevelScalar@%만큼 증가합니다. 코르키와 가렌을 획득합니다.<br><tftitemrules>현재 획득 확률: @TFTUnitProperty.item:TFT10_Augment_InsertCoin_GoldChance@%</tftitemrules>",
      "en": "Your 8-Bit champions execute targets below @ExecuteThreshold*100@% Health. Executions have a @BaseDropChance@% chance to drop @Gold@ gold, increased by @LevelScalar@% for each high score achieved. Gain a Corki and a Garen.<br><br><tftitemrules>Current drop chance: @TFTUnitProperty.item:TFT10_Augment_InsertCoin_GoldChance@%</tftitemrules>"
    },
    "effects": {
      "Gold": 1,
      "{2a5ab725}": 2,
      "{79e564f1}": 10,
      "{b6e4dddb}": 0.10000000149011612
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Insert-Coin-II.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "동전 투입",
      "en": "Insert Coin"
    },
    "unique": false
  },
  "TFT10_Augment_GoodForSomething": {
    "apiName": "TFT10_Augment_GoodForSomething",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "아이템을 보유하지 않은 챔피언이 죽을 때 @dropchance*100@%의 확률로 @Gold@골드를 떨어뜨립니다.",
      "en": "Champions that aren't holding items have a @dropchance*100@% to drop @Gold@ gold on death."
    },
    "effects": {
      "Gold": 1,
      "{a91a52c8}": 0.5
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Good-For-Something-II.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "다 쓸 데가 있다니까 II",
      "en": "Good For Something II"
    },
    "unique": false
  },
  "TFT10_Augment_GoingLong": {
    "apiName": "TFT10_Augment_GoingLong",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "더 이상 이자를 획득하지 않습니다. 라운드 시작 시 @XP@의 경험치를 획득합니다.<br><br><rules>이자는 저축한 10골드당 추가로 획득하는 골드입니다.</rules>",
      "en": "You no longer gain interest. Round start: gain @XP@ XP.<br><br><rules>Interest is extra gold you gain per 10g saved.</rules>"
    },
    "effects": {
      "XP": 4
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Going-Long-III.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "장기 투자",
      "en": "Going Long"
    },
    "unique": false
  },
  "TFT10_Augment_SticksAndStones": {
    "apiName": "TFT10_Augment_SticksAndStones",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "아이템이 없는 챔피언이 @Duration@초 동안 적에게 파쇄와 파열 효과를 부여합니다. 물리 피해는 @SunderPercentage@%의 파열을, 마법 피해는 @ShredPercentage@%의 파쇄를 추가로 적용합니다.<br><rules>파쇄: 마법 저항력 감소, 파열: 방어력 감소</rules>",
      "en": "Champions that aren't holding items Shred and Sunder enemies for @Duration@ seconds. Physical damage Sunders for @SunderPercentage@%, and magic damage Shreds for @ShredPercentage@%.<br><rules>Shred: reduces Magic Resist, Sunder: reduces Armor</rules>"
    },
    "effects": {
      "Duration": 3,
      "{39090f45}": 30,
      "{f498f3e4}": 30
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Sticks-And-Stones-I.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "막대기와 돌멩이",
      "en": "Sticks And Stones"
    },
    "unique": false
  },
  "TFT10_Augment_Scapegoat": {
    "apiName": "TFT10_Augment_Scapegoat",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "훈련 봇과 @initialgold@골드를 획득합니다. 플레이어 대상 전투에서 훈련 봇이 맨 처음으로 죽으면 @Gold@골드를 획득합니다.",
      "en": "Gain a Training Dummy and @initialgold@ gold. If it is the first to die each player combat, gain @Gold@ gold."
    },
    "effects": {
      "Gold": 1,
      "{045be491}": 2
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/The-Scapegoat-II.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "희생양",
      "en": "Scapegoat"
    },
    "unique": false
  },
  "TFT10_Augment_TheDrop": {
    "apiName": "TFT10_Augment_TheDrop",
    "associatedTraits": [
      "Set10_EDM"
    ],
    "composition": [],
    "desc": {
      "ko": "EDM 챔피언이 처음으로 샘플링한 스킬을 사용하면, 이후 샘플링 빈도가 @newfrequency*100@% 증가합니다. 럭스를 획득합니다.",
      "en": "After their first sampled cast, EDM champions will sample @newfrequency*100@% more frequently. Gain a Lux."
    },
    "effects": {
      "{89d966bd}": 0.30000001192092896,
      "{b37d8824}": 10
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Sample-Synthesis-II.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "절정",
      "en": "The Drop"
    },
    "unique": false
  },
  "TFT10_Augment_GoodForSomethingSilver": {
    "apiName": "TFT10_Augment_GoodForSomethingSilver",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "아이템을 보유하지 않은 챔피언이 죽을 때 @dropchance*100@%의 확률로 @Gold@골드를 떨어뜨립니다.",
      "en": "Champions that aren't holding items have a @dropchance*100@% to drop @Gold@ gold on death."
    },
    "effects": {
      "Gold": 1,
      "{a91a52c8}": 0.30000001192092896
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Good-For-Something-I.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "다 쓸 데가 있다니까 I",
      "en": "Good For Something I"
    },
    "unique": false
  },
  "TFT10_Augment_CrownGuarded": {
    "apiName": "TFT10_Augment_CrownGuarded",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "크라운가드를 획득합니다. 크라운가드의 전투 시작 효과가 @effectincrease*100@% 증가합니다.",
      "en": "Gain a Crownguard. Your Crownguards' start of combat effect is @effectincrease*100@% stronger."
    },
    "effects": {
      "{4a595764}": 0.75
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Crown-Guarded-II.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "근위대",
      "en": "Crown Guarded"
    },
    "unique": false
  },
  "TFT10_Augment_BlingedOut": {
    "apiName": "TFT10_Augment_BlingedOut",
    "associatedTraits": [
      "Set10_TrueDamage"
    ],
    "composition": [],
    "desc": {
      "ko": "True Damage 챔피언이 보유한 아이템 하나당 @health@의 체력과 @attackspeed*100@%의 공격 속도를 얻습니다. 야스오와 세나를 획득합니다.",
      "en": "Your True Damage champions gain @health@ Health and @attackspeed*100@% Attack Speed for each item they are holding. Gain a Yasuo and a Senna."
    },
    "effects": {
      "AttackSpeed": 0.07999999821186066,
      "Health": 100
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Blinged-Out-II.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "번쩍번쩍",
      "en": "Blinged Out"
    },
    "unique": false
  },
  "TFT10_Augment_SilverVeil": {
    "apiName": "TFT10_Augment_SilverVeil",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "아군이 @BonusAS*100@%의 공격 속도를 얻고 전투 시작 후 처음으로 받는 군중 제어 효과에 면역이 됩니다.",
      "en": "Your team gains @BonusAS*100@% Attack Speed and is immune to the first crowd control effect in combat."
    },
    "effects": {
      "BonusAS": 0.05000000074505806
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/The-Silver-Veil-I.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "은빛 장막",
      "en": "Silver Veil"
    },
    "unique": false
  },
  "TFT10_Augment_HelpIsOnTheWay": {
    "apiName": "TFT10_Augment_HelpIsOnTheWay",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "플레이어 대상 전투를 @NumberOfCombats@번 치른 후 지원 아이템 4개 중 하나를 선택합니다.",
      "en": "After @NumberOfCombats@ player combats, choose 1 of 4 Support items."
    },
    "effects": {
      "Numberofcombats": 6
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Help-Is-On-The-Way-I.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "지원군 출동",
      "en": "Help Is On The Way"
    },
    "unique": false
  },
  "TFT10_Augment_Stimpack": {
    "apiName": "TFT10_Augment_Stimpack",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "@HealthThreshold@의 플레이어 체력을 잃으면 조합 아이템 @NumComponents@개를 획득합니다.<br><br>(이번 게임에서 잃은 체력: @TFTUnitProperty.item:TFT10_Augment_Stimpack_HealthLost@)",
      "en": "Gain @NumComponents@ components after you lose @HealthThreshold@ player health.<br><br>(Health lost this game: @TFTUnitProperty.item:TFT10_Augment_Stimpack_HealthLost@)"
    },
    "effects": {
      "HealthThreshold": 50,
      "NumComponents": 4
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Stimpack-I.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "전투자극제",
      "en": "Stimpack"
    },
    "unique": false
  },
  "TFT9_Augment_SupportCache": {
    "apiName": "TFT9_Augment_SupportCache",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "지원 아이템 @ArmoryChoiceCount@개 중 하나를 선택합니다.",
      "en": "Choose 1 of @ArmoryChoiceCount@ Support items."
    },
    "effects": {
      "ArmoryChoiceCount": 4
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Support-Cache-II.TFT_Set9_Stage2.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "지원 상자",
      "en": "Support Cache"
    },
    "unique": false
  },
  "TFT9_Augment_StationarySupport2": {
    "apiName": "TFT9_Augment_StationarySupport2",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "영구 장착된 지원 아이템 @NumOfItems@개를 지닌 훈련 봇 @NumOfDummies@개를 획득합니다",
      "en": "Gain @NumOfDummies@ Training Dummy with @NumOfItems@ permanently attached Support item(s)."
    },
    "effects": {
      "NumOfDummies": 1,
      "NumOfItems": 1
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Stationary-Support-II.TFT_Set9_Stage2.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "고정된 지원 II",
      "en": "Stationary Support II"
    },
    "unique": false
  },
  "TFT7_Augment_LuckyGloves": {
    "apiName": "TFT7_Augment_LuckyGloves",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "도적의 장갑이 항상 챔피언에게 최적의 아이템을 제공합니다. 연습용 장갑을 @NumGloves@개 획득합니다.",
      "en": "Thief's Gloves will always give your champions ideal items. Gain @NumGloves@ Sparring Gloves."
    },
    "effects": {
      "NumGloves": 2
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Lucky-Gloves-III.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "행운의 장갑",
      "en": "Lucky Gloves"
    },
    "unique": false
  },
  "TFT7_Augment_LuckyGlovesPlus": {
    "apiName": "TFT7_Augment_LuckyGlovesPlus",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "도적의 장갑이 항상 챔피언에게 최적의 아이템을 제공합니다. 연습용 장갑을 @NumGloves@개 획득합니다.",
      "en": "Thief's Gloves will always give your champions ideal items. Gain @NumGloves@ Sparring Gloves."
    },
    "effects": {
      "NumGloves": 3
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Lucky-Gloves-III.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "행운의 장갑",
      "en": "Lucky Gloves"
    },
    "unique": false
  },
  "TFT9_Augment_StationarySupport3": {
    "apiName": "TFT9_Augment_StationarySupport3",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "영구 장착된 지원 아이템 @NumOfItems@개를 지닌 훈련 봇 @NumOfDummies@개를 획득합니다",
      "en": "Gain @NumOfDummies@ Training Dummy with @NumOfItems@ permanently attached Support item(s)."
    },
    "effects": {
      "NumOfDummies": 1,
      "NumOfItems": 2
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Stationary-Support-III.TFT_Set9_Stage2.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "고정된 지원 III",
      "en": "Stationary Support III"
    },
    "unique": false
  },
  "TFT9_Augment_TiniestTitanPlus": {
    "apiName": "TFT9_Augment_TiniestTitanPlus",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "플레이어 대상 전투가 끝날 때마다 @Heal@의 플레이어 체력과 @Gold@골드를 얻습니다. 또한 전략가의 이동 속도가 증가합니다.<br><br>즉시 @InitialGold@골드를 획득합니다.",
      "en": "Gain @Heal@ player health and @Gold@ gold after every player combat. Your Tactician also moves faster.<br><br>Gain @InitialGold@ gold now."
    },
    "effects": {
      "Gold": 1,
      "Heal": 2,
      "{045be491}": 8
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Tiniest-TitanIII.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "꼬꼬마 거인+",
      "en": "Tiniest Titan+"
    },
    "unique": false
  },
  "TFT9_Augment_BalancedBudget2": {
    "apiName": "TFT9_Augment_BalancedBudget2",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "다음 @rounds@번의 라운드 시작 시 @gold@골드를 획득합니다.",
      "en": "At the start of the next @rounds@ rounds, gain @gold@ gold."
    },
    "effects": {
      "Gold": 7,
      "rounds": 4
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Balanced-Budget-II.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "균형 예산",
      "en": "Balanced Budget"
    },
    "unique": false
  },
  "TFT9_Augment_Commander_TeamingUp2": {
    "apiName": "TFT9_Augment_Commander_TeamingUp2",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "무작위 지원 아이템 @NumItems@개와 무작위 4단계 챔피언 @NumUnits@명을 획득합니다.",
      "en": "Gain @NumItems@ random Support item and @NumUnits@ random 4-cost champions."
    },
    "effects": {
      "NumComponents": "null",
      "NumItems": 1,
      "NumUnits": 2
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Teaming-Up-II.TFT_Set9_Stage2.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "협력 II",
      "en": "Teaming Up II"
    },
    "unique": false
  },
  "TFT6_Augment_PortableForgePlus": {
    "apiName": "TFT6_Augment_PortableForgePlus",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "유물 @ArmoryChoiceCount@개 중 하나를 선택합니다.<br><br><rules>유물은 고유한 효과를 지닌 강력한 아이템입니다.</rules>",
      "en": "Choose 1 of @ArmoryChoiceCount@ Artifacts.<br><br><rules>Artifacts are more powerful items with a unique effect.</rules>"
    },
    "effects": {
      "ArmoryChoiceCount": 3
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/PortableForge2.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "휴대용 대장간+",
      "en": "Portable Forge+"
    },
    "unique": false
  },
  "TFT6_Augment_PortableForgePlusPlus": {
    "apiName": "TFT6_Augment_PortableForgePlusPlus",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "유물 @ArmoryChoiceCount@개 중 하나를 선택합니다.<br><br><rules>유물은 고유한 효과를 지닌 강력한 아이템입니다.</rules>",
      "en": "Choose 1 of @ArmoryChoiceCount@ Artifacts.<br><br><rules>Artifacts are more powerful items with a unique effect.</rules>"
    },
    "effects": {
      "ArmoryChoiceCount": 4
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/PortableForge2.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "휴대용 대장간++",
      "en": "Portable Forge++"
    },
    "unique": false
  },
  "TFT9_Augment_Commander_TeamingUp1": {
    "apiName": "TFT9_Augment_Commander_TeamingUp1",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "무작위 조합 아이템 @NumComponents@개, 무작위 3단계 챔피언 @NumChamps@명을 획득합니다.",
      "en": "Gain @NumComponents@ random component and @NumChamps@ random Tier 3 champions."
    },
    "effects": {
      "NumChamps": 2,
      "NumComponents": 1
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Teaming-Up-I.TFT_Set9_Stage2.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "협력 I",
      "en": "Teaming Up I"
    },
    "unique": false
  },
  "TFT9_Augment_StationarySupport1": {
    "apiName": "TFT9_Augment_StationarySupport1",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "플레이어 대상 전투를 @PlayerCombatRounds@번 치른 후 지원 아이템 @NumOfItems@개를 영구히 장착한 훈련 봇 @NumOfDummies@개를 획득합니다.",
      "en": "After @PlayerCombatRounds@ player combats, gain @NumOfDummies@ Training Dummy(s) with @NumOfItems@ permanently attached Support item(s)."
    },
    "effects": {
      "NumOfDummies": 1,
      "NumOfItems": 1,
      "PlayerCombatRounds": 7
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Stationary-Support-I.TFT_Set9_Stage2.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "고정된 지원 I",
      "en": "Stationary Support I"
    },
    "unique": false
  },
  "TFT9_Augment_Commander_RollingForDays": {
    "apiName": "TFT9_Augment_Commander_RollingForDays",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "시간제한 없이 사용할 수 있는 무료 상점 새로고침을 @Numrolls@회 획득합니다.",
      "en": "Gain @Numrolls@ free Shop rerolls that never expire."
    },
    "effects": {
      "Numrolls": 8
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Rolling-For-Days-I.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "새로고침의 날 I",
      "en": "Rolling For Days I"
    },
    "unique": false
  },
  "TFT9_Augment_BigGrabBag": {
    "apiName": "TFT9_Augment_BigGrabBag",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "무작위 조합 아이템 @NumItems@개, @Gold@골드, 재조합기를 획득합니다. <br><br><rules>재조합기로 어떤 아이템이든 다시 만들 수 있습니다.</rules>",
      "en": "Gain @NumItems@ random components, @Gold@ gold, and 1 Reforger. <br><br><rules>Reforgers allow you to remake any item.</rules>"
    },
    "effects": {
      "Gold": 2,
      "NumItems": 3,
      "NumReforgers": 1
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Grab-Bag-II.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "큰 꾸러미",
      "en": "Big Grab Bag"
    },
    "unique": false
  },
  "TFT9_Augment_JustKeepRolling": {
    "apiName": "TFT9_Augment_JustKeepRolling",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "상점을 @Tier1Rolls@번 새로고침하면 새고로침 비용이 @RefreshCost@골드가 됩니다.<br><br>(이번 게임의 새로고침 횟수: @TFTUnitProperty.item:TFT9_JustKeepRollingRolls@)",
      "en": "After you reroll your Shop @Tier1Rolls@ times, rerolls only cost @RefreshCost@ gold.<br><br>(Rerolls this game: @TFTUnitProperty.item:TFT9_JustKeepRollingRolls@)"
    },
    "effects": {
      "RefreshCost": 1,
      "Tier1Rolls": 8
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Pirates2.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "단골 고객",
      "en": "Frequent Flier"
    },
    "unique": false
  },
  "TFT10_Augment_LittleBuddies": {
    "apiName": "TFT10_Augment_LittleBuddies",
    "associatedTraits": [],
    "composition": [],
    "desc": {
      "ko": "전장에 있는 1단계 및 2단계 챔피언 하나당 아군 4단계 및 5단계 챔피언이 @health@의 체력과 @AttackSpeed*100@%의 공격 속도를 얻습니다.",
      "en": "Your 4-cost and 5-cost champions gain @health@ Health and @AttackSpeed*100@% Attack Speed  for every 1-cost and 2-cost champion on your board."
    },
    "effects": {
      "AttackSpeed": 0.10000000149011612,
      "Health": 150,
      "{0d14760d}": 4,
      "{82aeb8a7}": 2
    },
    "from": null,
    "icon": "ASSETS/Maps/TFT/Icons/Augments/Hexcore/Little-Buddies-II.TFT_Set10.tex",
    "id": null,
    "incompatibleTraits": [],
    "name": {
      "ko": "작은 친구들",
      "en": "Little Buddies"
    },
    "unique": false
  }
}

export type AugmentName_10 = SplitTwice<keyof typeof augments_season_10, '_'>[2];
export type AugmentData_10 = DeepNullable<(typeof augments_season_10)['TFT9_Augment_Idealism']>;

  