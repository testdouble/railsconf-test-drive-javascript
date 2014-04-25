function Game(shipSquares) {
  var self = this;

  var DEFAULT_SHIP_SQUARES = ["A1", "A2", "A3", "C1", "C2"];
  shipSquares = shipSquares || DEFAULT_SHIP_SQUARES;

  var shots = [];
  var columnHeaders = "1234567".split("");
  var rowHeaders = "ABCDEFG".split("");

  function fire(coordinates) {
    shots.push(coordinates);
    return self;
  }

  function note(coordinates) {
    if (shipSquares.indexOf(coordinates) > -1 && shots.indexOf(coordinates) > -1) {
      return "HIT";
    } else if (shipSquares.indexOf(coordinates) === -1 && shots.indexOf(coordinates) > -1) {
      return "MISS";
    } else {
      return "";
    }
  }

  function lastShot() {
    return shots.slice(-1)[0];
  }

  function status() {
    if (isGameOver()) {
      return "You won.";
    } else if (lastShot()) {
      return note(lastShot());
    } else {
      return "You may fire when ready.";
    }
  }

  function isGameOver() {
    hits = shots.filter(function(shot) {
      return note(shot) === "HIT";
    });
    return hits.length === shipSquares.length;
  }

  self.fire = fire;
  self.columnHeaders = columnHeaders;
  self.rowHeaders = rowHeaders;
  self.note = note;
  self.status = status;
  return self;
}
