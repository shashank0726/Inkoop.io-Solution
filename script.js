const numInput = document.getElementById('num-input');
const resultDiv = document.getElementById('result');

numInput.addEventListener('input', checkNumber);

function checkNumber() {
	
  const inputValue = numInput.value;
  if (inputValue === '') {
    resultDiv.innerText = '';
    return;
  }
  
  const num = parseInt(numInput.value);
  if (num < 0) {
    resultDiv.innerText = 'Enter a positive value';
  } else if (num % 2 === 0) {
    resultDiv.innerText =  `${num + 2}, ${num + 4}, ${num + 6}`;
  } else {
    resultDiv.innerText = `${num + 2}, ${num + 4}, ${num + 6}`;
  }
}
