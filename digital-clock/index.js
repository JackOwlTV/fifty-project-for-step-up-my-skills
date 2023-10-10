const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const numbers = document.querySelectorAll('.numbers');
const dot = document.querySelector('.dot');

setInterval(() => {
    let date = new Date();
    let hr = date.getHours() * 30;
    let min = date.getMinutes() * 6;
    let sec = date.getSeconds() * 6;

    hour.style.transform = `translate(-50%, -100%) rotateZ(${(hr) + (min / 12)}deg) translate(0, 100px)`;
    minute.style.transform = `translate(-50%, -100%) rotateZ(${(min) + (min / 12)}deg) translate(0, 100px)`;
    second.style.transform = `translate(-50%, -100%) rotateZ(${(sec) + (min / 12)}deg) translate(0, 100px)`;

    for (var i = 0; i < numbers.length; i++) {
        numbers[i].classList.remove('active');
    }

    if (numbers[date.getHours() - 1]) {
        numbers[date.getHours() - 1].classList.add('active');
    }
    if (numbers[date.getMinutes() - 1]) {
        numbers[date.getMinutes() - 1].classList.add('active');
    }
    if (numbers[date.getSeconds() - 1]) {
        numbers[date.getSeconds() - 1].classList.add('active');
    }

}, 1000);