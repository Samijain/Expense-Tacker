import React from 'react';

const TransactionDetails = ({ item }) => {
  return (
    <>
      <div className='flex flex-row   px-1 border-black border-e-8 border-e-yellow-950 border-opacity-25 border-2 rounded-lg py-3 w-[100%]'>
        <div className='flex flex-row justify-between flex-1'>
          <p>{item.description}</p>
          <p>${item.amount} </p>
        </div>

        {item.type === 'Expense' ? (
          <p className=' border-x-red-500 border-4'></p>
        ) : (
          <p className='border-x-green-500 border-4'></p>
        )}
      </div>
    </>
  );
};

export default TransactionDetails;
