export const handleFunctions = {
  handleDelete: (array, taskId, setArray) => {
    const updatedTasks = array.filter(task => task.id !== taskId);
    setArray(updatedTasks);
  },

  handleEdit: (array, taskId, setEditingTaskId, setEditedTaskText) => {
    setEditingTaskId(taskId);
    setEditedTaskText(array.find(task => task.id === taskId).title);
  },

  handleSaveEdit: (array, editingTaskId, editedTaskText, setArray, setEditingTaskId, setEditedTaskText) => {
    const updatedTasks = array.map(item => (item.id === editingTaskId ? { ...item, title: editedTaskText } : item));
    setArray(updatedTasks);
    setEditingTaskId(null);
    setEditedTaskText('');
  },

  handleComplete: (array, taskId, setArray) => {
    const updatedTasks = array.map(task =>
      task.id === taskId ? { ...task, completado: !task.completado } : task
    );
    setArray(updatedTasks);
  },

  handleError: (inputValue) => {

    if (inputValue.trim() === '') {
      return('El campo no puede estar vacío');
    } else if (inputValue.length <= 3) {
      return('La tarea debe tener al menos 4 caracteres');
    } else if (inputValue.length >= 25) {
      return('La tarea tiene un máximo de 25 caracteres.');
    } else {
      return('');
    }
  },

  onAddTask: (array, val, setArray) => {
    if (val.trim() === '') return;
    const data = {
      title: val.trim(),
      id: array.length + 1,
      completado:false
    };
    setArray([...array, data]);
  },

  numTareas: (array) => {
    const numTareas = array.length;
    return {
      value: numTareas,
      className: numTareas > 0 ? 'rojo' : '',
    };
  },

  numTareasPendientes: (array) => {
    const numTareasPendientes = array.filter(item => !item.completado).length;
    return {
      value: numTareasPendientes,
      className: numTareasPendientes > 0 ? 'rojo' : '',
    };
  },
  handleCompleted:(array) => {
    return array.filter(item=> item.completado);
  },
  
  getFilteredTask:(taskFilter,array) => {
    switch(taskFilter) {
      case 'completed' :
        return handleFunctions.handleCompleted(array);
      case 'pending':
        return array.filter(item => !item.completado);
      case 'all':
        default:
          return array;
    }
  },

  getDataFromLocalStorage: () => {
    const storedData = localStorage.getItem('myData');
    return storedData? JSON.parse(storedData) : [];
  },

  setDataToLocalStorage: (data) => {
    localStorage.setItem('myData', JSON.stringify(data));
  }
};