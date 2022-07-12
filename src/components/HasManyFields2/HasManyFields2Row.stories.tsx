import React from 'react';
import { HasManyFields2Row, HasManyFields2RowProps } from './HasManyFields2Row';

export const HasManyFields2RowBasic = (args: HasManyFields2RowProps) => <HasManyFields2Row {...args}>
  <div>
    HasManyFields2Row child
  </div>
</HasManyFields2Row>

const HasManyFields2RowBasicArgs: HasManyFields2RowProps = {
  deleteable: true,
  disabled: false,
  disabledReason: 'disabled prop set to true',
  disabledReasonPlacement: 'right',
  onDelete: (rowId?: string) => console.log(`onDelete row=${rowId}`),
}

HasManyFields2RowBasic.args = HasManyFields2RowBasicArgs;

export default {
  title: `${HasManyFields2Row.name}/args`,
  component: HasManyFields2Row
};
