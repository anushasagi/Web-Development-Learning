function diceRandNumber(){
  var r = Math.random();
  r = Math.floor(r*6)+1
  return r;
}

//Left Dicee
dice_p1 = diceRandNumber();
image_src_left = "images/dice" + dice_p1 + ".png";
document.querySelector(".img1").setAttribute("src", image_src_left);

//Right Dicee
dice_p2 = diceRandNumber();
image_src_right = "images/dice" + dice_p2 + ".png";
document.querySelector(".img2").setAttribute("src", image_src_right);


var title_message;
if(dice_p1 > dice_p2){
  title_message = "Player 1 Wins!"
}
else if(dice_p2 > dice_p1){
  title_message = "Player 2 Wins!"
}
else{
  title_message = "Draw!"
}

document.querySelector(".winner_title").textContent = title_message;
