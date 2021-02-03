import React, { FunctionComponent } from 'react';
import { ListGroup as ListGroupComponent, ListGroupProps as Props } from 'reactstrap';
import classnames from 'classnames';

export interface ListGroupProps extends Props {
  className?: string;
  striped?: boolean;
}

const ListGroup: FunctionComponent = ({ className, striped, ...props }: ListGroupProps) => (
  <ListGroupComponent
    className={classnames(className, { 'list-group-striped': striped })}
    {...props}
  />
);

ListGroup.displayName = 'ListGroup';

export default ListGroup;
