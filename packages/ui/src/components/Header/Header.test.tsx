import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './Header';
const NAV_ITEMS = [
  {
    label: 'PCA Skin Pro',
    path: 'https://www.pcaskinpro.com/professionals-landing',
    dropdownItems: [],
    target: '_blank',
  },

  {
    label: 'Marketing Material',
    path: '/',
    dropdownItems: [{ label: '#Link 1', path: '/', target: '_self' }],
  },
];

describe('Header', () => {
  test('Header component having nav elements', () => {
    const { getByText } = render(
      <Header imgUrl={''} navMenuItems={NAV_ITEMS} />
    );
    const navElements = getByText(/PCA Skin Pro/i);
    expect(navElements).toBeDefined();
  });

  test('All Header coloumns render', () => {
    const { container } = render(
      <Header imgUrl={''} navMenuItems={NAV_ITEMS} />
    );
    const footerCols = container.querySelectorAll('li');
    expect(footerCols).toHaveLength(NAV_ITEMS.length);
  });
});
