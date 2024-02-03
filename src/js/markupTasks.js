import refs from './refs';
const { listElem } = refs;

export default function addMarkup(markup, id) {
  const li = `<li id="${id}">${markup}
  <button type="button">X</button>
  </li>`;
  listElem.insertAdjacentHTML('beforeEnd', li);
}
