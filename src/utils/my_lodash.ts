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
