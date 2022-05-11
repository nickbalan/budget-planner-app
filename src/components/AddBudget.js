import React from 'react';

/* Sets a form for Budget entries */
const AddBudget = () => {
  return (
    <form>
      <div className='row'>
        <div className='col-sm'>
          <label for='name-budget'>
            Name of budget
          </label>
          <input
            required='required'
            type='text'
            className='form-control'
            id='name-budget'
          ></input>
        </div>
        <div className='col-sm'>
          <label for='enter-amount'>
            Enter amount
          </label>
          <input
            required='required'
            type='number'
            className='form-control'
            id='enter-amount'
          ></input>
        </div>
        <div className='col-sm'>
          <button type='submit' className='btn btn-primary'>
            Save
          </button>
        </div>
      </div>
    </form>
  )
}

export default AddBudget;