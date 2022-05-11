import React from 'react';
import ExpenseItem from './ExpenseItem';

const Expenses = () => {
  const expenses = [
    { id: 123456789, name: 'Online Shoppping', cost: 500 },
    { id: 123456790, name: 'Holiday', cost: 1500 }
  ];

  return (
    <ul className='list-group'>
      {expenses.map((expense) => (
        <ExpenseItem
          id={expense.id}
          name={expense.name} 
          cost={expense.cost} 
        />
      ))}
    </ul>
  );
};

export default Expenses;