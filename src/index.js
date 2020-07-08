import * as A from "arcsecond";

import heading from "./heading";
import bold from "./bold";
import italic from "./italic";
import code from "./code";
import anything from "./anything";

const pico = (input) => {
  return A.many(A.choice([heading, bold, italic, code, anything]))
    .run(input)
    .result.join("");
};

export default pico;
