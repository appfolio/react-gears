import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';
import Select from './Select';

export default class TimePicker extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    clearable: PropTypes.bool,
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    endTime: PropTypes.string,
    id: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    startTime: PropTypes.string,
    step: PropTypes.number,
    timeFormat: PropTypes.number,
    value: PropTypes.any,
  }

  static defaultProps = {
    className: '',
    clearable: false,
    endTime: '23:59',
    disabled: false,
    onChange: () => {},
    placeholder: 'Select time...',
    startTime: '00:00',
    step: 30,
    timeFormat: 12,
  }

  constructor(props) {
    super(props);

    this.state = {
      options: [],
      value: ''
    };
  }

  onChange = (value) => {
    this.setState({ value });
    this.props.onChange(value);
  }

  createDropdownOptions() {
    const start = moment(this.props.startTime, ['HH:mm']);
    const end = moment(this.props.endTime, ['HH:mm']);
    const options = [];

    while (start.diff(end, 'minutes') <= 0) {
      const optionValue = start.format('HH:mm');
      const optionLabel = this.props.timeFormat === 24 ? optionValue : start.format('hh:mm A');

      options.push({ label: optionLabel, value: optionValue });

      start.add(this.props.step, 'minutes');
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
