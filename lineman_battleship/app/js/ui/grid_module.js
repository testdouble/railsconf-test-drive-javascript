app.gridModule = function () {
  var exports = {};
  var rows = [
    { header: "A", squares: [ { note: "o" },{ note: "o" },{ note: "o" },{ note: "o" },{ note: "o" },{ note: "o" },{ note: "o" }] },
    { header: "B", squares: [ { note: "o" },{ note: "o" },{ note: "o" },{ note: "o" },{ note: "o" },{ note: "o" },{ note: "o" }] },
    { header: "C", squares: [ { note: "o" },{ note: "o" },{ note: "o" },{ note: "o" },{ note: "o" },{ note: "o" },{ note: "o" }] },
    { header: "D", squares: [ { note: "o" },{ note: "o" },{ note: "o" },{ note: "o" },{ note: "o" },{ note: "o" },{ note: "o" }] },
    { header: "E", squares: [ { note: "o" },{ note: "o" },{ note: "o" },{ note: "o" },{ note: "o" },{ note: "o" },{ note: "o" }] },
    { header: "F", squares: [ { note: "o" },{ note: "o" },{ note: "o" },{ note: "o" },{ note: "o" },{ note: "o" },{ note: "o" }] },
    { header: "G", squares: [ { note: "o" },{ note: "o" },{ note: "o" },{ note: "o" },{ note: "o" },{ note: "o" },{ note: "o" }] },
  ];

  var columnHeaders =  "1234567".split("");

  exports.rows = rows;
  exports.columnHeaders = columnHeaders;
  return exports;
};
