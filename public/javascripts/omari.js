angular.module('Omari', [])
  .controller('selfnetController', function($scope, $http) {
    $scope.tweets = [];
    this.URLs = []
    $scope.errorMessage = '';

    var url = "http://aggregators.omari.dev:3000/people"
    // var url = "http://tylerleesmith.herokuapp.com/api"

    $http.get(url)
      .success(function(data, status, headers, config) {
        $scope.people = data;
        console.log($scope.people);
      })
      .error(function(data, status, headers, config) {
        console.log("error!")
        console.log(data);
      });

  });
