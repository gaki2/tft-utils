import styled from 'styled-components';

type HrSize = 'none' | 'S' | 'M' | 'L' | 'XL';

type HrProps = {
  size: HrSize;
};

export const Hr = ({ size }: HrProps) => {
  return <MyHr role='separator' size={size} />;
};

const MyHr = styled.div<{ size: HrSize }>`
  --none: 0 0 0 0;
  --S: 0 0 0.25rem 0;
  --M: 0 0 0.5rem 0;
  --L: 0 0 1rem 0;
  --XL: 0 0 1.25rem 0;

  width: 100%;
  margin: ${(props) => props.size && `var(--${props.size})`};
`;
