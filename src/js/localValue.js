import { getLocalStorage } from "./helpers";
import refs from "./refs";

export default function addLocalValue(elem, key) {
  const localArray = getLocalStorage(key);
  if (localArray === null) return;

  const arrayValue = localArray
    .map(elem => {
      return `<li id="${elem.id}">${elem.text}
      <button type="button">X</button>
      </li>`;
    })
    .join('');
  elem.insertAdjacentHTML('beforeEnd', arrayValue);
}
