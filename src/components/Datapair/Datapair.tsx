import classnames from 'classnames';
import React, { type FC, type ReactNode } from 'react';
import FormLabelGroup, { type FormLabelGroupProps } from '../Form/FormLabelGroup';
import Input from '../Input/Input';

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
const Datapair: FC<DatapairProps> = ({ children, className, label, value, ...attributes }) => {
  const classNames = classnames('js-datapair', className);
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
