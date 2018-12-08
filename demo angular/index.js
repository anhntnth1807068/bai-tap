

var app = angular.module('memberModule', []);
app.controller('LoginController', function($scope) {
 $scope.listName =[
     {
         name:'ngocanh',
         email:'ngocanh@gmail.com'

 }
 ];
 $scope.add=function () {
     $scope.listName.push($scope.person);
     $scope.person={
         name: '',
         email: ''
     };


 }

});

