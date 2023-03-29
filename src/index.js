import _ from 'lodash';
import './style.css';

  const todos = [
    { index: 1, description: 'Learn JavaScript', completed: false  },
    { index: 2, description: 'Learn HTML', completed: true },
    { index: 3, description: 'Learn CSS', completed: false },
    { index: 4, description: 'Learn React', completed: true },
    { index: 5, description: 'Learn Redux', completed: false },
  ]

  const taskContainer = document.querySelector('.body-container');

  var tasks = todos.map((todo) => ` 
  <div class="todos">
    <div class="task"><input type="checkbox" id="demoCheckbox" name="checkbox" value="1">
        <label for="demoCheckbox">${todo.description}</label>
    </div>
    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
  </div>
  `).join('');

  taskContainer.innerHTML = tasks;