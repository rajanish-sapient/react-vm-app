import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Footer } from './Footer';

import footerLogo from './SH_Footer_logo.png';

const FOOTER_COLS = [
  {
    name: 'link_col',
    title: '',
    links: [
      { label: 'Link 1', path: '/', target: '_blank' },
      { label: 'Link 2', path: '/', target: '_blank' },
      { label: 'Link 3', path: '/', target: '_blank' },
      { label: 'Link 4', path: '/', target: '__blank' },
    ],
  },
  {
    name: 'link_col',
    title: '',
    links: [
      { label: 'Link 1', path: '/', target: '__blank' },
      { label: 'Link 2', path: '/', target: '_blank' },
      { label: 'Link 3', path: '/', target: '_blank' },
      { label: 'Link 4', path: '/', target: '_blank' },
    ],
  },
  {
    name: 'link_col',
    title: '',
    links: [
      { label: 'Link 1', path: '/', target: '_blank' },
      { label: 'Link 2', path: '/', target: '_blank' },
      { label: 'Link 3', path: '/', target: '_blank' },
      { label: 'Link 4', path: '/', target: '_blank' },
    ],
  },
  {
    name: 'social_col',
    title: '',
    social_handles: [
      { name: 'facebook', url: '' },
      { name: 'instagram', url: '' },
      { name: 'linkedin', url: '' },
    ],
    contact: '1-800-266-5428',
    office_schedule: [
      { day: 'Mon-Thu', time: '8:30 AM - 6:30 PM ET' },
      { day: 'Fri', time: '8:30 AM - 5:30 PM ET' },
    ],
  },
];

export default {
  title: 'Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => (
  <Footer footerCols={FOOTER_COLS} footerLogoUrl={footerLogo} />
);

export const Default = Template.bind({});
