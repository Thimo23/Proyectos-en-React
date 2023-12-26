import React, { useState } from 'react';

export const AddTask = ({ addTask }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim() === '') {
      setError('El campo no puede estar vacío');
      return;
    }
    if (inputValue.length <= 3) {
      setError('La tarea debe tener al menos 4 caracteres');
      return;
    }
    if (inputValue.length >= 25) {
      setError('La tarea tiene un máximo de 25 caracteres.');
      return;
    }

    addTask(inputValue);
    setInputValue('');
    setError('');
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
