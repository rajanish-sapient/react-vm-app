import React from 'react';
import { render, screen } from '@testing-library/react';
import { AppProtectedLayout } from './AppProtectedLayout';

describe('AppProtectedLayout ', () => {
  let sideMenu: any;
  let Content: any;
  beforeEach(() => {
    sideMenu = React.createElement(
      'div',
      {},
      <div className="flex h-screen flex-col bg-gray-100 py-7 pl-8">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold">Account</h1>
          <p className="mt-2 font-light">User name</p>
        </div>
        <ul className="mt-6">
          <li className="mb-3 text-sm font-bold">Orders</li>
          <li className="mb-3 text-sm font-bold">Invoices</li>
        </ul>
      </div>
    );
    Content = React.createElement('div', {}, <>Orders Table</>);
  });

  test('should render SideMenu Heading', () => {
    const { getByText } = render(
      <AppProtectedLayout content={Content} sideMenu={sideMenu} />
    );
    const headerContent = getByText(/Account/i);
    expect(headerContent).toBeDefined();
  });

  test('should render SideMenu no of item', () => {
    const { container } = render(
      <AppProtectedLayout content={Content} sideMenu={sideMenu} />
    );
    const SideNavItem = container.querySelectorAll('li');
    expect(SideNavItem).toHaveLength(2);
  });

  test('should render Content with order table', () => {
    const { getByText } = render(
      <AppProtectedLayout content={Content} sideMenu={sideMenu} />
    );
    const externalComponentContent = getByText(/Orders Table/i);
    expect(externalComponentContent).toBeDefined();
  });
});
