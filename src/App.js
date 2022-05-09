import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import RemainingBudget from './components/RemainingBudget';
import TotalExpenses from './components/TotalExpenses';
import Expenses from './components/Expenses';

const App = () => {
  return (
    <div className='container'>
      <h1 className='mt-3'>Budget Planner</h1>
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
        <h3 className='mt-3'>Expenses</h3>
        <div className='row mt-3'>
          <Expenses />
        </div>
      </div>
    </div>
  );
};

export default App;