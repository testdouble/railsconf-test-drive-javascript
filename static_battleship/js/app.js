// Angular module declaration.
angular.module("app", []);

angular.module("app").controller("gameCtrl", function ($scope) {
  $scope.game = new Game();
});
