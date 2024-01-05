import React, { useState } from 'react';
import '../styles/dropdown.css';

interface DropdownProps {
  label: string;
  name?: string;
}

export const Dropdown = ({ label, name }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${name}-dropdown`}>
      <button
        id={`${name}-button`}
        className={`${name}-dropdown__button`}
        type='button'
        aria-expanded='false'
        aria-haspopup='menu'
        aria-controls={`${name}-menu`}
        data-dropdown
        onClick={toggleDropdown}
      >
        {label}
      </button>
      <ul
        id={`${name}-menu`}
        role='menu'
        aria-labelledby={`${name}-button`}
        className={`${name}-dropdown__menu${isOpen ? '--open' : ''}`}
      >
        <li role='presentation'>
          <a href='#' role='menuitem' className={`${name}-dropdown__item`}>
            Item 1
          </a>
        </li>
        <li role='presentation'>
          <a href='#' role='menuitem' className={`${name}-dropdown__item`}>
            Item 2
          </a>
        </li>
        <li role='presentation'>
          <a href='#' role='menuitem' className={`${name}-dropdown__item`}>
            Item 3
          </a>
        </li>
      </ul>
    </div>
  );
};

Dropdown.defaultProps = {};
