var randomNumber1 = Math.floor(Math.random() * 6) + 1; //generates a random number in the range 1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomNumberImage1 = "images/dice" + randomNumber1 + ".png" ;//stores the random image using the randomnumber
var randomNumberImage2 = "images/dice" + randomNumber2 + ".png";


/* document.querySelectorAll returns an array of elements
setAttribute funtion helps to change the attribute of the element */
document.querySelectorAll("img")[0].setAttribute("src" , randomNumberImage1);
document.querySelectorAll("img")[1].setAttribute("src" , randomNumberImage2)

if(randomNumber1 > randomNumber2)
    document.querySelector("h1").innerHTML = "🚩Player1 won";
else if(randomNumber2 > randomNumber1)
    document.querySelector("h1").innerHTML = "Player2 won🚩";
else
document.querySelector("h1").innerHTML = "Its a Draw";

