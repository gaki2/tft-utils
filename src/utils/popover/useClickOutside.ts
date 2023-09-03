/**
 * https://github.com/chakra-ui/chakra-ui/blob/1a97c08b5bc159dfa17268a88e3a6a5c4ece339c/packages/legacy/hooks/src/use-outside-click.ts#L80
 */
import React, { useEffect, useRef, useState } from 'react';

type Props = {
  handler: (e: Event) => void;
  insideRefs?: React.RefObject<HTMLElement>[];
  /**
   * 이 값이 true 일때 document 에 click 이벤트를 등록한다.
   */
};

const isValidEvent = (e: Event, refs: React.RefObject<HTMLElement>[]) => {
  return (
    refs?.length >= 1 &&
    refs?.every((ref) => ref.current && !ref.current.contains(e.target as HTMLElement))
  );
};

export const useClickOutside = ({ handler, insideRefs = [] }: Props) => {
  const [isPointerDown, setIsPointerDown] = useState(false);
  const callbackRef = useRef(handler);

  useEffect(() => {
    callbackRef.current = handler;
  });

  useEffect(() => {
    const onPointerDown = (e: Event) => {
      if (isValidEvent(e, insideRefs)) {
        setIsPointerDown(true);
      }
    };

    const onPointerUp = (e: Event) => {
      if (isPointerDown && callbackRef.current && isValidEvent(e, insideRefs)) {
        setIsPointerDown(false);
        callbackRef.current(e);
      }
    };

    document?.addEventListener('mousedown', onPointerDown);
    document?.addEventListener('click', onPointerUp);
    return () => {
      document?.removeEventListener('mousedown', onPointerDown);
      document?.removeEventListener('click', onPointerUp);
    };
  }, [insideRefs, handler]);
};
