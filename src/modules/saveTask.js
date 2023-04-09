export function saveTask(todo) {
  if (getAllTasks().length !== 0) {
    localStorage.setItem(
      'data',
      JSON.stringify(getAllTasks().concat(todo)),
    );
  } else {
    localStorage.setItem('data', JSON.stringify(todo));
  }
}

export function getAllTasks() {
  if (localStorage.getItem('data')) {
    return JSON.parse(localStorage.getItem('data'));
  }
  return [];
}

export const updateTask = (newDatas) => {
  localStorage.clear();
  localStorage.setItem('data', JSON.stringify(newDatas));
};
