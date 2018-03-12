myShop.controller('shirtController', function ($scope, $routeParams, shirtFactory) {
    $scope.shirts = shirtFactory.getShirts();
    $scope.params = $routeParams.id;
    $scope.addCart = function (shirt) {
        shirt.cart = true;
        swal({ text: 'Added', icon: "success" });
        console.log(shirt);
    }
    $scope.removeCart = function (shirt) {
        shirt.cart = false;
        swal({ text: 'Removed', icon: "success" });
        console.log(shirt)
    }
});