type Primitive = {
  style?: React.CSSProperties;
  className?: string;
};

export type WithPrimitive<T> = T & Primitive;
