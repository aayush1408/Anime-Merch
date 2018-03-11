
myShop.config(['$routeProvider', '$locationProvider', function ($routeProvider) {
    $routeProvider
        .when('/', { templateUrl: "views/home.html" })
        .when('/shirts', { templateUrl: "views/shirts.html", controller: 'shirtController' })
        .when('/mugs', { templateUrl: "views/mugs.html", controller: 'mugController' })
        .otherwise({ redirectTo: '/' });
}]);


