"use strict";
let textInput = document.getElementById("textInput")
let thisDesc = [];

var CarLot = (function(carlot) {
 let cards = document.getElementsByClassName("card")
 carlot.activateEvents = function(){
  for (let i=0; i<cards.length;i++){
    cards[i].addEventListener("click", function(){
      textInput.focus();

      thisDesc = this.getElementsByClassName("desc");
      let selectedColor = CarLot.getInventory()[i].color.toLowerCase();

      //remove selected from all cards
      for (var j=0;j<cards.length;j++) {
        cards[j].classList.remove("selected");
        cards[j].style.border = "2px solid " + CarLot.getInventory()[j].color.toLowerCase();
      };

      //add selected to clicked card
      this.classList.add("selected");
      this.style.border = "8px solid "+ selectedColor;
    });

  textInput.addEventListener("keyup", function(e){
  thisDesc[0].innerHTML = textInput.value;
  console.log("e", e.code);
  if (e.code === "Enter") {
    inputField.value = "";
  }
})

  }
 }
  return carlot;
})(CarLot || {});

// "use strict";
// let thisDesc = [];
// let textInput = document.getElementById("textInput");

// var CarLot = (function(carlot) {
//  let cards = document.getElementsByClassName("card");
//  carlot.cardClick = function(){
//   for (let i=0; i<cards.length;i++){
//     cards[i].addEventListener("click", function(){

//     console.log("click");

//     textInput.focus();

//     // get reference to selected bio for editing
//     thisDesc = this.getElementsByClassName("desc");
//   });
//  };
//   return carlot;
// })(CarLot || {});
