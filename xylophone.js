for(var i=0;i<document.querySelectorAll(".xy").length;i++){
  document.querySelectorAll(".xy")[i].addEventListener("click", function handleClick(){
    var button=this.innerHTML;
    console.log(button);
    makeSound(button);
     buttonAnimation(button);

    }
  );
}

document.addEventListener("keydown",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
})


var screensize=$(window).width();
if(screensize<992){
  alert("Lower Screen Size May Result in DISTORTED PLAYER!! Try landscape mode if you find any problem!");
}


function makeSound(button){
  console.log(button);
  var btn=button;
  switch(btn){
    case "a":
      var tom1=new Audio("A.wav");
      tom1.play();

    break;
    case "A":
    console.log("Aaaaaaa");
      var tom1=new Audio("A.wav");
      tom1.play();
      console.log("Aaaaaaa");
    break;
    case "B":
      var tom1=new Audio("B.wav");
      tom1.play();
    break;
    case "b":
      var tom1=new Audio("B.wav");
      tom1.play();
    break;
    case "c":
      var tom1=new Audio("C.wav");
      tom1.play();
    break;
    case "C":
      var tom1=new Audio("C.wav");
      tom1.play();
    break;
    case "d":
      var tom1=new Audio("D.wav");
      tom1.play();
    break;
    case "D":
      var tom1=new Audio("D.wav");
      tom1.play();
    break;
    case "E":
      var tom1=new Audio("E.wav");
      tom1.play();
    break;
    case "e":
      var tom1=new Audio("E.wav");
      tom1.play();
    break;
    case "f":
      var tom1=new Audio("F.wav");
      tom1.play();
    break;
    case "F":
      var tom1=new Audio("F.wav");
      tom1.play();
    break;
    case "g":
      var tom1=new Audio("G.wav");
      tom1.play();
    break;

    case "G":
      var tom1=new Audio("G.wav");
      tom1.play();
    break;
  }
}

function buttonAnimation(key){
  console.log(key);
var active=document.querySelector("."+key);
active.classList.add("pressed");

setTimeout(function(){
  active.classList.remove("pressed");
},100);
}
