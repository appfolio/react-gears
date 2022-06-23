import ComboboxItems from '../ComboboxItems';
import ComboboxSelections from '../ComboboxSelections';
import FilteredComboboxItems from '../FilteredComboboxItems';
import checkInvariantViolations from './checkInvariantViolations';

describe('MultiSelectCombobox - checkInvariantViolations', () => {
  describe('uncontrolled mode', () => {
    it('can handle missing `childrenTypes`', () => {
      expect(() =>
        checkInvariantViolations({ hasOnChange: true, hasOptions: true })
      ).not.toThrowError();
    });

    it('can pass when there is no violation', () => {
      expect(() =>
        checkInvariantViolations({ childrenTypes: [], hasOnChange: true, hasOptions: true })
      ).not.toThrowError();
    });

    it('can detect missing options', () => {
      expect(() =>
        checkInvariantViolations({ childrenTypes: [], hasOnChange: true, hasOptions: false })
      ).toThrowError('If no children are supplied, both options and onChange must be provided');
    });

    it('can detect missing onChange', () => {
      expect(() =>
        checkInvariantViolations({ childrenTypes: [], hasOnChange: false, hasOptions: true })
      ).toThrowError('If no children are supplied, both options and onChange must be provided');
    });
  });

  describe('controlled mode', () => {
    it('can pass when there is no violation', () => {
      expect(() => {
        checkInvariantViolations({
          childrenTypes: [ComboboxSelections, ComboboxItems],
          hasOnChange: false,
          hasOptions: false,
        });
      }).not.toThrowError();

      expect(() => {
        checkInvariantViolations({
          childrenTypes: [ComboboxSelections, FilteredComboboxItems],
          hasOnChange: false,
          hasOptions: false,
        });
      }).not.toThrowError();
    });

    it('can detect supplied options', () => {
      expect(() =>
        checkInvariantViolations({
          childrenTypes: [ComboboxSelections],
          hasOnChange: false,
          hasOptions: true,
        })
      ).toThrowError('If children are provided, neither onChange or options should be provided.');
    });

    it('can detect supplied onChange', () => {
      expect(() =>
        checkInvariantViolations({
          childrenTypes: [ComboboxSelections],
          hasOnChange: true,
          hasOptions: false,
        })
      ).toThrowError('If children are provided, neither onChange or options should be provided.');
    });

    it('can detect wrong number of children', () => {
      expect(() =>
        checkInvariantViolations({
          childrenTypes: [ComboboxSelections],
          hasOnChange: false,
          hasOptions: false,
        })
      ).toThrowError('Exactly 2 children should be supplied.');
    });

    it('can detect wrong type of first child', () => {
      expect(() =>
        checkInvariantViolations({
          childrenTypes: [ComboboxItems, ComboboxItems],
          hasOnChange: false,
          hasOptions: false,
        })
      ).toThrowError('First child must be <ComboboxSelections>');
    });

    it('can detect wrong type of second child', () => {
      expect(() =>
        checkInvariantViolations({
          childrenTypes: [ComboboxSelections, ComboboxSelections],
          hasOnChange: false,
          hasOptions: false,
        })
      ).toThrowError('Second child must be either <ComboboxItems> or <FilteredComboboxItems>');
    });
  });
});
