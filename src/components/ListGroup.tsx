import React, { FunctionComponent } from 'react';
import { ListGroup as ListGroupComponent, ListGroupProps } from 'reactstrap';
import classnames from 'classnames';

type Props = {
  striped?: boolean;
} & ListGroupProps;

const ListGroup: FunctionComponent<Props> = ({ className, striped, ...props }) => (
  <ListGroupComponent
    className={classnames(className, { 'list-group-striped': striped })}
    {...props}
  />
);

ListGroup.displayName = 'ListGroup';

export default ListGroup;
