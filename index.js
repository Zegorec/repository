const buttonAddTarget = document.querySelector('.buttonAdd');
const inputTextTarget = document.querySelector('.inputText');
//
const showTextTargetLog = () => console.log(inputTextTarget.value);

buttonAddTarget.addEventListener('click', showTextTargetLog);
