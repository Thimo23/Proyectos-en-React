import React from 'react'
import { useState } from 'react'

export const AddTask = ({addTask}) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        addTask(inputValue);
        setInputValue('');
    }
  return (
    <form onSubmit={onSubmit}>
        <input 
        type='text'
        placeholder='Ingresa una nueva tarea...'
        value={inputValue}
        onChange={onInputChange}
        />
    </form>
  )
}
