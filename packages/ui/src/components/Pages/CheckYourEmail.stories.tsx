import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CheckYourEmail } from './CheckYourEmail';

export default {
  title: 'Pages',
  parameters: {
    backgrounds: {
      default: 'gray',
      values: [{ name: 'gray', value: '#E5E5E5' }],
    },
  },
} as ComponentMeta<typeof CheckYourEmail>;

const Template: ComponentStory<typeof CheckYourEmail> = () => {
  return <CheckYourEmail />;
};

export const CheckEmail = Template.bind({});
CheckEmail.storyName = `Forgot Password - Check Email`;
