(function(){
  var module = angular.module("gitHubViewer");
  
  var RepoController =  function($scope,$routeParams,github){
    
    var reponame=$routeParams.reponame;
    var username = $routeParams.username;
    
     var onError = function(reason) {
      $scope.error = reason;
    };
    
    var onRepo = function(data){
      $scope.repo = data;
    };
    
    github.getRepoDetails(username, reponame)
      .then(onRepo, onError);
  };
  
  module.controller("RepoController", RepoController);
}());
