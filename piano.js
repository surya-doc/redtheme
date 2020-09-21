
for(var i=0;i<document.querySelectorAll(".pia").length;i++){
  document.querySelectorAll(".pia")[i].addEventListener("click", function handleClick(){
    var button=this.innerHTML;
    makeSound(button);
   buttonAnimation(button);

    }
  );
}
document.addEventListener("keydown",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
})

function makeSound(button){

  switch(button){
    case "a":
      var tom1=new Audio("C4.mp3");
      tom1.play();
    break;
    case "A":

      var sound=new Audio("C4.mp3");
      sound.play();
    break;
    case "2":
      var sound1=new Audio("Db4.mp3");
      sound1.play();
    break;

    case "w":
      var sound2=new Audio("D4.mp3");
      sound2.play();
    break;
    case "W":
      var sound2=new Audio("D4.mp3");
      sound2.play();
    break;


    case "3":
      var sound3=new Audio("Eb4.mp3");
      sound3.play();
    break;


    case "E":
      var sound4=new Audio("E4.mp3");
      sound4.play();
    break;
    case "e":
      var sound4=new Audio("E4.mp3");
      sound4.play();
    break;


    case "R":
      var sound5=new Audio("F4.mp3");
      sound5.play();
    break;
    case "r":
      var sound5=new Audio("F4.mp3");
      sound5.play();
    break;//DONE
    //DONE TILL HERE


    case "5":
      var sound=new Audio("G4.mp3");
      sound.play();
    break;

    case "t":
      var sound=new Audio("C4.mp3");
      sound.play();
    break;
    case "T":
      var sound=new Audio("C4.mp3");
      sound.play();
    break;

    case "6":
      var sound=new Audio("Ab4.mp3");
      sound.play();
    break;

    case "y":
      var sound=new Audio("A4.mp3");
      sound.play();
    break;
    case "Y":
      var sound=new Audio("A4.mp3");
      sound.play();
    break;

    case "7":
      var sound=new Audio("Bb4.mp3");
      sound.play();
    break;

    case "U":
      var sound=new Audio("B4.mp3");
      sound.play();
    break;
    case "u":
      var sound=new Audio("B4.mp3");
      sound.play();
    break;

    case "i":
      var sound=new Audio("C5.mp3");
      sound.play();
    break;
    case "I":
      var sound=new Audio("C5.mp3");
      sound.play();
    break;

    case "9":
      var sound=new Audio("Db5.mp3");
      sound.play();
    break;

    case "o":
      var sound=new Audio("D5.mp3");
      sound.play();
    break;
    case "O":
      var sound=new Audio("D5.mp3");
      sound.play();
    break;

    case "0":
      var sound=new Audio("Eb5.mp3");
      sound.play();
    break;

    case "p":
      var sound=new Audio("C5.mp3");
      sound.play();
    break;
    case "P":
      var sound=new Audio("E5.mp3");
      sound.play();
    break;

  }
}


var screensize=$(window).width();
if(screensize<992){
  alert("Lower Screen Size May Result in DISTORTED PLAYER!! Try landscape mode if you find any problem!");
}


function buttonAnimation(key){
  console.log(key);
  if(key>=0 && key<=9){
    var active=document.querySelector(".i"+key);
    active.classList.add("bkact");
    setTimeout(function(){
      active.classList.remove("bkact");
    },100);
  }
  else{
 var active=document.querySelector("."+key);
 active.classList.add("wkact");

setTimeout(function(){
  active.classList.remove("wkact");
},100);
}
}
