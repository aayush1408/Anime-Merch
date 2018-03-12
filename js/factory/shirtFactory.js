myShop.factory('shirtFactory', function () {
    var factory = {};
    var shirts = [
        {
            id: 1,
            name: 'Tobi',
            imgUrl: 'public/images/Shirts/tobi.jpg',
            price: 200,
            sizes: ['XXL', 'XL', 'L', 'M', 'S'],
            cart: false
        },
        {
            id: 2,
            name: 'Meliodas',
            imgUrl: 'public/images/Shirts/meliodas.jpg',
            price: 210,
            sizes: ['XXL', 'L', 'M'],
            cart: false
        },
        {
            id: 3,
            name: 'Kaneki Ken',
            imgUrl: 'public/images/Shirts/kaneki.jpg',
            sizes: ['XXL', 'L', 'M'],
            price: 180,
            cart: false
        },
        {
            id: 4,
            name: 'Midoriya',
            imgUrl: 'public/images/Shirts/mido.jpg',
            price: 240,
            sizes: ['XXL', 'XL', 'S', 'M'],
            cart: false
        },

        {
            id: 5,
            name: 'Goku Ultra Instinct',
            imgUrl: 'public/images/Shirts/goku.png',
            price: 300,
            sizes: ['XXL', 'XL', 'L', 'S'],
            cart: false
        },
        {
            id: 6,
            name: 'Black Clover',
            imgUrl: 'public/images/Shirts/asta.jpg',
            price: 150,
            sizes: ['XXL', 'XL', 'L', 'M'],
            cart: false
        },
        {
            id: 7,
            name: 'Koro Sensei',
            imgUrl: 'public/images/Shirts/koro.jpg',
            price: 200,
            sizes: ['XXL', 'XL', 'L', 'M', 'S'],
            cart: false
        },
        {
            id: 8,
            name: 'Natsu',
            imgUrl: 'public/images/Shirts/natsu.jpg',
            price: 210,
            sizes: ['XXL', 'L', 'M'],
            cart: false
        },
        {
            id: 9,
            name: 'One piece',
            imgUrl: 'public/images/Shirts/one-peice.jpg',
            price: 180,
            sizes: ['XXL', 'XL', 'L', 'M'],
            cart: false
        },
        {
            id: 10,
            name: 'Pikachu',
            imgUrl: 'public/images/Shirts/pikachu.jpg',
            price: 240,
            sizes: ['XXL', 'XL', 'L', 'M'],
            cart: false
        },

        {
            id: 11,
            name: 'Naruto',
            imgUrl: 'public/images/Shirts/sasuke.jpg',
            price: 300,
            sizes: ['XXL', 'XL', 'M'],
            cart: false

        },
        {
            id: 12,
            name: 'Pokemon',
            imgUrl: 'public/images/Shirts/pokemon.jpg',
            price: 150,
            sizes: ['XXL', 'XL', 'L', 'S'],
            cart: false

        },
        {
            id: 13,
            name: 'One punch man',
            imgUrl: 'public/images/Shirts/op.jpg',
            price: 150,
            sizes: ['XL', 'L', 'M'],
            cart: false

        },
    ];
    factory.getShirts = function () {
        return shirts;
    };
    return factory;
});