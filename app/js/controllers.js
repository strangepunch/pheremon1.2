'use strict';

/* Controllers */

var proverbialControllers = angular.module('proverbialControllers', []);

proverbialControllers.controller('ProverbListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('proverbs/proverbs.json').success(function(data) {
      $scope.proverbs = data;
    });

    $scope.orderProp = 'category';
  }]);

proverbialControllers.controller('ProverbialHomeCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('proverbs/proverbs.json').success(function(data) {
            $scope.proverbs = data;
        });

        $scope.orderProp = 'category';
    }]);

proverbialControllers.controller('ProverbDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.categoryID = $routeParams.categoryID;
  }]);
