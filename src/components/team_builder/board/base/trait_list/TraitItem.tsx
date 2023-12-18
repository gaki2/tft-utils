import styled from 'styled-components';
import { TraitData, TraitType } from './useTraitList';
import { S3 } from '../../../../../environments/urls';
import { Tooltip } from '../../../../../ui/tooltip/Tooltip';

const TRAIT_TYPE_URL_MAP = {
  NONE: '/assets/darken.svg',
  BRONZE: '/assets/bronze.svg',
  SILVER: '/assets/silver.svg',
  GOLD: '/assets/gold.svg',
  PLATINUM: '/assets/chromatic.svg',
} as const;

type TraitItemProps = {
  trait: TraitData;
};

export const TraitItem = ({ trait }: TraitItemProps) => {
  return (
    <>
      <Tooltip id={trait.apiName}>{trait.name}</Tooltip>
      <Wrapper>
        <TraitBadgeBackground
          data-tooltip-id={trait.apiName}
          traitType={trait.type}
          isHeadliner={trait.headliner}
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

const Wrapper = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const TraitBadgeBackground = styled.div<{ traitType: TraitType; isHeadliner?: boolean }>`
  background-image: url(${({ traitType }) => S3 + TRAIT_TYPE_URL_MAP[traitType]});
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

  ${({ isHeadliner }) =>
    isHeadliner &&
    `
      ::before {
       content: '';
       position: absolute;
       width: 100%;
       height: 100%;
       top: 0;
       left: 0;
       background-size: contain;
       background-image: url('https://tft-utils.s3.ap-northeast-2.amazonaws.com/assets/headliner-frame.svg');
       opacity: 0.5;
  `}
  }
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
  filter: invert(1);
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
