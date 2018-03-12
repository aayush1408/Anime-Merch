myShop.controller('stickerController', function ($scope, $routeParams, stickerFactory) {
    $scope.stickers = stickerFactory.getStickers();
    $scope.params = $routeParams.id;
    $scope.addCart = function (sticker) {
        sticker.cart = true;
        swal({ text: 'Added', icon: "success" });
        console.log(sticker);
    }
});