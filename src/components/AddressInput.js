import PropTypes from 'prop-types';
import React from 'react';
import flow from 'lodash.flow';
import classnames from 'classnames';

import CountryInput from './CountryInput';
import StateInput from './StateInput';
import FormLabelGroup from './FormLabelGroup';
import Col from './Col';
import Input from './Input';
import Row from './Row';

const readEvent = (e) => { return { [e.target.name]: e.target.value }; };

export const addressPropType = {
  address1: PropTypes.string,
  address2: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  postal: PropTypes.string,
  countryCode: PropTypes.string,
};

class AddressInput extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    countries: PropTypes.arrayOf(PropTypes.string),
    defaultValue: PropTypes.shape(addressPropType),
    inputName: PropTypes.shape(addressPropType),
    disabled: PropTypes.bool,
    error: PropTypes.shape(addressPropType),
    hints: PropTypes.shape(addressPropType),
    id: PropTypes.string,
    labels: PropTypes.shape(addressPropType),
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    showCountry: PropTypes.bool,
    showLabels: PropTypes.bool,
    value: PropTypes.shape(addressPropType),
  };

  static defaultProps = {
    className: '',
    defaultValue: {},
    inputName: {},
    disabled: false,
    error: {},
    hints: {},
    labels: {
      address1: 'Address',
      address2: 'Address 2',
      city: 'City',
      state: 'State',
      postal: 'Zip',
      countryCode: 'Country',
    },
    onBlur: () => {},
    onChange: () => {},
    showCountry: true,
    showLabels: false,
    value: {},
  };

  onChange = (update) => {
    this.props.onChange({ ...this.props.value, ...update });
  }

  propsFor = (field) => {
    if (this.props.value[field] !== undefined) {
      return { value: this.props.value[field] };
    }
    return { defaultValue: this.props.defaultValue[field] };
  }

  nameFor = field => this.props.inputName[field] || field;

  bindAddress1 = (el) => { this.inputAddress1 = el; };

  focus() {
    this.inputAddress1.focus();
  }

  render() {
    const { className, countries, disabled, error, hints, id, labels, onBlur, showCountry, showLabels } = this.props;

    const inputId = id || 'addressInput';
    const address1Id = `${inputId}_address1`;
    const address2Id = `${inputId}_address2`;
    const cityId = `${inputId}_city`;
    const stateId = `${inputId}_state`;
    const postalId = `${inputId}_postal`;
    const countryCodeId = `${inputId}_countryCode`;

    return (
      <div className={className} id={id}>
        <FormLabelGroup
          label={labels.address1}
          inputId={address1Id}
          srLabel={!showLabels}
          feedback={error.address1}
          hint={hints.address1}
          stacked
        >
          <Input
            autoComplete="address-line1"
            id={address1Id}
            name={this.nameFor('address1')}
            type="text"
            placeholder={labels.address1}
            {...this.propsFor('address1')}
            invalid={!!error.address1}
            onBlur={() => onBlur('address1')}
            onChange={flow([readEvent, this.onChange])}
            disabled={disabled}
            ref={this.bindAddress1}
          />
        </FormLabelGroup>
        <FormLabelGroup
          label={labels.address2}
          inputId={address2Id}
          srLabel={!showLabels}
          error={error.address2}
          feedback={error.address2}
          hint={hints.address2}
          stacked
        >
          <Input
            autoComplete="address-line2"
            id={address2Id}
            name={this.nameFor('address2')}
            type="text"
            placeholder={labels.address2}
            {...this.propsFor('address2')}
            invalid={!!error.address2}
            onBlur={() => onBlur('address2')}
            onChange={flow([readEvent, this.onChange])}
            disabled={disabled}
          />
        </FormLabelGroup>
        <Row className="no-gutters">
          <Col sm={6} xs={12} className="pr-sm-3">
            <FormLabelGroup
              rowClassName={classnames({ 'mb-sm-0': !showCountry })}
              feedback={error.city}
              hint={hints.city}
              label={labels.city}
              inputId={cityId}
              srLabel={!showLabels}
              stacked
            >
              <Input
                autoComplete="address-level2"
                id={cityId}
                type="text"
                name={this.nameFor('city')}
                placeholder={labels.city}
                {...this.propsFor('city')}
                invalid={!!error.city}
                onBlur={() => onBlur('city')}
                onChange={flow([readEvent, this.onChange])}
                disabled={disabled}
              />
            </FormLabelGroup>
          </Col>
          <Col md={2} sm={3} xs={4} className="pr-3">
            <FormLabelGroup
              rowClassName={classnames({ 'mb-0': !showCountry })}
              feedback={error.state}
              hint={hints.state}
              label={labels.state}
              inputId={stateId}
              srLabel={!showLabels}
              stacked
            >
              <StateInput
                autoComplete="address-level1"
                className="w-100"
                countries={countries}
                id={stateId}
                name={this.nameFor('state')}
                placeholder={labels.state}
                {...this.propsFor('state')}
                invalid={!!error.state}
                onBlur={() => onBlur('state')}
                onChange={state => this.onChange({ state })}
                disabled={disabled}
              />
            </FormLabelGroup>
          </Col>
          <Col md={4} sm={3} xs={8}>
            <FormLabelGroup
              rowClassName={classnames({ 'mb-0': !showCountry })}
              label={labels.postal}
              inputId={postalId}
              srLabel={!showLabels}
              feedback={error.postal}
              hint={hints.postal}
              stacked
            >
              <Input
                autoComplete="postal-code"
                id={postalId}
                type="text"
                name={this.nameFor('postal')}
                placeholder={labels.postal}
                {...this.propsFor('postal')}
                invalid={!!error.postal}
                onBlur={() => onBlur('postal')}
                onChange={flow([readEvent, this.onChange])}
                disabled={disabled}
              />
            </FormLabelGroup>
          </Col>
        </Row>
        {showCountry &&
          <FormLabelGroup
            feedback={error.countryCode}
            hint={hints.countryCode}
            rowClassName="mb-0"
            label={labels.countryCode}
            inputId={countryCodeId}
            srLabel={!showLabels}
            stacked
          >
            <CountryInput
              autoComplete="country"
              className="w-100"
              id={countryCodeId}
              name={this.nameFor('countryCode')}
              placeholder={labels.countryCode}
              {...this.propsFor('countryCode')}
              invalid={!!error.countryCode}
              onBlur={() => onBlur('countryCode')}
              onChange={countryCode => this.onChange({ countryCode })}
              disabled={disabled}
            />
          </FormLabelGroup>
        }
      </div>
    );
  }
}

export default AddressInput;
