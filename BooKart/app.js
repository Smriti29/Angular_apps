 var app = angular.module("bookart",["ngRoute"]);

 app.config(function($routeProvider) {
	$routeProvider
		.when("/books", {
			templateUrl: "snippets/book-list.html",
			controller: "bookctrl"
		})
		.when("/kart", {
			templateUrl: "snippets/kart-list.html",
			controller: "kartctrl"
		})
	.otherwise({
		redirectTo: "/books"
	});
});

app.factory("bookService",function() {
	books = [{bookUrl:"book1.jpg",
 	name:"Harry Potter and the Philosopher Stone",
 	author:"J.K Rowling",
 	publisher: "Bloomsbury Publications",
 	rating: 4.5,
 price: 229,
 quantity: 1,
description: "Harry lives with his aunt and uncle who made his life miserable.But soon harry finds out that he is a wizard. And from there his exciting journey begins"
} ,
{ bookUrl:"book2.jpg",
 	name:"Twilight",
 	author:"Stephanie Mayer",
 	publisher: "Blue House publications",
 	rating: 4,
 price: 99,
 quantity: 1,
description: "Bella comes to live with her dad in a small town forks which she immensely hates until she meets the charming vampire Edward."
},
{ bookUrl:"book3.jpg",
 	name:"Rage of Angels",
 	author:"Sydney Sheldon",
 	publisher: "Random House publications",
 	rating: 3.5,
 price: 150,
 quantity: 1,
description: "A lawyer Jennifer Parker struggles to make her name in a place which is ruled by men and faces the challanges."
},
{ bookUrl:"book5.jpg",
 	name:"Digital Fortress",
 	author:"Dan Brown",
 	publisher: "Random House publications",
 	rating: 3.5,
 price: 249,
 quantity: 1,
description: "Conspiracy in NSA against the country. Cryptography rocks!!!"
},
{ bookUrl:"book6.jpg",
 	name:"Da Vinci Code",
 	author:"Dan Brown",
 	publisher: "Random House publications",
 	rating: 4.5,
 price: 129,
 quantity: 1,
description: "A literature professor Dr. Robert Langdon gets trapped in a murder case which reveals more mysteries."
},
{ bookUrl:"book7.jpg",
 	name:"A matter of honour",
 	author:"Jeffery Archer",
 	publisher: "Random House publications",
 	rating: 3.5,
 price: 429,
 quantity: 1,
description: "A family dispute leads to a terrible situation where family's honour is at stake."
},
{ bookUrl:"book4.jpg",
 	name:"Game of Thrones",
 	author:"George R. R. Martin",
 	publisher: "Bloodshed publications",
 	rating : 1.5,
 price: 550,
 quantity: 1,
description: "Blood! Bloodshed! War within families! War outside families! Inappropriate relationships! Disgusting punishments! Enjoy!"
}
 	];
 	return {
 		getBooks : function () {
           return books;
 	},
 	    
    }   
});
 app.factory("kartService", function() {
     var kart = [];
	
	return {
		getKart: function() {
			return kart;
		},
		addToKart: function(book) {
          if(JSON.stringify(kart).includes(JSON.stringify(book)))
         	alert("Already added!");
	      else kart.push(book);
		},
		buy: function() {
			alert("Thanks for buying. Money has been deducted from your account!");
		},
		remove : function(bookindex) {
            kart[bookindex].quantity = 1;			
			kart.splice(bookindex,1);
		}
    }
});
 app.factory("Item", function() {
   return { 
    total : function(book) {
      return (book.quantity * book.price) || 0;
    }
  }  
});

 app.controller("bookctrl", function($scope,bookService,kartService) {
 	  $scope.books = bookService.getBooks();
	  
	$scope.addToKart = function(book) {
		kartService.addToKart(book);
      }

});
app.controller("kartctrl", function($scope,kartService,Item) {
    $scope.kart = kartService.getKart();
	
	$scope.buy = function() {
		kartService.buy();
	};
	$scope.remove = function(book) {
		kartService.remove(book);
	};

	$scope.$watch('kart', function() {
    var cartTotal = 0;
    
    $scope.kart.forEach(function(book) {
      cartTotal += Item.total(book);
    });
    //console.log(cartTotal);
    $scope.cartTotal = cartTotal;
  }, true);

});






