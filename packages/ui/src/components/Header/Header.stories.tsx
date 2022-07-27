import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Header } from './Header';

import pcaLogo from './pca-logo.svg';
import eltaMDLogo from './eltaMD-logo.svg';

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
  title: 'Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <>
    <Header imgUrl={pcaLogo} navMenuItems={navLinksOne} />
    <div className="mt-12"></div>
    <Header imgUrl={eltaMDLogo} navMenuItems={navLinksTwo} />
  </>
);

export const Default = Template.bind({});
