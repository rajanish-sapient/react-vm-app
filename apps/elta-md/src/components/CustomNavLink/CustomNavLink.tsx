import React from 'react';
import { NavLink } from 'react-router-dom';
import type { SideMenuItemType } from 'ui';

interface CustomNavLinkProps {
  linkItem: SideMenuItemType;
}

export const CustomNavLink = ({ linkItem }: CustomNavLinkProps) => {
  const { title, path, icon } = linkItem;
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive ? 'text-brand-accent-default' : ''
      }
    >
      <div className="flex cursor-pointer gap-3">
        {icon}
        <span>{title}</span>
      </div>
    </NavLink>
  );
};
