export const DEFAULT_STORY = `import type { Meta, StoryObj } from '@storybook/react';
import { MyComponent } from './MyComponent';

const meta: Meta<typeof MyComponent> = {
  title: 'Components/MyComponent',
  component: MyComponent,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof MyComponent>;

export const Styled: Story = {
  args: {
    label: 'Styled'
  }
};

export const Unstyled: Story = {
  args: {
    ...Styled.args,
    label: 'Unstyled'
  }
};
`;

export const DEFAULT_COMPONENT = `import React from 'react';
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

`;

export const DEFAULT_STYLING = ``; // Add default styling here if we need it
