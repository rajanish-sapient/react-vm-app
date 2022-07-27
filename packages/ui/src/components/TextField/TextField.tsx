import React from 'react';
export interface TextFieldProps {
  type?: string;
  value?: string;
  required?: boolean;
  name: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  htmlFor: string;
}

export const TextField = ({
  type = 'text',
  required = false,
  value = '',
  placeholder,
  name,
  onChange = () => undefined,
  label,
  htmlFor,
}: TextFieldProps) => {
  return (
    <>
      <label
        htmlFor={htmlFor}
        className={
          !label
            ? `sr-only`
            : `mb-3 block text-xs  font-normal text-neutral-600`
        }
      >
        {label ? label : null}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={(event) => onChange(event)}
        className="w-full rounded-full border border-neutral-300 px-6 py-3 text-neutral-800 outline-neutral-800 placeholder:font-light placeholder:text-stone-400 focus:outline"
        value={value}
        required={required}
        id={htmlFor}
      />
    </>
  );
};

TextField.displayName = 'TextField';
