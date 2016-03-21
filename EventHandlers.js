"use strict";
let textInput = document.getElementById("textInput")
let thisDesc = [];
var cards = document.getElementsByClassName("card")

var CarLot = (function(carlot) {
  carlot.activateEvents = function(){
    for (let i=0; i<cards.length;i++){
      cards[i].addEventListener("click", CarLot.cardSelected);

      textInput.addEventListener("keyup", function(e){
        thisDesc[0].innerHTML = textInput.value;
        if (e.code === "Enter") {
          inputField.value = "";
        }
      })
    }
  }
  return carlot;
})(CarLot || {});