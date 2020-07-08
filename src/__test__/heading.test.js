import pico from "../index";

describe("Heading", () => {
  it("h1", () => {
    expect(pico("# Heading")).toEqual("<h1>Heading</h1>");
  });

  it("h2", () => {
    expect(pico("## Heading")).toEqual("<h2>Heading</h2>");
  });

  it("h3", () => {
    expect(pico("### Heading")).toEqual("<h3>Heading</h3>");
  });

  it("h4", () => {
    expect(pico("#### Heading")).toEqual("<h4>Heading</h4>");
  });

  it("h5", () => {
    expect(pico("##### Heading")).toEqual("<h5>Heading</h5>");
  });
});
