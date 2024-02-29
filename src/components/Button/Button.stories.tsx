import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Primary button',
    size: 'large',
    primary: true
  }
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    label: 'Secondary button',
    size: 'large',
    primary: false
  }
};
