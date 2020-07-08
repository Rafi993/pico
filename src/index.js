import * as A from "arcsecond";

import heading from "./heading";
import bold from "./bold";
import italic from "./italic";
import strikeThrough from "./strikeThrough";
import code from "./code";
import autoLink from "./autoLink";
import anything from "./anything";

const pico = (input) => {
  return A.many(
    A.choice([heading, bold, italic, strikeThrough, code, autoLink, anything])
  )
    .run(input)
    .result.join("");
};

export default pico;
