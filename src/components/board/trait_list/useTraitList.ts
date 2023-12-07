import { SlotData } from '../class/Board';
import { TraitGetter } from '../../../getter/trait_getter';
import { LanguageType, Season } from '../../../types';
import { SEASON_10_BASEURL } from '../../../environments/urls';
import { ToDotPng, ToLowerCase } from '../../../utils/regex';

type UseTraitListProps = {
  season: Season;
  allSlotData: (SlotData | null)[];
  lang: LanguageType;
};

export type TraitType = 'NONE' | 'BRONZE' | 'SILVER' | 'GOLD' | 'PLATINUM';
export type TraitData = {
  apiName: string;
  name: string;
  url: string;
  type: TraitType;
  headliner: boolean;
  level: number[];
  count: number;
};

export const useTraitList = ({ season, allSlotData, lang }: UseTraitListProps) => {
  const traitCounter = getTraitCounter(allSlotData, season);
  const traitProps = getTraitProps(traitCounter, season, lang);

  return traitProps;
};

function getTraitCounter(allSlotData: (SlotData | null)[], season: Season) {
  const traitCounter = allSlotData.reduce((acc, slotData) => {
    if (!slotData) {
      return acc;
    }

    if (slotData.headlinerTrait) {
      const apiName = TraitGetter.getTraitDataFromName(slotData.headlinerTrait, season)?.apiName;
      if (apiName) {
        if (acc[apiName]) {
          acc[apiName] += 101;
        } else {
          acc[apiName] = 101;
        }
      }
    }

    const displayTraits = slotData.championData.traits;
    const apiNameTraits = displayTraits.map((trait) =>
      TraitGetter.getTraitApiNameFromDisplayName(trait, season)
    );

    apiNameTraits.forEach((apiName) => {
      if (!apiName) {
        return;
      }

      if (acc[apiName]) {
        acc[apiName] += 1;
      } else {
        acc[apiName] = 1;
      }
    });

    return acc;
  }, {} as { [key: string]: number });

  return traitCounter;
}

function getTraitLevel(effects: Array<{ minUnits: number | null }>) {
  return effects.reduce((acc, effect) => {
    if (!effect.minUnits) {
      return acc;
    }

    acc.push(effect.minUnits);
    return acc;
  }, [] as number[]);
}

/**
 *
 * @param level : 오름차순 정렬 되어있어야함.
 * @param count
 *
 * idx: 0 => NONE
 * idx: 1 => BRONZE
 * idx: 2 => SILVER
 * idx: 3 => GOLD
 * idx: 4 => PLATINUM
 */
function getTraitType(level: number[], count: number): TraitType {
  let idx = 0;
  for (let i = 0; i < level.length; i++) {
    if (count < level[i]) {
      idx = i;
      break;
    } else if (count === level[i]) {
      idx = i + 1;
      break;
    } else if (i === level.length - 1) {
      idx = i + 1;
    }
  }
  if (idx === 1 && level.length === 1) {
    return 'GOLD';
  }

  if (idx === 2 && level.length === 3) {
    return 'GOLD';
  }

  switch (idx) {
    case 0:
      return 'NONE';
    case 1:
      return 'BRONZE';
    case 2:
      return 'SILVER';
    case 3:
      return 'GOLD';
    case 4:
      return 'PLATINUM';
    default:
      return 'NONE';
  }
}

function getTraitProps(
  traitCounter: { [key: string]: number },
  season: Season,
  lang: LanguageType
): TraitData[] {
  const traitProps = Object.keys(traitCounter).reduce((acc, apiNameOfTrait) => {
    const count = traitCounter[apiNameOfTrait];
    const details = TraitGetter.getTraitDataFromName(apiNameOfTrait, season);
    if (!details) {
      return acc;
    }

    const traitLevel = getTraitLevel(details.effects).sort((a, b) => a - b);
    const traitType = getTraitType(traitLevel, count > 100 ? count - 100 : count);
    const url = details.icon ? `${SEASON_10_BASEURL}/${ToLowerCase(ToDotPng(details.icon))}` : '';
    const name = details.name[lang] ?? '';
    const headliner = count > 100;

    acc.push({
      apiName: apiNameOfTrait,
      name,
      url,
      type: traitType,
      level: traitLevel,
      headliner,
      count: count > 100 ? count - 100 : count,
    });

    return acc;
  }, [] as { apiName: string; name: string; url: string; type: TraitType; headliner: boolean; level: number[]; count: number }[]);

  /**
   * 객체의 type 에서 PLATINUM, GOLD, SILVER, BRONZE, NONE 순으로 정렬
   * 만약 type 이 같다면, count 를 기준으로 내림차순 정렬
   */
  traitProps.sort((a, b) => {
    const order = ['PLATINUM', 'GOLD', 'SILVER', 'BRONZE', 'NONE'];
    const aIdx = order.indexOf(a.type);
    const bIdx = order.indexOf(b.type);

    if (aIdx === bIdx) {
      return b.count - a.count;
    }

    return aIdx - bIdx;
  });

  return traitProps;
}
