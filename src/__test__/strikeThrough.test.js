import pico from "../index";

describe("Strike through", () => {
  it("del with space", () => {
    expect(pico("~~ Hello ~~")).toEqual("<del> Hello </del>");
  });

  it("b without space", () => {
    expect(pico("~~Hello~~")).toEqual("<del>Hello</del>");
  });
});
