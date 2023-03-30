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

};