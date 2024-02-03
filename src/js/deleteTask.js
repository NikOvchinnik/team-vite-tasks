import refs from './refs';
import { getLocalStorage, setItemLocalStorage } from './helpers';
const { listElem } = refs;

listElem.addEventListener('click', deleteTask);

function deleteTask(e) {
  if (e.target.nodeName !== 'BUTTON') return;
  e.target.parentNode.remove();
  const arr = getLocalStorage('task');
  const filtredArr = arr.filter(item => item.id !== e.target.parentNode.id);
  setItemLocalStorage('task', filtredArr);
}
