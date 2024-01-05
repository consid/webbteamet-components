import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from './components/Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Example/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered'
  }
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Styled: Story = {
  args: {
    label: 'Styled Dropdown',
    name: 'test'
  }
};

export const Unstyled: Story = {
  args: {
    label: 'Unstyled Dropdown'
  }
};
