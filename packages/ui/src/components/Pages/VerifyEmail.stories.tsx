import { ComponentMeta, ComponentStory } from '@storybook/react';
import { VerifyEmail } from './VerifyEmail';

export default {
  title: 'Pages',
  parameters: {
    backgrounds: {
      default: 'gray',
      values: [{ name: 'gray', value: '#E5E5E5' }],
    },
  },
} as ComponentMeta<typeof VerifyEmail>;

const Template: ComponentStory<typeof VerifyEmail> = () => {
  return <VerifyEmail />;
};

export const EmailVerification = Template.bind({});
