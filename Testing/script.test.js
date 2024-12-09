const search = require("./script");
const mockdb = ["ankit.com", "anil.com", "ankush.com", "ankith.com"];

//grouping test together using describe

describe("search", () => {
  it("demo test", () => {
    // expect('ankit').toBe('ankit');
    search("an", mockdb);
  });

  it("search test", () => {
    expect(search("test", mockdb)).toEqual([]);
    expect(search("ankit", mockdb)).toEqual(["ankit.com", "ankith.com"]);
  });

  it("null/undefined test", () => {
    expect(search(undefined, mockdb)).toEqual([]);
    expect(search(null, mockdb)).toEqual([]);
  });
});
