import type { Placement } from '@popperjs/core';
import classnames from 'classnames';
import React, { useState, ComponentProps } from 'react';
import Button from '../Button/Button';
import ConfirmationButton from '../Button/ConfirmationButton';
import Icon from '../Icon/Icon';
import Col from '../Layout/Col';
import Row from '../Layout/Row';
import Tooltip from '../Tooltip/Tooltip';

const noop = () => undefined;
let count = 0;

function getID() {
  return `hmf-${(count += 1)}`; // eslint-disable-line no-return-assign
}

interface HasManyFields2RowProps {
  children: React.ReactNode;
  className?: string;
  onDelete?: React.MouseEventHandler<any>;
  deletable?: boolean;
  deleteProps?: ComponentProps<typeof ConfirmationButton>;
  disabled?: boolean;
  disabledReason?: React.ReactNode;
  disabledReasonPlacement?: Placement;
}

const HasManyFields2Row = ({
  children,
  className,
  disabledReason,
  onDelete = noop,
  disabled = false,
  disabledReasonPlacement = 'top',
  deletable = true,
  deleteProps,
  ...props
}: HasManyFields2RowProps) => {
  const [id] = useState(getID());

  const classNames = classnames('mb-4 gx-0', className);
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
      className="p-2 disabled align-self-stretch"
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
      className="p-2 align-self-stretch"
      {...deleteProps}
    >
      <Icon name="times-circle-o" size="lg" />
    </ConfirmationButton>
  );

  return (
    <Row className={classNames} {...props}>
      <Col>{children}</Col>
      {deletable && (
        <Col xs="auto" className="js-delete-col ps-3 d-flex">
          {button}
          {tooltip}
        </Col>
      )}
    </Row>
  );
};

HasManyFields2Row.defaultProps = {
  disabledReasonPlacement: 'top',
  disabled: false,
  onDelete: noop,
  deletable: true,
};

HasManyFields2Row.displayName = 'HasManyFields2Row';

export default HasManyFields2Row;
