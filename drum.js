for(var i=0;i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function handleClick(){
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

let microphone = document.getElementById('microphone');
microphone.onclick=function(){
    console.log("innn");
    let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.start();
    recognition.onresult = function(event){
    console.log("ppppp");
    let input = event.results[0][0].transcript;
    console.log(input);
    console.log(input.length);
    for(var i=0;i<input.length;i++){
    console.log(input[i]);
    makeSound(input[i]);
    window.setTimeout(1000);
    }
}
}

function makeSound(button){
  switch(button){
    case "w":
      var tom1=new Audio("tom-1.mp3");
      tom1.play();
      return;
    break;
    case "W":
      var tom1=new Audio("tom-1.mp3");
      tom1.play();
      return;
    break;
    case "a":
      var tom1=new Audio("tom-2.mp3");
      tom1.play();
    break;
    case "A":
      var tom1=new Audio("tom-2.mp3");
      tom1.play();
    break;
    case "s":
      var tom1=new Audio("tom-3.mp3");
      tom1.play();
    break;
    case "S":
      var tom1=new Audio("tom-3.mp3");
      tom1.play();
    break;
    case "d":
      var tom1=new Audio("tom-4.mp3");
      tom1.play();
    break;
    case "D":
      var tom1=new Audio("tom-4.mp3");
      tom1.play();
    break;
    case "j":
      var tom1=new Audio("snare.mp3");
      tom1.play();
    break;
    case "J":
      var tom1=new Audio("snare.mp3");
      tom1.play();
    break;
    case "k":
      var tom1=new Audio("kick-bass.mp3");
      tom1.play();
    break;
    case "K":
      var tom1=new Audio("kick-bass.mp3");
      tom1.play();
    break;
    case "l":
      var tom1=new Audio("crash.mp3");
      tom1.play();
      return;
    break;

    case "L":
      var tom1=new Audio("crash.mp3");
      tom1.play();
      return;
    break;
  }
}

// function buttonAnimation(key){
//   console.log(key);
// var active=document.querySelector("."+key);
// active.classList.add("pressed");

// setTimeout(function(){
//   active.classList.remove("pressed");
// },100);
// return;
// }

function startDictation() {
  if (window.hasOwnProperty('webkitSpeechRecognition')) {
  var recognition = new webkitSpeechRecognition();
  continuous = false;
  interimResults = false;
  lang = "en-US";
  start();
  onresult = function(e) {
  getElementById('transcript').value
  = e.results[0][0].transcript;
  stop();
  getElementById('GeekerMagazine').submit();
  };
  onerror = function(e) {
  stop();
  }
  }
  }