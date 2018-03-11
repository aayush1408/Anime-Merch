
myShop.config(['$routeProvider', '$locationProvider', function ($routeProvider) {
    $routeProvider
        .when('/', { templateUrl: "views/home.html" })
        .when('/shirts', { templateUrl: "views/shirts.html", controller: 'shirtController' })
        .when('/mugs', { templateUrl: "views/mugs.html", controller: 'mugController' })
        .when('/stickers', { templateUrl: "views/sticker.html", controller: 'stickerController' })
        .otherwise({ redirectTo: '/' });
}]);


