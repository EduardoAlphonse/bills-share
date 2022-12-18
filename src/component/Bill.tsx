interface BillData {
  avatarUrl: string;
  label: string;
  value: number;
}

interface BillProps {
  data: BillData;
}

export const Bill = ({ data: { avatarUrl, label, value } }: BillProps) => {
  const formattedValue = value.toFixed(2).replace('.', ',');

  return (
    <li className='border-zinc-300 border-b last:border-b-0'>
      <div className='flex items-center gap-4 py-2.5'>
        <img
          src={avatarUrl}
          alt='Person name'
          className='w-10 h-10 rounded-[20px]'
        />
        <span className='flex-1'>{label}</span>
        <span className='font-semibold'>{formattedValue}</span>
      </div>
    </li>
  );
};
