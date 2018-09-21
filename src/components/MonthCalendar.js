import PropTypes from 'prop-types';
import React from 'react';
import Fecha from 'fecha'; // TODO replace with date-fns/parse after v2 is released
import Col from './Col';
import Row from './Row';
import mod from '../util/mod.js';
import range from '../util/range.js';

import styles from './MonthCalendar.scss';

const { format } = Fecha;

// TODO use links for label to allow keyboard nav:
const Label = ({ selected, label, onClick, visible = true }) => (
  <li className={`px-0 py-1 text-center ${selected ? 'bg-primary text-white' : ''} ${!visible ? 'invisible' : ''}`} onClick={onClick}>
    {label}
  </li>
);

export default class MonthCalendar extends React.Component {
  static propTypes = {
    date: PropTypes.instanceOf(Date),
    dateVisible: PropTypes.func,
    monthFormat: PropTypes.string.isRequired,
    yearFormat: PropTypes.string.isRequired,
    onSelect: PropTypes.func,
  };

  static defaultProps = {
    date: new Date(),
    dateVisible: () => true,
    monthFormat: 'MMM',
    yearFormat: 'YYYY',
    onSelect: () => {}
  };

  getMonths = date => range(0, 12).map(month => new Date(date.getFullYear(), month, 1));
  getYears = (date) => {
    const now = new Date();
    const currentYear = date.getFullYear();
    const month = date.getMonth();
    const end = currentYear + mod((now.getFullYear() - currentYear), 12) + 1;
    const start = end - 12;
    return range(start, end).map(year => new Date(year, month, 1));
  }

  render() {
    const { date, dateVisible, monthFormat, onSelect, yearFormat } = this.props;

    return (
      <div className={styles.picker}>
        <Row className="no-gutters">
          <Col className="styles.month">
            <ul className="list-unstyled p-1 m-0">
              {this.getMonths(date).map((monthYear, i) => (
                <Label
                  selected={date.getMonth() === monthYear.getMonth()}
                  label={format(monthYear, monthFormat)}
                  date={monthYear}
                  key={i}
                  onClick={() => dateVisible(monthYear) && onSelect(monthYear)}
                  visible={dateVisible(monthYear)}
                />
              ))}
            </ul>
          </Col>

          <Col className={styles.year}>
            <ul className="list-unstyled p-1 m-0">
              {this.getYears(date).map((monthYear, i) => (
                <Label
                  selected={date.getFullYear() === monthYear.getFullYear()}
                  label={format(monthYear, yearFormat)}
                  date={monthYear}
                  key={i}
                  onClick={() => dateVisible(monthYear) && onSelect(monthYear)}
                  visible={dateVisible(monthYear)}
                />
              ))}
            </ul>
          </Col>
        </Row>
      </div>
    );
  }
}
