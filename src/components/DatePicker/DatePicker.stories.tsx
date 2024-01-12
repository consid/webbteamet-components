import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

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
