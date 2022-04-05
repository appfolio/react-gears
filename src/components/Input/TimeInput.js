import addMinutes from 'date-fns/addMinutes';
import addSeconds from 'date-fns/addSeconds';
import format from 'date-fns/format';
import getHours from 'date-fns/getHours';
import getMinutes from 'date-fns/getMinutes';
import isBefore from 'date-fns/isBefore';
import parse from 'date-fns/parse';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import startOfToday from 'date-fns/startOfToday';
import startOfTomorrow from 'date-fns/startOfTomorrow';
import flow from 'lodash.flow';
import toLower from 'lodash.tolower';
import memoizeOne from 'memoize-one';
import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../Icon/Icon';
import Select from '../Select/Select';

const INVALID_DATE = new Date(undefined);

// TODO consider using <input type="time" /> when better browser support.

function normalizeTime(date) {
  let time = startOfToday();
  time = setHours(time, getHours(date));
  time = setMinutes(time, getMinutes(date));

  return time;
}

function getEndTime(end, timeFormat) {
  return end ? addSeconds(normalizeTime(parse(end, timeFormat, new Date())), 1) : startOfTomorrow();
}

function getStartTime(start, timeFormat) {
  return start ? normalizeTime(parse(start, timeFormat, new Date())) : startOfToday();
}

function onInterval(time, interval) {
  return getMinutes(time) % interval === 0;
}

/** Helper for userInputProgress(). Builds a regex for parsing a time in h:mm format
 * @param isTwoDigit whether the time to parse is a two digit (eg. 10:00) or
 * one digit (eg. 1:00) hour
 * @returns regex used to parse a string
 */
function buildhmmARegex(isTwoDigit) {
  const oneDigitHourAndColon = '\\d:?';
  const twoDigitHourAndColon = '\\d\\d:?';
  const hour = isTwoDigit ? twoDigitHourAndColon : oneDigitHourAndColon;
  const m0 = '\\d';
  const m1 = '\\d';

  return new RegExp(`^(?:${hour})?(${m0})?(${m1})?`);
}

/** Helper for userInputProgress(). Returns whether a time is two digits in h:mm
 * format, ie. if a time is one of 12am, 10am, 11am, 12am, 10pm, 11pm
 */
function isTwoDigitHour(time) {
  return [0, 10, 11, 12, 22, 23].includes(getHours(time));
}

/** filterOption() helper for determining user input progress
 * @returns [hasTypedTens, hasTypedMin] where:
 * - hasTypedTens === true if finished typing tens place in minute (5 in 8:53)
 * - hasTypedMin === true if finished typing minute (3 in 8:53)
 */
function userInputProgress(input, time) {
  const re = buildhmmARegex(isTwoDigitHour(time));
  const [, hasTypedTens, hasTypedMin] = re.exec(input);
  return [!!hasTypedTens, !!hasTypedMin];
}

const ClockIcon = () => <Icon name="clock-o" />;

export default class TimeInput extends React.Component {
  static propTypes = {
    ...Select.propTypes,
    className: PropTypes.string,
    /** Allow entering times outside of step interval */
    allowOtherTimes: PropTypes.bool,
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    max: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    min: PropTypes.string,
    noResultsText: PropTypes.string,
    step: PropTypes.number, // TODO? 1-60
    timeFormat: PropTypes.string,
    value: PropTypes.string,
  };

  static defaultProps = {
    allowOtherTimes: false,
    onChange: () => {},
    step: 30,
    placeholder: 'Enter a time',
    timeFormat: 'h:mm a',
    noResultsText: 'Must be in the format HH:MM AM/PM',
  };

  constructor(props) {
    super(props);
    const { defaultValue } = this.props;
    this.state = {
      selectedOption: defaultValue && this.valueStrToOption(defaultValue),
    };
  }

  valueFormat = 'HH:mm';

  valueStrToOption(valueStr) {
    return this.times().find(({ value }) => value === valueStr);
  }

  /* eslint-disable-next-line react/no-unused-class-component-methods -- Address this when converting to functional component */
  focus() {
    // TODO JavaScript does not allow opening selects programmatically.
    this.inputEl.focus();
  }

  defaultVisibleTimes() {
    const { step, timeFormat, min, max } = this.props;
    return this.visibleTimes(step, timeFormat, min, max);
  }

  allTimes() {
    const { timeFormat, min, max } = this.props;
    return this.visibleTimes(1, timeFormat, min, max);
  }

  times() {
    const { allowOtherTimes } = this.props;
    return allowOtherTimes ? this.allTimes() : this.defaultVisibleTimes();
  }

  // TODO replace with useMemo in react 16.7
  visibleTimes = memoizeOne((step, timeFormat, start, end) => {
    const times = [];
    let time = getStartTime(start, this.valueFormat);
    const max = getEndTime(end, this.valueFormat);

    do {
      times.push({
        label: format(time, timeFormat),
        value: format(time, this.valueFormat),
        time,
      });
      time = addMinutes(time, step);
    } while (isBefore(time, max));

    return times;
  });

  onChange = (selectedOption) => {
    this.setState({ selectedOption });

    if (selectedOption) {
      const { value, time } = selectedOption;
      this.props.onChange(value, time);
    } else {
      this.props.onChange('', INVALID_DATE);
    }
  };

  /** Determines whether to display the current option given a particular user
   * input.
   * Handles the following user input cases:
   * - missing colons "930 AM"
   * - leading zeroes "09:30 AM"
   * - missing whitespace "9:30AM"
   * - typing am/pm upper or lower case "9:30 am"
   */
  filterOption = ({ label, time }, input) => {
    const { step } = this.props;

    const removeWhitespace = (str) => str.replace(/\s/gi, '');
    const removeLeadingZeros = (str) => str.replace(/^0*/, '');

    const inputCandidate = flow(removeWhitespace, removeLeadingZeros, toLower)(input);

    const [hasTypedTens, hasTypedMin] = userInputProgress(inputCandidate, time);

    // only show times on step if we havent started to type minutes
    if (!hasTypedTens && !onInterval(time, step)) {
      return false;
    }

    // only show times on step or on 10 min intervals if we havent finished typing minutes
    if (!hasTypedMin && !onInterval(time, step) && !onInterval(time, 10)) {
      return false;
    }

    const labelCandidate = flow(
      // Remove colon from option if input doesnt have one
      (str) => (inputCandidate.includes(':') ? str : str.replace(/:/gi, '')),
      removeWhitespace,
      removeLeadingZeros,
      toLower
    )(label);

    return labelCandidate.indexOf(inputCandidate) === 0;
  };

  selectedOption() {
    return this.props.value ? this.valueStrToOption(this.props.value) : this.state.selectedOption;
  }

  render() {
    /* eslint-disable @typescript-eslint/no-unused-vars -- will go away when this is a functional component */
    const {
      allowOtherTimes,
      disabled,
      max,
      min,
      onChange,
      placeholder,
      step,
      timeFormat,
      ...props
    } = this.props;
    /* eslint-enable @typescript-eslint/no-unused-vars */

    const times = this.times();

    return (
      <Select
        {...props}
        arrowRenderer={ClockIcon}
        disabled={disabled}
        filterOption={this.filterOption}
        noResultsText={this.props.noResultsText}
        options={times}
        onChange={this.onChange}
        placeholder={placeholder}
        value={this.selectedOption()}
      />
    );
  }
}
