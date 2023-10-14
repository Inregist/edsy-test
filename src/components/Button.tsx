import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = ButtonHTMLAttributes<{}> & {
  variant?: 'primary' | 'secondary';
};

const variantClasses = {
  primary: 'border border-blue-700 bg-blue-700 text-white',
  secondary: 'border border-gray-500 text-gray-500',
};

export const Button = (p?: ButtonProps) => {
  const { variant = 'primary', className, ...rest } = p ?? {};

  return (
    <button
      {...rest}
      className={twMerge(
        `rounded-full px-4 py-1`,
        'disabled:border-gray-600/20 disabled:bg-gray-600/20 disabled:text-gray-400',
        variantClasses[variant],
        className
      )}
    />
  );
};
