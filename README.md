# 롤토체스 유틸
*TFT Utils*

![poro](https://tft-utils.s3.ap-northeast-2.amazonaws.com/assets/poro.jpeg)

# Installation

```
$ npm i tft-utils
```

# About

롤토체스 유틸은 롤토체스 전적 사이트나 공략 사이트를 만들기 위해 필요한 컴포넌트들을 제공하는 라이브러리입니다. 

# Usage

### Board 컴포넌트 (배치툴)

```tsx
import { Board } from 'tft-utils';

const App = () => {
  const champions = [
    {
      position: {row: 0, col: 0},
      champion: 'Aatrox',
      main: true,
    },
    {
      position: {row: 0, col: 1},
      champion: 'Jhin',
    },
  ];
  
  return (
    // Board10 은 시즌10 전용 배치툴을 의미합니다. (시즌 11이 나올경우 Board11 컴포넌트가 만들어짐.)
    <Board10 champions={champions} season={'season_9'} />
  );
};
```

### Badge 컴포넌트 (챔피언, 아이템, 특성, 증강)

```tsx
const App = () => {

  return (
    <>
      <ChampionBadge10 name={'Sona'} />
      <ItemBadge10 name={'BFSword'} />
      <TraitBadge10 name={'8bit'} />
      <AugmentBadge10 name={'SalvageBin'} />
    </>
      );
};
```

# 시즌, 언어 지원
 
*Season Support*

`season10`

*Language Support*

`en` `ko`

# Peer Dependencies

react, react-dom, styled-components <br>

롤토체스 유틸 라이브러리는 내부적으로 react, react-dom, styled-components 를 사용합니다. <br>
따라서 사용하고자 하는 프로젝트에 위 세개의 라이브러리를 설치해야 정상적으로 작동합니다. <br>

```
"peerDependencies": {
    "react": "^16.8.0 || ^17.0.0 || ^18.0.0",
    "react-dom": "^16.8.0 || ^17.0.0 || ^18.0.0",
    "styled-components": ">=5"
  }
```

# Bug

이슈를 만들어주시거나 메일로 문의해주세요.


