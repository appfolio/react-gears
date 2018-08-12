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

import flow from 'lodash.flow';
import toLower from 'lodash.tolower';

import Select from './Select';

const format = fecha.format;
const parse = fecha.parse;

// TODO consider using <input type="time" /> when better browser support.

export default class TimeInput extends React.Component {
  static propTypes = {
    ...Select.propTypes,
    className: PropTypes.string,
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    max: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    min: PropTypes.string,
    noResultsText: PropTypes.string,
    step: PropTypes.number, // TODO? 1-60
    timeFormat: PropTypes.string,
    value: PropTypes.string
  }

  static defaultProps = {
    onChange: () => {},
    step: 30,
    timeFormat: 'h:mm A',
    noResultsText: 'Must be in the format HH:MM AM/PM'
  }

  constructor(props) {
    super(props);
    const { defaultValue } = this.props;
    this.state = {
      selectedOption: defaultValue && this.valueStrToOption(defaultValue)
    };
  }

  valueFormat = 'HH:mm';

  timeToOption(time) {
    return {
      label: format(time, this.props.timeFormat),
      value: format(time, this.valueFormat)
    };
  }

  valueStrToOption(valueStr) {
    const time = parse(valueStr, this.valueFormat);

    return time ? this.timeToOption(time) : null;
  }

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

  onChange = (selectedOption) => {
    this.setState({ selectedOption });
    this.props.onChange(selectedOption && selectedOption.value);
  }

  parseInput = input => parse(input, this.props.timeFormat) || parse(input, this.valueFormat);

  // workaround for removing the "Create option..." text that appears when creating a new option
  formatCreateLabel = string => string;

  isBeforeMax = time => isBefore(time, parse(this.props.max, this.valueFormat));

  isAfterMin = time => !isBefore(time, parse(this.props.min, this.valueFormat));

  isValidNewOption = (inputValue, selectValue, selectOptions) => {
    const time = this.parseInput(inputValue);
    const value = time ? format(time, this.valueFormat) : '';
    return !!(
      value &&
      (!this.props.min || this.isAfterMin(time)) &&
      (!this.props.max || this.isBeforeMax(time)) &&
      !selectValue.some(option => option.value === value) &&
      !selectOptions.some(option => option.value === value)
    );
  };

  getNewOptionData = (inputValue) => {
    const time = this.parseInput(inputValue);
    return this.timeToOption(time);
  }

  // Handle leading zeros and typing without colons
  filterOption = ({ label }, filter) => {
    const removeColonAndWhitespace = str => str.replace(/[:\s]/gi, '');
    const removeLeadingZeros = str => str.replace(/^0*/, '');

    const filtersToApply = flow(removeColonAndWhitespace, removeLeadingZeros, toLower);

    const candidate = filtersToApply(label);
    const filterTest = filtersToApply(filter);

    return candidate.indexOf(filterTest) === 0;
  };

  selectedOption() {
    return this.props.value ?
      this.valueStrToOption(this.props.value) :
      this.state.selectedOption;
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

    const classNames = classnames('pt-2', className);
    const times = this.visibleTimes(step, timeFormat, min, max);

    return (
      <Select
        {...props}
        className={classNames}
        creatable
        createOptionPosition="first"
        disabled={disabled}
        filterOption={this.filterOption}
        formatCreateLabel={this.formatCreateLabel}
        getNewOptionData={this.getNewOptionData}
        isValidNewOption={this.isValidNewOption}
        noResultsText={this.props.noResultsText}
        options={times}
        onChange={this.onChange}
        placeholder={placeholder}
        value={this.selectedOption()}
      />
    );
  }
}
