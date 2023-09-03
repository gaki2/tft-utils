export const throttle = <T extends any[]>(
  func: (...args: T) => void,
  delay: number
): ((...args: T) => void) => {
  let timeoutId: ReturnType<typeof setTimeout> | null;
  let lastExecTime = 0;

  return (...args: T): void => {
    const now = Date.now();
    const elapsedTime = now - lastExecTime;

    if (!lastExecTime || elapsedTime >= delay) {
      lastExecTime = now;
      func(...args);
    } else if (timeoutId === null) {
      timeoutId = setTimeout(() => {
        lastExecTime = now;
        func(...args);
        timeoutId = null;
      }, delay - elapsedTime);
    }
  };
};
