import React from 'react';
import styles from './DateMonth.scss';

export default ({ selected, label, onClick }) => (
  <li className={selected ? 'bg-primary text-white' : ''} data-value={label} onClick={onClick}>
    {label}
  </li>
);
