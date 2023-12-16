export const isEmptyObject = (obj: any) => {
  return Object.keys(obj).length === 0;
};

export function convertKeysToUpperCase(obj: { [key: string]: any }) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const upperKey = key.toUpperCase();
      if (key !== upperKey) {
        Object.defineProperty(obj, upperKey, Object.getOwnPropertyDescriptor(obj, key)!);
        delete obj[key];
      }
    }
  }
}

/**
 * 배열을 인자로 받아서, nullable 한 값을 제거한 배열을 반환한다.
 */
export function filterNullable<T>(array: (T | null | undefined)[]): T[] {
  return array.filter((item) => item !== null && item !== undefined) as T[];
}
