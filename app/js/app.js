'use strict';

/* App Module */

var proverbialApp = angular.module('proverbialApp', [
  'ngRoute',
  'proverbialControllers'
]);

proverbialApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/proverbs', {
        templateUrl: 'partials/proverbial-home.html',
        controller: 'ProverbialHomeCtrl'
      }).
      when('/proverbs/:categoryID', {
        templateUrl: 'partials/category-detail.html',
        controller: 'ProverbDetailCtrl'
      }).
      otherwise({
        redirectTo: '/proverbs'
      });
  }]);
