myShop.factory('stickerFactory', function () {
    var factory = {};
    var stickers = [
        {
            name: 'Tobi',
            imgUrl: 'public/images/Stickers/tobi.jpg',
            price: 200
        },
        {
            name: 'Meliodas',
            imgUrl: 'public/images/Stickers/meliodas.jpg',
            price: 210
        },
        {
            name: 'Kaneki Ken',
            imgUrl: 'public/images/Stickers/kaneki.jpg',
            price: 180
        },
        {
            name: 'Levi',
            imgUrl: 'public/images/Stickers/levi.jpg',
            price: 240
        },

        {
            name: 'Goku',
            imgUrl: 'public/images/Stickers/goku.jpg',
            price: 300
        },
        {
            name: 'Sasuke',
            imgUrl: 'public/images/Stickers/sasuke.jpg',
            price: 150
        },
        {
            name: 'Whis',
            imgUrl: 'public/images/Stickers/whis.jpg',
            price: 200
        },
        {
            name: 'Natsu',
            imgUrl: 'public/images/Stickers/fairy.jpg',
            price: 210
        },
        {
            name: 'One piece',
            imgUrl: 'public/images/Stickers/luffy.webp',
            price: 180
        },
        {
            name: 'Itachi',
            imgUrl: 'public/images/Stickers/itachi.jpg',
            price: 240
        },

        {
            name: 'All Might',
            imgUrl: 'public/images/Stickers/all-might.jpg',
            price: 300
        },
        {
            name: 'Ban',
            imgUrl: 'public/images/Stickers/Ban.jpg',
            price: 150
        },
        {
            name: 'One punch man',
            imgUrl: 'public/images/Stickers/op.jpg',
            price: 150
        },
    ];
    factory.getStickers = function () {
        return stickers;
    };
    return factory;
});