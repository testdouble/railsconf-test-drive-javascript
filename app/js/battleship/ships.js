var ships = [
  { name: "destroyer", location: "docked" , hull: [{ status: "o" }, { status: "o" }, { status: "o" }]},
  { name: "sweeper", location: "docked", hull: [{ status: "o" }, { status: "o" }]},
  { name: "cruiser", location: "docked", hull: [{ status: "o" }, { status: "o" }, { status: "o" }, { status: "o" }]},
];

function pickUp(ship) {
  ship.location = "in hand";
  return ship;
}
