let elapsedTime = 0;

var timer;
var istrue = false;
var isTiming = false;

let hours = 0;
let minutes = 0;
let seconds = 0;

const timeDisplay = document.getElementById('time-display');
const startBtn = document.getElementById('start-Btn');
const resetBtn = document.getElementById('reset-Btn');
const btns = document.getElementsByClassName('time_Btn');

console.log(btns[0])
console.log(btns[1])
console.log(typeof(btns))

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
    elapsedTime = ((hours * 3600) + (minutes * 60) + seconds) * 1000;
    showTime();    
}


startBtn.addEventListener('click', () => {
    if(elapsedTime == 0) return
    if(isTiming) return

    isTiming = true;
    startTimer();
    console.log('timer start!');
})

resetBtn.addEventListener('click', () => {
    reset();
    showTime();
})

function startTimer() {
    elapsedTime -= 1000;
    showTime(); 
    
    setTimeout(()=> {
        if(elapsedTime == 0) {
            showTime();
            if(isTiming) alert("Timer End!!");
            isTiming = false;
            reset();
            return
        }

        startTimer();
    }, 1000);
}

function showTime() {
    timerDisplay.textContent = formatTime(elapsedTime);
}

function reset() {
    isTiming = false;
    elapsedTime = 0;

    hours = 0;
    minutes = 0;
    seconds = 0;
}