let randomNumber1, randomNumber2, dicePlayer1, dicePlayer2;

randomNumber1 = Math.floor((Math.random() * 5 ) + 1);
randomNumber2 = Math.floor((Math.random() * 5 ) + 1);

dicePlayer1 = document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
dicePlayer2 = document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if(randomNumber1 === randomNumber2){

    document.querySelector("h1").textContent = "It's a draw!!!";

}else if(randomNumber1 > randomNumber2){

    document.querySelector("h1").textContent = "Player 1 wins!!!!";

}else{

    document.querySelector("h1").textContent = "Player 2 wins!!!!";

}