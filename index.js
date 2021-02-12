const buttonAddTarget = document.querySelector('.buttonAdd');
const inputTextTarget = document.querySelector('.inputText');
const listTarget = document.querySelector('.listTarget');
//
const proverka = () => console.log('rabotaet');
const addTarget = () => {
  const newElement = document.createElement('div');
  newElement.classList.add('target');
  newElement.textContent = inputTextTarget.value;
  const newButton = document.createElement('button');
  newButton.classList.add('buttonForDelte');
  newButton.textContent = 'Удалить';
  newElement.appendChild(newButton);
  inputTextTarget.value = '';
  return listTarget.appendChild(newElement);
};

buttonAddTarget.addEventListener('click', addTarget);

const divTarget = listTarget.querySelectorAll('.target');
const buttonForDelte = listTarget.querySelectorAll('.buttonForDelte');
const delteTarget = (elem) => elem.remove();

for (let i = 0; i < divTarget.length; i++) {
  buttonForDelte[i].addEventListener('click', proverka);
}
