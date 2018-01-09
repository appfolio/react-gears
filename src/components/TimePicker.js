import PropTypes from 'prop-types';
import React from 'react';
import Select from './Select';

function convertTimeToInt(time) {
  const hour = parseInt(time.substring(0, 2), 10);
  const minute = parseInt(time.substring(3, 5), 10);

  return minute + (hour * 60);
}

function convertIntToTime(timeInInt, format) {
  let hour = Math.floor(timeInInt / 60);
  const minute = timeInInt % 60;

  if (format === 24) {
    const hourInString = hour.toString().padStart(2, '0');
    const minuteInString = minute.toString().padStart(2, '0');

    return `${hourInString}:${minuteInString}`;
  }

  const amPM = hour < 12 ? 'AM' : 'PM';

  if (hour === 0) {
    hour = 12;
  } else if (hour > 12) {
    hour -= 12;
  }

  const hourInString = hour.toString().padStart(2, '0');
  const minuteInString = minute.toString().padStart(2, '0');

  return `${hourInString}:${minuteInString} ${amPM}`;
}

export default class TimePicker extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    clearable: PropTypes.bool,
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    endTime: PropTypes.string,
    format: PropTypes.Number,
    id: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    startTime: PropTypes.string,
    step: PropTypes.number,
  }

  static defaultProps = {
    className: '',
    clearable: false,
    disabled: false,
    onChange: () => {},
    placeholder: 'Select time...'
  }

  constructor(props) {
    super(props);

    this.state = {
      endTime: props.endTime || '23:59',
      format: props.format || 12,
      startTime: props.startTime || '00:00',
      step: props.step || 30,
      options: [],
      value: ''
    };
  }

  updateValue(newValue) {
    this.setState({ value: newValue });
    this.props.onChange(newValue);
  }

  createDropdownOptions() {
    let start = convertTimeToInt(this.state.startTime);
    const end = convertTimeToInt(this.state.endTime);
    const options = [];

    while (start < end) {
      const timeString = convertIntToTime(start, this.state.format);
      options.push({ label: timeString, value: timeString });
      start += this.state.step;
    }

    this.setState({ options });
  }

  componentWillMount() {
    this.createDropdownOptions();

    if (this.props.defaultValue) {
      const defaultTimeInInt = convertTimeToInt(this.props.defaultValue);
      const defaultTimeFormatted = convertIntToTime(defaultTimeInInt, this.props.format);

      this.setState({ value: defaultTimeFormatted });
    }
  }

  render() {
    return (
      <div>
        <Select
          arrowRenderer={() => {}}
          className={this.props.className}
          clearable={this.props.clearable}
          disabled={this.props.disabled}
          id={this.props.id}
          name="time-picker"
          onChange={this.updateValue}
          options={this.state.options}
          placeholder={this.props.placeholder}
          value={this.state.value}
        />
      </div>);
  }
}
