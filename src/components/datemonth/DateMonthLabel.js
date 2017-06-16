import React from 'react';

export default ({ selected, label, onClick }) => (
  <li className={`px-3 py-1 text-center ${selected ? 'bg-primary text-white' : ''}`} data-value={label} onClick={onClick}>
    {label}
  </li>
);
