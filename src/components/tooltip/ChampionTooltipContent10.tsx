import styled from 'styled-components';
import { skills_season_10 } from '../../_generated/season_10/skill_season_10';
import { Hr } from '../../utils/components/Hr';
import { Dollar } from '../../utils/components/Dollar';
import { TraitGetter } from '../../getter/trait_getter';
import { useMemo } from 'react';
import { getTraitIconUrl10 } from '../badge/trait/trait_utils';
import { filterNullable } from '../../utils/my_utils';

type ChampionTooltipContent10Props = {
  name: string;
  apiName: string;
  cost: number;
  skillUrl: string;
  traits: string[];
};

export const ChampionTooltipContent10 = (props: ChampionTooltipContent10Props) => {
  const { name, apiName, cost, skillUrl, traits } = props;
  const apiNameLikes = apiName.split('_')[1].toLowerCase();

  const skillDetail = skills_season_10[apiNameLikes];

  const traitDetails = useMemo(() => {
    return traits.map((trait) => {
      const apiName = TraitGetter.getTraitApiNameFromDisplayName(trait, 'season_10') ?? 'XXXXXXXXX';
      const data = TraitGetter.getTraitDataFromName(apiName, 'season_10');

      if (data) {
        return {
          name: trait,
          iconUrl: getTraitIconUrl10(data.icon ?? ''),
        };
      }
    });
  }, [traits]);

  return (
    <Wrapper>
      <Name>{name}</Name>
      <Hr size={'S'} />
      <FlexRow gap={'3px'}>
        <Dollar />
        <span>{cost}</span>
      </FlexRow>
      <Hr size={'S'} />
      <FlexCol gap={'2px'}>
        {filterNullable(traitDetails).map((trait) => {
          return (
            <FlexRow gap={'2px'}>
              <TraitImg src={trait.iconUrl} />
              {trait.name}
            </FlexRow>
          );
        })}
      </FlexCol>
      <Hr size={'M'} />
      <FlexRow gap={'6px'}>
        <SkillImg src={skillUrl} />
        <div>
          <SkillName>{skillDetail.name}</SkillName>
          <Mana>{skillDetail.mana}</Mana>
        </div>
      </FlexRow>
      <Hr size={'M'}></Hr>
      <Desc>{`${skillDetail.description}`}</Desc>
      <Hr size={'M'} />
      <FlexCol gap={'2px'}>
        {skillDetail.damage.map((item) => {
          return (
            <div key={item.title}>
              <span>{item.title}</span>
              <span>{item.content}</span>
            </div>
          );
        })}
      </FlexCol>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 360px;
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
  font-weight: 400;
`;

const Name = styled.span``;

const FlexRow = styled.div<{ gap: string }>`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.gap};
  align-items: center;
`;

const FlexCol = styled.div<{ gap: string }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap};
`;

const SkillImg = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
`;

const SkillName = styled.p`
  color: orange;
  font-weight: 700;
  margin: 0;
`;

const TraitImg = styled.img`
  width: 16px;
  height: 16px;
  object-fit: cover;
`;

const Mana = styled.p`
  margin: 0;
`;

const Desc = styled.div`
  white-space: pre-line;
  line-height: 1.5;
  color: #dcdcdc;
`;

const DamageP = styled.p`
  line-height: 1;
`;
