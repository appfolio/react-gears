import PropTypes from 'prop-types';
import React from 'react';
import Select from './Select';
import { convertTimeToInt,
         convertIntToValue,
         convertIntToLabel } from '../util/time_picker_helper';

export default class TimePicker extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    clearable: PropTypes.bool,
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    endTime: PropTypes.string,
    timeFormat: PropTypes.number,
    id: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    startTime: PropTypes.string,
    step: PropTypes.number,
    value: PropTypes.any,
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
      timeFormat: props.timeFormat || 12,
      startTime: props.startTime || '00:00',
      step: props.step || 30,
      options: [],
      value: ''
    };
  }

  onChange = (value) => {
    this.setState({ value });
    this.props.onChange(value);
  }

  createDropdownOptions() {
    let start = convertTimeToInt(this.state.startTime);
    const end = convertTimeToInt(this.state.endTime);
    const options = [];

    while (start <= end) {
      const timeLabel = convertIntToLabel(start, this.state.timeFormat);
      const timeValue = convertIntToValue(start);

      options.push({ label: timeLabel, value: timeValue });
      start += this.state.step;
    }

    this.setState({ options });
  }

  componentWillMount() {
    this.createDropdownOptions();

    if (this.props.defaultValue) {
      this.setState({ value: this.props.defaultValue });
    }
  }

  componentWillReceiveProps(props) {
    if (props.value !== this.props.value) {
      this.setState({ value: props.value });
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
          onChange={this.onChange}
          options={this.state.options}
          placeholder={this.props.placeholder}
          value={this.state.value}
        />
      </div>);
  }
}
