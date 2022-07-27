import React from 'react';
import { render } from '@testing-library/react';
import { CustomNavLink } from './CustomNavLink';
import { BrowserRouter } from 'react-router-dom';

const svg = <svg></svg>;
const SIDEMENU_ITEMS = {
  title: 'Invoices',
  path: '/invoices',
  icon: React.createElement('div', {}, svg),
};

describe('CustomNavLink', () => {
  test('CustomNavlink should render SideMenu items', () => {
    const { getByText } = render(
      <BrowserRouter>
        <CustomNavLink linkItem={SIDEMENU_ITEMS} />
      </BrowserRouter>
    );
    const sideMenuItems = getByText('Invoices');
    expect(sideMenuItems).toBeInTheDocument();
  });
});
