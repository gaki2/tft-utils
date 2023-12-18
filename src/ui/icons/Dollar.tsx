import DollarSvg from './assets/dollar.svg';
import { IconProps } from './types/iconProps';

export const Dollar = (props: IconProps) => (
  <DollarSvg width={props.width ?? '1.5rem'} height={props.height ?? '1.5rem'} />
);
