export const underBarToSpace = (str: string) => str.replace(/_/g, ' ');

export const spaceToUnderBar = (str: string) => str.replace(/ /g, '_');

/**
 * 문자열에 포함된 `<br>` 을 제거함.
 */
export const cleanBrTag = (str: string) => {
  return str.replace(/<br>/g, '');
};

/**
 * <br> 태그를 제외한 <~~~>, </~~~> 형태의 태그를 제거함.
 */
export const cleanAngleBracket = (str: string) => {
  return str.replace(/<(?!br>)[^>]*>/g, '');
};
