import * as A from "arcsecond";

import heading from "./heading";
import bold from "./bold";
import italic from "./italic";
import strikeThrough from "./strikeThrough";
import code from "./code";
import autoLink from "./autoLink";
import email from "./email";
import anything from "./anything";

const choice = A.choice;
const many = A.many;

const pico = (input) => {
  return many(
    choice([
      heading,
      bold,
      italic,
      strikeThrough,
      code,
      email,
      autoLink,
      anything,
    ])
  )
    .run(input)
    .result.join("");
};

export default pico;

export {
  choice,
  many,
  heading,
  bold,
  italic,
  strikeThrough,
  code,
  autoLink,
  anything,
};
