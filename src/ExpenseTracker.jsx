import React, { useState } from 'react';
import TransactionForm from './TransactionForm';
import TransactionDetails from './TransactionDetails';
const ExpenseTracker = () => {
  const [add, setAdd] = useState(false);
  const [total, setTotal] = useState(0);
  const [transactions, setTransaction] = useState([]);
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  //const [filter, setFilter] = useState('');
  const addTransaction = (trans) => {
    console.log(trans);
    let balance;
    transactions.push(trans);
    if (trans.type === 'Expense') {
      balance = total - Number(trans.amount);
      setExpense(expense + Number(trans.amount));
    } else {
      balance = total + Number(trans.amount);
      setIncome(income + Number(trans.amount));
    }
    setTotal(balance);
    setTransaction(transactions);
  };
  const toggleClose = () => {
    setAdd((add) => !add);
  };
  //   useEffect(() => {
  //     console.log(filter);
  //     if (filter !== '') {
  //       let temp = transactions;
  //       let x = temp.filter((item) => {
  //         if (filter === item.type) return item;
  //       });
  //       console.log(x);
  //       setTransaction(x);
  //     } else setTransaction(transactions);
  //   }, [filter]);
  console.log(transactions);
  return (
    <>
      <div className='flex flex-col bg-gray-200  m-auto p-2 rounded-md w-1/4 mt-2'>
        <div className='m-auto p-1 font-semibold text-lg'>Expense Tracker</div>
        <div className='flex flex-row justify-evenly'>
          <span className='font-serif font-semibold'>Balance: {total}$</span>
        </div>

        <div className='flex flex-row gap-1 justify-around m-4'>
          <div className='border-2 flex flex-col border-black p-2 w-28'>
            <span className='font-semibold text-black '>Expense</span>
            <span className='font-bold text-red-700'>${expense}</span>
          </div>
          <div className='border-2 flex flex-col border-black p-2 w-28'>
            <span className='font-semibold text-black '>Income</span>
            <span className='font-bold text-green-700'>${income}</span>
          </div>
        </div>

        <div className='p-2 flex flex-col gap-1 '>
          <span className='font-serif font-bold'>Transactions</span>
          {/* <button type='button' onClick={() => setFilter('Expense')}>
            Show Expense
          </button>
          <button type='button' onClick={() => setFilter('Income')}>
            Show Incomes
          </button> */}
          {transactions.length !== 0 ? (
            <>
              {transactions.map((item, index) => {
                return <TransactionDetails item={item} key={index} />;
              })}
            </>
          ) : (
            <span>No Transactions</span>
          )}
        </div>
        <button
          type='button'
          className='bg-black text-white m-2 p-1 rounded-md'
          onClick={() => setAdd(!add)}
        >
          {!add ? 'Add' : 'Cancel'}
        </button>
        {add ? (
          <TransactionForm
            toggleClose={toggleClose}
            addTransaction={addTransaction}
          />
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default ExpenseTracker;
