import classnames from 'classnames';
import React, { type FC } from 'react';
import { ListGroup as ListGroupComponent, type ListGroupProps } from 'reactstrap';

type Props = {
  striped?: boolean;
} & ListGroupProps;

const ListGroup: FC<Props> = ({ className, striped, ...props }) => (
  <ListGroupComponent
    className={classnames(className, { 'list-group-striped': striped })}
    {...props}
  />
);

ListGroup.displayName = 'ListGroup';

export default ListGroup;
