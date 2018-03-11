myShop.factory('shirtFactory', function () {
    var factory = {};
    var shirts = [
        {
            name: 'Tobi',
            imgUrl: 'public/images/Shirts/tobi.jpg',
            price: 200
        },
        {
            name: 'Meliodas',
            imgUrl: 'public/images/Shirts/meliodas.jpg',
            price: 210
        },
        {
            name: 'Kaneki Ken',
            imgUrl: 'public/images/Shirts/kaneki.jpg',
            price: 180
        },
        {
            name: 'Midoriya',
            imgUrl: 'public/images/Shirts/mido.jpg',
            price: 240
        },

        {
            name: 'Goku Ultra Instinct',
            imgUrl: 'public/images/Shirts/goku.png',
            price: 300
        },
        {
            name: 'Black Clover',
            imgUrl: 'public/images/Shirts/asta.jpg',
            price: 150
        },
        {
            name: 'Koro Sensei',
            imgUrl: 'public/images/Shirts/koro.jpg',
            price: 200
        },
        {
            name: 'Natsu',
            imgUrl: 'public/images/Shirts/natsu.jpg',
            price: 210
        },
        {
            name: 'One piece',
            imgUrl: 'public/images/Shirts/one-peice.jpg',
            price: 180
        },
        {
            name: 'Pikachu',
            imgUrl: 'public/images/Shirts/pikachu.jpg',
            price: 240
        },

        {
            name: 'Naruto',
            imgUrl: 'public/images/Shirts/sasuke.jpg',
            price: 300
        },
        {
            name: 'Pokemon',
            imgUrl: 'public/images/Shirts/pokemon.jpg',
            price: 150
        },
        {
            name: 'One punch man',
            imgUrl: 'public/images/Shirts/op.jpg',
            price: 150
        },
    ];
    factory.getShirts = function () {
        return shirts;
    };
    return factory;
});