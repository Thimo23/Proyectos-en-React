import React from 'react'

export const Item = ({
  item,
  editingTaskId,
  editedTaskText,
  completed,
  handleEdit,
  handleComplete,
  handleSaveEdit,
  handleDelete,
  setEditedTaskText
}) => {
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
            <input type='checkbox' checked={completed} onChange={handleComplete}/>
            {item.title}
            </label>
             
              <button onClick={() => handleDelete(item.id)}>Borrar tarea</button>
              <button onClick={() => handleEdit(item.id)}>Editar tarea</button>
          </div>
      )}
    </li>
  )
}
