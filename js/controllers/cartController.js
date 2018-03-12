myShop.controller('cartController', function ($scope, stickerFactory, mugFactory, shirtFactory) {
    $scope.shirts = shirtFactory.getShirts();
    $scope.mugs = mugFactory.getMugs();
    $scope.stickers = stickerFactory.getStickers();
    $scope.removeShirt = function (shirt) {
        shirt.cart = false;
        swal({ text: 'Removed', icon: "success" });
        console.log(shirt)
    }
    $scope.removeMug = function (mug) {
        mug.cart = false;
        swal({ text: 'Removed', icon: "success" });
        console.log(mug)
    }
    $scope.removeSticker = function (sticker) {
        sticker.cart = false;
        swal({ text: 'Removed', icon: "success" });
        console.log(sticker);
    }
});