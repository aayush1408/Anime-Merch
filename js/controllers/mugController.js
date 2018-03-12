myShop.controller('mugController', function ($scope, $routeParams, mugFactory) {
    $scope.mugs = mugFactory.getMugs();
    $scope.params = $routeParams.id;
    $scope.addCart = function (mug) {
        mug.cart = true;
        swal({ text: 'Added', icon: "success" });
        console.log(mug);
    }
    $scope.removeCart = function (mug) {
        mug.cart = false;
        swal({ text: 'Removed', icon: "success" });
        console.log(mug)
    }
});