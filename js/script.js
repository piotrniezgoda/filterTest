function setBlur() {
	const blurInput = document.querySelector('#blur');
	const blurValue = blurInput.value;
	const suffix = 'px';

	return `blur(${blurValue + suffix}) `;
}

function setBrightness() {
	const brightValue = document.querySelector('#bright').value;
	const suffix = '%';

	return `brightness(${brightValue + suffix}) `
}

function setContrast() {
	const contrastValue = document.querySelector('#contrast').value;
	const suffix = '%';

	return `contrast(${contrastValue + suffix}) `
}

function setGrayscale() {
	const grayValue = document.querySelector('#gray').value;
	const suffix = '%';

	return `grayscale(${grayValue + suffix}) `
}

function setHue() {
	const hueValue = document.querySelector('#hue').value;
	const suffix = 'deg';

	return `hue-rotate(${hueValue + suffix}) `
}

function setInvert() {
	const invertValue = document.querySelector('#invert').value;
	const suffix = '%';

	return `invert(${invertValue + suffix}) `
}

function setOpacity() {
	const opacityValue = document.querySelector('#opacity').value;
	const suffix = '%';

	return `opacity(${opacityValue + suffix}) `
}

function setSaturate() {
	const saturateValue = document.querySelector('#saturate').value;
	const suffix = '%';

	return `saturate(${saturateValue + suffix}) `
}

function setSepia() {
	const sepiaValue = document.querySelector('#sepia').value;
	const suffix = '%';

	return `sepia(${sepiaValue + suffix}) `
}

function createStyle() {
	const image = document.querySelector('.image');
	const filterResoult = document.querySelector('#filterResoult');
	image.style.filter = setBlur() + 
	setBrightness() + 
	setContrast() + 
	setGrayscale() + 
	setHue() +
	setInvert() +
	setOpacity() +
	setSaturate() +
	setSepia();

	filterResoult.innerHTML = "filter: " + setBlur() + 
	setBrightness() + 
	setContrast() + 
	setGrayscale() + 
	setHue() +
	setInvert() +
	setOpacity() +
	setSaturate() +
	setSepia();
}

function resetInputs() {
	const blurInput = document.querySelector('#blur');
	blurInput.value = "0";

	const brightInput = document.querySelector('#bright');
	brightInput.value = "100";

	const contrastInput = document.querySelector('#contrast');
	contrastInput.value = "100";

	const grayInput = document.querySelector('#gray');
	grayInput.value = "0";

	const hueInput = document.querySelector('#hue');
	hueInput.value = "0";

	const invertInput = document.querySelector('#invert');
	invertInput.value = "0";

	const opacityInput = document.querySelector('#opacity');
	opacityInput.value = "100";

	const saturateInput = document.querySelector('#saturate');
	saturateInput.value = "100";

	const sepiaInput = document.querySelector('#sepia');
	sepiaInput.value = "0";

	createStyle();
}

const inputs = document.querySelectorAll('.range-input');
const resetBtn = document.querySelector('#reset');

reset.addEventListener('click', resetInputs);

inputs.forEach(input => input.addEventListener('change', createStyle));
inputs.forEach(input => input.addEventListener('mousemove', createStyle));