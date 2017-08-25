import PropTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'reactstrap';
import Select from './Select';

const today = new Date();
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
const YEARS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  .map(offset => today.getFullYear() + offset);

// eslint-disable-next-line arrow-body-style
const monthOptions = MONTHS.map((label, index) => ({ label, value: index + 1 }));
// eslint-disable-next-line arrow-body-style
const yearsOptions = YEARS.map(year => ({ label: year, value: year }));

export default class CreditCardExpiration extends React.Component {
  onMonthSelection = (option) => {
    const month = option && option.value || CreditCardExpiration.defaultProps.month;
    this.props.onChange({ month, year: this.props.year });
  }
  onYearSelection = (option) => {
    const year = option && option.value || CreditCardExpiration.defaultProps.year;
    this.props.onChange({ year, month: this.props.month });
  }

  render() {
    return (
      <Row className="no-gutters">
        <Col xs={7} sm={8}>
          <Select
            name={this.props.monthName}
            placeholder="Month"
            value={this.props.month}
            options={monthOptions}
            onChange={this.onMonthSelection}
            className="pr-3"
          />
        </Col>
        <Col xs={5} sm={4}>
          <Select
            name={this.props.yearName}
            placeholder="Year" value={this.props.year}
            options={yearsOptions} onChange={this.onYearSelection}
          />
        </Col>
      </Row>
    );
  }
}

CreditCardExpiration.defaultProps = {
  month: null,
  monthName: 'month',
  year: null,
  yearName: 'year',

  onChange: () => true,
};

CreditCardExpiration.propTypes = {
  month: PropTypes.number,
  monthName: PropTypes.string,
  year: PropTypes.number,
  yearName: PropTypes.string,

  onChange: PropTypes.func,
};
