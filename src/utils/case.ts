import { lowerCase } from 'lodash';

/**
 * 맨 앞지리 알파벳만 대문자로 하고 나머지는 소문자로한다.
 */
export const toPascalCase = (str: string) => {
  const [first, ...rest] = lowerCase(str);
  return first.toUpperCase() + rest.join('');
};
