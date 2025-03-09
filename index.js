let timer;
let timeLeft = 1500;
let isRunning = false;
const timerDisplay = document.querySelector('.timer-display');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
const stopButton = document.getElementById('stop');
const shortBreakButton = document.getElementById('short-break');
const longBreakButton = document.getElementById('long-break');
const alertSound = document.getElementById('alert');

function updateDisplay() {
const minutes = Math.floor(timeLeft / 60);
const seconds = timeLeft % 60;
timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
function startTimer(){
if(!isRunning){
 isRunning=true;
 timer=setInterval(()=>{
 if(timeLeft>0){
 timeLeft--;
                updateDisplay();
            }
            else{
                clearInterval(timer);
                isRunning=false;
                alertSound.play();
            }
        },1000);
    }
}
function resetTimer(){
    clearInterval(timer);
    isRunning=false;
    timeLeft=1500;
    updateDisplay();
}
function stopTimer() {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 0;
    updateDisplay();
}

function setTimer(minutes) {
    timeLeft = minutes * 60;
    updateDisplay();
}

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);
stopButton.addEventListener('click', stopTimer);
shortBreakButton.addEventListener('click', () => setTimer(5));
longBreakButton.addEventListener('click', () => setTimer(15));

updateDisplay();
