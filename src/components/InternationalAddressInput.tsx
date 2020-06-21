import React from 'react';
import PropTypes from 'prop-types';
import Col from './Col';
import CountryInput from './CountryInput';
import FormLabelGroup from './FormLabelGroup';
import getAddressFormat, { AddressPropType } from './address/AddressFormats';
import Input from './Input';
import Row from './Row';

type InternationalAddressInputProps = {
  className?: string,
  disabled?: boolean,
  error?: AddressPropType,
  hints?: AddressPropType,
  id?: string,
  labels?: AddressPropType,
  onBlur?: Function,
  onChange?: Function,
  showLabels?: boolean,
  value?: AddressPropType & { countryCode: string },
}

const InternationalAddressInput: React.FunctionComponent<InternationalAddressInputProps> = ({
  className,
  disabled = false,
  error = {},
  hints = {},
  id,
  labels= {},
  onBlur= () => {},
  onChange= () => {},
  showLabels = false,
  value = { countryCode: 'US'}
}) => {
  const countryCode = value.countryCode;
  const addressFormat = getAddressFormat(countryCode);
  const fields = getAddressFormat(countryCode).fields;
  const i18nLabels = { ...addressFormat.labels, ...labels };
  const states = addressFormat.states;

  const inputId = id || 'addressInput';
  const stateId = `${inputId}_state`;
  const countryCodeId = `${inputId}_countryCode`;

  const onAddressChange = (field: { [K in keyof AddressPropType]?: string }) => {
    onChange({ ...value, ...field }); // TODO state not resetting
  };

  const inputFor = (type: keyof AddressPropType) => (
    <Input
      disabled={disabled}
      id={`${inputId}_${type}`}
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
    <div className={className} id={id}>
      {fields.map(row => (
        <Row className="no-gutters">
          {row.map((field, index) => {
            const label = i18nLabels[field];
            return (
              <Col sm>
                <FormLabelGroup
                  feedback={error[field]}
                  hint={hints[field]}
                  inputId={`${inputId}_${field}`}
                  label={label}
                  srLabel={!showLabels}
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
                      id={countryCodeId}
                      invalid={!!error.countryCode}
                      name="countryCode"
                      onBlur={() => onBlur('countryCode')}
                      onChange={country => onAddressChange({
                        countryCode: (country !== null) ? country : undefined,
                        state: undefined
                      })}
                      placeholder={i18nLabels.countryCode}
                      value={value.countryCode}
                    />
                  )}
                  {field === 'state' && (
                    <Input
                      className="custom-select"
                      disabled={disabled}
                      id={stateId}
                      invalid={!!error.state}
                      name="state"
                      onBlur={() => onBlur('state')}
                      onChange={e => onAddressChange({ state: e.target.value })}
                      placeholder={i18nLabels.state}
                      type="select"
                      value={value.state}
                    >
                      <option value="">{i18nLabels.state}</option>
                      {!!states && states.map(({ name, code }) => <option key={code} value={code}>{name}</option>)}
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
  countryCode: PropTypes.string.isRequired,
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
  labels: {},
  onBlur: () => {},
  onChange: () => {},
  showLabels: false,
  value: {
    countryCode: 'US'
  },
};

export default InternationalAddressInput;
