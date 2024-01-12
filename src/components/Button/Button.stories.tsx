import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Styled: Story = {
  args: {
    label: 'Primary',
    size: 'large',
    primary: true
  }
};

export const Unstyled: Story = {
  args: {
    ...Styled.args,
    label: 'Secondary',
    size: 'large',
    primary: false
  }
};
