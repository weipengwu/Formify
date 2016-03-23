angular.module('formify.controller', ['ngCordova'])

.controller('landingCtrl', function($scope,$state){
	$scope.form1 = function(){
		$state.go('form1');
	};
	$scope.moreforms = function(){
		$state.go('moreforms');
	};
})
.controller('formCtrl', function($scope){
	$scope.sending = function(user){
		// console.log(user);
		cordova.plugins.email.isAvailable(
			function(){
				var email = {
				    to: 'weipeng.wu@scotiabank.com',
				    subject: 'Formify Request',
				    body: '<h4>Consillium Onboard/Offboarding Form Request</h4><div>First Name: '+user.fname+'<br>Last Name: '+user.lname+'<br>Email Address: '+user.email+'<br>Gender: '+user.gender+'<br>Title: '+user.title+'<br>Message: '+user.message+'</div>',
				    isHtml: true
				  };
		  		cordova.plugins.email.open(email);
			}
		)
	}
})
.controller('moreformsCtrl', function($scope, Formlist){
	$scope.list = Formlist.all();
})