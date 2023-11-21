import { convertKeysToUpperCase, isEmptyObject } from './my_lodash';

export function replaceVariables(text: string, variables: any) {
  if (isEmptyObject(variables)) return text;
  convertKeysToUpperCase(variables);
  // p2: @variable@ 에서 @Damage*2@ 와 같이 *2 라는 수식이 들어갔을때 *2 를 나타냄.
  return text.replace(/@(\w+)(\*[\d]+)?@/g, function (match, p1, p2) {
    const value = variables[p1.toUpperCase()];
    if (value !== undefined) {
      return p2 ? (value * parseFloat(p2.slice(1))).toFixed(0) : value;
    }
    return match;
  });
}
