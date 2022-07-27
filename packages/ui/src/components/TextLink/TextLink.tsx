import React from 'react';

export interface TextLinkProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  href: string;
  title: string;
}

export const TextLink = ({
  variant = 'tertiary',
  href = '#',
  title,
}: TextLinkProps) => {
  return (
    <a
      className={`inline-block rounded-full px-4 py-2 ${
        variant === 'primary' || variant === 'secondary'
          ? 'text-brand-primary hover:text-brand-accent-default text-base font-bold'
          : 'text-brand-accent-default hover:text-brand-primary text-sm font-normal'
      }  focus:bg-brand-primary focus:text-brand-secondary`}
      href={href}
      title={title}
    >
      {title}
    </a>
  );
};

TextLink.displayName = 'TextLink';
