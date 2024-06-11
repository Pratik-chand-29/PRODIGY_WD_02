let displayTime = document.querySelector('.displayTime');
let startbtn = document.querySelector('.Start');
let stopbtn = document.querySelector('.Stop');
let resetbtn = document.querySelector('.Reset');

let msec=0;
let sec=0;
let min=0;
let id=null;

startbtn.addEventListener('click',function(){
    if(id!=null){
        clearInterval(id);
    }
    id=setInterval(startTime,10);
});

stopbtn.addEventListener('click',function(){
    clearInterval(id);
});

resetbtn.addEventListener('click',function(){
    clearInterval(id);
    displayTime.innerHTML=`00 : 00 : 00`;
    msec=sec=min=0;
});


function startTime(){
    msec++;
    if(msec==100){
        msec=0;
        sec++;
        if(sec==60){
            sec=0;
            min++;
        }
    }

    let msecstring=msec < 10 ? `0${msec}`: msec;
    let secstring=sec < 10 ? `0${sec}`: sec;
    let minstring=min < 10 ? `0${min}`: min;

    displayTime.innerHTML=`${minstring} : ${secstring} : ${msecstring}`;
}
