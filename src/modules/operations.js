import { createTask } from './createTask.js';
import { showTask } from './showTask.js';
import { removeTask } from './removeTask.js';
import { saveTask, getAllTasks, updateTask } from './saveTask.js';

// Call functions as needed
createTask();
showTask();
removeTask(0);
saveTask([{ description: 'New task', completed: false, index: 1 }]);
