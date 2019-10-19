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
  ...props
}) =>
  <ListGroupItem {...props}>
    <Row className="w-100 no-gutters">
      <Col xs={12} sm={4} md={3} className="text-nowrap">
        <span>{fecha.format(date, dateFormat)}</span>
      </Col>
      <Col>
        {(action || date) && (
          <div>
            {action && <strong>{action}</strong>}
            {by && (
              <span className="pl-1">
                {action ? 'by ' : ''}
                <span>{by}</span>
              </span>
            )}
          </div>
        )}
        {children}
      </Col>
    </Row>
  </ListGroupItem>;

Activity.displayName = 'Activity';

export default Activity;
