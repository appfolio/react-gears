import classNames from 'classnames';
import React from 'react';
import DropdownItem from '../Dropdown/DropdownItem';

/**
 * Custom option component that adds Bootstrap/reactstrap components and theming support to
 * https://github.com/HubSpot/react-select-plus/blob/master/src/Option.js
 */
export default class SelectOption extends React.Component {
  onFocus = (event) => {
    if (!this.props.isFocused) {
      this.props.onFocus(this.props.option, event);
    }
  };

  blockEvent = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  handleDisabledOptionClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const anchor = event.target.closest('.Select-option a');
    if (!anchor || !('href' in anchor)) {
      return;
    }
    if (anchor.target) {
      window.open(anchor.href, anchor.target);
    } else {
      window.location.href = anchor.href;
    }
  };

  handleMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.props.onSelect(this.props.option, event);
  };

  handleMouseEnter = (event) => this.onFocus(event);

  handleMouseMove = (event) => this.onFocus(event);

  handleTouchEnd = (event) => {
    // Check if the view is being dragged, In this case
    // we don't want to fire the click event (because the user only wants to scroll)
    if (this.dragging) {
      return;
    }

    this.handleMouseDown(event);
  };

  handleTouchMove = () => {
    this.dragging = true;
  };

  handleTouchStart = () => {
    this.dragging = false;
  };

  render() {
    const { option, instancePrefix, optionIndex, isDisabled, isFocused, isSelected } = this.props;
    const className = classNames(this.props.className, option.className, 'text-truncate', {
      'bg-light': isSelected && !isFocused,
      'bg-primary text-white': isFocused,
    });

    return option.disabled || isDisabled ? (
      <DropdownItem
        tag="div" // Eliminates invalid nesting of anchors within a button (default tag)
        className={className}
        onMouseDown={this.blockEvent}
        onClick={this.handleDisabledOptionClick}
        disabled
      >
        {this.props.children}
      </DropdownItem>
    ) : (
      <DropdownItem
        className={className}
        style={option.style}
        role="option"
        onMouseDown={this.handleMouseDown}
        onMouseEnter={this.handleMouseEnter}
        onMouseMove={this.handleMouseMove}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
        id={`${instancePrefix}-option-${optionIndex}`}
        title={option.title}
        aria-selected={isSelected}
      >
        {this.props.children}
      </DropdownItem>
    );
  }
}
