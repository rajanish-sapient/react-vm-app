import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Sign In</Button>
);

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = { variant: 'primary' };
Secondary.args = { variant: 'secondary' };
