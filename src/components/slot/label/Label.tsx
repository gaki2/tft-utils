import styled from "styled-components";
import {LanguageType} from "../../../types";

export type Rule = 'main_dps' | 'sub_dps' | 'main_tank' | 'sub_tank'

type LabelProps = {
  rule?: Rule;
  lang?: LanguageType;
}

const RULE_NAME_MAP: Record<Rule, {[key in LanguageType]: string}> = {
  main_dps: {
    ko_kr: '메인 딜러',
    en_us: 'Main DPS',
  },
  sub_dps: {
    ko_kr: '서브 딜러',
    en_us: 'Sub DPS',
  },
  main_tank: {
    ko_kr: '메인 탱커',
    en_us: 'Main Tank',
  },
  sub_tank: {
    ko_kr: '서브 탱커',
    en_us: 'Sub Tank',
  }
}

export const Label = ({rule, lang = 'ko_kr'}: LabelProps) => {
  return (
    <Wrapper rule={rule}>
      {rule && RULE_NAME_MAP[rule][lang]}
    </Wrapper>
  )
}

const Wrapper = styled.span<{rule?: Rule}>`
  --main_dps: #C51162;
  --sub_dps: #FF4081;
  --main_tank: #2962FF;
  --sub_tank: #448AFF;
  --font_color: #fff;
  visibility: ${({rule}) => (rule ? 'visible' : 'hidden')};
  
  position: absolute;
  left: 0;
  right: 0;
  top: 18%;
  background-color: var(--${({ rule }) => rule});
  color: var(--font_color);
  white-space: nowrap;
  text-align: center;
  font-size: 13px;
  border-radius: 4px;
`;



