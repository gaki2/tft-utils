import { Tooltip as _Tooltip } from 'react-tooltip';
import React from 'react';

type _TooltipProps = {
  id: string;
  children: React.ReactNode;
  tooltipProps?: React.ComponentProps<typeof _Tooltip>;
};

export const Tooltip = ({ id, tooltipProps, children }: _TooltipProps) => {
  return (
    <_Tooltip
      delayShow={0}
      delayHide={0}
      style={{ padding: '8px', zIndex: 9999 }}
      {...tooltipProps}
      openOnClick={true}
      id={id}>
      {children}
    </_Tooltip>
  );
};
