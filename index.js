let buttonStart = document.getElementById("button-Start");
let buttonStop = document.getElementById("button-Stop");
let buttonReset = document.getElementById("button-Reset");
let sec = 0;
let min = 0;




buttonStart.addEventListener('click', function () {
    timer = true;
    stopWatch();
});

buttonStop.addEventListener('click', function () {
    timer = false;
});

buttonReset.addEventListener('click', function () {
    timer = false;
    min = 0;
    sec = 0;
    document.getElementById('minutes').innerHTML = "00";
    document.getElementById('seconds').innerHTML = "00";
});

function stopWatch() {
    if (timer) {
        sec++;
 
        if (sec == 60) {
            min++;
            sec = 0;
        }
        
        let minString = min;
        let secString = sec;
        
 
        if (sec < 10) {
            hrString = "0" + secString;
        }
 
        if (min < 10) {
            minString = "0" + minString;
        }
 
        
        document.getElementById('minutes').innerHTML = minString;
        document.getElementById('seconds').innerHTML = secString;
        setTimeout(stopWatch, 10);
    }
}



