const changeColor = document.getElementById('colorChange');
const buttonOptions = document.getElementById('buttonDiv');
const selectedClassName = 'current';
const buttonColors = [
  '#ff0000',
  '#0000ff',
  '#008000',
  '#800080',
  '#ffc0cb',
  '#ffa500',
];
console.log(buttonColors);

chrome.storage.sync.get('pink', ({ pink }) => {
  changeColor.style.backgroundColor = pink;
});

function handleButtonClick(event) {
  const current = event.target.parentElement.querySelector(
    `.${selectedClassName}`
  );
  if (current && current !== event.target) {
    current.classList.remove(selectedClassName);
  }
  const color = event.target.dataset.color;
  event.target.classList.add(selectedClassName);
  chrome.storage.sync.set({ color });
  changeColor.style.backgroundColor = color;
}

function constructOptions(buttonColors) {
  chrome.storage.sync.get('pink', (data) => {
    const currentColor = data.color;

    for (let buttonColor of buttonColors) {
      const button = document.createElement('button');
      button.dataset.color = buttonColor;
      button.style.backgroundColor = buttonColor;

      if (buttonColor === currentColor) {
        button.classList.add(selectedClassName);
      }
      button.addEventListener('click', handleButtonClick);
      buttonOptions.appendChild(button);
    }
  });
}


function changeBackground() {

}
constructOptions(buttonColors);
