import pico from "../index";

describe("Bold", () => {
  it("b with space", () => {
    expect(pico("** Hello **")).toEqual("<b> Hello </b>");
  });

  it("b without space", () => {
    expect(pico("**Hello**")).toEqual("<b>Hello</b>");
  });
});
