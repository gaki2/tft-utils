import styled from 'styled-components';
import { WithPrimitive } from '../../../../types/primitive';
import { LanguageType, Season } from '../../../../types';
import { useState } from 'react';
import { sortBy } from 'lodash';

type ChampionList = {
  name: string;
  apiName: string;
  cost: number;
  url: string;
  traits: string[];
}[];

export type ChampionListProps = React.PropsWithChildren<
  WithPrimitive<{
    list: ChampionList;
    season: Season;
    lang: LanguageType;
    onClick: (name: string) => void;
    extractCode: () => void;
    reset: () => void;
  }>
>;

export const ChampionList = (props: ChampionListProps) => {
  const { list, onClick, reset, season, lang, extractCode, children, ...primitive } = props;
  const [filteredList, setFilteredList] = useState<ChampionList>(list);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newList = list.filter((item) => item.name.includes(e.target.value));
    setFilteredList(newList);
  };
  return (
    <Wrapper {...primitive}>
      <Header>
        <button onClick={extractCode}>코드 추출하기</button>
        <button onClick={reset}>리셋</button>
        <Input onChange={onChange} />
      </Header>
      <Content>
        {sortBy(filteredList, 'cost').map((item) => {
          return (
            <Item
              url={item.url}
              cost={item.cost}
              key={item.apiName}
              onClick={() => onClick(item.apiName.split('_')[1])}
            />
          );
        })}
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 720px;
  height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const Input = styled.input`
  width: 120px;
  height: 22px;
`;

const Item = styled.div<{ url: string; cost: number }>`
  --1_cost_border: rgb(128, 128, 128);
  --2_cost_border: rgb(17, 178, 136);
  --3_cost_border: rgb(32, 122, 199);
  --4_cost_border: rgb(196, 64, 218);
  --5_cost_border: rgb(255, 185, 59);

  width: 36px;
  height: 36px;
  position: relative;
  background-image: url(${(props) => props.url});

  background-size: cover;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    outline: 3px solid var(--${(props) => props.cost}_cost_border);
  }
`;

const Header = (props: React.PropsWithChildren) => {
  return <HeaderWrapper>{props.children}</HeaderWrapper>;
};

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px;
  justify-content: space-around;
`;

const Content = (props: React.PropsWithChildren) => {
  return <ContentWrapper>{props.children}</ContentWrapper>;
};

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding: 4px;
  gap: 8px;
`;
