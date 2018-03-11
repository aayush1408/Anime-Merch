myShop.controller('shirtController', function ($scope, shirtFactory) {
    $scope.shirts = shirtFactory.getShirts();
});