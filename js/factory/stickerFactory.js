myShop.factory('stickerFactory', function () {
    var factory = {};
    var stickers = [
        {
            name: 'Whis',
            imgUrl: 'public/images/Stickers/whis.jpg',
            price: 20
        },
        {
            name: 'Meliodas',
            imgUrl: 'public/images/Stickers/meliodas.jpg',
            price: 21
        },
        {
            name: 'Kaneki Ken',
            imgUrl: 'public/images/Stickers/kaneki.jpg',
            price: 10
        },
        {
            name: 'Levi',
            imgUrl: 'public/images/Stickers/levi.jpg',
            price: 24
        },

        {
            name: 'Goku',
            imgUrl: 'public/images/Stickers/goku.jpg',
            price: 30
        },
        {
            name: 'Sasuke',
            imgUrl: 'public/images/Stickers/sasuke.jpg',
            price: 15
        },
        {
            name: 'Zoro',
            imgUrl: 'public/images/Stickers/zoro.webp',
            price: 100
        },
        {
            name: 'Natsu',
            imgUrl: 'public/images/Stickers/fairy.jpg',
            price: 10
        },
        {
            name: 'One piece',
            imgUrl: 'public/images/Stickers/luffy.webp',
            price: 80
        },
        {
            name: 'Itachi',
            imgUrl: 'public/images/Stickers/itachi.jpg',
            price: 40
        },

        {
            name: 'All Might',
            imgUrl: 'public/images/Stickers/all-might.jpg',
            price: 30
        },
        {
            name: 'Ban',
            imgUrl: 'public/images/Stickers/Ban.jpg',
            price: 50
        },
        {
            name: 'One punch man',
            imgUrl: 'public/images/Stickers/op.jpg',
            price: 50
        },
    ];
    factory.getStickers = function () {
        return stickers;
    };
    return factory;
});