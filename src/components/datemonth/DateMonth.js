import { Button, ButtonGroup, Col, Input,
         InputGroupButton, InputGroup, Row } from 'reactstrap';
import { Dropdown, DropdownMenu, Icon } from '../../';
import Label from './DateMonthLabel.js';
import React from 'react';
import fecha from 'fecha';
import path from './path.js';
import styles from './DateMonth.scss';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const MMM_YYYY_PATTERN = '^\\s*([Jj][Aa][Nn]|[Ff][Ee][Bb]|[Mm][Aa][Rr]|[Aa][Pp][Rr]|[Mm][Aa][Yy]|[Jj][Uu][Nn]|[Jj][Uu][Ll]|[Aa][Uu][Gg]|[Ss][Ee][Pp]|[Oo][Cc][Tt]|[Nn][Oo][Vv]|[Dd][Ee][Cc])\\s+\\d\\d\\d\\d\\s*$';

function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

// TODO refactor this component to match DateInput behavior, e.g. a new "DropdownInput" component.

export default class DateMonth extends React.Component {
  constructor(props) {
    super(props);

    const date = props.value;
    let month = undefined;
    let year = (new Date()).getFullYear();

    if (!date) {
      const initialDate = new Date();
      month = fecha.format(initialDate, 'MMM');
      year = initialDate.getFullYear();
    } else {
      const initialDate = fecha.parse(date, 'MMM YYYY');
      if (initialDate) {
        month = fecha.format(initialDate, 'MMM');
        year = initialDate.getFullYear();
      }
    }

    this.state = {
      open: false,
      month,
      year
    };
  }

  componentDidMount() {
    this.listener = event => {
      const container = this.base;
      if (container && path(event).indexOf(container) === -1) {
        this.setState({ open: false });
      }
      return true;
    };
    this.escListener = event => {
      if (event.keyCode === 27) { // ESC
        this.setState({ open: false });
      }
      return true;
    };
    document.addEventListener('click', this.listener, { passive: true });
    document.addEventListener('keydown', this.escListener, { passive: true });
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.listener);
    document.removeEventListener('keydown', this.escListener);
  }

  setMonth(month) {
    this.setState({ month });
  }

  setYear(year) {
    this.setState({ year });
  }

  render() {
    const { props, state } = this;
    const now = new Date();
    const end = state.year + (now.getFullYear() - state.year) % 10 + 1;
    const start = end - 10;
    const YEARS = range(start, end);
    const canAdvanceYear = now.getFullYear() - state.year > 9;

    const open = () => this.setState({
      open: true,
      undo: { month: state.month, year: state.year }
    });
    const cancel = () => this.setState({
      open: false,
      month: state.undo.month,
      year: state.undo.year
    });
    const close = () => this.setState({ open: false });
    const toggle = () => this.setState({
      open: !state.open,
      undo: { month: state.month, year: state.year }
    });
    const prev = () => this.setState({ year: state.year - 10 });
    const next = () => {
      if (canAdvanceYear) {
        const currentYear = (new Date()).getFullYear();
        const year = Math.min(state.year + 10, currentYear);
        this.setState({ year });
      }
    };
    const change = event => {
      if (this._input.checkValidity()) {
        const text = event.target.value.trim();
        const date = fecha.parse(text, 'MMM YYYY');
        if (date) {
          this.setState({
            month: MONTHS[date.getMonth()],
            year: date.getFullYear()
          });
        }
      }
    };
    const tabListener = event => {
      if (event.keyCode === 9) { // TAB
        this.setState({ open: false });
      }
      return true;
    };

    const value = state.month && state.year ? `${state.month} ${state.year}` : props.value;

    return (
      <div className={styles.dateMonth} ref={el => { this.base = el; }}>
        <header>
          <InputGroup>
            <Input
              name={props.name}
              ref={component => { this._input = component; }}
              required={props.required}
              value={value}
              type="text"
              onChange={change}
              onClick={open}
              onFocus={open}
              onInput={change}
              onKeyDown={tabListener}
              pattern={MMM_YYYY_PATTERN}
            />
            <InputGroupButton className={styles.toggle} onClick={toggle}>
              <Button className="px-2" active={state.open} type="button">
                <Icon name="calendar-o" fixedWidth />
              </Button>
            </InputGroupButton>
          </InputGroup>
        </header>

        <Dropdown
          className={styles.picker}
          isOpen={state.open}
        >
          <DropdownMenu>
            <Row className="no-gutters">
              <Col xs="6" className={styles.month}>
                <ul className="p-1 m-0">
                  {MONTHS.map(month => <Label selected={state.month === month} label={month} onClick={() => this.setMonth(month)} />)}
                </ul>
              </Col>

              <Col xs="6" className={styles.year}>
                <ButtonGroup size="sm" className="d-flex px-1 pb-1">
                  <Button id="prev" className="w-100" onClick={prev}>
                    <Icon name="angle-double-left" />
                  </Button>
                  <Button id="next" className="w-100" onClick={next} disabled={!canAdvanceYear}>
                    <Icon name="angle-double-right" />
                  </Button>
                </ButtonGroup>
                <ul className="p-1 m-0">
                  {YEARS.map(year => <Label selected={state.year === year} label={year} onClick={() => this.setYear(year)} />)}
                </ul>
              </Col>
            </Row>
            <footer className="text-center pt-1">
              <div>
                <Button id="save" onClick={close} className="mr-2">OK</Button>
                <Button id="cancel" onClick={cancel}>Cancel</Button>
              </div>
            </footer>
          </DropdownMenu>
        </Dropdown>
      </div>);
  }
}
