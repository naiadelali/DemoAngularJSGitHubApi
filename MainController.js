(function() {

  var myapp = angular.module("gitHubViewer");

  var MainController = function($scope, $interval, $location) {

   
   
    $scope.search = function(username) {
        if(countdownInterval){
          $interval.cancel(countdownInterval);
          $scope.countdown=null;
        }
         $location.path("user/"+username);
    };
    
    var decrementCountDown = function(){
        $scope.countdown  -=1;
        if($scope.countdown <1){
          $scope.search($scope.username);
        }
    };
    
    var countdownInterval = null;
    var starCountdown = function(){
      
      countdownInterval=$interval(decrementCountDown,1000,$scope.countdown);
      
    };

    $scope.username = "Angular";
    $scope.countdown=5;
    starCountdown();

  };

  myapp.controller('MainController',  MainController);
}());