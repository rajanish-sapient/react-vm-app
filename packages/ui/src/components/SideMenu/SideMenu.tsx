import * as React from 'react';
import { SideMenuItem, SideMenuItemType } from '../SideMenuItem';

interface SideMenuProps {
  render(data: SideMenuItemType): React.ReactNode;
  items: Array<SideMenuItemType>;
  heading: string;
  subHeading: string;
}

export function SideMenu({
  render,
  items,
  heading,
  subHeading,
}: SideMenuProps) {
  return (
    <div className="flex flex-col py-7">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold">{heading}</h1>
        <p className="mt-2 font-light">{subHeading}</p>
      </div>
      <ul className="mt-6">
        {items.map((item, index) => {
          return <SideMenuItem key={index} item={item} render={render} />;
        })}
      </ul>
    </div>
  );
}

SideMenu.displayName = 'SideMenu';
