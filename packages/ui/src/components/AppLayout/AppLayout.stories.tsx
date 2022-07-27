import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppLayout } from './AppLayout';

export default {
  title: 'AppLayout',

  component: AppLayout,
} as ComponentMeta<typeof AppLayout>;

const Template: ComponentStory<typeof AppLayout> = (args) => (
  <AppLayout {...args}>Sign In</AppLayout>
);

export const FirstPage = Template.bind({});
const Header = () => {
  return (
    <header className=" z-10 bg-white">
      <div className="h-11 px-5 shadow-xl shadow-gray-300">
        header component
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="elative font-bg-white flex h-[200px] items-center justify-between px-5 text-white">
        Footer component
      </div>
    </footer>
  );
};
const Home = () => {
  return (
    <main className="container h-screen">
      <div className="flex grow"> Content </div>
    </main>
  );
};

FirstPage.args = {
  header: <Header />,
  footer: <Footer />,
  content: <Home />,
};
