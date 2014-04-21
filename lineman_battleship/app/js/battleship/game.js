battleship.Game = function Game () {
  var self = {};

  function fire(coordinates) {
    return self;
  }

  function note(coordinates) {
    return "hit";
  }

  self.fire = fire;
  self.note = note;
  return self;
}
