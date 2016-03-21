"use strict";
var textInput = document.getElementById("textInput")
var thisDesc = [];
var cards = document.getElementsByClassName("card")

var CarLot = (function(carlot) {
  carlot.activateEvents = function(){
    for (let i=0; i<cards.length;i++){
      cards[i].addEventListener("click", CarLot.cardSelected);
      cards[i].addEventListener("click", function(){
        //move focus to text input
        textInput.focus();

        //get reference to description for editing
        thisDesc = this.getElementsByClassName("desc");
      })

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