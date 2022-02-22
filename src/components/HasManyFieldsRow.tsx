import React, { useState } from 'react';
import { Placement } from 'popper.js';
import classnames from 'classnames';
import Button from './Button';
import ConfirmationButton from './ConfirmationButton';
import type { ConfirmationButtonProps } from './ConfirmationButton';
import Col from './Col';
import Icon from './Icon';
import Row from './Row';
import Tooltip from './Tooltip';

const noop = () => undefined;
let count = 0;

function getID() {
  return `hmf-${(count += 1)}`; // eslint-disable-line no-return-assign
}

interface HasManyFieldsRowProps {
  children: React.ReactNode;
  className?: string;
  onDelete?: React.MouseEventHandler<any>;
  deletable?: boolean;
  deleteProps?: ConfirmationButtonProps;
  disabled?: boolean;
  disabledReason?: React.ReactNode;
  disabledReasonPlacement?: Placement;
}

const HasManyFieldsRow = ({
  children,
  className,
  disabledReason,
  onDelete = noop,
  disabled = false,
  disabledReasonPlacement = 'top',
  deletable = true,
  deleteProps,
  ...props
}: HasManyFieldsRowProps) => {
  const [id] = useState(getID());

  const classNames = classnames('mb-4', className);
  // The `disabled ? <Button> : <ConfirmationButton>` code works around Tooltips not show on `disabled` elements:

  const tooltip =
    disabled && disabledReason ? (
      <Tooltip placement={disabledReasonPlacement} target={id}>
        {disabledReason}
      </Tooltip>
    ) : null;

  const button = disabled ? (
    <Button
      id={id}
      color="danger"
      onClick={(e) => e.preventDefault()}
      outline
      className="p-2 disabled"
    >
      <Icon name="times-circle-o" size="lg" />
    </Button>
  ) : (
    <ConfirmationButton
      color="danger"
      confirmation="Delete"
      aria-label="Delete"
      outline
      onClick={onDelete}
      className="p-2"
      {...deleteProps}
    >
      <Icon name="times-circle-o" size="lg" />
    </ConfirmationButton>
  );

  return (
    <Row className={classNames} noGutters {...props}>
      <Col>{children}</Col>
      {deletable && (
        <Col xs="auto" className="js-delete-col pl-3 d-flex">
          {button}
          {tooltip}
        </Col>
      )}
    </Row>
  );
};

HasManyFieldsRow.defaultProps = {
  disabledReasonPlacement: 'top',
  disabled: false,
  onDelete: noop,
  deletable: true,
};

HasManyFieldsRow.displayName = 'HasManyFieldsRow';

export default HasManyFieldsRow;
