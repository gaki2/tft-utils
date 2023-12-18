import { Tooltip as _Tooltip } from 'react-tooltip';
import React from 'react';

export type TooltipProps = React.PropsWithChildren<{
  id: string;
  tooltipProps?: React.ComponentProps<typeof _Tooltip>;
}>;

export const Tooltip = ({ id, tooltipProps, children }: TooltipProps) => {
  return (
    <_Tooltip
      delayShow={0}
      delayHide={0}
      style={{ padding: '8px', zIndex: 9999 }}
      {...tooltipProps}
      id={id}>
      {children}
    </_Tooltip>
  );
};
