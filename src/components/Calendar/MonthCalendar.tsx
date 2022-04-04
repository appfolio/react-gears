import Fecha from 'fecha'; // TODO replace with date-fns/parse after v2 is released
import noop from 'lodash.noop';
import React, { type FC } from 'react';
import Col from '../Layout/Col';
import Row from '../Layout/Row';
import Nav from '../Nav/Nav';
import NavLabel from './components/NavLabel';
import { getMonths, getYears } from './util/dateRanges';

export interface MonthCalendarProps {
  date?: Date;
  dateVisible?: (date: Date) => boolean;
  monthFormat?: string;
  yearFormat?: string;
  onSelect?: (date: Date) => void;
}

const { format } = Fecha;

const defaultProps = {
  date: new Date(),
  dateVisible: () => true,
  monthFormat: 'MMM',
  yearFormat: 'YYYY',
  onSelect: noop,
};

const MonthCalendar: FC<MonthCalendarProps> = ({
  date = defaultProps.date,
  dateVisible = defaultProps.dateVisible,
  monthFormat = defaultProps.monthFormat,
  onSelect = defaultProps.onSelect,
  yearFormat = defaultProps.yearFormat,
}) => (
  <>
    <div className="rg-MonthCalendar">
      <Row className="gx-0">
        <Col>
          <Nav pills className="d-block p-1 m-0" style={{ columnCount: 2, columnGap: 0 }}>
            {getMonths(date).map((monthYear) => (
              <NavLabel
                selected={date.getMonth() === monthYear.getMonth()}
                label={format(monthYear, monthFormat)}
                key={monthYear.toString()}
                onClick={() => dateVisible(monthYear) && onSelect(monthYear)}
                visible={dateVisible(monthYear)}
              />
            ))}
          </Nav>
        </Col>

        <Col className="border-start">
          <Nav pills className="d-block p-1 m-0" style={{ columnCount: 2, columnGap: 0 }}>
            {getYears(date).map((monthYear) => (
              <NavLabel
                selected={date.getFullYear() === monthYear.getFullYear()}
                label={format(monthYear, yearFormat)}
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

export default MonthCalendar;
