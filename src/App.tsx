import { PlusCircle } from 'phosphor-react';

import { Header } from './component/Header';
import { Bill } from './component/Bill';
import { Button } from './component/Button';
import { AddBillModal } from './component/AddBillModal';

function App() {
  const bill = {
    avatarUrl: 'https://github.com/EduardoAlphonse.png',
    label: 'Papel toalha',
    value: 9.9,
  };

  return (
    <div className='flex flex-col h-screen relative'>
      <Header title='Contas do mês de Dezembro' />

      <ul className='px-5 flex-1 overflow-y-auto'>
        <Bill data={bill} />
        <Bill data={bill} />
        <Bill data={bill} />
        <Bill data={bill} />
        <Bill data={bill} />
        <Bill data={bill} />
        <Bill data={bill} />
        <Bill data={bill} />
        <Bill data={bill} />
        <Bill data={bill} />
        <Bill data={bill} />
        <Bill data={bill} />
        <Bill data={bill} />
        <Bill data={bill} />
      </ul>

      <footer className='flex items-center gap-4 px-5 py-4 bg-primary-700 text-white font-semibold'>
        <span>Total</span>
        <span>R$ 72,90</span>
        <Button>Ver divisão</Button>
        <Button shrink>
          <PlusCircle className='w-8 h-8' />
        </Button>
      </footer>

      <AddBillModal />
    </div>
  );
}

export default App;
