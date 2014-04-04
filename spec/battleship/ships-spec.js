describe("ships", function () {
  beforeEach(function () {
  });

  it("should be a list of ships, i think?", function () {
    expect(ships).toEqual([
                            { name: "destroyer", location: "docked" },
                            { name: "sweeper", location: "docked" },
                            { name: "cruiser", location: "docked" },
    ]);
  });

  it("should be able to pick one up", function () {
    pickUp(ships[1]);
    expect(ships[1].location).toEqual("in hand");
  });
});
