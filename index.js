var num;
num = Math.floor(Math.random()*6+1) ;
var diceimg = "images/dice"+num+".png";
//console.log(diceimg);
var image1 = document.querySelectorAll("img")[0].setAttribute("src",diceimg);
var num2 = Math.floor(Math.random()*6+1) ;
var diceimg2 = "images/dice"+num2+".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src",diceimg2);

if(num>num2){
    document.querySelector("h1").innerHTML=("🚩 Payer1 wins")
}else if(num2>num){
    document.querySelector("h1").innerHTML=("🚩 Payer2 wins")
}else if(num2 == num){
    document.querySelector("h1").innerHTML=("Its a DRAW!")
}


