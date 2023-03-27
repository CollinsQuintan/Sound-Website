// detecting button press
var numOfDrumButtons = document.querySelectorAll(".drum").length
for (var i = 0;i<numOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
      var buttonInnerHTML = this.innerHTML;
      
      makeSound(buttonInnerHTML);
    });
}

// detecting keyboard press
document.addEventListener("keypress", function(event){
   makeSound(event.key);
})

function makeSound(key){
    switch (key) {
        case "w":
            var tom_1 = new Audio("sounds/tom-1.mp3");
            tom_1.play();
            break;
        case "a":
            var tom_2 = new Audio("sounds/tom-2.mp3");
            tom_2.play();
            break;
        case "s":
            var tom_3 = new Audio("sounds/tom-3.mp3");
            tom_3.play();
            break;        
        case "d":
            var tom_4 = new Audio("sounds/tom-4.mp3");
            tom_4.play();
            break; 
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break; 
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break; 
        case "l":
            var k_bass = new Audio("sounds\kick-bass.mp3");
            kick-bass.play();
            break; 

        default:
            console.log(innerHTML);
            break;
      } 
}




// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();