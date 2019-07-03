import React from 'react';
import PropTypes from 'prop-types';
import Col from './Col';
import CountryInput from './CountryInput';
import FormLabelGroup from './FormLabelGroup';
import getAddressFormat from './address/Formats';
import Input from './Input';
import Row from './Row';

const InternationalAddressInput = ({ className, disabled, error, hints, id, labels, onBlur, onChange, showLabels, value }) => {
  const countryCode = value.countryCode;
  const addressFormat = getAddressFormat(countryCode);
  const fields = getAddressFormat(countryCode).fields;
  const i18nLabels = { ...labels, ...addressFormat.labels };
  const states = addressFormat.states;

  const onAddressChange = (field) => {
    onChange({ ...value, ...field }); // TODO state not resetting
  };

  const inputFor = type => (
    <Input
      disabled={disabled}
      id={id ? `${id}_${type}` : null}
      invalid={!!error[type]}
      name={type}
      onBlur={() => onBlur(type)}
      onChange={e => onAddressChange({ [type]: e.target.value })}
      placeholder={i18nLabels[type]}
      type="text"
      value={value[type] || ''}
    />
  );

  return (
    <div className={className}>
      {fields.map(row => (
        <Row className="no-gutters">
          {row.map((field, index) => {
            const label = i18nLabels[field];
            return (
              <Col sm>
                <FormLabelGroup
                  error={error[field]}
                  feedback={error[field]}
                  hint={hints[field]}
                  label={showLabels ? label : undefined}
                  rowClassName={index > 0 ? 'pl-sm-2' : undefined}
                  stacked
                >
                  {field === 'address1' && inputFor('address1')}
                  {field === 'address2' && inputFor('address2')}
                  {field === 'city' && inputFor('city')}
                  {field === 'postal' && inputFor('postal')}
                  {field === 'countryCode' && (
                    <CountryInput
                      className="w-100"
                      disabled={disabled}
                      id={id ? `${id}_countryCode` : null}
                      invalid={!!error.countryCode}
                      name="countryCode"
                      onBlur={() => onBlur('countryCode')}
                      onChange={country => onAddressChange({ countryCode: country, state: undefined })}
                      placeholder={i18nLabels.countryCode}
                      value={value.countryCode}
                    />
                  )}
                  {field === 'state' && (
                    <Input
                      className="custom-select"
                      disabled={disabled}
                      id={id ? `${id}_state` : null}
                      invalid={!!error.state}
                      name="state"
                      onBlur={() => onBlur('state')}
                      onChange={e => onAddressChange({ state: e.target.value })}
                      placeholder={i18nLabels.state}
                      type="select"
                      value={value.state}
                    >
                      <option value="">{i18nLabels.state}</option>
                      {states.map(({ name, code }) => <option key={code} value={code}>{name}</option>)}
                    </Input>
                  )}
                </FormLabelGroup>
              </Col>
            );
          })}
        </Row>
      ))}
    </div>
  );
};

const addressPropType = {
  address1: PropTypes.string,
  address2: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  postal: PropTypes.string,
  countryCode: PropTypes.string,
};

InternationalAddressInput.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.shape(addressPropType),
  hints: PropTypes.shape(addressPropType),
  id: PropTypes.string,
  labels: PropTypes.shape(addressPropType),
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  showLabels: PropTypes.bool,
  value: PropTypes.shape(addressPropType),
};

InternationalAddressInput.defaultProps = {
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
  showLabels: false,
  value: {
    countryCode: 'US'
  },
};

export default InternationalAddressInput;
