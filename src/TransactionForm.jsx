import React, { useState } from 'react';

const TransactionForm = ({ toggleClose, addTransaction }) => {
  const [data, setTrans] = useState({ amount: 0, description: '' });

  console.log(data);
  const collectFormData = () => {
    console.log(data);
    addTransaction(data);
    toggleClose(true);
  };
  return (
    <>
      <div className='flex flex-col gap-1 bg-slate-50 p-7 border-2 border-black w-56 m-auto mt-2'>
        <input
          type='text'
          required
          placeholder='Description'
          className='w-[100%] border-black rounded-sm border-2 border-opacity-30 p-0.5'
          onChange={(e) => setTrans({ ...data, description: e.target.value })}
        />
        <input
          type='number'
          required
          placeholder='Amount'
          className='w-[100%] border-black rounded-sm border-2 border-opacity-30 p-0.5'
          onChange={(e) => setTrans({ ...data, amount: e.target.value })}
        />

        <div className='flex flex-row justify-between'>
          <input
            type='radio'
            id='Expense'
            value='Expense'
            checked
            onClick={(e) => setTrans({ ...data, type: e.target.value })}
          />
          <label htmlFor='Expense'>Expense</label>

          <input
            type='radio'
            id='Income'
            value='Income'
            onClick={(e) => setTrans({ ...data, type: e.target.value })}
          />
          <label htmlFor='Income'>Income</label>
        </div>
        <div className='m-auto bg-black p-1 rounded-md text-sm text-white'>
          <button
            type='button'
            disabled={data.amount === 0}
            onClick={() => collectFormData()}
          >
            Add Transaction
          </button>
        </div>
      </div>
    </>
  );
};

export default TransactionForm;
