describe("grid", function () {
  var grid;
  beforeEach(function () {
    grid = app.gridModule();
  });

  it("has rows", function () {
    expect(grid.rows.forEach).toBeDefined()
  });

  it("rows have headers", function () {
    expect(grid.rows[6].header).toBe("G");
  });

  it("columnHeaders", function () {
    expect(grid.columnHeaders[6]).toBe("7");
  });
});
