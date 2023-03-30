/*eslint-disable*/
import _ from 'lodash'; /*eslint-disable*/
import './style.css';
import { Operations } from './modules/operations.js';
const taskContainer = document.getElementById('task-container');
const submitButton = document.getElementById('addButton');
const clearAllDone = document.getElementById('clearComplete');
let editButtonStats=false;
window.onload = function windowReady() {
  Operations.showTask();
  submitButton.onclick = function () {
    Operations.createTask();
  };
  taskContainer.addEventListener('click', (e) => {
    if (e.target !== null && e.target !== 'NaN' && e.target !== '') {
      if (e.target.className === 'checkbox-class') {
        const ids = e.target.id.replace('checkbox-', '');
        const description = document.getElementById('d' + ids);
        const data = Operations.getAllTasks();
        const index = parseInt(ids, 10);
        if (data !== []) {
          if (data[index].completed) {
            data[index].completed = false;
            description.style.textDecoration = 'none';
          } else {
            data[index].completed = true;
            description.style.textDecoration = 'line-through';
          }
          Operations.updateTask(data);
        }
      }
    }
  });
};