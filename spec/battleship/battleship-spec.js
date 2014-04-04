describe("What a player needs to play battleship.", function () {
  var game;
  beforeEach(function () {
    game = new Game();
  });

  it("Can place ships.", function () {
    expect(game.placeShip("b1,d1", "destroyer")).toBeDefined();
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
