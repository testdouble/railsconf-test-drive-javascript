describe("A game of battleship", function () {
  var game;
  beforeEach(function() {
    var shipSquares = ["A1", "A2"];
    game = new Game(shipSquares);
  });

  it("displays initial status", function () {
    expect(game.status()).toBe("You may fire when ready.");
  });

  it("can hit a ship", function () {
    game.fire("A1");
    expect(game.status()).toBe("HIT");
  });

  it("can miss a ship", function () {
    game.fire("B1");
    expect(game.status()).toBe("MISS");
  });

  it("ends the game.", function () {
    game.fire("A1").fire("B1").fire("A2");
    expect(game.status()).toBe("You won.");
  });

  it("has column headers", function () {
    expect(game.columnHeaders[2]).toBe("3");
  });

  it("has row headers", function () {
    expect(game.rowHeaders[2]).toBe("C");
  });

  context("note", function () {

    it("displays nothing by default", function () {
      expect(game.note("C5")).toBe("");
    });

    it("displays hits", function () {
      game.fire("A1");
      expect(game.note("A1")).toBe("HIT");
    });

    it("displays misses", function () {
      game.fire("A5");
      expect(game.note("A5")).toBe("MISS");
    });
  });
});
