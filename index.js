const buttonAddTarget = document.querySelector('.buttonAdd');
const inputTextTarget = document.querySelector('.inputText');
const listTarget = document.querySelector('.listTarget')
//
const showTextTargetLog = () => console.log(inputTextTarget.value);
const addTarget = () => {
  const newElement = document.createElement('div');
  newElement.textContent = inputTextTarget.value;
  inputTextTarget.value = '';
  return listTarget.appendChild(newElement);
} 

buttonAddTarget.addEventListener('click', addTarget);
