// 'use strict';
//
// angular.module('app').run(
//   ['$rootScope', '$state', '$stateParams',
//     function ($rootScope, $state, $stateParams) {
//       $rootScope.$state = $state;
//       $rootScope.$stateParams = $stateParams;
//     }
//   ]
// ).config(
//   ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider',
//     function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
//       var ctx = window.ctx;
//       // $locationProvider.hashPrefix('');项目名掩码
//       $urlRouterProvider.otherwise('/app/index');
//
//       //http请求过滤器
//       $httpProvider.interceptors.push('UserInterceptor');
//
//       $stateProvider
//         .state('app', {
//           abstract: true,
//           url: '/app',
//           templateUrl: 'app/common/template/app.html',
//           controller: 'tplCtrl',
//           resolve: {
//             deps: ['$ocLazyLoad',
//               function ($ocLazyLoad) {
//                 return $ocLazyLoad.load('app/resources/js/common/controller/template.controller.js')
//               }]
//
//
//           }
//         })
//         .state('app.approve_plan', {
//           url: '/approve_plan',
//           templateUrl: 'app/modules/approve/tpl/approve_plan.html',
//           controller: 'ApproveCtrl',
//           resolve: {
//             deps: ['$ocLazyLoad',
//               function ($ocLazyLoad) {
//                 return $ocLazyLoad.load(['app/modules/approve/js/approve_plan.controller.js',
//                   'app/modules/approve/js/approve_plan.service.js',
//                   'app/modules/common/js/dropdown.service.js',
//                   'app/modules/ccc/js/projectMessage.service.js',
//                   // 'app/vendor/js/bootstrap-datepicker.js'
//                 ])
//               }]
//           }
//         })
//
//
//
//
//     }
//   ]
// )
