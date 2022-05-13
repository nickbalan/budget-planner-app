import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import RemainingBudget from './components/RemainingBudget';
import TotalExpenses from './components/TotalExpenses';
import ExpenseList from './components/ExpenseList';
import AddExpenses from './components/AddExpenses';
import { AppProvider } from './context/AppContext';

const App = () => {
  return (
    <AppProvider>
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
          <div className='row'>
            <div className='col-sm'>
              <ExpenseList />
            </div>
          </div>
        </div>
        <h3 className='mt-3'>Add Expenses</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <AddExpenses />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;