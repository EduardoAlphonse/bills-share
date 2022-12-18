import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle } from 'phosphor-react';

import { Header } from '../component/Header';
import { Bill } from '../component/Bill';
import { Button } from '../component/Button';
import { AddBillModal } from '../component/AddBillModal';

export const Home = () => {
  const [showAddBillModal, setshowAddBillModal] = useState(false);

  const date = new Date();

  let month = Intl.DateTimeFormat('pt-BR', {
    month: 'long',
  }).format(date);

  month = month[0].toUpperCase() + month.slice(1);

  function handleShowModal() {
    setshowAddBillModal(true);
  }

  function handleCloseModal() {
    setshowAddBillModal(false);
  }

  const bill = {
    avatarUrl: 'https://github.com/EduardoAlphonse.png',
    label: 'Papel toalha',
    value: 9.9,
  };

  return (
    <div className='flex flex-col h-screen relative overflow-hidden'>
      <Header title={`Contas do mês de ${month}`} />

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
        <span className='relative pr-4 after:content-["\2022"] after:absolute after:right-[-2px]'>
          TOTAL
        </span>
        <span className='text-xl'>R$ 72,90</span>
        <Link
          to='divisao-de-contas'
          className='flex-1'
        >
          <Button>Divisão de contas</Button>
        </Link>

        <Button
          shrink
          onClick={handleShowModal}
        >
          <PlusCircle className='w-8 h-8' />
        </Button>
      </footer>

      <AddBillModal
        show={showAddBillModal}
        closeModal={handleCloseModal}
      />
    </div>
  );
};
