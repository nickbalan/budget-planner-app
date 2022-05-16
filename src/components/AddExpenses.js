import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaEuroSign } from 'react-icons/fa';
import { GoDiffAdded } from 'react-icons/go';
import { v4 as uuidv4 } from 'uuid';

/* Sets a form for the Budget entries */
const AddExpenses = () => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    })

    setName('');
    setCost('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='row'>
        <div className='col-sm col-lg-4'>
          <label htmlFor='name'>
            Item
          </label>
          <span className="input-group-text"> <GoDiffAdded size='1.5em' />
            <input
              required='required'
              type='text'
              className='form-control'
              id='name'
              value={name}
              onChange={(event) => setName(event.target.value)}
            ></input>
          </span>
        </div>
        <div className='col-sm col-lg-4'>
          <label htmlFor='cost'>
            Cost
          </label>
          <span className="input-group-text"><FaEuroSign size='1.5em' />
            <input
              required='required'
              type='number'
              className='form-control input-group-prepend'
              id='cost'
              value={cost}
              onChange={(event) => setCost(event.target.value)}
            ></input>
          </span>
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