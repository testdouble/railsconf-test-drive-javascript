function Game (shipSquares) {
  var self = this;
  var lastShot = null;
  var shots = [];

  function status () {
    if (lastShot === null) {
      return "You may fire when ready.";
    } else {
      return wasHit(lastShot);
    }
  }

  function fire (shot) {
    lastShot = shot;
    shots.push(shot);
    return self;
  }

  function columnHeaders() {
    return "1234567".split('');
  }

  function rowHeaders() {
    return "ABCDEFG".split('');
  }

  function wasHit(coordinates) {
    if (shipSquares.indexOf(coordinates) > -1) {
      return "HIT";
    } else {
      return "MISS";
    }
  }

  function note(coordinates) {
    if (shots.indexOf(coordinates) > -1) {
      return wasHit(coordinates);
    } else {
      return "o";
    }
  }

  self.note = note;
  self.rowHeaders = rowHeaders;
  self.columnHeaders = columnHeaders;
  self.status = status;
  self.fire = fire;
}
