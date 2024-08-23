let h = 0;
let m = 0;
let s = 0;
let ms = 0;
let delay = 10;
let sInterval;



//START

function start(){
    const hour = document.getElementById('hour');
    const minute = document.getElementById('minute');
    const second = document.getElementById('second');
    const milisecond = document.getElementById('milisecond');

    //
        const startBTN = document.getElementById('start');
        const stopBTN = document.getElementById('stop');
        const resetBTN = document.getElementById('reset');

        let startNone = startBTN.style.display = "none";
        let stopBlock= stopBTN.style.display = "block";
        let resetBlock= resetBTN.style.display = "block";

        startNone;
        stopBlock;
        resetBlock;
    //

    if(!sInterval){
        sInterval = setInterval(start, delay);
    }

    ms = ms + 1;

    milisecond.innerText = ms < 10 ? "0" + ms : ms;

    if(ms >= 99){
        ms = 0;
        s++;

        second.innerText = s < 10 ? "0" + s : s;

        const dataHora = document.getElementById('dataHora');
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        let time = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();

        let fullSec = sec < 10 ? "0" + sec : sec;
        let fullDay = day < 10 ? "0" + day : day;
        let fullMonth = month < 10 ? "0" + month : month;
        let fullMin = min < 10 ? "0" + min : min;
        let fullTime = time < 10 ? "0" + time : time;

        dataHora.innerText = fullDay + "/" + fullMonth + "/" + year + " " + fullTime + "h " + fullMin + "m " + fullSec + "s";

            if(s >= 60){
                s = 0;
                m++;
                  
                minute.innerText = m < 10 ? "0" + m : m;

                dataHora.innerText = new Date();

                    if(m >= 60){
                        m = 0
                        h++;

                        hour.innerText = h < 10 ? "0" + h : h;
                    }
            }
    }
}



//RESET

function reset(){

    clearInterval(sInterval);
    sInterval = null;

    const hour = document.getElementById('hour');
    const minute = document.getElementById('minute');
    const second = document.getElementById('second');
    const milisecond = document.getElementById('milisecond');

    //
        const startBTN = document.getElementById('start');
        const stopBTN = document.getElementById('stop');
        const resetBTN = document.getElementById('reset');

        let startBlock = startBTN.style.display = "block";
        let stopNone= stopBTN.style.display = "none";
        let resetBlock= resetBTN.style.display = "stop";

        startBlock;
        stopNone;
        resetBlock;
    //

    milisecond.innerText = '00';
    ms = 0;
    
    second.innerText = '00';
    s = 0;
   
    minute.innerText = '00';
    m = 0;
   
    hour.innerText = '00';
    h = 0;

}


//STOP

function stop(){
    clearInterval(sInterval);

    sInterval = null;

    //
        const startBTN = document.getElementById('start');
        const stopBTN = document.getElementById('stop');
        const resetBTN = document.getElementById('reset');

        let startBlock = startBTN.style.display = "block";
        let stopNone= stopBTN.style.display = "none";
        let resetBlock= resetBTN.style.display = "block";

        startBlock;
        stopNone;
        resetBlock;
    //
}