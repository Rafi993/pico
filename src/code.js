import * as A from "arcsecond";

// Anything between ```
const block = A.str("```");

const code = A.between(block)(block)(A.everythingUntil(block)).map(
  (result) => `<code>${result}</code>`
);

export default code;
