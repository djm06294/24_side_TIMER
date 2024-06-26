let elapsedTime = 0;
let endTime = 0;

var timer;
var istrue = false;

let hours = 0;
let minutes = 0;
let seconds = 0;

const timeDisplay = document.getElementById('time-display');
const startBtn = document.getElementById('start-Btn');

function formatTime(totTime_ms) {
    const totTime = Math.floor(totTime_ms/1000);

    const h = String(Math.floor(totTime/3600)).padStart(2, '0');
    const m = String(Math.floor((totTime%3600)/60)).padStart(2, '0');
    const s = String(totTime%60).padStart(2, '0');

    return `${h}H:${m}M:${s}S`;
}

function btn_click(button) {
    if(button === 0) {
        if(hours!=99) {
            hours = hours+1;
            console.log('hour++');
        }
    } else if(button === 1) {
        if(hours!=0) {
            hours = hours-1;
        }
    } else if(button === 2) {
        if(minutes!=59) {
            minutes = minutes+1;
        }
    } else if(button === 3) {
        if(minutes!=0) {
            minutes = minutes-1;
        }  
    } else if(button === 4) {
        if(seconds!=59) {
            seconds = seconds + 1; 
        }
    } else if(button === 5) {
        if(seconds!=0) {
            seconds = seconds - 1;
        }
    }
    showTime();
}

function btn_lclick_dn(btnNum) {
    istrue = true;
    if(istrue===true) console.log('it is surely true');
    timer = setTimeout(function(){ holding(btnNum);}, 3000);
}
function btn_lclick_up() {
    istrue = false;
    console.log('its false');
}
function holding(btnNum) {
    console.log('timeout!');
    if(istrue) console.log("its true");
    if(timer) clearTimeout(timer);
    while(istrue) {
        btn_click(btnNum);
        console.log('true!');
    }
}

startBtn.addEventListener('click', () => {
    elapsedTime = ((hours * 3600) + (minutes * 60) + seconds) * 1000;
    timerDisplay.textContent = formatTime(elapsedTime);
})

function showTime() {
    elapsedTime = ((hours * 3600) + (minutes * 60) + seconds) * 1000;
    timerDisplay.textContent = formatTime(elapsedTime);

}