const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const numbers = document.querySelectorAll('.numbers');
const dot = document.querySelector('.dot');

setInterval(() => {
    let date = new Date();
    let hr = (date.getHours() % 12) * 30; // Utilisez % 12 pour obtenir l'heure au format 12 heures
    let min = date.getMinutes() * 6;
    let sec = date.getSeconds() * 6;

    hour.style.transform = `translate(-50%, -100%) rotateZ(${(hr / 2.5)}deg) translate(0, 100px)`;
    minute.style.transform = `translate(-50%, -100%) rotateZ(${(min / 2)}deg) translate(0, 100px)`;
    second.style.transform = `translate(-50%, -100%) rotateZ(${(sec)}deg) translate(0, 100px)`;

    for (var i = 0; i < numbers.length; i++) {
        numbers[i].classList.remove('active');
    }

    if (date.getHours() === 0) {
        numbers[11].classList.add('active'); // Si c'est minuit, ajoutez la classe "active" à l'index 11 (correspondant à 12 heures)
    } else {
        numbers[date.getHours() % 12 - 1].classList.add('active'); // Sinon, ajoutez la classe "active" à l'index correspondant à l'heure au format 12 heures
    }

}, 1000);