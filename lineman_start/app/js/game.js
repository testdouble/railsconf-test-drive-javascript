function Game () {
  var self = this;
  var lastShot = null;

  function status () {
    if (lastShot === null) {
      return "You may fire when ready.";
    } else if (lastShot === "A1") {
      return "HIT";
    } else {
      return "MISS";
    }
  }

  function fire (shot) {
    lastShot = shot;
  }

  self.status = status;
  self.fire = fire;
}
