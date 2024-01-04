import React from 'react';

interface TestComponentProps {
  label: string;
  className?: string;
}

export const TestComponent = ({ label, className }: TestComponentProps) => {
  return (
    <div className={`${className}-dropdown`}>
      <button
        id={`${className}-button`}
        className={`${className}-dropdown__button`}
        type='button'
        aria-expanded='false'
        aria-haspopup='menu'
        aria-controls={`${className}-menu`}
        data-dropdown
      >
        {label}
      </button>
      <ul
        id={`${className}-menu`}
        role='menu'
        aria-labelledby={`${className}-button`}
        className={`${className}-dropdown__menu`}
      >
        <li role='presentation'>
          <a href='#' role='menuitem' className={`${className}-dropdown__item`}>
            Item 1
          </a>
        </li>
        <li role='presentation'>
          <a href='#' role='menuitem' className={`${className}-dropdown__item`}>
            Item 2
          </a>
        </li>
        <li role='presentation'>
          <a href='#' role='menuitem' className={`${className}-dropdown__item`}>
            Item 3
          </a>
        </li>
      </ul>
    </div>
  );
};

TestComponent.defaultProps = {};
