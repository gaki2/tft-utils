export function applyRegex(target: string, ...args: ((text: string) => string)[]) {
  return args.reduce((acc, fn) => fn(acc), target);
}

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

/**
 * 문자열의 마지막에 위치한 .tex 확장자를 .png 로 변경한다.
 */
export const DotTexToDotPng = (str: string) => {
  return str.replace(/\.tex$/, '.png');
};

export const DotddsToDotPng = (str: string) => {
  return str.replace(/\.dds$/, '.png');
};

/**
 * 문자열의 마지막에 위치한 .tex 나 .dds 를 .png 로 변경한다.
 */
export const ToDotPng = (str: string) => {
  return str.replace(/(\.tex|\.dds)$/, '.png');
};

export const ToLowerCase = (str: string) => {
  return str.toLowerCase();
};
