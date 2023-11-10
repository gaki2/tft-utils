import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // 리엑트 관련 테스트 옵션을 자동으로 설치해주는 플러그인입니다.
  // 추가적으로 tsConfigPaths 라는 플러그인을 사용한다면
  //tsConfig 에 있는 import alias 를 테스트에도 사용할 수 있습니다.
  plugins: [react()],
  test: {
    // 테스트 파일에서 vitest 의 함수들을 import 하지 않고도 사용할 수 있도록한다.
    globals: true,
    // dom, window 객체들을 jsdom 에서 가져온다.
    environment: 'jsdom',
    // setup 파일 위치
    setupFiles: './src/config/vitest.setup.ts',
  },
});
