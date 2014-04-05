describe("ships", function () {
  beforeEach(function () {
  });

  it("should be a list of ships, i think?", function () {
    expect(ships.forEach).toBeDefined();
  });

  context("ship", function () {
    var ship;
    beforeEach(function () {
      ship = ships[0];
    });

    it("should be able to pick one up", function () {
      pickUp(ships[1]);
      expect(ships[1].location).toEqual("in hand");
    });

    it("should have a healthy hull", function () {
      ship.hull.forEach(function (section) {
        expect(section.status).toEqual("o");
      });
    });
  });
});
