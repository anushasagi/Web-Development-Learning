/*************************************************FUNCTIONS*******************************************/

//Function - playAudio - takes in a letter "w", "a" etc from button click and key pressed and plays respective audio.
function playAudio(letter) {
  console.log(letter);
  switch (letter) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    default:
      console.log("Error Playing:" + letter);
  }
}

//Function - buttonAnimation - takes in a letter "w", "a" etc from button click and add a style (highlights button when pressed) to css
function buttonAnimation(letter){
  $("."+letter).addClass("pressed");
  setTimeout(function(){
    $("."+letter).removeClass("pressed");
  }, 100);
}

/**************************************************EVENT LISTENERS***************************************/
//Button clicked EventListner
$("button.drum").on("click", function(){
  var buttonClicked = this.innerHTML;
  //play audio
  playAudio(buttonClicked);
  //highlight button
  buttonAnimation(buttonClicked);
});

//Key Pressed EventListner
$(document).on("keypress", function(e){
  keyPressed = e.key;
  //play audio
  playAudio(keyPressed);
  //highlight button
  buttonAnimation(keyPressed);
});
