import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SideMenu } from './SideMenu';

const svg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
    />
  </svg>
);
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

const CustomNavLink = ({ NavLink }: any) => {
  return (
    <div className="flex">
      <div>{NavLink.icon}</div>
      <div>Link</div>
    </div>
  );
};
export interface SideMenuItemType {
  title: string;
  path: string;
  icon: React.ReactNode;
}

export default {
  title: 'SideMenu',

  component: SideMenu,
} as ComponentMeta<typeof SideMenu>;

const Template: ComponentStory<typeof SideMenu> = (args) => (
  <SideMenu
    render={(MenuData) => <CustomNavLink NavLink={MenuData} />}
    items={SIDEMENU_ITEMS}
    heading={SIDEMENU_HEADERS.heading}
    subHeading={SIDEMENU_HEADERS.subHeading}
  ></SideMenu>
);
export const FirstPage = Template.bind({});
