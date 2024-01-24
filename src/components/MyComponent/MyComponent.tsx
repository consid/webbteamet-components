
import React from 'react';
import './MyComponent.css';

interface MyComponentProps {
  label: string;
}

export const MyComponent = ({
  label,
  ...props
}: MyComponentProps) => {
  return (
    <div>
      {label}
    </div>
  );
};

