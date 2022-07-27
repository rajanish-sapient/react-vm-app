import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppProtectedLayout } from './AppProtectedLayout';
const SideMenu = () => {
  return (
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
};

const Orders = () => {
  return (
    <main className="container h-screen">
      <div className="flex grow">Orders/Invoice Contents </div>
    </main>
  );
};

export default {
  title: 'AppProtectedLayout',

  component: AppProtectedLayout,
} as ComponentMeta<typeof AppProtectedLayout>;

const Template: ComponentStory<typeof AppProtectedLayout> = (args) => (
  <AppProtectedLayout {...args}>Sign In</AppProtectedLayout>
);
export const FirstPage = Template.bind({});

FirstPage.args = {
  sideMenu: <SideMenu />,
  content: <Orders />,
};
