import * as A from "arcsecond";

// Anything between *
const block = A.str("*");

const italic = A.between(block)(block)(A.everythingUntil(block)).map(
  (result) => `<i>${result}</i>`
);

export default italic;
