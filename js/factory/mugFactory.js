var myShop = angular.module('myShop');


myShop.factory('mugFactory', function () {
    var factory = {};
    var mugs = [
        {
            name: 'Itachi',
            imgUrl: 'public/images/Mugs/itachi.jpg',
            price: 200
        },
        {
            name: 'Meliodas',
            imgUrl: 'public/images/Mugs/meliodas.jpg',
            price: 210
        },
        {
            name: 'Roy Mustang',
            imgUrl: 'public/images/Mugs/roy.jpg',
            price: 180
        },
        {
            name: 'Attack on Titan',
            imgUrl: 'public/images/Mugs/titan.jpg',
            price: 240
        },

        {
            name: 'Goku',
            imgUrl: 'public/images/Mugs/dbz.jpg',
            price: 300
        },
        {
            name: 'Madara Uchiha',
            imgUrl: 'public/images/Mugs/madara.jpg',
            price: 150
        },
        {
            name: 'Mizuki',
            imgUrl: 'public/images/Mugs/mizuki.jpg',
            price: 200
        },
        {
            name: 'Naruto',
            imgUrl: 'public/images/Mugs/naruto.jpg',
            price: 210
        },
        {
            name: 'One piece',
            imgUrl: 'public/images/Mugs/one-piece.jpg',
            price: 180
        },
        {
            name: 'Boku No Hero',
            imgUrl: 'public/images/Mugs/boku.jpg',
            price: 240
        },

        {
            name: 'Kakashi',
            imgUrl: 'public/images/Mugs/kakashi.jpg',
            price: 300
        },
        {
            name: 'Pokemon',
            imgUrl: 'public/images/Mugs/pokemon.jpg',
            price: 150
        },
        {
            name: 'One punch man',
            imgUrl: 'public/images/Mugs/op.jpg',
            price: 150
        },
    ];
    factory.getMugs = function () {
        return mugs;
    };
    return factory;
});