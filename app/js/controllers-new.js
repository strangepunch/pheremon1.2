'use strict';

/* Controllers */

/* var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('phones/adversity.json').success(function(data) {
      $scope.categories = data;
    });

    $scope.ordearProp = 'cat';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
  }]);
*/

var pblControllers = angular.module('pblControllers', []);

pblControllers.controller('PblListCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('phones/adversity.json').success(function(data) {
            $scope.categories = data;
        });

        $scope.orderProp = 'category';
    }]);

pblControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams) {
        $scope.categories = $routeParams.category;
    }]);