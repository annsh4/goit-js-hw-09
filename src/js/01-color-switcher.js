const CHANGE_COLOR_DELAY = 1000;
let idInterval = null;

const refs = {
	btnStart: document.querySelector('button[data-start]'),
	btnStop: document.querySelector('button[data-stop]'),
	body: document.querySelector('body'),
}

refs.btnStop.disabled = true;
refs.btnStart.addEventListener('click', onStartChangeColor);
refs.btnStop.addEventListener('click', onStopChangeColor);

function onStartChangeColor() {
	refs.btnStart.disabled = true;
	refs.btnStop.disabled = false;

	idInterval = setInterval(() => {
		refs.body.style.backgroundColor = getRandomHexColor()
	}, CHANGE_COLOR_DELAY);
}

function onStopChangeColor() {
	refs.btnStart.disabled = false;
	refs.btnStop.disabled = true;

	clearInterval(idInterval);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
