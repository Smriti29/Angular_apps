(function () {
	
angular.module('myFirstApp',[])
.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject=[$scope];
function LunchCheckController($scope) {
	$scope.message="";
	$scope.LunchCheck= function(lunch) {
		var result;
		var inputString=$scope.lunch;
		$scope.message="lol";
		result=inputString.split(",");
		if(inputString=="" || inputString==null) {
		$scope.message="Please enter data first";
		
		}
		else if(result.length>3) {
		$scope.message="Too much!";
	    }
		else $scope.message="Enjoy!";	
	}
}

})();