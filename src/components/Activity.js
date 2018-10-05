import React from 'react';
import PropTypes from 'prop-types';
import fecha from 'fecha';
import Col from './Col.js';
import ListGroupItem from './ListGroupItem.js';
import Row from './Row.js';

export default class Activity extends React.Component {
  static propTypes = {
    ...ListGroupItem.propTypes,
    action: PropTypes.node,
    by: PropTypes.node,
    children: PropTypes.node,
    date: PropTypes.instanceOf(Date).isRequired,
    dateFormat: PropTypes.string,
  };

  static defaultProps = {
    ...ListGroupItem.defaultProps,
    dateFormat: 'MM/DD/YYYY hh:mmA',
  };

  render() {
    const { action, by, children, date, dateFormat, ...props } = this.props;

    return (
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
      </ListGroupItem>
    );
  }
}
