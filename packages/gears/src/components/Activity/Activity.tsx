import fecha from 'fecha';
import React, { FC, ReactNode } from 'react';
import { ListGroupItemProps } from 'reactstrap';
import Col from '../Layout/Col';
import Row from '../Layout/Row';
import ListGroupItem from '../List/ListGroupItem';

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
const Activity: FC<ActivityProps> = ({
  action,
  by,
  children,
  date,
  dateFormat = 'MM/DD/YYYY hh:mm A',
  ...props
}) => (
  <ListGroupItem {...props}>
    <Row className="w-100 gx-0 align-items-center">
      <Col className="me-2 px-0" style={{ maxWidth: '11em' }}>
        <span className="d-inline js-date">{fecha.format(date, dateFormat)}</span>
      </Col>
      {/* Force the next column to break to new line at the xs breakpoint; specifying `xs` in the first column
       * does nothing since the max-width style seems to override the normal flexbox breakpoint behavior. */}
      <div className="w-100 d-xs-block d-sm-none" />
      <Col className="js-action">
        {(action || date) && (
          <div>
            {action && <strong>{action}</strong>}
            {by && (
              <span className="ps-1 js-by">
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
