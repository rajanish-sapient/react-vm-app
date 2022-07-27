import * as React from 'react';

export interface AppLayoutProps {
  header: React.ReactNode;
  footer: React.ReactNode;
  content: React.ReactElement;
}

export function AppLayout({ header, footer, content }: AppLayoutProps) {
  return (
    <div className="flex flex-col bg-gray-100">
      <div className="sticky top-0 z-10">{header}</div>
      <div className="container py-5 lg:py-12">{content}</div>
      <div className="w-full">{footer}</div>
    </div>
  );
}

AppLayout.displayName = 'AppLayout';
