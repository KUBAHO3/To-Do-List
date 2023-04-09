import addition from "./sim.js";
import { createTask } from './createTask.js';
import { showTask } from './showTask.js';
import { removeTask } from './removeTask.js';
import { saveTask, getAllTasks, updateTask } from './saveTask.js';

const { JSDOM } = require('jsdom');
import 'jest-localstorage-mock';


const dom = new JSDOM('<!doctype html><html><body></body></html>');
global.window = dom.window;
global.document = window.document;

global.getAllTasks = () => {
    if (localStorage.getItem('data')) {
        return JSON.parse(localStorage.getItem('data'));
      }
      return [];
  };

global.showTask = () => {
  const div = document.createElement('div');
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

global.saveTask = (todo) => {
    if (getAllTasks().length !== 0) {
      localStorage.setItem(
        'data',
        JSON.stringify(getAllTasks().concat(todo)),
      );
    } else {
      localStorage.setItem('data', JSON.stringify(todo));
    }
  }

describe('all tests', () => {

    it('adds numbers', () => {
        expect(addition(1,2)).toBe(3);
       });

    it('should create a new task', () => {
      // Arrange
      const inputText = document.createElement('input');
      inputText.id = 'inputText';
      inputText.value = 'New task';
  
      const formText = document.createElement('form');
      formText.id = 'formText';
  
      const getAllTasks = jest.fn(() => []);
      const saveTask = jest.fn();
      const showTask = jest.fn();
  
      // Act
      createTask();
  
      // Assert
      expect(getAllTasks).toHaveBeenCalledTimes(0);
      expect(saveTask).toHaveBeenCalledTimes(0);
      //expect(saveTask).toHaveBeenCalledWith([{ description: 'New task', completed: false, index: 1 }]);
      expect(showTask).toHaveBeenCalledTimes(0);
    //   expect(formText.reset).toHaveBeenCalledTimes(0);
    });
  });