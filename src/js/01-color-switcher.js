const btn = document.querySelector('[data-start]');
const secondBtn = document.querySelector('[data-stop]')ж

let changeColor = null;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}
btn.addEventListener('click', () => {
    if (!changeColor) {
      
      changeColor = setInterval(changeBackgroundColor, 1000);
      btn.disabled = true;
      secondBtn.removeAttribute('disabled');
    }
    
});
secondBtn.addEventListener('click', () => {
  if (changeColor) {
    
    clearInterval(changeColor);
    changeColor = null;
    btn.disabled = false;
    secondBtn.disabled = true;
    }
    
});
