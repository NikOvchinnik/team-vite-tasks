const formElem = document.querySelector('#task-form');
const listElem = document.querySelector('#task-list');

formElem.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
    const inputValue = e.currentTarget.elements.taskName.value.trim();
    if (!inputValue) return
    e.target.reset();
}
