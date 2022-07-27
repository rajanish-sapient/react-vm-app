import * as React from 'react';

export interface AppProtectedLayoutProps {
  content: React.ReactNode;
  sideMenu: React.ReactNode;
}

export function AppProtectedLayout({
  sideMenu,
  content,
}: AppProtectedLayoutProps) {
  return (
    <div className="my-12 flex flex-col	items-start gap-8 lg:flex-row">
      <aside className="w-full lg:w-1/5">{sideMenu}</aside>
      <main className="w-full lg:w-4/5">{content}</main>
    </div>
  );
}

AppProtectedLayout.displayName = 'AppProtectedLayout';
