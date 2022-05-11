import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import RemainingBudget from './components/RemainingBudget';
import TotalExpenses from './components/TotalExpenses';
import Expenses from './components/Expenses';
import AddBudget from './components/AddBudget';

const App = () => {
  return (
    <div className='container'>
      <h1 className='mt-3'>Dashboard</h1>
      <div className='row mt-3'>
        <div className='col-sm'>
          <Budget />
        </div>
        <div className='col-sm'>
          <RemainingBudget />
        </div>
        <div className='col-sm'>
          <TotalExpenses />
        </div>
      </div>
      <div>
        <h3 className='mt-3'>Budgets</h3>
        <div className='row mt-3'>
          <Expenses />
        </div>
      </div>
      <h3 className='mt-3'>Add Budget</h3>
      <div className='mt-3'>
        <div className='col-sm'>
          <AddBudget />
        </div>
      </div>
    </div>
  );
};

export default App;