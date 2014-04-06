describe("What a player needs to play battleship.", function () {
  var game;
  beforeEach(function () {
    game = new Game();
  });

  context("place a ship", function () {

    it("in a valid location", function () {
      game.placeShip(["b1","d1"], "destroyer")
      expect(game.getLocation("destroyer")).toEqual(["b1","c1","d1"]);
    });

    it("can move", function () {
      game.placeShip(["b1","d1"], "destroyer");
      game.placeShip(["b1","b3"], "destroyer");
      expect(game.getLocation("destroyer")).toEqual(["b1","b2","b3"]);
    });

    xit("throws if another ship is in the way", function () {
      game.placeShip(["b2","d2"], "destroyer");
      expect(function() { game.placeShip("c1,c4", "cruiser"); }).toThrow("Collision with destroyer at c2.");
    });

  });

  it("Can fire.", function () {
    expect(game.fire("a1")).toBeDefined();
  });

  context("firing a shot", function () {

    it("can fire", function () {
      expect(game.fire("a1")).toBe(game);
    });

  });

});
