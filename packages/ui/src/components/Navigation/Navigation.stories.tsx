import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import NavMenu from './NavMenu';

const navLinksOne = [
  { label: 'Link 1', path: '/', dropdownItems: [] },
  { label: 'Link 2', path: '/', dropdownItems: [] },
  { label: 'Link 3', path: '/', dropdownItems: [] },
  {
    label: 'Link 4',
    path: '/',
    dropdownItems: [
      { label: 'Link 1', path: '/' },
      { label: 'Link 2', path: '/' },
      { label: 'Link 3', path: '/' },
    ],
  },
];

const navLinksTwo = [
  { label: 'Link 1', path: '/', dropdownItems: [] },
  {
    label: 'Link 2',
    path: '/',
    dropdownItems: [
      { label: 'Link 1', path: '/' },
      { label: 'Link 2', path: '/' },
      { label: 'Link 3', path: '/' },
    ],
  },
  { label: 'Link 3', path: '/', dropdownItems: [] },
  { label: 'Link 4', path: '/', dropdownItems: [] },
];

export default {
  title: 'Navigation',
  component: NavMenu,
} as ComponentMeta<typeof NavMenu>;

const Template: ComponentStory<typeof NavMenu> = (args) => (
  <>
    <NavMenu menuItems={navLinksOne} />
    <div className="mt-12"></div>
    <NavMenu menuItems={navLinksTwo} />
  </>
);

export const Default = Template.bind({});
