import * as React from 'react';
import Logo from '../Logo/Logo';
import NavMenu from '../Navigation/NavMenu';
export interface HeaderProps {
  imgUrl: string;
  navMenuItems: Array<MenuItemType>;
}

export interface MenuItemType {
  label: string;
  path: string;
  target?: string;
  dropdownItems: Array<{
    label?: string;
    path?: string;
    target?: string;
  }>;
}

export const Header = ({ imgUrl, navMenuItems }: HeaderProps) => {
  return (
    <header
      id="site-header"
      className="z-10 bg-white shadow-xl shadow-gray-300"
      role="header"
    >
      <div className="container relative flex items-center justify-between lg:justify-start">
        <Logo imageUrl={imgUrl} />
        <NavMenu menuItems={navMenuItems} />
      </div>
    </header>
  );
};

Header.displayName = 'Header';
