

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

    handleComplete: (setArray,setCompleted, taskId, setCompletedId) => {
      setArray((prevTasks) => {
        return prevTasks.map((task) => {
          if (task.id === taskId) {
            return { ...task, completed: !task.completed };
          }
          return task;
        });
      });
    
      setCompletedId(taskId);
      setCompleted((prevCompleted) => !prevCompleted);
    },
  
    onAddTask: (array, val, setArray) => {
      if (val.trim() === '') return;
      const data = {
        title: val.trim(),
        id: array.length + 1
      };
      setArray([...array, data]);
    },
  };
  