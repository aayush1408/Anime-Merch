myShop.config(['$routeProvider', '$locationProvider', function ($routeProvider) {
    $routeProvider
        .when('/', { templateUrl: "views/home.html" })
        .when('/shirts', { templateUrl: "views/shirts.html", controller: 'shirtController' })
        .when('/cart', { templateUrl: "views/cart.html", controller: 'shirtController' })
        .when('/mugs', { templateUrl: "views/mugs.html", controller: 'mugController' })
        .when('/cart', { templateUrl: "views/cart.html", controller: 'cartController' })
        .when('/productsShirt/:id', { templateUrl: "views/product-shirt.html", controller: 'shirtController' })
        .when('/productsMug/:id', { templateUrl: "views/product-mug.html", controller: 'mugController' })
        .when('/productsSticker/:id', { templateUrl: "views/product-stickers.html", controller: 'stickerController' })
        .when('/stickers', { templateUrl: "views/sticker.html", controller: 'stickerController' })
        .otherwise({ redirectTo: '/' });
}]);


