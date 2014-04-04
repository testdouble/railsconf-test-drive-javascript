var ships = [
  { name: "destroyer", location: "docked" },
  { name: "sweeper", location: "docked" },
  { name: "cruiser", location: "docked" },
];

function pickUp(ship) {
  ship.location = "in hand";
  return ship;
}
