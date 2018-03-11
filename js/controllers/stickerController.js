myShop.controller('stickerController', function ($scope, stickerFactory) {
    $scope.stickers = stickerFactory.getStickers();
});