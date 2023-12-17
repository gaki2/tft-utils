import _Dollar from './dollar.svg';
import styled from 'styled-components';

export const Dollar = () => {
  return <Icon src={_Dollar} />;
};

export const Icon = styled.img`
  width: 16px;
  height: 16px;
  object-fit: cover;
  display: inline;
`;
