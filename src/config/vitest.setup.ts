import * as matchers from '@testing-library/jest-dom/matchers';
import { vi } from 'vitest';

export const mockMatchMedia = (matches?: (query: string) => boolean) => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: matches?.(query) || false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // deprecated
      removeListener: vi.fn(), // deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
};

// jest-dom matcher 들을 vitest 의 matchers 에 확장시킨다.
expect.extend(matchers);
// window 의 matchMedia 라는 함수가 있는데, 이 함수는 jsdom 에서 지원하지 않기 때문에,
// 따로 모킹을 해줘야한다.
mockMatchMedia();
