import { RefObject, useCallback, useEffect, useRef, useState } from 'react';

export type ElementDimensions = {
  contentWidth: number;
  contentHeight: number;
  clientWidth: number;
  clientHeight: number;
  scrollWidth: number;
  scrollHeight: number;
  isOverflowingX: boolean;
  isOverflowingY: boolean;
  isOverflowing: boolean;
  top: number;
  left: number;
};

export type UseResizeObserverReturns<Element> = {
  observeRef: (target: Element) => void;
  dimensions: ElementDimensions;
};

type Props = {
  ref: RefObject<HTMLDivElement>;
};

/**
 * @returns ref to pass to the target element, ElementDimensions
 */
export const useResizeObserver = <T extends HTMLElement>({
  ref,
}: Props): UseResizeObserverReturns<T> => {
  const [dimensions, setDimensions] = useState<ElementDimensions>({} as ElementDimensions);
  const observer = useRef<ResizeObserver | null>(null); // we only need one observer instance
  const element = useRef<HTMLElement | null>(null);

  const handleResize = useCallback((entries: ResizeObserverEntry[]) => {
    if (!Array.isArray(entries)) {
      return;
    }

    const entry = entries[0];
    const { top, left } = entry.target.getBoundingClientRect();
    const newDimensions: ElementDimensions = {
      contentWidth: entry.contentRect.width,
      contentHeight: entry.contentRect.height,
      clientWidth: entry.target.clientWidth,
      clientHeight: entry.target.clientHeight,
      scrollWidth: entry.target.scrollWidth,
      scrollHeight: entry.target.scrollHeight,
      isOverflowingX: entry.target.clientWidth < entry.target.scrollWidth,
      isOverflowingY: entry.target.clientHeight < entry.target.scrollHeight,
      top: top,
      left: left,
      // compute once on access then replace the getter with result
      get isOverflowing() {
        return (this.isOverflowing = this.isOverflowingX || this.isOverflowingY);
      },
    };

    setDimensions(newDimensions);
  }, []);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    if (!observer.current) {
      observer.current = new ResizeObserver((entries) => handleResize(entries));
    }

    // monitor the new element with cleanup of the old element
    if (element.current !== ref.current) {
      element.current && observer.current?.disconnect(); // call disconnect if monitoring old element
      observer.current.observe(ref.current);
      element.current = ref.current;
    }
  }, [handleResize]);

  // initialize resize observer
  const observeRef = useCallback(
    (target: HTMLElement) => {
      // the callback ref fires often without a target, so only process when we have a target
      if (!target) {
        return;
      }

      // instantiate a new observer if needed
      if (!observer.current) {
        observer.current = new ResizeObserver((entries) => handleResize(entries));
      }

      // monitor the new element with cleanup of the old element
      if (element.current !== target) {
        element.current && observer.current?.disconnect(); // call disconnect if monitoring old element
        observer.current.observe(target);
        element.current = target;
      }
    },
    [handleResize]
  );

  return { observeRef, dimensions };
};
