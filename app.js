var min = 00;
var sec = 00;
var msec = 00;
var minTime = document.getElementById("min");
var secTime = document.getElementById("sec");
var msecTime = document.getElementById("msec");
function timer() {
    msec++
    if (msec <= 9) {
        msecTime.innerHTML = "0" + msec;
    }
    else {
        msecTime.innerHTML = msec;
    }
    if (msec >= 100) {
        sec++
        if (sec <= 9) {
            secTime.innerHTML = "0" + sec;
            msec = 00;
        }
        else {
            secTime.innerHTML = sec;
            msec = 00;
        }
    }
    else if (sec >= 60) {
        min++
        if (min <= 9) {
            minTime.innerHTML = "0" + min;
            sec = 00;
        }
        else {
            minTime.innerHTML = min;
            sec = 00;
        }
    }
}
document.getElementById('start').disabled = false;
document.getElementById('pause').disabled = true;
document.getElementById('reset').disabled = true;
var interval;
function start() {
    interval = setInterval(timer, 10)
    document.getElementById('start').disabled = true;
    document.getElementById('pause').disabled = false;
    document.getElementById('reset').disabled = false;
}
function pause() {
    clearInterval(interval)
    document.getElementById('start').disabled = false;
    document.getElementById('pause').disabled = true;
    document.getElementById('reset').disabled = false;
}
function reset() {
    min = '0' + 0;
    sec = '0' + 0;
    msec = '0' + 0;
    minTime.innerHTML = min;
    secTime.innerHTML = sec;
    msecTime.innerHTML = msec;
    pause()
    document.getElementById('start').disabled = false;
    document.getElementById('pause').disabled = true;
    document.getElementById('reset').disabled = true;
}
var Lap = document.getElementById('lap');
var laps = document.getElementById('laps');

function lap() {
    laps.innerHTML += "<li>" + minTime.innerHTML + ":" + secTime.innerHTML + ":" + msecTime.innerHTML + "</li>";
}
function clearLap() {
    laps.innerHTML = '';
}
