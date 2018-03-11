myShop.controller('shirtController', function ($scope, $routeParams, shirtFactory) {
    $scope.shirts = shirtFactory.getShirts();
    $scope.params = $routeParams.id;
});