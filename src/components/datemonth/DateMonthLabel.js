import React from 'react';
import styles from './DateMonth.scss';

export default ({ selected, label, onClick }) => (
  <li className={selected ? styles.selected : ''} data-value={label} onClick={onClick}>
    {label}
  </li>
);
