"use strict";
let textInput = document.getElementById("textInput")
let thisDesc = [];

var CarLot = (function(carlot) {
 let cards = document.getElementsByClassName("card")
 carlot.cardClick = function(){
  for (let i=0; i<cards.length;i++){
    cards[i].addEventListener("click", function(){
      textInput.focus();

      let thisDesc = this.getElementsByClassName("desc");
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
