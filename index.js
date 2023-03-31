const btn = document.getElementById('button');
const lb = document.getElementById('valor-dado');

function playDice() {
  let dice = Math.floor(Math.random() * 6) + 1;
  return dice;
}

btn.addEventListener('click', () => {
  let result = playDice();
  console.log(result);
  lb.textContent = result;
});
