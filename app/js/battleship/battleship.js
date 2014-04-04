function Game() {
  function fire() {
    return this;
  }

  function placeShip(coordinates, shipName) {
    return "yup";
  }

  return {
    fire: fire,
    placeShip: placeShip,
  };
}
