var start = document.querySelector("body");

start.addEventListener("click", function(){

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var image1src = "images/dice" + randomNumber1 + ".png";
    var image2src = "images/dice" + randomNumber2 + ".png";

    var heading = document.querySelector("h1");




    document.querySelector(".img1").setAttribute("src", image1src);
    document.querySelector(".img2").setAttribute("src", image2src);

    if(randomNumber1 > randomNumber2) {
        heading.innerHTML = "<img src='images/flag.png'> Player 1 Wins!";
    } else if(randomNumber2 > randomNumber1) {
        heading.innerHTML = "Player 2 Wins! <img src='images/flag.png'>";
    } else {
        heading.innerHTML = "Draw!";
    }
})