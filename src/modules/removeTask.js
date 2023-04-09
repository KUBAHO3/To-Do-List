export function removeTask(index) {
  if (index > -1) {
    const newData = getAllTasks();
    newData.splice(index, 1);
    for (let i = index; i < getAllTasks().length - 1; i += 1) {
      newData[i].index = i + 1;
    }
    updateTask(newData);
    showTask();
  }
}
