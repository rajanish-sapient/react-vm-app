import React from 'react';

export interface CardHeaderProps {
  children: React.ReactNode;
}

const CardHeader = ({ children }: CardHeaderProps) => {
  return (
    <h1 className="text-brand-primary mb-10 text-4xl font-black leading-10">
      {children}
    </h1>
  );
};

CardHeader.displayName = 'CardHeader';

export default CardHeader;
