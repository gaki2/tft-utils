import styled from 'styled-components';
import { TraitData, TraitType } from './useTraitList';
import { TRAIT_BACKGROUND_URL } from '../../../environments/urls';
import { Tooltip } from '../../../utils/components/Tooltip';

const TRAIT_TYPE_URL_MAP = {
  NONE: 'cteamplanner_activetrait_empty.png',
  BRONZE: 'cteamplanner_activetrait_kbronze.png',
  SILVER: 'cteamplanner_activetrait_ksilver.png',
  GOLD: 'cteamplanner_activetrait_kgold.png',
  PLATINUM: 'cteamplanner_activetrait_kchromatic.png',
} as const;

type TraitItemProps = {
  trait: TraitData;
};

export const TraitItem = ({ trait }: TraitItemProps) => {
  return (
    <>
      <Tooltip id={trait.apiName}>{trait.name}</Tooltip>
      <Wrapper headliner={trait.headliner}>
        <TraitBadgeBackground
          data-tooltip-id={trait.apiName}
          traitType={trait.type}
          key={trait.apiName}>
          <TraitImg traitType={trait.type} src={trait.url}></TraitImg>
        </TraitBadgeBackground>
        <TraitCount>{trait.count}</TraitCount>
        <TraitInfo>
          {/*<TraitName>{trait.name}</TraitName>*/}
          {/*{trait.type !== 'NONE' && <TraitLevel>{trait.level.join(' ▶ ')}</TraitLevel>}*/}
        </TraitInfo>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div<{ headliner: boolean }>`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const TraitBadgeBackground = styled.div<{ traitType: TraitType }>`
  background-image: url(${({ traitType }) =>
    TRAIT_BACKGROUND_URL + '/' + TRAIT_TYPE_URL_MAP[traitType]});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  width: var(--badge-size);
  height: var(--badge-size);
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const TraitImg = styled.img<{ traitType: TraitType }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: var(--icon-size);
  height: var(--icon-size);
  object-position: center;
  object-fit: cover;
  filter: ${({ traitType }) => (traitType !== 'NONE' ? 'invert(1)' : 'opacity(1)')};
`;

const TraitCount = styled.div`
  height: 100%;
  display: flex;
  padding: 0 4px;
  align-items: center;
  justify-content: center;
  color: var(--font-color);
  transform: scale(var(--font-scale));
`;

const TraitInfo = styled.div`
  display: var(--detail-display);
  flex-direction: column;
  flex-shrink: 0;
`;

const TraitName = styled.span`
  font-size: 0.8rem;
  color: var(--font-color);
`;

const TraitLevel = styled.span`
  font-size: 0.7rem;
  color: var(--font-color);
`;
