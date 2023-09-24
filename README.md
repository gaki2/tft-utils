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

*Board*

```tsx
import { Board } from 'tft-utils';

const App = () => {
  const champions = [
    {
      position: {row: 0, col: 0},
      champion: 'TFT9_Aatrox',
    },
    {
      position: {row: 0, col: 1},
      champion: 'TFT9_Jhin',
    },
  ];
  
  return (
    <Board champions={champions} season={'season_9'} lang={'en_us'} />
  );
};
```

position 은 { row, col } 객체로 구성되어 있으며 row 는 0 ~ 3, col 은 0 ~ 6 의 값을 가집니다. <br>
champion 은 롤토체스 챔피언의 이름을 입력합니다. <br>
Board 컴포넌트는 자체적으로 드래그 앤 드랍 기능이 구현되어 있어 챔피언의 위치를 변경할 수 있습니다. <br>
또한 챔피언을 클릭 할 시, 챔피언의 가격, 시너지 정보를 띄워주는 팝오버가 열립니다.

![team_builder](https://tft-utils.s3.ap-northeast-2.amazonaws.com/assets/team_builder.png)

# Season, Language Support
 
*Season Support*

`season_9`, `season_9b`
season9b 는 시즌 9.5 라는 뜻입니다.

*Language Support*
`en_us` `ko_kr`

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


