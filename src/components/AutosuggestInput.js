import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import Button from './Button';
import Icon from './Icon';
import InputGroup from './InputGroup';
import InputGroupButton from './InputGroupButton';
import styles from './AutosuggestInput.scss';

const theme = {
  container: 'dropdown',
  containerOpen: 'dropdown show',
  input: 'form-control',
  suggestion: 'px-2 py-1',
  suggestionsContainer: `dropdown-menu m-0 p-0 w-100 ${styles.dropdown}`,
  suggestionHighlighted: 'bg-primary text-white',
  suggestionsList: 'list-unstyled m-0'
};

function getSuggestions(value = '', suggestions) {
  const escapedValue = value.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp(`^${escapedValue}`, 'i');
  const results = suggestions.filter(language => regex.test(language.label));

  return results.length ? results : suggestions;
}

export default class AutosuggestInput extends Component {
  static propTypes = {
    options: PropTypes.array,
    getSuggestionValue: PropTypes.func,
    renderInputComponent: PropTypes.func,
    renderSuggestion: PropTypes.func,
    onChange: PropTypes.func
  };
  static defaultProps = {
    options: [],
    getSuggestionValue: suggestion => suggestion.label,
    renderSuggestion: suggestion => <span>{suggestion.label}</span>,
    onChange: () => {},
    value: ''
  };

  state = {
    open: false
  }

  constructor(props) {
    super(props);

    this.state = {
      suggestions: props.options
    };
  }

  toggle = () => {
    this.setState({ open: !this.state.open });
  };

  onChange = (event, { newValue }) => {
    const value = this.props.options.find(option => option.label === newValue);
    this.props.onChange(newValue, value); // TODO label, then object
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value, this.props.options)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({ suggestions: [] });
  };

  renderInputComponent = inputProps => (
    <InputGroup>
      <input className="form-control" type="text" {...inputProps} />
      <InputGroupButton>
        <Button
          className="px-2"
          type="button"
          tabIndex={-1}
        >
          <Icon name={this.state.open ? 'caret-up' : 'caret-down'} fixedWidth />
        </Button>
      </InputGroupButton>
    </InputGroup>
  );

  render() {
    const { getSuggestionValue, placeholder, renderInputComponent, renderSuggestion, value, ...props } = this.props;
    const { suggestions } = this.state;
    const inputProps = {
      placeholder,
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        alwaysRenderSuggestions={this.state.open}
        highlightFirstSuggestion={false}
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderInputComponent={renderInputComponent || this.renderInputComponent}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        theme={theme}
        {...props}
      />
    );
  }
}
