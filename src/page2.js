import { getLocalStorage } from "./js/helpers";
import addLocalValue from "./js/localValue";

const elemList = document.querySelector('.task2-list');

console.log(getLocalStorage('task'));

addLocalValue(elemList, 'task');



