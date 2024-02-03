const formElem = document.querySelector('#task-form');
const listElem = document.querySelector('#task-list');

formElem.addEventListener('submit', onFormSubmit);
// console.log(JSON.parse(localStorage.getItem('task')) || []);

function onFormSubmit(e) {
  e.preventDefault();
  const inputValue = e.currentTarget.elements.taskName.value.trim();
  if (!inputValue) return;
  addMarkup(inputValue);
  const localArray = getLocalStorage('task') || [];
  localArray.push(inputValue);
  setItemLocalStorage('task', localArray);

  e.target.reset();
}

function addMarkup(markup) {
  const li = `<li>${markup}</li>`;
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
  const arrayValue = localArray.map(elem => {
   return `<li>${elem}</li>`
  }).join("");
  listElem.insertAdjacentHTML('beforeEnd', arrayValue);
}

addLocalValue();
