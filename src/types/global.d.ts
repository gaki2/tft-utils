export {};

declare global {
  type Split<S extends string, D extends string> = string extends S
    ? string[]
    : S extends ''
    ? []
    : S extends `${infer T}${D}${infer U}`
    ? [T, ...Split<U, D>]
    : [S];

  type DeepNullable<T> = {
    [P in keyof T]: T[P] extends object ? DeepNullable<T[P]> : T[P] | null;
  };
}
