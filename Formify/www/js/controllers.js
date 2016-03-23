angular.module('formify.controller', ['ngCordova'])

.controller('landingCtrl', function($scope,$state){
	$scope.form1 = function(){
		$state.go('form1');
	};
	$scope.moreforms = function(){
		$state.go('moreforms');
	};
})
.controller('formCtrl', function($scope,$ionicPlatform){
	$scope.sending = function(){
		$ionicPlatform.ready(function(){
		// cordova.plugins.email.isAvailable().then(function() {
		// 	console.log('sending');
		//    var email = {
		//     to: 'weipeng.wu@scotiabank.com',
		//     subject: 'Formify Request',
		//     body: 'How are you? Nice greetings from Leipzig',
		//     isHtml: true
		//   };
		//   cordova.plugins.email.open(email).then(null, function () {
		//    	// user cancelled email
		//  	});
		//  }, function () {
		//    console.log('you need to set up your email account first');
		//  });
		cordova.plugins.email.isAvailable(
			function(){
				var email = {
				    to: 'weipeng.wu@scotiabank.com',
				    subject: 'Formify Request',
				    body: 'How are you? Nice greetings from Leipzig',
				    isHtml: true
				  };
		  		cordova.plugins.email.open(email);
			}
		)
		})
	}
})
.controller('moreformsCtrl', function($scope, Formlist){
	$scope.list = Formlist.all();
})