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
  

  
// ! EDTING 
taskContainer.addEventListener('click', (e) => {
  if (e.target !== null && e.target !== 'NaN' && e.target !== '') {
    if (e.target.className === 'editButton') {
      const ids = e.target.id.replace('editBttn-', '');
      let description = document.getElementById('d' + ids);
      let data = Operations.getAllTasks();
      const index = parseInt(ids, 10);
      let editInput = document.getElementById('edit-'+ ids);
      description.style.display='none';
      editInput.style.display='block';
      if (editButtonStats !== false) {
        data[index-1].description=editInput.value;
        description.style.display='block';
        editInput.style.display='none';
        Operations.updateTask(data);
        Operations.showTask();
        editButtonStats = false;
      }else{
        editButtonStats = true;
      }
    }
  }
});

 //! REMOVING
 Operations.showTask();
 taskContainer.addEventListener('click', (e) => {
   if (e.target !== null && e.target !== 'NaN' && e.target !== '') {
     if (e.target.className === 'deleteButton') {
       const ids = e.target.id.replace('delete-', '');
       const data = Operations.getAllTasks();
       const index = parseInt(ids, 10);
       if (data !== []) {
         Operations.removeTask(index-1);
       }
     }
   }
 });




};