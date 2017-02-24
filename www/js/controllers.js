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
  .controller('ProductDetailCtrl', function ($scope, $stateParams, ProductsService,$ionicPopup) {
    ProductsService.get($stateParams.productId).then(
      function (data) {
        $scope.product=data ;
      }
    )
    $scope.collect = function () {
      ProductsService.addcollect($stateParams.productId).then(
        function (data) {
          if(data=="success"){
            $scope.Alert();
          }else{

          }
        }
      )
    }
    $scope.Alert = function () {
      var alertPopup = $ionicPopup.alert({
        // title: 'Don\'t eat that!',
        template: '收藏成功！'
      });
      alertPopup.then(function(res) {
      });
    }


      // };

    ProductsService.getPlan().then(
      function (data) {
        $scope.plans = data;
      }
    )
  })
  .controller('ProductPlanCtrl', function ($scope, $stateParams, PlanService) {
    PlanService.get($stateParams.planId).then(
      function (data) {
        $scope.plan=data ;
      }
    )
  })

function ContentController($scope, $ionicSideMenuDelegate) {
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
}




;
