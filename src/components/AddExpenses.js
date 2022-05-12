import React from 'react';

/* Sets a form for the Budget entries */
const AddExpenses = () => {
  return (
    <form>
      <div className='row'>
        <div className='col-sm col-lg-4'>
          <label htmlFor='name'>
            Name
          </label>
          <input
            required='required'
            type='text'
            className='form-control'
            id='name'
          ></input>
        </div>
        <div className='col-sm col-lg-4'>
          <label htmlFor='cost'>
            Enter amount
          </label>
          <input
            required='required'
            type='number'
            className='form-control'
            id='cost'
          ></input>
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-sm'>
          <button type='submit' className='btn btn-primary'>
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenses;