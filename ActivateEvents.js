"use strict";
var cards = document.getElementsByClassName("card")

var CarLot = (function(carlot) {
  carlot.cardSelected = function(DOMelement,color){

    //remove selected from all cards
    for (var j=0;j<cards.length;j++) {
      cards[j].classList.remove("selected");
      cards[j].style.border = "2px solid " + CarLot.getInventory()[j].color.toLowerCase();
    };

    //add selected to clicked card
    DOMelement.classList.add("selected");
    DOMelement.style.border = "8px solid "+color;
  }
  return carlot;
})(CarLot || {});