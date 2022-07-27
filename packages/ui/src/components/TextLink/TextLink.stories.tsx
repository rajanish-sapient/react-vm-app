import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextLink } from './TextLink';

export default {
  title: 'TextLink',
  component: TextLink,
} as ComponentMeta<typeof TextLink>;

const Template: ComponentStory<typeof TextLink> = (args) => (
  <TextLink {...args} title="Sign in instead" />
);

export const Default = Template.bind({});
