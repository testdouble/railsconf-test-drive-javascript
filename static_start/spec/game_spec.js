describe("A game of battleship", function () {
  var game;
  beforeEach(function() {
    var shipSquares = ["A1", "A2"];
    game = new Game(shipSquares);
  });

  it("displays initial status", function () {
    expect(game.status()).toBe("You may fire when ready.");
  });

  xit("can hit a ship", function () {
    game.fire("A1");
    expect(game.status()).toBe("HIT");
  });

  //TODO: Write this spec.
  xit("can miss a ship", function () {
  });
});
