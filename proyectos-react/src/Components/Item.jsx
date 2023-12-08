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
  setCompletedId,
}) => {
  const [completed, setCompleted] = useState(item.completed || false);

  return (
    <li key={item.id}>
      {item.id === editingTaskId ? (
        <div>
          <input
            type='text'
            value={editedTaskText}
            onChange={(e) => setEditedTaskText(e.target.value)}
          />
          <button onClick={handleSaveEdit}>Guardar</button>
        </div>
      ) : (
        <div className={`task ${completed ? 'completed' : ''}`}>
          <label>
            <input
              type='checkbox'
              checked={completed}
              onChange={() => {
                setCompleted(!completed);
                handleComplete(setCompleted, item.id, setCompletedId);
              }}
            />
            {item.title}
          </label>
          <button onClick={() => handleDelete(item.id)}>Borrar tarea</button>
          <button onClick={() => handleEdit(item.id)}>Editar tarea</button>
        </div>
      )}
    </li>
  );
};
