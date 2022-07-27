import * as React from 'react';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  type?: 'button' | 'submit' | 'reset';
  size?: 'sm' | 'lg';
  wide?: boolean;
  disabled?: true | false;
  children: React.ReactNode;
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}

export const Button = ({
  variant = 'primary',
  type = 'button',
  size = 'lg',
  wide = false,
  disabled = false,
  children,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`
                border-2 ${wide ? 'px-20' : null}
                ${size === 'sm' ? 'px-2 py-1' : 'px-6 py-2.5'}
                 ${
                   variant === 'secondary'
                     ? 'bg-brand-secondary hover:bg-brand-primary text-brand-primary hover:text-brand-secondary border-brand-primary hover:border-brand-primary disabled:bg-brand-secondary disabled:text-brand-accent-gray-light disabled:border-brand-accent-gray-light'
                     : variant === 'tertiary'
                     ? 'bg-brand-accent-gray-light border-brand-accent-gray-light text-brand-primary hover:bg-brand-accent-gray-light hover:border-brand-accent-gray-light hover:text-brand-accent-default disabled:bg-brand-accent-gray-light disabled:text-brand-accent-gray-dark'
                     : 'bg-brand-primary border-brand-primary hover:bg-brand-accent-default hover:border-brand-accent-default disabled:bg-brand-accent-gray-dark disabled:text-brand-accent-gray-light disabled:border-brand-accent-gray-dark text-white'
                 }
                rounded-md font-semibold
                disabled:cursor-not-allowed`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.displayName = 'Button';
