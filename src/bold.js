import * as A from "arcsecond";

// Anything between **
const block = A.str("**");

const bold = A.between(block)(block)(A.everythingUntil(block)).map(
  (result) => `<b>${result}</b>`
);

export default bold;
