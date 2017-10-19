import PropTypes from 'prop-types';
import React from 'react';
import flow from 'lodash.flow';

import Select from './Select';
import ValidatedFormGroup from './ValidatedFormGroup';
import Col from './Col';
import Input from './Input';
import Row from './Row';

// TODO Dynamic states based on country:
import states from './address/USStates.js';
import COUNTRIES from './address/Countries.js';

const US_STATES = states.map(state => ({
  label: state.value,
  value: state.value
}));

const readEvent = e => ({ [e.target.name]: e.target.value });

class AddressInput extends React.Component {
  static propTypes = {
    defaultValue: PropTypes.shape(addressPropType),
    disabled: PropTypes.bool,
    error: PropTypes.shape(addressPropType),
    id: PropTypes.string,
    labels: PropTypes.shape(addressPropType),
    onChange: PropTypes.func,
    showLabels: PropTypes.bool,
    value: PropTypes.shape(addressPropType),
  };

  static defaultProps = {
    defaultValue: {},
    disabled: false,
    error: {},
    labels: {
      address1: 'Address',
      address2: 'Address 2',
      city: 'City',
      state: 'State',
      postal: 'Zip',
      countryCode: 'Country',
    },
    onChange: () => {},
    showLabels: false,
    value: {},
  };

  onChange = update => {
    this.props.onChange({ ...this.props.value, ...update });
  }

  propsFor = field => {
    if (this.props.value[field]) {
      return { value: this.props.value[field] };
    }
    return { defaultValue: this.props.defaultValue[field] };
  }

  render() {
    const { disabled, error, id, labels, showLabels } = this.props;

    return (
      <div id={id}>
        <ValidatedFormGroup
          label={showLabels ? labels.address1 : null}
          error={error.address1}
        >
          <Input
            id={id ? `${id}[address1]` : null}
            name="address1"
            type="text"
            placeholder={labels.address1}
            {...this.propsFor('address1')}
            state={error.address1 && 'danger'}
            onChange={flow([readEvent, this.onChange])}
            disabled={disabled}
          />
        </ValidatedFormGroup>
        <ValidatedFormGroup
          label={showLabels ? labels.address2 : null}
          error={error.address2}
        >
          <Input
            id={id ? `${id}[address2]` : null}
            name="address2"
            type="text"
            placeholder={labels.address2}
            {...this.propsFor('address2')}
            state={error.address2 && 'danger'}
            onChange={flow([readEvent, this.onChange])}
            disabled={disabled}
          />
        </ValidatedFormGroup>
        <Row className="no-gutters">
          <Col sm={6} xs={5}>
            <ValidatedFormGroup
              className="pr-3"
              error={error.city}
              label={showLabels ? labels.city : null}
            >
              <Input
                id={id ? `${id}[city]` : null}
                type="text"
                name="city"
                placeholder={labels.city}
                {...this.propsFor('city')}
                state={error.city && 'danger'}
                onChange={flow([readEvent, this.onChange])}
                disabled={disabled}
              />
            </ValidatedFormGroup>
          </Col>
          <Col sm={2} xs={3}>
            <ValidatedFormGroup
              className="pr-3"
              error={error.state}
              label={showLabels ? labels.state : null}
            >
              <Select
                className="w-100"
                id={id ? `${id}[state]` : null}
                name="state"
                placeholder={labels.state}
                options={US_STATES}
                {...this.propsFor('state')}
                onChange={selection => this.onChange({ state: selection && selection.value })}
                disabled={disabled}
              />
            </ValidatedFormGroup>
          </Col>
          <Col sm={4} xs={4}>
            <ValidatedFormGroup
              label={showLabels ? labels.postal : null}
              error={error.postal}
            >
              <Input
                id={id ? `${id}[postal]` : null}
                type="text"
                name="postal"
                placeholder={labels.postal}
                {...this.propsFor('postal')}
                state={error.postal && 'danger'}
                onChange={flow([readEvent, this.onChange])}
                disabled={disabled}
              />
            </ValidatedFormGroup>
          </Col>
        </Row>
        <ValidatedFormGroup
          error={error.countryCode}
          className="mb-0"
          label={showLabels ? labels.countryCode : null}
        >
          <Select
            className="w-100"
            id={id ? `${id}[countryCode]` : null}
            name="countryCode"
            options={COUNTRIES}
            placeholder={labels.countryCode}
            {...this.propsFor('countryCode')}
            onChange={selection => this.onChange({ countryCode: selection && selection.value })}
            disabled={disabled}
          />
        </ValidatedFormGroup>
      </div>
    );
  }
}

export const addressPropType = {
  address1: PropTypes.string,
  address2: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  postal: PropTypes.string,
  countryCode: PropTypes.string,
};

export default AddressInput;
