import React from 'react';
import './button.css';

interface ButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = 'large',
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'primary' : 'secondary';
  return (
    <button
      type='button'
      className={['storybook-button', `storybook-button--${mode}`].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};
