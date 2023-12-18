import styled from 'styled-components';

type Size = 'none' | 'S' | 'M' | 'L' | 'XL';

type SeperatorProps = {
  size: Size;
};

export const Seperator = ({ size }: SeperatorProps) => {
  return <Div role='separator' size={size} />;
};

const Div = styled.div<{ size: Size }>`
  --none: 0 0 0 0;
  --S: 0 0 0.25rem 0;
  --M: 0 0 0.5rem 0;
  --L: 0 0 1rem 0;
  --XL: 0 0 1.25rem 0;

  width: 100%;
  margin: ${(props) => props.size && `var(--${props.size})`};
`;
