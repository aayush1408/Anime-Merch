myShop.factory('stickerFactory', function () {
    var factory = {};
    var stickers = [
        {
            id: 1,
            name: 'Whis',
            imgUrl: 'public/images/Stickers/whis.jpg',
            price: 20,
            cart: false
        },
        {
            id: 2,
            name: 'Meliodas',
            imgUrl: 'public/images/Stickers/meliodas.jpg',
            price: 21,
            cart: false
        },
        {
            id: 3,
            name: 'Kaneki Ken',
            imgUrl: 'public/images/Stickers/kaneki.jpg',
            price: 10,
            cart: false
        },
        {
            id: 4,
            name: 'Levi',
            imgUrl: 'public/images/Stickers/levi.jpg',
            price: 24,
            cart: false
        },

        {
            id: 5,
            name: 'Goku',
            imgUrl: 'public/images/Stickers/goku.jpg',
            price: 30,
            cart: false
        },
        {
            id: 6,
            name: 'Sasuke',
            imgUrl: 'public/images/Stickers/sasuke.jpg',
            price: 15,
            cart: false
        },
        {
            id: 7,
            name: 'Zoro',
            imgUrl: 'public/images/Stickers/zoro.webp',
            price: 100,
            cart: false
        },
        {
            id: 8,
            name: 'Natsu',
            imgUrl: 'public/images/Stickers/fairy.jpg',
            price: 10,
            cart: false
        },
        {
            id: 9,
            name: 'One piece',
            imgUrl: 'public/images/Stickers/luffy.webp',
            price: 80,
            cart: false
        },
        {
            id: 10,
            name: 'Itachi',
            imgUrl: 'public/images/Stickers/itachi.jpg',
            price: 40,
            cart: false
        },

        {
            id: 11,
            name: 'All Might',
            imgUrl: 'public/images/Stickers/all-might.jpg',
            price: 30,
            cart: false
        },
        {
            id: 12,
            name: 'Ban',
            imgUrl: 'public/images/Stickers/Ban.jpg',
            price: 50,
            cart: false
        },
        {
            id: 13,
            name: 'Saitama',
            imgUrl: 'public/images/Stickers/op.jpg',
            price: 50,
            cart: false
        },
        {
            id: 14,
            name: 'Doraemon',
            imgUrl: 'public/images/Stickers/doraemon.jpg',
            price: 40,
            cart: false
        },

        {
            id: 15,
            name: 'Full Metal',
            imgUrl: 'public/images/Stickers/fma.jpg',
            price: 30,
            cart: false
        },
        {
            id: 16,
            name: 'Boruto',
            imgUrl: 'public/images/Stickers/boruto.webp',
            price: 50,
            cart: false
        },
        {
            id: 17,
            name: 'Vegeta',
            imgUrl: 'public/images/Stickers/vegeta.jpg',
            price: 50,
            cart: false
        },
        {
            id: 18,
            name: 'HXH',
            imgUrl: 'public/images/Stickers/hxh.jpg',
            price: 50,
            cart: false
        },
    ];
    factory.getStickers = function () {
        return stickers;
    };
    return factory;
});