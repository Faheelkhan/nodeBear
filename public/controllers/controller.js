var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

$scope.allBears ;
var refresh = function() {
  $http.get('/api/bears').success(function(response) {
    console.log("I got the data I requested");
    $scope.apibears = response;
    $scope.allBears = "";
    $scope.show();
  });
};

$scope.addContact = function() {
  var contact = $scope.contact;
  console.log(contact);
  $http.post('/api/bears',contact).success(function(response) {
    console.log($scope.allBears);
    refresh();
  });
};

$scope.show = function(){
  $http.get('/api/bears').success(function(response){
     $scope.allBears = response;
    console.log($scope.allBears);
  })
}
$scope.show();

$scope.remove = function(id) {
  console.log(id);
  $http.delete('/api/bears/' + id).success(function(response) {
    refresh();
  });
};
$scope.edit = function(id){
  console.log(id);
  $http.get('/contactlist/'+id).success(function(response){
    $scope.contact = response;
  });
};
$scope.update = function(){
  console.log($scope.contact._id);
   $http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response) {
    refresh();
  })
  
}

$scope.deselect = function() {
  $scope.contact = "";
}

}])