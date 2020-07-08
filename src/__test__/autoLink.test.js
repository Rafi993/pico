import pico from "../index";

describe("AUtolink", () => {
  it("url without protocol", () => {
    expect(pico("www.google.com")).toEqual(
      `<a href="www.google.com">www.google.com</a>`
    );
  });

  it("url with protocol", () => {
    expect(pico("https://www.google.com")).toEqual(
      `<a href="https://www.google.com">https://www.google.com</a>`
    );
  });

  it("url without www", () => {
    expect(pico("https://google.com")).toEqual(
      `<a href="https://google.com">https://google.com</a>`
    );
  });
});
