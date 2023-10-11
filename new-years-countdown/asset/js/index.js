const year = document.querySelector('.year');
const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

year.innerText = currentYear + 1;

function updateCountdown() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.innerText = d;
    hours.innerText = h < 10 ? '0' + h : h;
    minutes.innerText = m < 10 ? '0' + m : m;
    seconds.innerText = s < 10 ? '0' + s : s;

    if (d < 10) {
        days.innerText = '00' + d;
    } else if (d < 100) {
        days.innerText = '0' + d;
    }

    if (h < 10) {
        hours.innerText = '0' + h;
    }

    if (m < 10) {
        minutes.innerText = '0' + m;
    }

    if (s < 10) {
        seconds.innerText = '0' + s;
    }

    if (diff < 0) {
        year.innerText = currentYear + 2;
        newYearTime = new Date(`January 01 ${currentYear + 2} 00:00:00`);
    }


}

setInterval(updateCountdown, 1000);