export function showTask() {
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
  