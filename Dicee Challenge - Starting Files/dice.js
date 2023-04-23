var randomnum1=Math.floor(Math.random()*6) +1 ;

var randomDiceImage = "dice"+randomnum1+".png";

var randomImageSource="images/"+randomDiceImage ;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);


var randomnum2=Math.floor(Math.random()*6) +1 ;

var randomDiceImageSource2 = "images/dice"+randomnum2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomDiceImageSource2);


if(randomnum1>randomnum2)
{
    document.querySelector("h1").innerHTML ="<span>🔥</span> Player 1 Wins!"
}
else if(randomnum1<randomnum2){
    document.querySelector("h1").innerHTML =" Player 2 Wins!<span>🔥</span>"
}
else{
    document.querySelector("h1").innerHTML="<span>🔥</span>Draw!!<span>🔥</span>"
}
