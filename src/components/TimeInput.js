import React from 'react';
import PropTypes from 'prop-types';
import addMinutes from 'date-fns/add_minutes';
import addSeconds from 'date-fns/add_seconds';
import classnames from 'classnames';
import fecha from 'fecha';
import getHours from 'date-fns/get_hours';
import getMinutes from 'date-fns/get_minutes';
import isBefore from 'date-fns/is_before';
import setHours from 'date-fns/set_hours';
import setMinutes from 'date-fns/set_minutes';
import startOfToday from 'date-fns/start_of_today';
import startOfTomorrow from 'date-fns/start_of_tomorrow';
import Button from './Button';
import Icon from './Icon';
import Input from './Input';
import InputGroup from './InputGroup';
import InputGroupAddon from './InputGroupAddon';

const format = fecha.format;
const parse = fecha.parse;

// TODO consider using <input type="time" /> when better browser support.

export default class TimeInput extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    max: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    min: PropTypes.string,
    step: PropTypes.number, // TODO? 1-60
    timeFormat: PropTypes.string,
    value: PropTypes.string,
  }

  static defaultProps = {
    onChange: () => {},
    step: 30,
    timeFormat: 'h:mm A'
  }

  valueFormat = 'HH:mm';

  focus() {
    // TODO JavaScript does not allow opening selects programmatically.
    this.inputEl.focus();
  }

  normalizeTime(date) {
    let time = startOfToday();
    time = setHours(time, getHours(date));
    time = setMinutes(time, getMinutes(date));

    return time;
  }

  getEndTime(end, timeFormat) {
    return end ? addSeconds(this.normalizeTime(parse(end, timeFormat)), 1) : startOfTomorrow();
  }

  getStartTime(start, timeFormat) {
    return start ? this.normalizeTime(parse(start, timeFormat)) : startOfToday();
  }

  visibleTimes(step, timeFormat, start, end) {
    const times = [];
    let time = this.getStartTime(start, this.valueFormat);
    const max = this.getEndTime(end, this.valueFormat);

    do {
      times.push({
        label: format(time, timeFormat),
        value: format(time, this.valueFormat),
      });
      time = addMinutes(time, step);
    } while (isBefore(time, max));

    return times;
  }

  render() {
    const {
      className,
      disabled,
      max,
      min,
      onChange,
      placeholder,
      step,
      timeFormat,
      ...props
    } = this.props;

    const classNames = classnames('custom-select', 'pt-2', className);
    const times = this.visibleTimes(step, timeFormat, min, max);

    return (
      <InputGroup>
        <Input
          {...props}
          ref={(el) => { this.inputEl = el; }}
          type="select"
          className={classNames}
          disabled={disabled}
          onChange={e => onChange(e.target.value === '' ? null : e.target.value)}
        >
          <option value="">{placeholder}</option>
          {times.map(({ label, value }) => <option key={value} value={value}>{label}</option>)}
        </Input>
        <InputGroupAddon addonType="append" onClick={this.toggle}>
          <Button
            className="px-2"
            disabled={disabled}
            onClick={() => this.focus()}
            type="button"
            tabIndex={-1}
          >
            <Icon name="clock-o" fixedWidth />
          </Button>
        </InputGroupAddon>
      </InputGroup>
    );
  }
}
