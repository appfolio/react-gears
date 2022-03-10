import React, { useCallback } from 'react';
import type { ChangeEvent } from 'react';
import flow from 'lodash.flow';
import noop from 'lodash.noop';
import classnames from 'classnames';
import CountryInput from './CountryInput';
import StateInput from './StateInput';
import FormLabelGroup from './FormLabelGroup';
import Col from './Col';
import Input from './Input';
import Row from './Row';

interface Address {
  address1: string;
  address2: string;
  city: string;
  state: string;
  postal: string;
  countryCode: string;
}

type StringMap = { [key: string]: string | null };

export interface AddressInputProps {
  className?: string;
  compact?: boolean;
  countries?: string[];
  defaultValue?: StringMap;
  disabled?: boolean;
  error?: Partial<Address>;
  hints?: Partial<Address>;
  id?: string;
  inputName?: Address;
  labels?: Address;
  onBlur?: (inputName: string) => void;
  onChange?: (address: StringMap) => void;
  showCountry?: boolean;
  showLabels?: boolean;
  value?: StringMap;
}

const readEvent = (e: ChangeEvent) => {
  const target = e.target as HTMLInputElement;
  return { [target.name]: target.value };
};

const getValue = (field: string, source: StringMap): string | null => {
  const fieldValue = source[field];
  if (typeof fieldValue === 'undefined' || fieldValue === null) {
    return null;
  }
  return fieldValue;
};

const getValueProps = (value: StringMap, defaultValue: StringMap) => (
  field: string
): { value?: string; defaultValue?: string } => {
  const gotValue = getValue(field, value);
  if (gotValue !== null) {
    return { value: gotValue };
  }

  const gotDefaultValue = getValue(field, defaultValue);
  if (gotDefaultValue !== null) {
    return { defaultValue: gotDefaultValue };
  }
  return {};
};

const defaultProps = {
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
  inputName: {
    address1: 'address1',
    address2: 'address2',
    city: 'city',
    state: 'state',
    postal: 'postal',
    countryCode: 'countryCode',
  },
  onBlur: noop,
  onChange: noop,
  showCountry: true,
  showLabels: false,
  value: {},
};

const AddressInput = ({
  className = defaultProps.className,
  compact,
  countries,
  defaultValue = defaultProps.defaultValue,
  disabled = defaultProps.disabled,
  error = defaultProps.error,
  hints = defaultProps.hints,
  id,
  inputName = defaultProps.inputName,
  labels = defaultProps.labels,
  onBlur = defaultProps.onBlur,
  onChange = defaultProps.onChange,
  showCountry = defaultProps.showCountry,
  showLabels = defaultProps.showLabels,
  value = defaultProps.value,
}: AddressInputProps) => {
  const valueChanged = useCallback(
    (update: StringMap) => {
      onChange({ ...value, ...update });
    },
    [onChange, value]
  );

  const getValues = useCallback(getValueProps(value, defaultValue), [
    value,
    defaultValue,
  ]);

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
          name={inputName.address1}
          type="text"
          placeholder={labels.address1}
          {...getValues(inputName.address1)}
          invalid={!!error.address1}
          onBlur={() => onBlur(inputName.address1)}
          onChange={flow([readEvent, valueChanged])}
          disabled={disabled}
        />
      </FormLabelGroup>
      <FormLabelGroup
        label={labels.address2}
        inputId={address2Id}
        srLabel={!showLabels}
        feedback={error.address2}
        hint={hints.address2}
        stacked
      >
        <Input
          autoComplete="address-line2"
          id={address2Id}
          name={inputName.address2}
          type="text"
          placeholder={labels.address2}
          {...getValues(inputName.address2)}
          invalid={!!error.address2}
          onBlur={() => onBlur(inputName.address2)}
          onChange={flow([readEvent, valueChanged])}
          disabled={disabled}
        />
      </FormLabelGroup>
      <Row className="gx-3">
        <Col
          sm={compact ? undefined : 6}
          xs={12}
          className={compact ? undefined : 'pe-sm-3'}
        >
          <FormLabelGroup
            rowClassName={classnames({ 'mb-sm-0': !showCountry && !compact })}
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
              name={inputName.city}
              placeholder={labels.city}
              {...getValues(inputName.city)}
              invalid={!!error.city}
              onBlur={() => onBlur(inputName.city)}
              onChange={flow([readEvent, valueChanged])}
              disabled={disabled}
            />
          </FormLabelGroup>
        </Col>
        <Col
          md={compact ? undefined : 2}
          sm={compact ? undefined : 3}
          xs={4}
          className="pr-3"
        >
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
              name={inputName.state as string | undefined}
              placeholder={labels.state}
              {...getValues(inputName.state)}
              invalid={!!error.state}
              onBlur={() => onBlur(inputName.state)}
              onChange={(state) => {
                valueChanged({ state });
              }}
              disabled={disabled}
            />
          </FormLabelGroup>
        </Col>
        <Col md={compact ? undefined : 4} sm={compact ? undefined : 3} xs={8}>
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
              name={inputName.postal}
              placeholder={labels.postal}
              {...getValues(inputName.postal)}
              invalid={!!error.postal}
              onBlur={() => onBlur(inputName.postal)}
              onChange={flow([readEvent, valueChanged])}
              disabled={disabled}
            />
          </FormLabelGroup>
        </Col>
      </Row>
      {showCountry && (
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
            name={inputName.countryCode}
            placeholder={labels.countryCode}
            {...getValues(inputName.countryCode)}
            invalid={!!error.countryCode}
            onBlur={() => onBlur(inputName.countryCode)}
            onChange={(countryCode) => {
              valueChanged({ countryCode });
            }}
            disabled={disabled}
          />
        </FormLabelGroup>
      )}
    </div>
  );
};
export default AddressInput;
