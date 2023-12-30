import React, { useState } from 'react';

export const Item = ({
  item,
  editingTaskId,
  editedTaskText,
  handleEdit,
  handleComplete,
  handleSaveEdit,
  handleDelete,
  setEditedTaskText,
  taskFilter,
  handleError
}) => {
  const [editError, setEditError] = useState('');

  const handleSaveEditWithValidation = () => {
    const error = handleError(editedTaskText);

    if (error) {
      setEditError(error);
    } else {
      setEditError('');
      handleSaveEdit(); // Llamar a handleSaveEdit solo si no hay errores
    }
  };
  return (
    <li className='list-group-item d-sm-flex justify-content-between' key={item.id}>
      {item.id === editingTaskId ? (
        <div className='col-lg-8 col-md-6'>
          <div className="input-group d-flex">
            <input
              className='form-control'
              type='text'
              value={editedTaskText}
              onChange={(e) => setEditedTaskText(e.target.value)}
            />
            <button onClick={handleSaveEditWithValidation} className='btn btn-primary'>
              Guardar
            </button>
            {editError && <span style={{ color: 'red', marginTop: '0.1rem', marginLeft:'0.1rem' }}>{editError}</span>}
          </div>
        </div>
      ) : (
        <label className='col-lg-8 col-md-6 text-truncate p-1'>
          <input
            className='form-check-input me-1 rounded-4 custom-checkbox'
            type='checkbox'
            checked={item.completado}
            onChange={() => handleComplete(item.id)}
          />
          {item.title}
        </label>
      )}

      {taskFilter === 'completed' || item.completado ? (
        <div className='col-lg-4 col-md-6 d-md-flex justify-content-end'>
          <button
            onClick={() => handleDelete(item.id)}
            className='btn btn-danger rounded-5'
          >
            <i className='bi bi-x-circle'></i>
          </button>
        </div>
      ) : (
        <div className='col-lg-4 col-md-6 d-md-flex justify-content-end'>
          <button
            onClick={() => handleEdit(item.id)}
            className='btn btn-warning rounded-5'
          >
            <i className='bi bi-pencil-square'></i>
          </button>
          <button
            onClick={() => handleDelete(item.id)}
            className='btn btn-danger rounded-5'
          >
            <i className='bi bi-x-circle'></i>
          </button>
        </div>
      )}
    </li>
  );
};
