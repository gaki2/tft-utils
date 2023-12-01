import styled from 'styled-components';
import { LanguageType, Season } from '../../../types';
import { SlotData } from '../class/Board';
import { useTraitList } from './useTraitList';
import { TraitItem } from './TraitItem';

type TraitListProps = {
  season: Season;
  allSlotData: (SlotData | null)[];
  lang: LanguageType;
  isDarkmode: boolean;
};

export const TraitList = ({ season, allSlotData, lang, isDarkmode }: TraitListProps) => {
  const traitProps = useTraitList({ season, allSlotData, lang });

  return (
    <Wrapper isDarkmode={isDarkmode}>
      {traitProps.map((trait, idx) => {
        return <TraitItem trait={trait} key={idx} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isDarkmode: boolean }>`
  --max-width: 620px;
  /**
   Trait 의 이름과 레벨을 표시할지 여부
   */
  --detail-display: flex;
  --badge-size: 32px;
  --icon-size: 16px;
  --gap: 8px;
  --font-scale: 1;

  max-width: var(--max-width);
  display: flex;
  overflow-x: scroll;
  background-color: ${(props) => (props.isDarkmode ? '#8d949e' : 'var(--trait-list-bg-color)')};

  @media (max-width: 768px) {
    --max-width: 360px;
    --detail-display: none;
    --badge-size: 24px;
    --icon-size: 12px;
    --gap: 4px;
    --font-scale: 0.8;
  }
`;
