import React, { useState } from 'react';
import { handleFunctions } from '../helpers/handleFunctions';

export const AddTask = ({ addTask }) => {

  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    
    if(handleFunctions.handleError(inputValue)===''){
        addTask(inputValue);
        setInputValue('');
        setError('');    
    }
    else {
      setError(handleFunctions.handleError(inputValue));
    }
    
  };

  return (
    <form onSubmit={onSubmit} className='col-lg-6 col-md-8 col-sm-10 col-12 mx-auto mb-4'>
      <div className='input-group'>
        <input
          className='form-control'
          type='text'
          placeholder='Ingresa una nueva tarea...'
          value={inputValue}
          onChange={onInputChange}
        />
        <button type='submit' className='btn btn-primary'>
          Agregar
        </button>
      </div>
      {error && <p style={{ color: 'red', marginTop: '0.5rem' }}>{error}</p>}
    </form>
  );
};