import pico from "../index";

describe("Italic", () => {
  it("i with space", () => {
    expect(pico("* Hello *")).toEqual("<i> Hello </i>");
  });

  it("i without space", () => {
    expect(pico("*Hello*")).toEqual("<i>Hello</i>");
  });
});
