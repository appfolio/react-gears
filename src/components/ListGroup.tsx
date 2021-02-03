import React, { FunctionComponent } from 'react';
import { ListGroup as ListGroupComponent, ListGroupProps } from 'reactstrap';
import classnames from 'classnames';

interface Props extends ListGroupProps {
  className?: string;
  striped?: boolean;
}

const ListGroup: FunctionComponent = ({ className, striped, ...props }: Props) => (
  <ListGroupComponent
    className={classnames(className, { 'list-group-striped': striped })}
    {...props}
  />
);

ListGroup.displayName = 'ListGroup';

export default ListGroup;
