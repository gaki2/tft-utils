import { Tooltip } from 'react-tooltip';
import React from 'react';

type ReactTooltipProps = React.ComponentProps<typeof Tooltip>;

export const ReactTooltip = (props: ReactTooltipProps) => {
  return <Tooltip opacity={1} delayShow={0} {...props} />;
};
