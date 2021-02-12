const buttonAddTarget = document.querySelector('.buttonAdd');
const inputTextTarget = document.querySelector('.inputText');
const listTarget = document.querySelector('.listTarget');
//
const proverka = () => console.log('rabotaet');
const addTarget = () => {
  const newElement = document.createElement('div');
  newElement.textContent = inputTextTarget.value;
  const newButton = document.createElement('button');
  newButton.textContent = 'Удалить';
  newButton.classList.add = 'buttonForDelte';
  newElement.appendChild(newButton);
  inputTextTarget.value = '';
  return listTarget.appendChild(newElement);
};

buttonAddTarget.addEventListener('click', addTarget);
