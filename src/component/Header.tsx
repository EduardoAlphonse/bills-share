interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className='flex justify-center items-center h-16 px-5 bg-primary-700 text-white font-semibold text-lg'>
      {title}
    </header>
  );
};
