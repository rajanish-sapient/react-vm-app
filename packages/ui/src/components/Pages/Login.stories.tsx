import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Login as SignIn } from './Login';
export default {
  title: 'Pages',
  parameters: {
    backgrounds: {
      default: 'gray',
      values: [{ name: 'gray', value: '#E5E5E5' }],
    },
  },
} as ComponentMeta<typeof SignIn>;

const Template: ComponentStory<typeof SignIn> = () => {
  return <SignIn />;
};

export const Login = Template.bind({});
