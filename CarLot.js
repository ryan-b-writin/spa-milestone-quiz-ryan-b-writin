var outputTarget = document.getElementById("outputTarget");

var CarLot = (function () {
  var inventory = [];

  return {
    getInventory: function () {

    },

    //get JSON & parse into an array of objects
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();

      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.send();

      inventoryLoader.addEventListener("load", function () {
        inventory = JSON.parse(this.responseText).cars;
        callback(inventory);
      });
    },

    // make array of objects into html cards
    buildCards: function(cars){
      for (var i=0;i<cars.length;i++) {
        var current = cars[i];
        var available = "";
        // prepare an availability declaration
        if (current.purchased){
          available = "<p>Not currently available for sale.</p>"
        } else {
          available = "<p>Available for sale!</p>"
        }
        // build output string
        var carString = ""
        carString += "<div class='col-xs-4 center'>";
        carString += "<div class='card'>";
        carString += `<p>Make: ${current.make}<p>`;
        carString += `<p>Model: ${current.model}<p>`;
        carString += `<p>Year: ${current.year}<p>`;
        carString += `<p>Price: ${current.price}<p>`;
        carString += `<p>Color: ${current.color}<p>`;
        carString += available;
        carString += `<p>About this vehicle: ${current.description}<p>`;
        //create a card with the info from each object
        outputTarget.innerHTML += carString;
      }
    }
  }

})();

CarLot.loadInventory(CarLot.buildCards);

