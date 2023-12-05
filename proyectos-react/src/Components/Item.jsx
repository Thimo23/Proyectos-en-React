import React from 'react'

export const Item = ({
  item,
  editingTaskId,
  editedTaskText,
  handleEdit,
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
          <div>
              {item.title}
              <button onClick={() => handleDelete(item.id)}>Borrar tarea</button>
              <button onClick={() => handleEdit(item.id)}>Editar tarea</button>
          </div>
      )}
    </li>
  )
}
