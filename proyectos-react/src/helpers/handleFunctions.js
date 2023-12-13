

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
  
    onAddTask: (array, val, setArray) => {
      if (val.trim() === '') return;
      const data = {
        title: val.trim(),
        id: array.length + 1,
        completado:false
      };
      setArray([...array, data]);
    },
  };
  