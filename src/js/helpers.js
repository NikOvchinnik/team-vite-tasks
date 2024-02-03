function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function setItemLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export { getLocalStorage, setItemLocalStorage };
