import { getLocalStorage } from './js/helpers';
import addLocalValue from './js/localValue';
import { setEventListener } from './js/deleteTask';
const elemList = document.querySelector('.task2-list');

console.log(getLocalStorage('task'));

addLocalValue(elemList, 'task');
setEventListener(elemList, 'task');
