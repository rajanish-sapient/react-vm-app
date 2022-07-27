import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ForgotPassword } from './ForgotPassword';

export default {
  title: 'Pages',
  parameters: {
    backgrounds: {
      default: 'gray',
      values: [{ name: 'gray', value: '#E5E5E5' }],
    },
  },
} as ComponentMeta<typeof ForgotPassword>;

const Template: ComponentStory<typeof ForgotPassword> = () => {
  return <ForgotPassword />;
};

export const EnterEmail = Template.bind({});
EnterEmail.storyName = `Forgot Password - Enter Email`;
