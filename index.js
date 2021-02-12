const buttonAddTarget = document.querySelector('.buttonAdd');
const inputTextTarget = document.querySelector('.inputText');
const listTarget = document.querySelector('.listTarget');

//
const proverka = () => console.log('работает');

const delte = (elem) => elem.remove();

const addTarget = () => {
  const newElement = document.createElement('div');
  newElement.classList.add('target');
  newElement.textContent = inputTextTarget.value;
  const delteButton = document.createElement('button');
  delteButton.classList.add('buttonForDelte');
  delteButton.addEventListener('click', proverka);
  delteButton.textContent = 'Удалить';
  newElement.appendChild(delteButton);
  inputTextTarget.value = '';
  return listTarget.appendChild(newElement);
};

buttonAddTarget.addEventListener('click', addTarget);
