import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  shrink?: boolean;
  appearance?: 'primary' | 'secondary';
}

export const Button = ({
  children,
  shrink = false,
  appearance = 'primary',
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center h-14 font-semibold rounded
      ${shrink ? 'w-14' : 'flex-1 px-5'}
      ${
        appearance === 'primary'
          ? 'text-white bg-zinc-800 hover:bg-zinc-700'
          : 'text-zinc-800 bg-transparent border-2 border-zinc-800'
      }
      `}
      {...rest}
    >
      {children}
    </button>
  );
};
