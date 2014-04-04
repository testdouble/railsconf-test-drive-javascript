function Game() {
  var self = this;

  function fire() {
    return self;
  }

  function placeShip(coordinates, shipName) {
    return "yup";
  }

  return {
    fire: fire,
    placeShip: placeShip,
  };
}
