angular.module("app").controller("shipsCtrl", function ($scope) {
  $scope.ships = ships;

  $scope.pickUp = function(ship) {
    console.log(ship);
  };
});
