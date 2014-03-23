angular.module("app", []);

angular.module("app").factory("battleship", function() {
  return new Battleship();
});
