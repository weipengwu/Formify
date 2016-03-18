angular.module('starter.controllers', [])

.controller('SignInCtrl', function($scope, $state, $http) {
  
  $scope.signIn = function(user) {
    //console.log('Sign-In');
    $http({
      method: "post",
      url: "https://api.mailgun.net/v3/sandbox5e45aa15a12c42d4916c693ccb6a22f2.mailgun.org/messages",
      dataType: 'json',
      username:'api',
      password: 'key-d0829763a152e25119d5910d5c2ff864',
      headers: {"Authorization": "Basic "+btoa("api:key-d0829763a152e25119d5910d5c2ff864")},
      data: {
        to: 'weipeng.wu@scotiabank.com',
        from: 'weipeng.wu@scotiabank.com',
        subject: 'Form Request',
        html: '<p>Test</p>'
      }
    }).then(function successCallback(response) {
      $state.go('tab.dash');
    }, function errorCallback(response) {
      console.log(response);
    });
    
  };
  
})

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  // $scope.settings = {
  //   enableFriends: true
  // };
});
