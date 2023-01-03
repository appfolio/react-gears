import classnames from 'classnames';
import React, { ComponentProps, FC, ReactNode } from 'react';
import FormLabelGroup from '../Form/FormLabelGroup';
import Input from '../Input/Input';

// For some reason I was getting import errors when importing FormLabelGroupProps without `type`
// TODO: Revert to extends FormLabelGroupProps when we support TS 4.5+
interface DatapairProps extends ComponentProps<typeof FormLabelGroup> {
  className?: string;
  label?: ReactNode;
  value?: ReactNode;
}

/**
 * Datapairs are an extension to FormLabelGroup for displaying labeled data. Each element is comprised
 * of two parts: the key (label) and a value. The key is an identifier for some form of data and
 * the value can be text or links.
 */
const Datapair: FC<DatapairProps> = ({ children, className, label, value, ...attributes }) => {
  const classNames = classnames('js-datapair', 'text-break', className);
  return (
    <FormLabelGroup inline label={label} rowClassName={classNames} {...attributes}>
      {children || (
        <Input plaintext tag="div">
          {value}
        </Input>
      )}
    </FormLabelGroup>
  );
};

Datapair.displayName = 'Datapair';

export default Datapair;
