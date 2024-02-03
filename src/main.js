import { nanoid } from 'nanoid';
const formElem = document.querySelector('#task-form');
const listElem = document.querySelector('#task-list');

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

function addMarkup(markup, id) {
  const li = `<li id="${id}">${markup}
  <button type="button">X</button>
  </li>`;
  listElem.insertAdjacentHTML('beforeEnd', li);
}

function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function setItemLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
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

listElem.addEventListener('click', deleteTask);

function deleteTask(e) {
  if (e.target.nodeName !== 'BUTTON') return;
  e.target.parentNode.remove();
  const arr = getLocalStorage('task');
  const filtredArr = arr.filter(item => item.id !== e.target.parentNode.id);
  setItemLocalStorage('task', filtredArr);
}
