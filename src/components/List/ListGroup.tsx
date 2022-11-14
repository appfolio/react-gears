import classnames from 'classnames';
import React, { FC } from 'react';
import { ListGroup as ListGroupComponent, ListGroupProps } from 'reactstrap';

type Props = {
  striped?: boolean;
} & ListGroupProps;

// ref
const ListGroup: FC<Props> = ({ className, striped, ...props }) => (
  <ListGroupComponent
    className={classnames(className, { 'list-group-striped': striped })}
    {...props}
  />
);

ListGroup.displayName = 'ListGroup';

export default ListGroup;
