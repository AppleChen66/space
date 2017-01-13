angular.module('starter.services', [])

  .factory('Chats', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
      id: 0,
      name: 'Ben Sparrow',
      lastText: 'You on your way?',
      face: 'img/ben.png'
    }, {
      id: 1,
      name: 'Max Lynx',
      lastText: 'Hey, it\'s me',
      face: 'img/max.png'
    }, {
      id: 2,
      name: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      face: 'img/adam.jpg'
    }, {
      id: 3,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      face: 'img/perry.png'
    }, {
      id: 4,
      name: 'Mike Harrington',
      lastText: 'This is wicked good ice cream.',
      face: 'img/mike.png'
    }];

    // var products = [{
    //   id:0,
    //   name:1,
    //   content:1,
    //   picture:'img/bedroom.jpg'
    // },{
    //   id:1,
    //   name:2,
    //   content:2,
    //   picture:'img/bedroom.jpg'
    // },{
    //   id:2,
    //   name:3,
    //   content:3,
    //   picture:'img/bedroom.jpg'
    // },{
    //   id:3,
    //   name:4,
    //   content:4,
    //   picture:'img/bedroom.jpg'
    // },{
    //   id:4,
    //   name:5,
    //   content:5,
    //   picture:'img/bedroom.jpg'
    // },{
    //   id:5,
    //   name:6,
    //   content:6,
    //   picture:'img/bedroom.jpg'
    // }]

    return {
      all: function () {
        return chats;
      },
      remove: function (chat) {
        chats.splice(chats.indexOf(chat), 1);
      },
      get: function (chatId) {
        for (var i = 0; i < chats.length; i++) {
          if (chats[i].id === parseInt(chatId)) {
            return chats[i];
          }
        }
        return null;
      }
    };
  })
  .service('ProductsService', function () {
    var products = [{
      id: 0,
      name: 1,
      content: 1,
      picture: 'img/bedroom.jpg'
    }, {
      id: 1,
      name: 2,
      content: 2,
      picture: 'img/bedroom.jpg'
    }, {
      id: 2,
      name: 3,
      content: 3,
      picture: 'img/bedroom.jpg'
    }, {
      id: 3,
      name: 4,
      content: 4,
      picture: 'img/bedroom.jpg'
    }, {
      id: 4,
      name: 5,
      content: 5,
      picture: 'img/bedroom.jpg'
    }, {
      id: 5,
      name: 6,
      content: 6,
      picture: 'img/bedroom.jpg'
    }]

    return {
      all: function () {
        return products;
      },
      remove: function (product) {
        chats.splice(products.indexOf(product), 1);
      },
      get: function (productId) {
        for (var i = 0; i < products.length; i++) {
          if (products[i].id === parseInt(productId)) {
            return products[i];
          }
        }
        return null;
      }
    };
  })
  .service('a', function ($http) {
    return {
      str: "123",
      test1: function () {
      },
      test2: function () {
      }
    }
  });
