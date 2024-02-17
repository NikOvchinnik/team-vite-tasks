import refs from './refs';
import { getLocalStorage, setItemLocalStorage } from './helpers';
const { listElem } = refs;

export function setEventListener(elem, key) {
  elem.addEventListener('click', deleteTask);

  function deleteTask(e) {
    if (e.target.nodeName !== 'BUTTON') return;
    e.target.parentNode.remove();
    const arr = getLocalStorage(key);
    const filtredArr = arr.filter(item => item.id !== e.target.parentNode.id);
    setItemLocalStorage(key, filtredArr);
  }
}
