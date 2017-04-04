import React, { Component, PropTypes } from 'react';
import {
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  InputGroup,
} from 'reactstrap';

const today = new Date();
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
const YEARS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  .map(offset => today.getFullYear() + offset);

export default class CreditCardExpiration extends Component {
  constructor(props) {
    super(props);
    this.state = { showMonthPicker: false, showYearPicker: false };

    this.closePickers = this.closePickers.bind(this);
    this.toggleMonthPicker = this.toggleMonthPicker.bind(this);
    this.toggleYearPicker = this.toggleYearPicker.bind(this);
    this.onMonthSelection = this.onMonthSelection.bind(this);
    this.onYearSelection = this.onYearSelection.bind(this);
  }

  onMonthSelection(month) {
    this.closePickers();
    this.props.onChange({ month, year: this.props.year });
  }
  onYearSelection(year) {
    this.closePickers();
    this.props.onChange({ year, month: this.props.month });
  }

  closePickers() {
    this.setState({ showMonthPicker: false, showYearPicker: false });
  }
  toggleMonthPicker() {
    this.setState({
      showMonthPicker: !this.state.showMonthPicker,
      showYearPicker: false,
    });
  }
  toggleYearPicker() {
    this.setState({
      showYearPicker: !this.state.showYearPicker,
      showMonthPicker: false,
    });
  }

  render() {
    return (
      <InputGroup>
        <ButtonDropdown isOpen={this.state.showMonthPicker} toggle={this.toggleMonthPicker}>
          <DropdownToggle caret>{MONTHS[this.props.month]}</DropdownToggle>
          <DropdownMenu>
            {MONTHS.map((name, number) =>
              <DropdownItem onClick={() => this.onMonthSelection(number + 1)}>{name}</DropdownItem>
            )}
          </DropdownMenu>
        </ButtonDropdown>
        <ButtonDropdown isOpen={this.state.showYearPicker} toggle={this.toggleYearPicker}>
          <DropdownToggle caret>{this.props.year}</DropdownToggle>
          <DropdownMenu>
            {YEARS.map(year =>
              <DropdownItem onClick={() => this.onYearSelection(year)}>{year}</DropdownItem>
            )}
          </DropdownMenu>
        </ButtonDropdown>
      </InputGroup>
    );
  }
}

CreditCardExpiration.defaultProps = {
  month: today.getMonth(),
  year: today.getFullYear(),

  onChange: () => true,
};

CreditCardExpiration.propTypes = {
  month: PropTypes.number,
  year: PropTypes.number,

  onChange: PropTypes.func,
};
