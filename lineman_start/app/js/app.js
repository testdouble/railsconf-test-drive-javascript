angular.module("app", []);

angular.module("app").controller("gameCtrl", function($scope) {
  var shipSquares = ["A1", "A2"];
  $scope.game = new Game(shipSquares);
});
