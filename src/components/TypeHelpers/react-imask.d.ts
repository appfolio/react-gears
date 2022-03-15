declare module 'react-imask' {
  import IMask from 'imask';

  // https://github.com/uNmAnNeR/imaskjs/blob/master/packages/react-imask/src/mixin.js
  export type IMaskInputProps<MaskOptions extends IMask.AnyMaskedOptions> = MaskOptions & {
    unmask?: boolean;
    value?: any;
    prepare?: (value: string) => string;
    validate?: (value: string, masked: IMask.Masked<MaskOptions['mask']>) => void;
    commit?: (value: string, masked: IMask.Masked<MaskOptions['mask']>) => void;
    overwrite?: boolean;
    onAccept?: (value: string, mask: IMask.InputMask<MaskOptions>) => void;
    onComplete?: (value: string, mask: IMask.InputMask<MaskOptions>) => void;
  } & React.InputHTMLAttributes<HTMLInputElement>;

  export function IMaskMixin<T, TProps, MaskOptions extends IMask.AnyMaskedOptions>(
    Component: React.ComponentType<{ inputRef: React.Ref<T> } & TProps>
  ): React.ComponentType<TProps & IMaskInputProps<MaskOptions>>;

  export function IMaskInput<MaskOptions extends IMask.AnyMaskedOptions>(
    props: IMaskInputProps<MaskOptions>
  ): JSX.Element;
}
