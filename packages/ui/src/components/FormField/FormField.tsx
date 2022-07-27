import React from 'react';
export interface FormFieldProps {
  children: React.ReactNode;
  className?: string;
}

export const FormField = ({ className = '', children }: FormFieldProps) => {
  return <div className={className}>{children}</div>;
};

FormField.displayName = 'FormField';
