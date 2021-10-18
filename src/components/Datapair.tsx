import React, { FunctionComponent, ReactNode } from 'react';
import classnames from 'classnames';
import FormLabelGroup, { FormLabelGroupProps } from './FormLabelGroup';
import Input from './Input';

interface DatapairProps extends FormLabelGroupProps {
  className?: string;
  label?: ReactNode;
  value?: ReactNode;
}

/**
 * Datapairs are an extension to FormLabelGroup for displaying labeled data. Each element is comprised
 * of two parts: the key (label) and a value. The key is an identifier for some form of data and
 * the value can be text or links.
 */
const Datapair: FunctionComponent<DatapairProps> = ({ children, className, label, value, ...attributes }) => {
  const classNames = classnames(
    'mb-1',
    'js-datapair',
    className
  );
  return (
    <FormLabelGroup
      inline
      label={label}
      rowClassName={classNames}
      {...attributes}
    >
      {children || <Input plaintext tag="div">{value}</Input>}
    </FormLabelGroup>
  );
};

Datapair.displayName = 'Datapair';

export default Datapair;
