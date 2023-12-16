import styled from 'styled-components';
import { LanguageType } from '../../../../../../types';

export const Rule = () => {
  return <Wrapper>{'Main'}</Wrapper>;
};

const Wrapper = styled.span`
  --main_dps: #c51162;
  --sub_dps: #ff4081;
  --main_tank: #2962ff;
  --sub_tank: #448aff;
  --font_color: #fff;

  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 50%;
  top: 18%;
  background-color: var(--main_dps);
  color: var(--font_color);
  white-space: nowrap;
  text-align: center;
  font-size: var(--font-size);
  border-radius: 4px;
  transform: scale(var(--font-scale));
`;
