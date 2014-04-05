function Game() {
  var self;

  function fire() {
    return self;
  }

  function placeShip(coordinates, shipName) {
    return "yup";
  }

  return self = {
    fire: fire,
    placeShip: placeShip,
  };
}
