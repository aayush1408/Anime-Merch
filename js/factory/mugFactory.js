var myShop = angular.module('myShop');


myShop.factory('mugFactory', function () {
    var factory = {};
    var mugs = [
        {
            id: 1,
            name: 'Itachi',
            imgUrl: 'public/images/Mugs/itachi.jpg',
            price: 200,
            cart: false
        },
        {
            id: 2,
            name: 'Meliodas',
            imgUrl: 'public/images/Mugs/meliodas.jpg',
            price: 210,
            cart: false
        },
        {
            id: 3,
            name: 'Roy Mustang',
            imgUrl: 'public/images/Mugs/roy.jpg',
            price: 180,
            cart: false
        },
        {
            id: 4,
            name: 'Attack on Titan',
            imgUrl: 'public/images/Mugs/titan.jpg',
            price: 240,
            cart: false
        },

        {
            id: 5,
            name: 'Goku',
            imgUrl: 'public/images/Mugs/dbz.jpg',
            price: 300,
            cart: false
        },
        {
            id: 6,
            name: 'Madara Uchiha',
            imgUrl: 'public/images/Mugs/madara.jpg',
            price: 150,
            cart: false
        },
        {
            id: 7,
            name: 'Mizuki',
            imgUrl: 'public/images/Mugs/mizuki.jpg',
            price: 200,
            cart: false
        },
        {
            id: 8,
            name: 'Naruto',
            imgUrl: 'public/images/Mugs/naruto.jpg',
            price: 210,
            cart: false
        },
        {
            id: 9,
            name: 'One piece',
            imgUrl: 'public/images/Mugs/one-piece.jpg',
            price: 180,
            cart: false
        },
        {
            id: 10,
            name: 'Boku No Hero',
            imgUrl: 'public/images/Mugs/boku.jpg',
            price: 240,
            cart: false
        },

        {
            id: 11,
            name: 'Kakashi',
            imgUrl: 'public/images/Mugs/kakashi.jpg',
            price: 300,
            cart: false
        },
        {
            id: 12,
            name: 'Pokemon',
            imgUrl: 'public/images/Mugs/pokemon.jpg',
            price: 150,
            cart: false
        },
        {
            id: 13,
            name: 'One punch man',
            imgUrl: 'public/images/Mugs/op.jpg',
            price: 150,
            cart: false
        },
        {
            id: 14,
            name: 'Buu',
            imgUrl: 'public/images/Mugs/majin.jpg',
            price: 300,
            cart: false
        },
        {
            id: 15,
            name: 'Asta',
            imgUrl: 'public/images/Mugs/asta.jpg',
            price: 150,
            cart: false
        },
        {
            id: 16,
            name: 'Kuroku',
            imgUrl: 'public/images/Mugs/kuroku.jpg',
            price: 150,
            cart: false
        },
    ];
    factory.getMugs = function () {
        return mugs;
    };
    return factory;
});