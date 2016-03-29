angular.module('formify.controller', ['ngCordova'])

.controller('landingCtrl', function($scope,$state){
	$scope.form1 = function(){
		$state.go('form1');
	};
	$scope.moreforms = function(){
		$state.go('moreforms');
	};
	$scope.join = function(){
		$state.go('join');
	};
})
.controller('formCtrl', function($scope){
	$scope.sending = function(staff){
		// console.log(user);
		cordova.plugins.email.isAvailable(
			function(){
				var email = {
				    to: 'weipeng.wu@scotiabank.com',
				    subject: 'Formify Request',
				    body: '<html><head></head><h4>Consillium Onboard/Offboarding Access Request</h4><h5>SECTION1 | MANDATORY FOR ALL REQUESTS</h5><table width="600" style="border:1px solid #ccc;border-collapse: collapse;border-spacing: 0;display: table;"><tr style="background-color: #f9f9f9;"><td style="padding:8px;border-bottom: 1px solid #ccc">Name of Staff</td><td style="padding:8px;border-bottom: 1px solid #ccc">'+staff.name+'</td></tr><tr><td style="padding:8px;border-bottom: 1px solid #ccc">Staff Type</td><td style="padding:8px;border-bottom: 1px solid #ccc">'+staff.type+'</td></tr><tr style="background-color: #f9f9f9;"><td style="padding:8px;border-bottom: 1px solid #ccc">Start Date</td><td style="padding:8px;border-bottom: 1px solid #ccc">'+staff.startdate+'</td></tr><tr><td style="padding:8px;border-bottom: 1px solid #ccc">End Date</td><td style="padding:8px;border-bottom: 1px solid #ccc">'+staff.enddate+'</td></tr><tr style="background-color: #f9f9f9;"><td style="padding:8px;border-bottom: 1px solid #ccc">Director</td><td style="padding:8px;border-bottom: 1px solid #ccc">'+staff.director+'</td></tr><tr><td style="padding:8px;border-bottom: 1px solid #ccc">VP</td><td style="padding:8px;border-bottom: 1px solid #ccc">'+staff.vp+'</td></tr><tr style="background-color: #f9f9f9;"><td style="padding:8px;border-bottom: 1px solid #ccc">Email Address</td><td style="padding:8px;border-bottom: 1px solid #ccc">'+staff.email+'</td></tr><tr><td style="padding:8px;border-bottom: 1px solid #ccc">Floor</td><td style="padding:8px;border-bottom: 1px solid #ccc">'+staff.floor+'</td></tr><tr style="background-color: #f9f9f9;"><td style="padding:8px;border-bottom: 1px solid #ccc">Additional Comments</td><td style="padding:8px;border-bottom: 1px solid #ccc">'+staff.comments+'</td></tr></table><h5>SECTION 4 | NEW STAFF</h5><table width="600" style="border:1px solid #ccc;border-collapse: collapse;border-spacing: 0;display: table;"><tr style="background-color: #f9f9f9;"><td style="padding:8px;border-bottom: 1px solid #ccc">300 Consilium parking pass required</td><td style="padding:8px;border-bottom: 1px solid #ccc">'+staff.parkingpass+'</td></tr><tr><td style="padding:8px;border-bottom: 1px solid #ccc">If yes, how many days a week do they drive</td><td style="padding:8px;border-bottom: 1px solid #ccc">'+staff.parkingdays+'</td></tr><tr style="background-color: #f9f9f9;"><td style="padding:8px;border-bottom: 1px solid #ccc">300 Consilium building pass required</td><td style="padding:8px;border-bottom: 1px solid #ccc">'+staff.buildingpass+'</td></tr><tr><td style="padding:8px;border-bottom: 1px solid #ccc">If yes, how many days a week will they be on-site?</td><td style="padding:8px;border-bottom: 1px solid #ccc">'+staff.onsitedays+'</td></tr><tr style="background-color: #f9f9f9;"><td style="padding:8px;border-bottom: 1px solid #ccc">Has desk space been identified?</td><td style="padding:8px;border-bottom: 1px solid #ccc">'+staff.deskidentified+'</td></tr><tr><td style="padding:8px;border-bottom: 1px solid #ccc">If yes, provide workstation #</td><td style="padding:8px;border-bottom: 1px solid #ccc">'+staff.workstation+'</td></tr><tr style="background-color: #f9f9f9;"><td style="padding:8px;border-bottom: 1px solid #ccc">Key Lock #</td><td style="padding:8px;border-bottom: 1px solid #ccc">'+staff.keylock+'</td></tr></table></html>',
				    isHtml: true
				  };
		  		cordova.plugins.email.open(email);
			}
		)
	}
})
.controller('joinCtrl', function($scope){
	$scope.sending = function(join){
		cordova.plugins.email.isAvailable(
			function(){
				var email = {
				    to: 'weipeng.wu@scotiabank.com',
				    subject: 'Formify Request',
				    body: '<html><head></head><h4>Join Formify</h4><table width="600" style="border:1px solid #ccc;border-collapse: collapse;border-spacing: 0;display: table;"><tr style="background-color: #f9f9f9;"><td style="padding:8px;border-bottom: 1px solid #ccc">Name</td><td style="padding:8px;border-bottom: 1px solid #ccc">'+join.name+'</td></tr><tr><td style="padding:8px;border-bottom: 1px solid #ccc">Email</td><td style="padding:8px;border-bottom: 1px solid #ccc">'+join.email+'</td></tr></table></html>',
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

.controller('PopupCtrl',function($scope, $ionicPopup, $timeout) {
   // An alert dialog
   $scope.showAlert = function() {
     var alertPopup = $ionicPopup.alert({
       title: 'Consillium Onboard/Offboarding Form',
       template: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.'
     });
   };
})