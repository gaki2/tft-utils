import { CSSProperties, useRef, useState, ReactNode, useCallback } from 'react';
import { useClickOutside } from '@src/utils/popover/useClickOutside';
import { createPortal } from 'react-dom';

type PopoverProps = {
  parentWidth: number;
  parentHeight: number;
  parentTop: number;
  parentLeft: number;
  children: ReactNode;
  closePopover: () => void;
};

const absoluteStyle: CSSProperties = {
  position: 'absolute',
  zIndex: 100,
  width: 'auto',
  height: 'auto',
};

const isOverScreen = (screenLen: number, xOrY: number, widthOrHeight: number) => {
  if (xOrY + widthOrHeight > screenLen) {
    return true;
  } else if (xOrY < 0) {
    return true;
  }
  return false;
};

export const Popover = ({
  parentWidth,
  parentHeight,
  parentTop,
  parentLeft,
  closePopover,
  children,
}: PopoverProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside({
    handler: closePopover,
    insideRefs: [ref],
  });

  const getPosition = useCallback((): CSSProperties => {
    return {
      top: parentTop,
      left: parentLeft + parentWidth,
    };
  }, [parentTop, parentLeft, parentWidth]);

  return (
    <>
      {createPortal(
        <div style={{ ...absoluteStyle, ...getPosition() }} ref={ref}>
          {children}
        </div>,
        document.body
      )}
    </>
  );
};
