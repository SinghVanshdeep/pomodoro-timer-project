
let timerMinutes = 25;
let timerSeconds = 0;
let currentTimer;

document.getElementById("timer-heading").innerHTML = `${timerMinutes}:${timerSeconds}${timerSeconds}`

function startTimer(){
    if (timerSeconds == 60){
        timerSeconds = 0;
    }else{
        let countDownSec = 59 - timerSeconds;
        if (timerMinutes == 0 && countDownSec == 0){
            alert("Time is up!");
            setTimeout(location.reload(), 5000);
        }
        else if (countDownSec == 59){
            timerMinutes--;
        }
        else if (countDownSec < 10){
            countDownSec = `0${countDownSec}`;
        }
        currentTimer = `${timerMinutes}:${countDownSec}`;
        document.getElementById("timer-heading").innerHTML = currentTimer;
        timerSeconds++;
    }
}

let intervalID;

document.getElementById("start").addEventListener("click", function(){
    intervalID = setInterval(startTimer, 1000);
})

document.getElementById("stop").addEventListener("click", function(){
    clearInterval(intervalID);
})

document.getElementById("reset").addEventListener("click", function(){
    location.reload();
})






