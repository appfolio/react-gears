import React from 'react';
import { CustomInput, FormLabelGroup } from '../src';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';

storiesOf('Input', module).addWithInfo('Custom Input', () => (
  <div>
    <p>
      For more customization and cross browser consistency, Bootstrap has custom form elements
      to replace the browser defaults. They’re built on top of semantic and accessible markup,
      so they’re safe replacements for default form controls.
    </p>
    <div className="mb-4">
      <h3>Checkbox</h3>
      <div>
        <CustomInput
          type="checkbox"
          id="exampleCustomCheckbox"
          label="Check this custom checkbox"
        />
        <CustomInput
          type="checkbox"
          id="exampleCustomCheckbox2"
          label="Or this one"
        />
        <CustomInput
          type="checkbox"
          id="exampleCustomCheckbox3"
          label="But not this disabled one"
          disabled
        />
      </div>
    </div>
    <div className="mb-4">
      <h3>Radio</h3>
      <div>
        <CustomInput
          type="radio"
          id="exampleCustomRadio"
          name="customRadio"
          label="Select this custom radio"
        />
        <CustomInput
          type="radio"
          id="exampleCustomRadio2"
          name="customRadio"
          label="Or this one"
        />
        <CustomInput
          type="radio"
          id="exampleCustomRadio3"
          label="But not this disabled one"
          disabled
        />
      </div>
    </div>
    <div className="mb-4">
      <h3>Inline Checkbox</h3>
      <div>
        <CustomInput
          type="checkbox"
          id="exampleCustomInline"
          label="An inline custom input"
          inline
        />
        <CustomInput
          type="checkbox"
          id="exampleCustomInline2"
          label="and another one"
          inline
        />
      </div>
    </div>
    <div className="mb-4">
      <h3>Select</h3>
      <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
        <option value="">Select</option>
        <option>Value 1</option>
        <option>Value 2</option>
        <option>Value 3</option>
        <option>Value 4</option>
        <option>Value 5</option>
      </CustomInput>
    </div>

    <div className="mb-4">
      <h3>File</h3>
      <CustomInput
        type="file"
        id="exampleCustomFileBrowser"
        name="customFile"
        label="Choose Files to Add"
      />
    </div>
  </div>
));
