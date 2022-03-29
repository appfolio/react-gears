import Fecha from 'fecha'; // TODO replace with date-fns/parse after v2 is released
import PropTypes from 'prop-types';
import React from 'react';
import mod from '../../util/mod';
import range from '../../util/range';
import Col from '../Layout/Col';
import Row from '../Layout/Row';
import Nav from '../Nav/Nav';
import NavItem from '../Nav/NavItem';
import NavLink from '../Nav/NavLink';

const { format } = Fecha;

const Label = ({ selected, label, onClick, visible = true }) => (
  <NavItem className={!visible ? 'invisible' : ''}>
    <NavLink
      active={selected}
      className="text-center py-1 px-2"
      color="primary"
      onClick={onClick}
      outline
      style={{ cursor: 'pointer', listStyle: 'none' }}
    >
      {label}
    </NavLink>
  </NavItem>
);

Label.propTypes = {
  selected: PropTypes.bool,
  label: PropTypes.node,
  onClick: PropTypes.func,
  visible: PropTypes.bool,
};

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
    onSelect: () => {},
  };

  getMonths = (date) => range(0, 12).map((month) => new Date(date.getFullYear(), month, 1));

  getYears = (date) => {
    const now = new Date();
    const currentYear = date.getFullYear();
    const month = date.getMonth();
    const end = currentYear + mod(now.getFullYear() - currentYear, 12) + 1;
    const start = end - 12;
    return range(start, end).map((year) => new Date(year, month, 1));
  };

  render() {
    const { date, dateVisible, monthFormat, onSelect, yearFormat } = this.props;

    return (
      <>
        <div className="rg-MonthCalendar">
          <Row className="gx-0">
            <Col>
              <Nav pills className="d-block p-1 m-0" style={{ columnCount: 2, columnGap: 0 }}>
                {this.getMonths(date).map((monthYear) => (
                  <Label
                    selected={date.getMonth() === monthYear.getMonth()}
                    label={format(monthYear, monthFormat)}
                    date={monthYear}
                    key={monthYear.toString()}
                    onClick={() => dateVisible(monthYear) && onSelect(monthYear)}
                    visible={dateVisible(monthYear)}
                  />
                ))}
              </Nav>
            </Col>

            <Col className="border-start">
              <Nav pills className="d-block p-1 m-0" style={{ columnCount: 2, columnGap: 0 }}>
                {this.getYears(date).map((monthYear) => (
                  <Label
                    selected={date.getFullYear() === monthYear.getFullYear()}
                    label={format(monthYear, yearFormat)}
                    date={monthYear}
                    key={monthYear.toString()}
                    onClick={() => dateVisible(monthYear) && onSelect(monthYear)}
                    visible={dateVisible(monthYear)}
                  />
                ))}
              </Nav>
            </Col>
          </Row>
        </div>
        <style jsx>
          {`
            .rg-MonthCalendar {
              min-width: 16em;
            }
          `}
        </style>
      </>
    );
  }
}
