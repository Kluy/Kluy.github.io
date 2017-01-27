/**
 * Created by TERM2 on 19.01.2017.
 */
var body = document.querySelector('body');

var wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
body.appendChild(wrapper);

var hours = document.createElement('div');
hours.innerHTML = '00';
hours.classList.add('timer');
wrapper.appendChild(hours);

var dots = document.createElement('div');
dots.innerHTML = ':';
dots.classList.add('dots');
wrapper.appendChild(dots);

var minutes = document.createElement('div');
minutes.innerHTML = '00';
minutes.classList.add('timer');
wrapper.appendChild(minutes);

var dots2 = document.createElement('div');
dots2.innerHTML = ':';
dots2.classList.add('dots');
wrapper.appendChild(dots2);

var seconds = document.createElement('div');
seconds.innerHTML = '00';
seconds.classList.add('timer');
wrapper.appendChild(seconds);

var milliSeconds = document.createElement('div');
milliSeconds.innerHTML = '0';
milliSeconds.classList.add('timer');
milliSeconds.classList.add('milliseconds');
wrapper.appendChild(milliSeconds);

var startButton = document.createElement('div');
startButton.innerHTML = 'Start';
startButton.classList.add('start_button');
body.appendChild(startButton);

var clearButton = document.createElement('div');
clearButton.innerHTML = 'Clear';
clearButton.classList.add('clear_button');
body.appendChild(clearButton);

startButton.addEventListener('click', timerStart);
clearButton.addEventListener('click', clearTimer);

function timerStart() {
    startButton.innerHTML = 'Pause';
    startButton.style.backgroundColor = 'blue';
    timer = setInterval(start, 0);

    milliSec = 0;
    sec = 0;
    hiddenSec = 0;
    min = 0;
    hiddenMin = 0;
    hour = 0;

    function start() {
        milliSec++;
        milliSeconds.innerHTML = milliSec;
        if (milliSec === 250) {
            sec++;
            hiddenSec++;
            milliSec = 0;
            seconds.innerHTML = '0' + sec;
        } if (sec > 9) {
            seconds.innerHTML = sec;
        } if (sec === 59) {
            sec = 0 - 1;
        } if (hiddenSec === 60) {
            hiddenSec = 0;
            min++;
            hiddenMin++;
            minutes.innerHTML = '0' + min;
        } if (min > 9) {
            minutes.innerHTML = min;
        } if (min === 59) {
            min = 0 - 1;
        } if (hiddenMin === 60) {
            hiddenMin = 0;
            hour++;
            hours.innerHTML = '0' + hour;
        } if (hour > 9) {
            hours.innerHTML = hour;
        }
    }
    startButton.removeEventListener('click', timerStart);
    startButton.addEventListener('click', pauseTimer);
}

function pauseTimer() {
    clearInterval(timer);
    startButton.innerHTML = 'Cont...';
    startButton.style.backgroundColor = 'green';
    startButton.addEventListener('click', timerContinue);
}

function timerContinue() {
    startButton.innerHTML = 'Pause';
    startButton.style.backgroundColor = 'blue';
    timer = setInterval(start, 0);

    function start() {
        milliSec++;
        milliSeconds.innerHTML = milliSec;
        if (milliSec === 1) {
            sec++;
            hiddenSec++;
            milliSec = 0;
            seconds.innerHTML = '0' + sec;
        } if (sec > 9) {
            seconds.innerHTML = sec;
        } if (sec === 59) {
            sec = 0 - 1;
        } if (hiddenSec === 60) {
            hiddenSec = 0;
            min++;
            hiddenMin++;
            minutes.innerHTML = '0' + min;
        } if (min > 9) {
            minutes.innerHTML = min;
        } if (min === 59) {
            min = 0 - 1;
        } if (hiddenMin === 60) {
            hiddenMin = 0;
            hour++;
            hours.innerHTML = '0' + hour;
        } if (hour > 9) {
            hours.innerHTML = hour;
        }
    }
    startButton.removeEventListener('click', timerContinue);
    startButton.addEventListener('click', pauseTimer);
}

function clearTimer() {
    clearInterval(timer);
    startButton.innerHTML = 'Start';
    startButton.style.backgroundColor = 'green';
    milliSeconds.innerHTML = '0';
    seconds.innerHTML = '00';
    minutes.innerHTML = '00';
    hours.innerHTML = '00';
    startButton.removeEventListener('click', timerContinue);
    startButton.removeEventListener('click', pauseTimer);
    startButton.addEventListener('click', timerStart);
}