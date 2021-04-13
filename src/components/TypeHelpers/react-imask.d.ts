declare module 'react-imask' {
  import Imask from 'imask';

  // https://github.com/uNmAnNeR/imaskjs/blob/master/packages/react-imask/src/mixin.js

  export type IMaskInputProps = Imask.AnyMaskedOptions & {
    unmask?: boolean;
    value?: any,
    prepare?: (value: string) => string,
    validate?: (value: string, masked: string) => void,
    commit?: (value: string, masked: string) => void,
    overwrite?: boolean,
    onAccept?: <T>(...args: T[]) => void;
    onComplete?: <T>(...args: T[]) => void;
  };

  export function IMaskMixin<T, D>(
    Component: React.ComponentType<{ inputRef: React.Ref<D> } & T>
  ): React.ComponentType<T & IMaskInputProps>;

  export const IMaskInput: React.ComponentType<IMaskInputProps>;
}
