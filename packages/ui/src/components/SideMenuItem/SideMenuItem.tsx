import * as React from 'react';
export interface SideMenuItemType {
  title: string;
  path: string;
  icon: React.ReactNode;
}
export interface SideMenuItemProps {
  item: SideMenuItemType;
  render(item: SideMenuItemType): React.ReactNode;
}

export const SideMenuItem = ({ item, render }: SideMenuItemProps) => {
  return <li className="mb-3 text-sm font-bold">{render(item)}</li>;
};
SideMenuItem.displayName = 'SideMenuItem';
