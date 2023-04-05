function createTask() {
  const inputData = document.getElementById('inputText').value;
  const saveData = document.getElementById('formText');
  const storage = getAllTasks().length+1;
  const task = [{ description: inputData, completed: false, index: parseInt(storage) }];
  saveTask(task);
  showTask();
  saveData.reset();
}

function showTask() {
  const div = document.querySelector('#todo-container');
  div.innerHTML = '';
  getAllTasks().forEach((task) => {
    let checked = '';
    let style = '';
    let styleDescription = '';
    const styleText='style="display:none"';
    if (task.completed) {
      styleDescription = 'style="text-decoration: line-through"';
      checked = 'checked';
      style = 'class="line"';
    }
    div.innerHTML += `<li><input class="checkbox-class" type="checkbox" id="checkbox-${task.index}" ${checked} /> <h3  id="d${task.index}" ${style} ${styleDescription} >${task.description}</h3><input class="edit-class" type="text" value="${task.description}" id="edit-${task.index}" ${styleText}/><button type="button" id="editBttn-${task.index}" class="editButton"></button><button type="button" class="deleteButton" id="delete-${task.index}"></button></li>`;
  });
}

function removeTask(index) {
  if (index > -1) {
    const newData = getAllTasks();
    newData.splice(index, 1);
    for (let i = index; i < getAllTasks().length - 1; i += 1) {
      newData[i].index = i+1;
    }
    updateTask(newData);
    showTask();
  }
}

function saveTask(todo) {
  if (getAllTasks().length !== 0) {
    localStorage.setItem(
      'data',
      JSON.stringify(getAllTasks().concat(todo)),
    );
  } else {
    localStorage.setItem('data', JSON.stringify(todo));
  }
}

function getAllTasks() {
  if (localStorage.getItem('data')) {
    return JSON.parse(localStorage.getItem('data'));
  }
  return [];
}

const updateTask =(newDatas)=> {
  localStorage.clear();
  localStorage.setItem('data', JSON.stringify(newDatas));
}
