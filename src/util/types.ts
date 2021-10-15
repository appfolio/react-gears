export type AllowWeakType<T> = Record<string, never> extends T ? any : T;
