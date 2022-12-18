import { FormEvent } from 'react';
import { Button } from './Button';
import { Header } from './Header';

export const AddBillModal = () => {
  function handleSubmitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('form submitted');
  }

  return (
    <div className='flex flex-col absolute w-full h-screen bg-zinc-100'>
      <Header title='Cadastrar compra' />

      <form
        onSubmit={handleSubmitForm}
        onReset={() => {}}
        className='flex flex-col gap-6 flex-1 overflow-y-auto px-5 py-6'
      >
        <label>
          <span className='block mb-3 font-semibold'>Descrição</span>
          <input
            type='text'
            placeholder='O que você comprou?'
            className='w-full bg-white px-5 py-4 rounded'
          />
        </label>

        <label>
          <span className='block mb-3 font-semibold'>Valor</span>
          <input
            type='number'
            placeholder='O que você comprou?'
            className='w-full bg-white px-5 py-4 rounded'
          />
        </label>

        <footer className='flex gap-6'>
          <Button
            type='reset'
            appearance='secondary'
          >
            Cancelar
          </Button>
          <Button>Concluir</Button>
        </footer>
      </form>
    </div>
  );
};
