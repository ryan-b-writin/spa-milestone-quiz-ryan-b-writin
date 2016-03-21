"use strict";
var cards = document.getElementsByClassName("card")

var CarLot = (function(carlot) {
  carlot.cardSelected = function(){

    //remove selected from all cards
    for (var j=0;j<cards.length;j++) {
      cards[j].classList.remove("selected");
      cards[j].style.border = "2px solid " + CarLot.getInventory()[j].color.toLowerCase();
    };

    //add selected to clicked card
    this.classList.add("selected");
    this.style.border = "8px solid black"//+ selectedColor;
  }
  return carlot;
})(CarLot || {});