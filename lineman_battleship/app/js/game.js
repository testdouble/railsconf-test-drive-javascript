app.Game = function Game () {
  var self = this;
  var shots = []; //instance variable
  var squares = {};
  var columnHeaders = "1234567".split('');
  var rowHeaders = "ABCDEFG".split('');

  function fire(coordinates) {
    if (squares[coordinates]) { throw new Error("Duplicate shot."); }

    shots.push(coordinates);
    var square = {};
    square.coordinates = coordinates;
    var damagedShip = shipAt(coordinates);

    if (damagedShip) {
      square.note = "hit";
      damagedShip.damage.push(square);
    } else {
      square.note = "miss";
    }

    squares[coordinates] = (square);
    return self;
  }

  function status() {
    if (allSunk()) {
      return "Game over";
    } else if (shots.length == 0) {
      return "You may fire when ready.";
    } else {
      return note(shots.slice(-1))
    }
  }

  function note(coordinates) {
    var message = squares[coordinates] || { note: "o" };

    return message.note;
  }

  function shipAt(coordinates) {
    return ships.filter(function(ship) {
      return ship.locations.indexOf(coordinates) > -1;
    })[0];
  }

  function allSunk () {
    return ships.every(function(ship) {
      return ship.locations.length === ship.damage.length;
    });
  }

  var ships =  [
    { locations: ["A7", "B7"] , damage: [] }
    // { locations: ["C4", "D4", "E4"] },
    // { locations: ["B0", "B1", "B2"] }
  ];

  self.rowHeaders = rowHeaders;
  self.columnHeaders = columnHeaders;
  self.fire = fire;
  self.note = note;
  self.status = status;
  return self;
};
