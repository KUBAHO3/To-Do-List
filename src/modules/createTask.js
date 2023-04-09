export function createTask() {
  const inputData = document.getElementById('inputText')?.value;
  const saveData = document.getElementById('formText');
  const storage = getAllTasks().length + 1;
  const task = [{ description: inputData, completed: false, index: parseInt(storage) }];
  saveTask(task);
  showTask();
  saveData?.reset();
}
