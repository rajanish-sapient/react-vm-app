import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ResetPassword } from './ResetPassword';

export default {
  title: 'Pages',
  parameters: {
    backgrounds: {
      default: 'gray',
      values: [{ name: 'gray', value: '#E5E5E5' }],
    },
  },
} as ComponentMeta<typeof ResetPassword>;

const Template: ComponentStory<typeof ResetPassword> = () => {
  return <ResetPassword />;
};

export const Reset = Template.bind({});
Reset.storyName = `Reset Password`;
