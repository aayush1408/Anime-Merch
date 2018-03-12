myShop.controller('shirtController', function ($scope, $routeParams, shirtFactory) {
    $scope.shirts = shirtFactory.getShirts();
    $scope.params = $routeParams.id;
    $scope.addCart = function (shirt) {
        shirt.cart = true;
        swal({ icon: "success" });
        console.log(shirt);
    }
});