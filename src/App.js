import React from 'react';
import './App.css';
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
      <div className='bugetTitleBox'>
        <h1 className='bugetText'>Monthly Budgeting Tool</h1>
      </div>
      <div className='container'>
        <div className='row mt-3'>
          <div className='col-sm-4'>
            <Budget />
          </div>
          <div className='col-sm-8'>
            <h2>Monthly cash flow</h2>
            <RemainingBudget />
            <TotalExpenses />
          </div>
        </div>
        <div>
          <h3 className='mt-3'>Monthly expenses list</h3>
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