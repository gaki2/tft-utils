import styled from 'styled-components';
import React from 'react';
import { StyleType } from '../types/styleType';

export type FlexProps = React.PropsWithChildren<
  {
    align?: React.CSSProperties['alignItems'];
    justify?: React.CSSProperties['justifyContent'];
  } & StyleType
>;

export const FlexRow = (props: FlexProps) => {
  return <RowWrapper {...props}></RowWrapper>;
};

const RowWrapper = styled.div<{
  align?: React.CSSProperties['alignItems'];
  justify?: React.CSSProperties['justifyContent'];
}>`
  display: flex;
  flex-direction: row;
  align-items: ${({ align }) => align ?? 'normal'};
  justify-content: ${({ justify }) => justify ?? 'normal'};
`;

export const FlexCol = (props: FlexProps) => {
  return <ColWrapper {...props}></ColWrapper>;
};

const ColWrapper = styled.div<{
  align?: React.CSSProperties['alignItems'];
  justify?: React.CSSProperties['justifyContent'];
}>`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => align ?? 'normal'};
  justify-content: ${({ justify }) => justify ?? 'normal'};
`;
