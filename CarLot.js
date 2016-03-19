"use strict";
var outputTarget = document.getElementById("outputTarget");

var CarLot = (function () {
  let inventory = [];

  return {
    getInventory: function () {
      return inventory;
    },

    //get JSON & parse into an array of objects
    loadInventory: function(callback) {
      let inventoryLoader = new XMLHttpRequest();

      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.send();

      inventoryLoader.addEventListener("load", function () {
        inventory = JSON.parse(this.responseText).cars;
        callback(inventory, CarLot.cardClick);
      });
    },


    // make array of objects into html cards
    buildCards: function(cars, callback){
      for (let i=0;i<cars.length;i++) {
        let current = cars[i];
        let available = "";
        // prepare an availability declaration
        if (current.purchased){
          available = "<p>Not currently available for sale.</p>"
        } else {
          available = "<p>Available for sale!</p>"
        }
        // build output string
        let carString = ""
        carString += "<div class='col-xs-4 center'>";
        carString += "<div class='card' id='card"+i+"'>";
        carString += `<p>Make: ${current.make}<p>`;
        carString += `<p>Model: ${current.model}<p>`;
        carString += `<p>Year: ${current.year}<p>`;
        carString += `<p>Price: ${current.price}<p>`;
        carString += `<p>Color: ${current.color}<p>`;
        carString += available;
        carString += `<p class='desc'>About this vehicle: ${current.description}<p>`;
        //create a card with the info from each object
        outputTarget.innerHTML += carString;

        //prep border color
        let borderColor = "2px solid " + current.color.toLowerCase();

        //style current card with JSON color
        let currentCard = document.getElementById("card"+i)
        currentCard.style.border = borderColor;
      }
    callback();
    }
  }
})();

CarLot.loadInventory(CarLot.buildCards);

