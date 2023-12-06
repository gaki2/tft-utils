import styled from 'styled-components';
import { LanguageType, Season } from '../../../types';
import { SlotData } from '../class/Board';
import { useTraitList } from './useTraitList';
import { TraitItem } from './TraitItem';

type TraitListProps = {
  season: Season;
  allSlotData: (SlotData | null)[];
  lang: LanguageType;
};

export const TraitList = ({ season, allSlotData, lang }: TraitListProps) => {
  const traitProps = useTraitList({ season, allSlotData, lang });

  return (
    <Wrapper>
      {traitProps.map((trait, idx) => {
        return <TraitItem trait={trait} key={idx} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /**
   Trait 의 이름과 레벨을 표시할지 여부
   */
  --detail-display: flex;
  --badge-size: 32px;
  --icon-size: 16px;
  --font-scale: 1;

  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 4px;
  flex-shrink: 0;
  overflow-y: scroll;
  max-height: 280px;
  margin-left: 32px;

  @media (max-width: 768px) {
    --max-width: 360px;
    --detail-display: none;
    --badge-size: 24px;
    --icon-size: 12px;
    --gap: 4px;
    --font-scale: 0.8;

    display: none;
  }
`;
