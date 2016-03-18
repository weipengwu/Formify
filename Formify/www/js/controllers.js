angular.module('formify.controller', [])

.controller('landingCtrl', function($scope,$state){
	$scope.form1 = function(){
		$state.go('form1');
	}
	$scope.moreforms = function(){
		$state.go('form1');
	}
})
.controller('formCtrl', function($scope){
	
});