export const underBarToSpace = (str: string) => str.replace(/_/g, ' ');

export const spaceToUnderBar = (str: string) => str.replace(/ /g, '_');

/**
 * 문자열에 포함된 `<br>` 을 제거함.
 */
export const removeBrTag = (str: string) => {
  return str.replace(/<br>/g, '');
};

/**
 * <SomeTag>, </AnyTag> 같은 패턴을 제거함.
 * (예외) <br> 은 제거하지 않음.
 */
export const removeAngleBracket = (str: string) => {
  return str.replace(/<(?!br>)[^>]*>/g, '');
};

/**
 * 이름 사이에 들어가는 ' 를 제거하기 위해 추가함.
 * Cho'Gath -> ChoGath
 */
export const removeQuote = (str: string) => {
  return str.replace(/'/g, '');
};

/**
 * '%i: ~~~~ %' 형태의 값을 제거해준다.
 */
export const removePercent = (str: string) => {
  return str.replace(/%i:[^%]*%/g, '');
};

export const removeZWSP = (str: string) => {
  return str.replace(/\u200B/g, '');
};
