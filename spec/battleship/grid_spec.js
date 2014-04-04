describe("grid", function () {
  it("can find Y given a 0 based index", function () {
    expect(findY(0)).toBe("A");
  });

  // TODO: give this a name
  it("has a header row", function () {
    expect(grid[0].cells.forEach).toBeDefined();
  });

  it("has an array of rows", function () {
    expect(grid.forEach).toBeDefined();
  });

  context("row", function () {
    var row;
    beforeEach(function () {
      row = grid[0];
    });

    it("has an array of cells", function () {
      expect(row.cells.forEach).toBeDefined();
    });

    context("cell", function () {
      var cell
      beforeEach(function () {
        cell = row.cells[0];
      });

      it("can display a o", function () {
        expect(cell.display).toBe("o");
      });
    });
  });
});
