# TFT Utils v0.1.4
![poro](https://tft-utils.s3.ap-northeast-2.amazonaws.com/assets/poro.jpeg)

# Installation

```
$ npm i tft-utils
```
# New Features
### 0.1.4
- Add `season_9.5` support
- type definition added

# What is TFT Utils?

TFT Utils is a library that provides React Components that are useful for TFT.

# Provided Components

## Board
### Board Component is TFT Team Builder. You can use it like this.

![team_builder](https://tft-utils.s3.ap-northeast-2.amazonaws.com/assets/team_builder.png)

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

### With Drag and Drop, you can move champions position in board. <br>
### With Click ChampionImage, champion info popup opened.

![tft_popup](https://tft-utils.s3.ap-northeast-2.amazonaws.com/assets/tft_popup.png)

# Season, Language Support

#### Season Support
`season_9`

#### Language Support
`en_us` `ko_kr`

# Peer Dependencies

react, react-dom, styled-components
```
"peerDependencies": {
    "react": "^16.8.0 || ^17.0.0 || ^18.0.0",
    "react-dom": "^16.8.0 || ^17.0.0 || ^18.0.0",
    "styled-components": ">=5"
  }
```

# Contribution

Any bug reports or feature requests are welcome. <br>
New Features are also welcome. <br>

