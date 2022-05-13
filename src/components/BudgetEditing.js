import React from 'react';

const BudgetEditing = (props) => {
  return (
    <>
      <span>Budget: €{props.budget}</span>
      <button type='button' className='btn btn-primary' onClick={props.handleEditClick}>
        Edit
      </button>
    </>
  );
};

export default BudgetEditing;