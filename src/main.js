import { nanoid } from 'nanoid';
import refs from './js/refs';
import { getLocalStorage, setItemLocalStorage } from './js/helpers';
import addMarkup from './js/markupTasks';
import './js/deleteTask';
const { formElem, listElem } = refs;

formElem.addEventListener('submit', onFormSubmit);
// console.log(JSON.parse(localStorage.getItem('task')) || []);

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

function addLocalValue() {
  const localArray = getLocalStorage('task');
  if (localArray === null) return;

  const arrayValue = localArray
    .map(elem => {
      return `<li id="${elem.id}">${elem.text}
      <button type="button">X</button>
      </li>`;
    })
    .join('');
  listElem.insertAdjacentHTML('beforeEnd', arrayValue);
}

addLocalValue();
