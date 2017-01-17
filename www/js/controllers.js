angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope) {
  })

  .controller('ChatsCtrl', function ($scope, Chats) {
    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      Chats.remove(chat);
    };
  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: false
    };
  })

  .controller('ProductCtrl', function ($scope, ProductsService) {
    ProductsService.all().then(
      function (data) {
        $scope.products=data;
      })
  })

  // .controller('ProductDetailCtrl', function ($scope, $stateParams, ProductsService,PlanService) {
  //   $scope.product = ProductsService.get($stateParams.productId);
  // })
  .controller('ProductDetailCtrl', function ($scope, $stateParams, ProductsService) {
    ProductsService.get($stateParams.productId).then(
      function (data) {
        $scope.product=data ;
      }
    )
    ProductsService.getPlan().then(
      function (data) {
        $scope.plans = data;
      }
    )
  })
  .controller('ProductPlanCtrl', function ($scope, $stateParams, ProductsService) {
    PlanService.get($stateParams.plantId).then(
      function (data) {
        $scope.plan=data ;
      }
    )
  })






;
