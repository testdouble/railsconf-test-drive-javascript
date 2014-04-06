function Game() {
  var self;
  var yCoordinates = "abcdefghij".split('');
  var xCoordinates = yCoordinates.map(function(element, index) {
    return (index + 1) + "";
  });

  var shipLocations = {};

  function fire() {
    return self;
  }

  function placeShip(coordinates, shipName) {
    switch (coordinates[0]) {
      case (coordinates[0][0] + coordinates[1][1]):
        ys = yCoordinates.slice(yCoordinates.indexOf(coordinates[0][0]), yCoordinates.indexOf(coordinates[1][0])+1);
      shipLocations[shipName] = ys.map(function(e) {
        return e + coordinates[0].slice(1);
      });
      break;
      case (coordinates[1][0] + coordinates[0][1]):
        xs = xCoordinates.slice(xCoordinates.indexOf(coordinates[0].slice(1)), xCoordinates.indexOf(coordinates[1].slice(1))+1);
      shipLocations[shipName] = xs.map(function(e) {
        return coordinates[0][0] + e;
      });
      break;
    }
    return self;
  }

  function getLocation(shipName) {
    return shipLocations[shipName];
  }

  return self = {
    fire: fire,
    placeShip: placeShip,
    getLocation: getLocation,
  };
}
