angular.module("app").controller("shipsCtrl", function ($scope) {
  $scope.ships = ships;

  $scope.pickUp = pickUp;

  $scope.shipStatusClass = function(ship) {
    switch(ship.location) {
      case "docked":
        return "bg-warning";
      case "in hand":
        return "bg-primary";
      case "deployed":
        return "bg-success";
    }

  };
});
