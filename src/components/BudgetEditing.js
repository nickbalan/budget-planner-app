import React from 'react';

const BudgetEditing = (props) => {
  return (
    <div className='budgetItem'>
      <p><span className='monthlyBudget'>Monthly Budget</span></p>
      <span className='monthlyBudget'>
        €{props.budget}</span>

      <div className='budgetItem'>
        <button type='button' className='btn btn-outline-success' onClick={props.handleEditClick}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default BudgetEditing;