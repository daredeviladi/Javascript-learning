const hourE1=document.getElementById("Hours");
const minuteE1=document.getElementById("Minutes");
const secodE1=document.getElementById("Seconds");
const ampmE1=document.getElementById("ampm");


function updateClock(){
    let h= new Date().getHours();
    let m= new Date().getMinutes();
    let s= new Date().getSeconds();
    let ampm="am";

    if(h>12){
        h=h-12;
        ampm="pm";
    }
    h= h<10?"0"+h:h;
    m= m<10?"0"+m:m;
    s= s<10?"0"+s:s;

    hourE1.innerText=h;
    
    minuteE1.innerText=m;
    
    secodE1.innerText=s;
    ampmE1.innerText=ampm;
    setTimeout(()=>{
        updateClock();
    },1000)
}

updateClock();