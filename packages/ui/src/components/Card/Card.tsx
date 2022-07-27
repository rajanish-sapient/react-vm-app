import React from 'react';

export interface CardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return (
    <div className="rounded-br-[48px] bg-white p-12 text-left">{children}</div>
  );
};

Card.displayName = 'Card';
export default Card;
