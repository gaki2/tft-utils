# TFT Utils v0.1.3
![poro](https://tft-utils.s3.ap-northeast-2.amazonaws.com/assets/poro.jpeg)
<hr>

# Installation
<hr>

```
$ npm i tft-utils
```

# What is TFT Utils?
<hr>
TFT Utils is a library that provides React Components that are useful for TFT.
<br>

# Provided Components
<hr>

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
<hr>

#### Season Support
`season_9`

#### Language Support
`en_us` `ko_kr`

# Upcomming
<hr>

`season9.5 will be added soon.`

# Contribution
<hr>
Any bug reports or feature requests are welcome. <br>
New Features are also welcome. <br>

