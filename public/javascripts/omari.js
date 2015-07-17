angular.module('Omari', [])
  .controller('selfnetController', function($scope, $http) {
    $scope.tweets = [];
    this.URLs = []
    $scope.errorMessage = '';

    var url = "http://aggregators.omari.dev:3000/people"

    //Code Translation:
    //First, we retrieve all the people that have registered with the Omari people aggregator
    //then, for each one of their URLs, we retrieve the data from their API.
    $http.get(url)
      .success(function(aggregatorData, status, headers, config) {
        $scope.people = [];
        for(var i = 0; i < aggregatorData.length; ++i){

          $http.get(aggregatorData[i].url)
            .success(function(personalData, status, headers, config) {

              $scope.people.push({
                  url:aggregatorData[i],
                  data:personalData
              });
            })
            .error(function(personalData, status, headers, config) {
              console.log("personal data '" + aggregatorData[i] + "' failed to load");
            })
        }
      })
      .error(function(data, status, headers, config) {
        console.log("aggregator Data failed to load");
      });

  });
