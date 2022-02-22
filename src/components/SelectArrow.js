import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

/*
  TODO The global style is here since it's the only place we can pass in styled-jsx without adding a
  wrapper/fragment to Select, which then breaks downstream tests...
  Remove if/when we upgrade react-select.
*/
const SelectArrow = ({ isOpen, render }) => (
  <>
    {render ? render() : <Icon name={`caret-${isOpen ? 'up' : 'down'}`} />}
    <style jsx global>
      {`
        .Select {
          position: relative;
        }
        .Select input::-webkit-contacts-auto-fill-button,
        .Select input::-webkit-credentials-auto-fill-button {
          display: none !important;
        }
        .Select input::-ms-clear {
          display: none !important;
        }
        .Select input::-ms-reveal {
          display: none !important;
        }
        .Select,
        .Select div,
        .Select input,
        .Select span {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
        }
        .Select.is-disabled .Select-arrow-zone {
          cursor: default;
          pointer-events: none;
        }
        .Select.is-disabled > .Select-control {
          background-color: #eceeef;
        }
        .Select.is-disabled > .Select-control:hover {
          -webkit-box-shadow: none;
          box-shadow: none;
        }
        .Select.is-searchable.is-open > .Select-control {
          cursor: text;
        }
        .Select.is-searchable.is-focused:not(.is-open) > .Select-control {
          cursor: text;
        }
        .Select.is-open > .Select-control {
          border-bottom-right-radius: 0;
          border-bottom-left-radius: 0;
          background: #fff;
          border-color: silver #d9d9d9 #e6e6e6;
        }
        .Select.is-open > .Select-control .Select-arrow {
          top: -2px;
          border-color: transparent transparent #999;
          border-width: 0 0.35rem 0.35rem;
        }
        .Select.is-focused > .Select-control {
          background: #fff;
        }
        .Select.is-focused:not(.is-open) > .Select-control {
          border-color: #08c #0099e6 #0099e6;
          -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1), 0 0 5px -1px fade(#08c, 50%);
          box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1), 0 0 5px -1px fade(#08c, 50%);
        }
        .Select.has-value.is-clearable.Select--single > .Select-control .Select-value {
          padding-right: 2.875rem;
        }
        .Select.has-value.Select--single > .Select-control .Select-value .Select-value-label,
        .Select.has-value.is-pseudo-focused.Select--single
          > .Select-control
          .Select-value
          .Select-value-label {
          color: #333;
        }
        .Select.has-value.Select--single > .Select-control .Select-value a.Select-value-label,
        .Select.has-value.is-pseudo-focused.Select--single
          > .Select-control
          .Select-value
          a.Select-value-label {
          cursor: pointer;
          text-decoration: none;
        }
        .Select.has-value.Select--single > .Select-control .Select-value a.Select-value-label:hover,
        .Select.has-value.Select--single > .Select-control .Select-value a.Select-value-label:focus,
        .Select.has-value.is-pseudo-focused.Select--single
          > .Select-control
          .Select-value
          a.Select-value-label:hover,
        .Select.has-value.is-pseudo-focused.Select--single
          > .Select-control
          .Select-value
          a.Select-value-label:focus {
          color: #08c;
          outline: none;
          text-decoration: underline;
        }
        .Select.has-value.Select--single > .Select-control .Select-value a.Select-value-label:focus,
        .Select.has-value.is-pseudo-focused.Select--single
          > .Select-control
          .Select-value
          a.Select-value-label:focus {
          background: #fff;
        }
        .Select.has-value.is-pseudo-focused .Select-input {
          opacity: 0;
        }
        .Select.is-open .Select-arrow,
        .Select .Select-arrow-zone:hover > .Select-arrow {
          border-top-color: #666;
        }
        .Select.Select--rtl {
          direction: rtl;
          text-align: right;
        }
        .Select-control {
          background-color: #fff;
          border-color: #e6e6e6 #d9d9d9 silver;
          border-radius: 4px;
          border: 1px solid #d9d9d9;
          color: #333;
          cursor: default;
          display: table;
          border-spacing: 0;
          border-collapse: separate;
          height: 2.35rem;
          outline: none;
          overflow: hidden;
          position: relative;
          width: 100%;
        }
        .Select-control:hover {
          -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
          box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
        }
        .Select-control .Select-input:focus {
          outline: none;
          background: #fff;
        }
        .Select-placeholder,
        .Select--single > .Select-control .Select-value {
          bottom: 0;
          color: #aaa;
          left: 0;
          line-height: 2.25rem;
          padding-left: 10px;
          padding-right: 10px;
          position: absolute;
          right: 0;
          top: 0;
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .Select-input {
          height: 2.25rem;
          padding-left: 10px;
          padding-right: 10px;
          vertical-align: middle;
        }
        .Select-input > input {
          background: none transparent;
          border: 0 none;
          -webkit-box-shadow: none;
          box-shadow: none;
          cursor: default;
          display: inline-block;
          font-family: inherit;
          font-size: inherit;
          margin: 0;
          outline: none;
          line-height: 17px;
          /* For IE 8 compatibility */
          padding: -7.875rem 0 -3.875rem;
          /* For IE 8 compatibility */
          -webkit-appearance: none;
        }
        .Select-input > input {
          cursor: text;
        }
        .Select-control:not(.is-searchable) > .Select-input {
          outline: none;
        }
        .Select-loading-zone {
          cursor: pointer;
          display: table-cell;
          position: relative;
          text-align: center;
          vertical-align: middle;
          width: 16px;
        }
        .Select-loading {
          -webkit-animation: Select-animation-spin 400ms infinite linear;
          animation: Select-animation-spin 400ms infinite linear;
          width: 16px;
          height: 16px;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          border-radius: 50%;
          border: 2px solid #d9d9d9;
          border-right-color: #333;
          display: inline-block;
          position: relative;
          vertical-align: middle;
        }
        .Select-clear-zone {
          -webkit-animation: Select-animation-fadeIn 200ms;
          animation: Select-animation-fadeIn 200ms;
          color: #999;
          cursor: pointer;
          display: table-cell;
          position: relative;
          text-align: center;
          vertical-align: middle;
          width: 1.125rem;
        }
        .Select-clear-zone:hover {
          color: #d0021b;
        }
        .Select-clear {
          display: inline-block;
          font-size: 1rem;
          line-height: 1;
        }
        .Select--multi .Select-clear-zone {
          width: 1.125rem;
        }
        .Select--multi .Select-multi-value-wrapper {
          display: inline-block;
        }
        .Select .Select-aria-only {
          position: absolute;
          display: inline-block;
          height: 1px;
          width: 1px;
          margin: -1px;
          clip: rect(0, 0, 0, 0);
          overflow: hidden;
          float: left;
        }
        .Select-arrow-zone {
          cursor: pointer;
          display: table-cell;
          position: relative;
          text-align: center;
          vertical-align: middle;
          width: 1.75rem;
          padding-right: 0.35rem;
        }
        .Select-arrow {
          border-color: #999 transparent transparent;
          border-style: solid;
          border-width: 0.35rem 0.35rem 0.175rem;
          display: inline-block;
          height: 0;
          width: 0;
          position: relative;
        }

        .Select-menu-outer {
          border-bottom-right-radius: 4px;
          border-bottom-left-radius: 4px;
          background-color: #fff;
          border: 1px solid #d9d9d9;
          border-top-color: #ececec;
          -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
          box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          margin-top: -1px;
          max-height: 200px;
          position: absolute;
          top: 100%;
          width: 100%;
          z-index: 1000;
          -webkit-overflow-scrolling: touch;
        }
        .Select-menu {
          max-height: 198px;
          overflow-y: auto;
        }
        .Select-option {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          background-color: #fff;
          color: none;
          cursor: pointer;
          display: block;
          padding: 8px 10px;
        }
        .Select-option:last-child {
          border-bottom-right-radius: 4px;
          border-bottom-left-radius: 4px;
        }
        .Select-option.is-selected {
          background-color: #f5faff;
          color: #333;
        }
        .Select-option.is-focused {
          background-color: inherit;
          color: inherit;
        }
        .Select-option.is-disabled {
          color: none;
          cursor: default;
        }
        .Select-noresults {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          color: #999999;
          cursor: default;
          display: block;
          padding: 8px 10px;
        }
        .Select--multi .Select-input {
          vertical-align: middle;
          margin-left: 10px;
          padding: 0;
        }
        .Select--multi.Select--rtl .Select-input {
          margin-left: 0;
          margin-right: 10px;
        }
        .Select--multi.has-value .Select-input {
          margin-left: 5px;
        }
        .Select--multi .Select-value {
          background-color: #f2f9fc;
          border-radius: 2px;
          border: 1px solid #c9e6f2;
          color: #08c;
          display: inline-block;
          font-size: 0.9em;
          margin-left: 5px;
          margin-top: 5px;
          vertical-align: top;
        }
        .Select--multi .Select-value-icon,
        .Select--multi .Select-value-label {
          display: inline-block;
          vertical-align: middle;
        }
        .Select--multi .Select-value-label {
          border-bottom-right-radius: 2px;
          border-top-right-radius: 2px;
          cursor: default;
          padding: 2px 5px;
        }
        .Select--multi a.Select-value-label {
          color: #08c;
          cursor: pointer;
          text-decoration: none;
        }
        .Select--multi a.Select-value-label:hover {
          text-decoration: underline;
        }
        .Select--multi .Select-value-icon {
          cursor: pointer;
          border-bottom-left-radius: 2px;
          border-top-left-radius: 2px;
          border-right: 1px solid #c9e6f2;
          padding: 1px 5px 3px;
        }
        .Select--multi .Select-value-icon:hover,
        .Select--multi .Select-value-icon:focus {
          background-color: #ddeff7;
          color: #0077b3;
        }
        .Select--multi .Select-value-icon:active {
          background-color: #c9e6f2;
        }
        .Select--multi.Select--rtl .Select-value {
          margin-left: 0;
          margin-right: 5px;
        }
        .Select--multi.Select--rtl .Select-value-icon {
          border-right: none;
          border-left: 1px solid #c9e6f2;
        }
        .Select--multi.is-disabled .Select-value {
          background-color: #fcfcfc;
          border: 1px solid #e3e3e3;
          color: #333;
        }
        .Select--multi.is-disabled .Select-value-icon {
          cursor: not-allowed;
          border-right: 1px solid #e3e3e3;
        }
        .Select--multi.is-disabled .Select-value-icon:hover,
        .Select--multi.is-disabled .Select-value-icon:focus,
        .Select--multi.is-disabled .Select-value-icon:active {
          background-color: #fcfcfc;
        }

        .Select.is-disabled > .Select-control {
          cursor: not-allowed;
        }
        .Select-input {
          padding-left: 0.5rem;
          width: 100%;
        }
        .Select-input > input {
          height: 100%;
          padding: 0;
          width: 100% !important;
        }
        .Select-input > input::-webkit-contacts-auto-fill-button {
          visibility: hidden;
          position: absolute;
          right: 0;
        }
        .Select-option-group-label {
          font-weight: bold;
          padding: 3px 7px 4px;
        }
        .Select-option {
          padding: 3px 7px 4px 20px;
          white-space: normal;
        }
      `}
    </style>
  </>
);

SelectArrow.propTypes = {
  isOpen: PropTypes.bool,
  render: PropTypes.func,
};

SelectArrow.displayName = 'SelectArrow';

export default SelectArrow;
