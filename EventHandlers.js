"use strict";
var textInput = document.getElementById("textInput");
var thisDesc = [];
var cards = document.getElementsByClassName("card");
var button = document.getElementById("button");

var CarLot = (function(carlot) {
  carlot.activateEvents = function(){

    for (let i=0; i<cards.length;i++){
      cards[i].addEventListener("click",function(event){
      CarLot.cardSelected(event.currentTarget,CarLot.getInventory()[i].color.toLowerCase());
      });
      cards[i].addEventListener("click", function(event){
        //move focus to text input
        textInput.focus();

        //clear text input
        textInput.value = "";

        //get reference to description for editing
        thisDesc = this.getElementsByClassName("desc");
      })

      //on keyup, set desc to match value of textinput
      textInput.addEventListener("keyup", function(e){
        thisDesc[0].innerHTML = textInput.value;
        if (e.code === "Enter") {
          inputField.value = "";
        }

      //clear button
      button.addEventListener("click", function(){
        textInput.value = "";
      });
      })
    }
  }
  return carlot;
})(CarLot || {});