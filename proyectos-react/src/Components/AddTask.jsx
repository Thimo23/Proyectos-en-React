import React from 'react'
import { useState } from 'react'

export const AddTask = ({addTask}) => {
    const [inputValue, setInputValue] = useState('')
    const [error, setError] = useState('')

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();

        if(inputValue.trim() === ''){
            setError('El campo no puede estar vacio');
            return;
        }
        if(inputValue.length<=3){
            setError('La tarea debe tener minimo mas de 3 caracteres');
            return;
        }
        addTask(inputValue);
        setInputValue('');
        setError('');
    }
  return (
    <form onSubmit={onSubmit} className='col-11 mx-auto mb-4'>
        <input 
        className='form-control'
        type='text'
        placeholder='Ingresa una nueva tarea...'
        value={inputValue}
        onChange={onInputChange}
        />
        {error && <p style={{color:'red'}}>{error}</p>}
    </form>
  )
}
