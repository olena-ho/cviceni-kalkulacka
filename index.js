const displayElm = document.querySelector('.display');
const numButtons = document.querySelectorAll('.btn-num');

const handleDigitClick = (e) => {
  const buttonValue = e.target.textContent;
  if (displayElm.textContent === '0') 
    {displayElm.textContent = buttonValue;} 
    else if (displayElm.textContent.length === 9) {
    return
  } else {
    displayElm.textContent += buttonValue;
  }
}

numButtons.forEach((numButton) => {
  numButton.addEventListener('click', handleDigitClick) 
});
