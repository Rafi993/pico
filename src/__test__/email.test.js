import pico from "../index";

describe("Autolink email", () => {
  it("email", () => {
    expect(pico("test@gmail.com")).toEqual(
      `<a href="mailto:test@gmail.com">test@gmail.com</a>`
    );
  });
});
