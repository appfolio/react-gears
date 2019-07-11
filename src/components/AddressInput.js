import PropTypes from 'prop-types';
import React from 'react';
import flow from 'lodash.flow';
import classnames from 'classnames';

import StateInput from './StateInput';
import FormLabelGroup from './FormLabelGroup';
import Col from './Col';
import Input from './Input';
import Row from './Row';
import InternationalAddressInput from './InternationalAddressInput';

const readEvent = (e) => { return { [e.target.name]: e.target.value }; };

class AddressInput extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    countries: PropTypes.arrayOf(PropTypes.string),
    defaultValue: PropTypes.shape(addressPropType),
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
    showCountry: false,
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

  bindAddress1 = (el) => { this.inputAddress1 = el; };

  focus() {
    this.inputAddress1.focus();
  }

  useInternationAddressComponent = () => this.props.showCountry;

  renderComponent = () => {
    if (this.useInternationAddressComponent()) {
      return (<InternationalAddressInput {...this.props} />);
    }

    const { className, countries, disabled, error, hints, id, labels, onBlur, showLabels } = this.props;
    return (
      <div className={className} id={id}>
        <FormLabelGroup
          label={showLabels ? labels.address1 : null}
          feedback={error.address1}
          hint={hints.address1}
          stacked
        >
          <Input
            id={id ? `${id}_address1` : null}
            name="address1"
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
          label={showLabels ? labels.address2 : null}
          error={error.address2}
          feedback={error.address2}
          hint={hints.address2}
          stacked
        >
          <Input
            id={id ? `${id}_address2` : null}
            name="address2"
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
              rowClassName={classnames({ 'mb-sm-0': true })}
              feedback={error.city}
              hint={hints.city}
              label={showLabels ? labels.city : null}
              stacked
            >
              <Input
                id={id ? `${id}_city` : null}
                type="text"
                name="city"
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
              rowClassName={classnames({ 'mb-0': true })}
              feedback={error.state}
              hint={hints.state}
              label={showLabels ? labels.state : null}
              stacked
            >
              <StateInput
                className="w-100"
                countries={countries}
                id={id ? `${id}_state` : null}
                name="state"
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
              rowClassName={classnames({ 'mb-0': !false })}
              label={showLabels ? labels.postal : null}
              feedback={error.postal}
              hint={hints.postal}
              stacked
            >
              <Input
                id={id ? `${id}_postal` : null}
                type="text"
                name="postal"
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
      </div>);
  };

  render() {
    return (
      this.renderComponent()
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
