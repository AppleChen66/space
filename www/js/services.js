angular.module('starter.services', [])
  .service('a', function ($http) {
    return {
      str: "123",
      test1: function () {
      },
      test2: function () {
      }
    }
  })
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
  .service('ProductsService', function ($q,$http) {
    return {
      all: function (products) {
        var deferred = $q.defer();
        $http.get("/space/www/json/productList.json",products, {}).
        success(function (response) {
          deferred.resolve(response.products);
        }).error(function () {
          deferred.reject()
        });
        return deferred.promise;
      },
      getPlan:function (plans) {
        var deferred = $q.defer();
        $http.get("/space/www/json/productPlan.json",plans, {}).
        success(function (response) {
          deferred.resolve(response.plans);
        }).error(function () {
          deferred.reject()
        });
        return deferred.promise;
      },
      remove: function (product) {
        chats.splice(products.indexOf(product), 1);
      },
      get: function (productId) {
        var deferred = $q.defer();
        $http.get("/space/www/json/productList.json",productId, {}).
        success(function (response) {
          deferred.resolve(response.products[productId]);
        }).error(function () {
          deferred.reject()
        });
        return deferred.promise;
      },
      addcollect: function (productId) {
        var deferred = $q.defer();
        $http.get("/space/www/json/productPlan.json",productId, {}).
        success(function (response) {
          deferred.resolve(response.status);
        }).error(function () {
          deferred.reject()
        });
        return deferred.promise;
      }
    };
  })

  .service('PlanService', function ($q,$http) {
    return {
      all: function (plans) {
        var deferred = $q.defer();
        $http.get("/space/www/json/productPlan.json",plans, {}).
        success(function (response) {
          deferred.resolve(response.plans);
        }).error(function () {
          deferred.reject()
        });
        return deferred.promise;
      },
      get: function (planId) {
        var deferred = $q.defer();
        $http.get("/space/www/json/productPlan.json",planId, {}).
        success(function (response) {
          deferred.resolve(response.plans[planId]);
        }).error(function () {
          deferred.reject()
        });
        return deferred.promise;
      }
    };
  })

  // .service('AlertServce', function ($q,$http) {
  //   var alertPopup = $ionicPopup.alert({
  //     title: 'Don\'t eat that!',
  //     template: 'It might taste good'
  //   });
  //   alertPopup.then(function(res) {
  //   });
  // })



;
