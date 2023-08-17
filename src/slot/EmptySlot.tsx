import { SlotIndex } from '../types';

type EmptySlotProps = {
  slotIdx: SlotIndex;
};

export const EmptySlot = ({ slotIdx }: EmptySlotProps) => {
  return <div>{slotIdx}</div>;
};
