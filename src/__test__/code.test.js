import pico from "../index";

const quotes = "```";

describe("Code", () => {
  it("code single line", () => {
    expect(pico("``` console.log('hello') ```")).toEqual(
      "<code> console.log('hello') </code>"
    );
  });

  it("code multi line", () => {
    expect(pico("``` \n\nconsole.log('hello')\n\n ```")).toEqual(
      "<code> \n\nconsole.log('hello')\n\n </code>"
    );
  });
});
