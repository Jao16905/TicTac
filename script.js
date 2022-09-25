//Elements
let Startbtn = document.querySelector(".start");
let Restartbtn = document.querySelector(".restart");
let Pausebtn = document.querySelector(".pause")
let hour = document.querySelector(".hh");
let min = document.querySelector(".mm");
let sec = document.querySelector(".ss");
let mili = document.querySelector(".ms");
Startbtn.addEventListener("click",start);
Pausebtn.addEventListener("click",pause);
Restartbtn.addEventListener("click",restart);

let ms = 0;
let hh = 0;
let mm = 0;
let ss = 0;
let cron;
//Function
function start(){

    cron = setInterval( () => {timer ();},10)

}
function pause(){
    clearInterval(cron);
}
function restart(){

    ms=0;
    hh=0;
    mm=0;
    ss=0;

    let format = "00" + ":" + "00" + ":" + "00" + "." + "000"

    document.querySelector(".timer").innerText = format
}
function timer(){

    if ((ms += 10) == 1000){

        ms = 0
        ss++
        if(ss == 60){
            ss=0;
            mm++;
            if(mm == 60){
                mm = 0;
                hh++
            }
        
        }
    }
    
    let format = ((hh<10) ? "0" + hh : hh) + ":" + ((mm<10) ? "0" + mm : mm) + ":" + ((ss<10) ? "0" + ss : ss) + "." + ms;

    document.querySelector(".timer").innerText = format
}
