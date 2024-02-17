import { nanoid } from 'nanoid';
import refs from './js/refs';
import { getLocalStorage, setItemLocalStorage } from './js/helpers';
import addMarkup from './js/markupTasks';
import './js/deleteTask';
import addLocalValue from './js/localValue';


const { formElem } = refs;

formElem.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const inputValue = e.currentTarget.elements.taskName.value.trim();
  if (!inputValue) return;
  const id = nanoid();
  addMarkup(inputValue, id);
  const localArray = getLocalStorage('task') || [];
  localArray.push({
    text: inputValue,
    id,
  });
  setItemLocalStorage('task', localArray);

  e.target.reset();
}

addLocalValue(refs.listElem, 'task');
