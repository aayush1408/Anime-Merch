var myShop = angular.module('myShop');

myShop.controller('mugController', function ($scope, mugFactory) {
    $scope.mugs = mugFactory.getMugs();
    // console.log($scope.mugs);
});