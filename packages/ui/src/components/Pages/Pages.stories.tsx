import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Register } from './Register';

export default {
  title: 'Pages',
  parameters: {
    backgrounds: {
      default: 'gray',
      values: [{ name: 'gray', value: '#E5E5E5' }],
    },
  },
} as ComponentMeta<typeof Register>;

const Template: ComponentStory<typeof Register> = () => {
  return <Register />;
};

export const Registration = Template.bind({});
