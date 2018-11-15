const login = require("./login");

module.exports = MockBase =>
  class MockRivers extends MockBase {
    mocks() {
      return [...login];
    }
  };
