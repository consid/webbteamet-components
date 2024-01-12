import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from './Calendar';

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Calendar>;

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
