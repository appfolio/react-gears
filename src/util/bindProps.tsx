import React, { forwardRef } from 'react';
import type {
  ComponentType,
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  ForwardedRef,
} from 'react';
import type { OmitByType } from './typeHelpers';

/**
 * Bind props to a component.
 *
 * const PasswordInput = bindProps(Input, { type: 'password' });
 * <PasswordInput ...any Input props... />
 */
export function bindProps<C extends ElementType, P extends Partial<ComponentPropsWithoutRef<C>>>(
  Component: C,
  boundProps: P
) {
  type OProps = ComponentPropsWithoutRef<C>;
  type ORefInstance = ElementRef<C>;
  type BProps = OmitByType<P, undefined>;
  const Comp = Component as ComponentType<OProps>;

  return forwardRef(
    (props: Omit<OProps, keyof BProps> & Partial<BProps>, ref: ForwardedRef<ORefInstance>) => {
      const allProps = { ...boundProps, ...props } as OProps;
      return <Comp {...allProps} ref={ref} />;
    }
  );
}
