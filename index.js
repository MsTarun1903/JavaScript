var randomNumber1= Math.floor(Math.random()*6)+1;
var randomDiceimage= "dice" + randomNumber1 + ".png";
var randomImagesource= "images/" + randomDiceimage;
var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImagesource);



var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImagesource2= "images/dice" +randomNumber2+ ".png";
 document.querySelectorAll("img")[1].setAttribute("src",randomImagesource2);


 if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="please roll the dice once again";
 }
  if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 wins the game!";
 }
 if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 2 wins the game!";
 }