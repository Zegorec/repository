const buttonAddTarget = document.querySelector('.buttonAdd');
const inputTextTarget = document.querySelector('.inputText');
//
let showTextTargetLog = function () {
  console.log(inputTextTarget.value)
};

buttonAddTarget.addEventListener('click', showTextTargetLog);
