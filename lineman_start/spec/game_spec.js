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

  it("can display column headers", function () {
    expect(game.columnHeaders().forEach).toBeDefined();
  });


  it("can display row headers", function () {
    expect(game.rowHeaders().forEach).toBeDefined();
  });

  context("displays notes", function () {

    it("displays empty note", function () {
      expect(game.note("B1")).toBe("o");
    });

    it("displays hit note", function () {
      game.fire("A1");
      expect(game.note("A1")).toBe("HIT");
    });

    it("displays miss note", function () {
      game.fire("B1");
      expect(game.note("B1")).toBe("MISS");
    });
  });


});
