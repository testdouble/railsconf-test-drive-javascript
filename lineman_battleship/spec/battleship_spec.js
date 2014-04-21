describe("battleship", function () {

  it("can fire", function () {
    var game = new battleship.Game();
    game.fire("A0");

    expect(game.note("A0")).toMatch(/(hit|miss)/)
  });

});
