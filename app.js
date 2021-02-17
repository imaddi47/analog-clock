
// selecting Clock Hands
const secHand = document.querySelector('.s-hand');
const minHand = document.querySelector('.m-hand');
const hrHand = document.querySelector('.h-hand');

// update clock hands with suitable sound effects
function setClock(){

    // get data object
    const date = new Date();

        // select time value from date object
        const sec = date.getSeconds();
        const min = date.getMinutes();
        const hr = date.getHours();

    // convert time to degree for analog watch
    const secDeg = (sec/60) * 360 - 90;
    const minDeg = (min/60) * 360 - 90;
    const hrDeg = (hr/24) * 360 - 90;

    //select appropriate sound for clock hands
    const clockSound = (sec === 0)? ( (min === 0)? document.querySelector('audio[data-key="hr"]') : document.querySelector('audio[data-key="min"]') ) : document.querySelector('audio[data-key="sec"]');
    
    // fix animation problem
    secHand.style.transition = (sec === 0)? `all 0.00s` : `all 0.05s cubic-bezier(0, 2.6, 0.5, 1)`;
    minHand.style.transition = (min === 0)? `all 0.00s` : `all 0.05s cubic-bezier(0, 2.6, 0.5, 1)`;
    hrHand.style.transition = (hr === 0)? `all 0.00s` : `all 0.05s cubic-bezier(0, 2.6, 0.5, 1)`;
    
    // update clock hands degree
    secHand.style.transform = `rotate(${secDeg}deg)`;
    minHand.style.transform = `rotate(${minDeg}deg)`;
    hrHand.style.transform = `rotate(${hrDeg}deg)`;
    
    // pay selected sound
    clockSound.play();
}

// 1second time interval for clock time updation
let setSec  = setInterval(setClock, 1000);