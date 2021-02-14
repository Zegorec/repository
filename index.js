const buttonAddTarget = document.querySelector('.buttonAdd');
const inputTextTarget = document.querySelector('.inputText');
const listTarget = document.querySelector('.listTarget');

//
const proverka = () => console.log('работает');

console.log(buttonAddTarget.parentNode);

const addTarget = () => {
  const newElement = document.createElement('div');
  newElement.classList.add('target');
  newElement.textContent = inputTextTarget.value;
  const delteButton = document.createElement('button');
  newElement.appendChild(delteButton);
  delteButton.classList.add('buttonForDelte');
  const delteTarget = () => {
    const target = document.querySelector('.target');
    target.parentNode.removeChild(target);
  };
  delteButton.addEventListener('click', delteTarget);
  delteButton.textContent = 'Удалить';
  inputTextTarget.value = '';
  return listTarget.appendChild(newElement);
};

buttonAddTarget.addEventListener('click', addTarget);
