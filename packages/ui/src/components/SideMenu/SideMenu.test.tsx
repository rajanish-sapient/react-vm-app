import React from 'react';
import { render, screen } from '@testing-library/react';
import { SideMenu } from './SideMenu';

export interface SideMenuItemType {
  title: string;
  path: string;
  icon: React.ReactNode;
}

const svg = <svg></svg>;
const SIDEMENU_ITEMS: Array<SideMenuItemType> = [
  {
    title: 'Invoices',
    path: '/invoices',
    icon: React.createElement('div', {}, svg),
  },
  {
    title: 'Orders',
    path: '/orders',
    icon: React.createElement('div', {}, svg),
  },
];
const SIDEMENU_HEADERS = {
  heading: 'Account',
  subHeading: 'Hi Dr. Patricia Long!',
};

describe('SideMenu', () => {
  test('Side menu Headings', () => {
    const { getByText } = render(
      <SideMenu
        render={(item) => <div>{item.title}</div>}
        items={SIDEMENU_ITEMS}
        heading={SIDEMENU_HEADERS.heading}
        subHeading={SIDEMENU_HEADERS.subHeading}
      />
    );
    const sideMenuHeading = getByText(/Account/i);
    const sideMenuItemName = getByText(/Orders/i);
    expect(sideMenuHeading).toBeDefined();
    expect(sideMenuItemName).toBeDefined();
  });

  test('All Header coloumns render', () => {
    const { container } = render(
      <SideMenu
        render={(item) => <div>{item.title}</div>}
        items={SIDEMENU_ITEMS}
        heading={SIDEMENU_HEADERS.heading}
        subHeading={SIDEMENU_HEADERS.subHeading}
      />
    );

    const SideMenuList = container.querySelectorAll('li');
    expect(SideMenuList).toHaveLength(SIDEMENU_ITEMS.length);
  });
});
