var numberOfDrumButton = document.querySelectorAll(".drum").length;

for (i = 0; i < numberOfDrumButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHtml = this.innerHTML;
    sound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

document.addEventListener("keypress", function(event) {
  sound(event.key);
  buttonAnimation(event.key);
});

function sound(keyname) {
  switch (keyname) {
   case "w":
     var audio = new Audio("sounds/crash.mp3");
     audio.play();
     break;

   case "a":
     var kick = new Audio("sounds/kick-bass.mp3");
     kick.play();
     break;

   case "s":
     var snare = new Audio("sounds/snare.mp3");
     snare.play();
     break;

   case "d":
     var tom1 = new Audio("sounds/tom-1.mp3");
     tom1.play();
     break;

   case "j":
     var tom2 = new Audio("sounds/tom-2.mp3");
     tom2.play();
     break;

   case "k":
     var tom3 = new Audio("sounds/tom-3.mp3");
     tom3.play();
     break;

   case "l":
     var tom4 = new Audio("sounds/tom-4.mp3");
     tom4.play();
     break;

   default:
     console.log(buttonInnerHtml);

 }
}
function buttonAnimation(currentKey){
  var buttonPiece = document.querySelector("." + currentKey);
  buttonPiece.classList.add("class", "pressed");
  setTimeout(function(){
    buttonPiece.classList.remove("class", "pressed");
  }, 100);
}
