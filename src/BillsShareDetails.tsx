import { Header } from './component/Header';
import { Bill } from './component/Bill';
import { Button } from './component/Button';

export const BillsShareDetails = () => {
  const bill = {
    avatarUrl: 'https://github.com/EduardoAlphonse.png',
    label: 'Papel toalha',
    value: 9.9,
  };

  return (
    <div className='flex flex-col h-screen'>
      <Header title='Divisão de contas' />

      <div className='flex-1 overflow-y-auto'>
        <section className='flex flex-col gap-2 px-5 py-6 border-b-primary-700 border-b'>
          <h1 className='font-semibold text-lg'>Total de compras por pessoa</h1>
          <ul className='flex-1 overflow-y-auto'>
            <Bill data={bill} />
            <Bill data={bill} />
            <Bill data={bill} />
          </ul>
        </section>

        <section className='flex flex-col gap-2 px-5 py-5 border-b-primary-700 border-b'>
          <h1 className='font-semibold text-lg'>Divisão por pessoa</h1>
          <ul className='flex-1 overflow-y-auto'>
            <Bill data={bill} />
            <Bill data={bill} />
            <Bill data={bill} />
          </ul>
        </section>
      </div>

      <footer className='flex items-center gap-4 px-5 py-4  text-white font-semibold'>
        <Button>Voltar</Button>
      </footer>
    </div>
  );
};
