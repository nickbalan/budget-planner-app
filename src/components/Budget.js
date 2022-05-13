import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import SaveNewBudget from './SaveNewBudget';
import BudgetEditing from './BudgetEditing';


const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);
  
  /* Edits a new budget value */
  const handleEditClick = () => {
    setIsEditing(true);
  };
  
  /* Saves a new budget value */
  const handleSaveClick = (value) => {
    dispatch({
      type: 'SET_BUDGET',
      payload: value,
    });
    setIsEditing(false);
  };


  return (
    <div className='alert alert-secondary p-3 d-flex align-items-center justify-content-between'>
      {isEditing ? (
				<SaveNewBudget handleSaveClick={handleSaveClick} budget={budget} />
			) : (
				<BudgetEditing handleEditClick={handleEditClick} budget={budget} />
			)}
    </div>
  )
};

export default Budget;