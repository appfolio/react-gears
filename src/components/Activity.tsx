import React, { FunctionComponent, ReactNode } from 'react';
import fecha from 'fecha';
import { ListGroupItemProps } from 'reactstrap';
import Col from './Col';
import ListGroupItem from './ListGroupItem';
import Row from './Row';

interface ActivityProps extends Omit<ListGroupItemProps, 'action'> {
  action?: ReactNode;
  by?: ReactNode;
  children?: ReactNode;
  date: Date;
  dateFormat?: string;
}

/**
 * Extension to Bootstrap [ListGroupItem](https://getbootstrap.com/docs/4.3/components/list-group-item/)
 * representing a timeline event.
 */
const Activity: FunctionComponent<ActivityProps> = ({
  action,
  by,
  children,
  date,
  dateFormat = 'MM/DD/YYYY hh:mm A',
  shortDateFormat = 'M/D/YY h:mm A',
  ...props
}) => (
  <ListGroupItem {...props}>
    <Row className="w-100 no-gutters">
      <Col xs={12} sm={3} className="text-nowrap text-truncate">
        <span className="d-none d-md-inline">{fecha.format(date, dateFormat)}</span>
        <span className="d-md-none">{fecha.format(date, shortDateFormat)}</span>
      </Col>
      <Col className="pl-md-1">
        {(action || date) && (
          <div className="text-truncate">
            {action && <strong>{action}</strong>}
            {by && (
              <span className="pl-1 js-by">
                {action ? '– ' : ''}
                <span>{by}</span>
              </span>
            )}
          </div>
        )}
        {children}
      </Col>
    </Row>
  </ListGroupItem>
);

Activity.displayName = 'Activity';

export default Activity;
