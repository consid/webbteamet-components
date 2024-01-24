
import type { Meta, StoryObj } from '@storybook/react';
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
