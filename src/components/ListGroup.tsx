import classnames from 'classnames';
import type { FunctionComponent } from 'react';
import React from 'react';
import type { ListGroupProps } from 'reactstrap';
import { ListGroup as ListGroupComponent } from 'reactstrap';

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
