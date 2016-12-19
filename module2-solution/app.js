(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('AlreadyBoughtController', AlreadyBoughtController)
.controller('ToBuyController', ToBuyController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var ToBuy = this;

     ToBuy.errorMessage="Nothing bought yet.";
    ToBuy.boughtitems = ShoppingListCheckOffService.showItems();
  
}


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var showList = this;

  showList.items = ShoppingListCheckOffService.getItems();
  showList.errorMessage="Everything is bought!";
  showList.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.addItem(itemIndex);
    ShoppingListCheckOffService.removeItem(itemIndex);
   
  };
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var items = [{name: "Cookies", quantity: 2},
             {name: "Chips", quantity: 5},
             {name: "Icecream", quantity: 7},
             {name: "Chocolates", quantity: 10},
             {name: "Sugary drinks", quantity: 6},
             {name: "Pizza", quantity: 2}];
  var boughtitems = [];
  service.addItem = function (itemIndex) {
      boughtitems.push(items[itemIndex]);
       
   };

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
   };

  service.buyItem = function(itemIndex) {
    items.splice(itemIndex, 1);
    boughtitems.push(items[itemIndex-1])
  }

  service.getItems = function () {
    return items;
  };
  service.showItems = function () {
    return boughtitems;
  };
}

})();
