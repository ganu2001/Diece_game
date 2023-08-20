var randomNumber1 = Math.random() * 6+1;
randomNumber1 = Math.floor(randomNumber1);

var randomimage = "dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimage);

var randomnumber2 = Math.floor(Math.random() * 6)+1;

var randomimage2 = "dice" + randomnumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomimage2);



if(randomNumber1 === randomnumber2)
{
     document.querySelector("h1").innerHTML = "Draw";
}
else if(randomNumber1 > randomnumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 is winner!!";
    
}
else{
    document.querySelector("h1").innerHTML = "Player 2 is winner!!";
   
}
  