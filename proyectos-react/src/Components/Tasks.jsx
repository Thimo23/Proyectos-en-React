import React, { useEffect, useState } from 'react';
import { AddTask } from './AddTask';
import { Item } from './Item';
import { handleFunctions } from '../helpers/handleFunctions';

export const Tasks = () => {
  const [array, setArray] = useState(handleFunctions.getDataFromLocalStorage());
  const [taskFilter, setTaskFilter] = useState('all');
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTaskText, setEditedTaskText] = useState('');

  useEffect(() => {
    handleFunctions.setDataToLocalStorage(array);
  }, [array]);

  const selectedList = handleFunctions.getFilteredTask(taskFilter, array);

  const { value: numT} = handleFunctions.numTareas(array);
  const { value: numTp, className: numtpClass } = handleFunctions.numTareasPendientes(array);

  return (
    <>
      <div className='row border rounded-3 mt-4 mb-3 custom'>
        <div className='col-12'>
          <h1>Lista de tareas</h1>
          <div className='row mb-3'>
            <h2>N° de tareas: {numT}</h2>
            <h2>
              N° de tareas pendientes:<span className={numtpClass}>{numTp}</span>
            </h2>
          </div>

          <div className='row mb-3'>
            <button className='col-lg-4 col-md-4 btn btn-sm text-truncate' onClick={() => setTaskFilter('all')}>
              Todas
            </button>
            <button className='col-lg-4 col-md-4  btn btn-sm text-truncate' onClick={() => setTaskFilter('pending')}>
              Pendientes
            </button>
            <button className='col-lg-4 col-md-4 btn btn-sm text-truncate' onClick={() => setTaskFilter('completed')}>
              Completadas
            </button>
          </div>

          <AddTask addTask={(val) => handleFunctions.onAddTask(array, val, setArray)} />
          <div className='row'>
          <button className='col-lg-4 col-md-6 col-sm-8 col-11 btn btn-primary mx-auto mb-3 text-truncate' onClick={() => handleFunctions.clearCompletedTasks(array, setArray)}>
  Eliminar tareas completadas
</button>
          </div>
          <ul className='list-group mb-2 custom-ul'>
            {selectedList.map((item) => (
              <Item
                key={item.id}
                item={item}
                editingTaskId={editingTaskId}
                editedTaskText={editedTaskText}
                handleEdit={() => handleFunctions.handleEdit(array, item.id, setEditingTaskId, setEditedTaskText)}
                handleSaveEdit={() => handleFunctions.handleSaveEdit(array, editingTaskId, editedTaskText, setArray, setEditingTaskId, setEditedTaskText)}
                handleDelete={() => handleFunctions.handleDelete(array, item.id, setArray)}
                handleComplete={() => handleFunctions.handleComplete(array, item.id, setArray)}
                setEditedTaskText={setEditedTaskText}
                taskFilter={taskFilter}
                handleError={handleFunctions.handleError}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};