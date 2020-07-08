import pico from "../index";

const templateString = "`";
const block = `${templateString}${templateString}${templateString}`;

const input = `\n# Heading\nHello there this is a sample text\n\n\n\n${block}\nconsole.log("test")\n${block}\n`;
const output = `\n<h1>Heading</h1>\nHello there this is a sample text\n\n\n\n<code>\nconsole.log("test")\n</code>\n`;

describe("Combined text", () => {
  it("combined text", () => {
    expect(pico(input)).toEqual(output);
  });
});
