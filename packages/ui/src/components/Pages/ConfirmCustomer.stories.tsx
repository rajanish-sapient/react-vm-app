import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ConfirmCustomer } from './ConfirmCustomer';

export default {
  title: 'Pages',
  parameters: {
    backgrounds: {
      default: 'gray',
      values: [{ name: 'gray', value: '#E5E5E5' }],
    },
  },
} as ComponentMeta<typeof ConfirmCustomer>;

const Template: ComponentStory<typeof ConfirmCustomer> = () => {
  return <ConfirmCustomer />;
};

export const CustomerConfirmation = Template.bind({});
