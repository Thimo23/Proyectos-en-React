import React, { useState } from 'react';

export const Item = ({
  item,
  editingTaskId,
  editedTaskText,
  handleEdit,
  handleComplete,  // No es necesario pasar setCompletedId y setCompleted aquí
  handleSaveEdit,
  handleDelete,
  setEditedTaskText,
}) => {
  

  return (
    <li className='list-group-item d-flex justify-content-between align-items-center' key={item.id}>
      <div className='col-8'>
        {item.id === editingTaskId ? (
          <div>
            <input
              className='form-control'
              type='text'
              value={editedTaskText}
              onChange={(e) => setEditedTaskText(e.target.value)}
            />
            <button onClick={handleSaveEdit} className='btn btn-primary'>Guardar</button>
          </div>
        ) : (
          <div className={`task ${item.completado ? 'completed' : ''}`}>
            <label>
              <input
                className='form-check-input rounded-4 custom-checkbox'
                type='checkbox'
                // maneja handlecomplete aca
                checked={item.completado}
                onChange={() => handleComplete(item.id)}
              />
              {item.title}
            </label>
          </div>
        )}
      </div>

      <div className='col-4 d-flex justify-content-end'>
        <button onClick={() => handleEdit(item.id)} className='btn btn-warning rounded-circle'><i className="bi bi-pencil-square"></i></button>
        <button onClick={() => handleDelete(item.id)} className='btn btn-danger rounded-circle'><i className="bi bi-x-circle"></i></button>
      </div>
    </li>
  );
};
