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
}) => (
  <ListGroupItem {...props}>
    <Row className="w-100 no-gutters align-items-center">
      <Col className="mr-2" style={{ maxWidth: '11em' }}>
        <span className="d-none d-inline js-date">{fecha.format(date, dateFormat)}</span>
      </Col>
      {/* Force the next column to break to new line at the xs breakpoint; specifying `xs` in the first column
       * does nothing since the max-width style seems to override the normal flexbox breakpoint behavior. */}
      <div className="w-100 d-xs-block d-sm-none" />
      <Col className="js-action">
        {(action || date) && (
          <div>
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
