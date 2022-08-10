import invariant from 'invariant';
import type { JSXElementConstructor } from 'react';
import ComboboxItems from '../ComboboxItems';
import ComboboxSelections from '../ComboboxSelections';
import FilteredComboboxItems from '../FilteredComboboxItems';

interface InvariantCheckerParams {
  childrenTypes?: (string | JSXElementConstructor<any>)[];
  hasOnChange: boolean;
  hasOptions: boolean;
}

function checkInvariantViolations({
  childrenTypes = [],
  hasOnChange,
  hasOptions,
}: InvariantCheckerParams) {
  if (childrenTypes.length > 0) {
    invariant(
      !hasOnChange && !hasOptions,
      'If children are provided, neither onChange or options should be provided.'
    );
    invariant(childrenTypes.length === 2, 'Exactly 2 children should be supplied.');
    invariant(childrenTypes[0] === ComboboxSelections, 'First child must be <ComboboxSelections>');
    invariant(
      childrenTypes[1] === ComboboxItems || childrenTypes[1] === FilteredComboboxItems,
      'Second child must be either <ComboboxItems> or <FilteredComboboxItems>'
    );
  } else {
    invariant(
      hasOptions && hasOnChange,
      'If no children are supplied, both options and onChange must be provided'
    );
  }
}

export default checkInvariantViolations;
