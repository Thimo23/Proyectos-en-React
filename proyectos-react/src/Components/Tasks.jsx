import React, { useState } from 'react';
import { AddTask } from './AddTask';
import { Item } from './Item';
import { handleFunctions } from '../helpers/handleFunctions';

export const Tasks = () => {
  const [array, setArray] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTaskText, setEditedTaskText] = useState('');

  return (
    <>
      <h1>Lista de tareas</h1>
      <AddTask addTask={(val) => handleFunctions.onAddTask(array, val, setArray)} />
      <ol>
        {array.map(item => (
          <Item
            key={item.id}
            item={item}
            editingTaskId={editingTaskId}
            editedTaskText={editedTaskText}
            handleEdit={() => handleFunctions.handleEdit(array, item.id, setEditingTaskId, setEditedTaskText)}
            handleSaveEdit={() => handleFunctions.handleSaveEdit(array, editingTaskId, editedTaskText, setArray, setEditingTaskId, setEditedTaskText)}
            handleDelete={() => handleFunctions.handleDelete(array, item.id, setArray)}
            setEditedTaskText={setEditedTaskText}
          />
        ))}
      </ol>
    </>
  );
};
