import type { Meta, StoryObj } from '@storybook/react';

import { TestComponent } from './components/TestComponent';

const meta: Meta<typeof TestComponent> = {
  title: 'Example/TestComponent',
  component: TestComponent,
  parameters: {
    layout: 'centered'
  }
};

export default meta;
type Story = StoryObj<typeof TestComponent>;

export const Styled: Story = {
  args: {
    label: 'Styled Dropdown',
    className: 'test'
  }
};

export const Unstyled: Story = {
  args: {
    label: 'Unstyled Dropdown'
  }
};
