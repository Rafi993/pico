import * as A from "arcsecond";

// Anything between ~~
const block = A.str("~~");

const strikeThrough = A.between(block)(block)(A.everythingUntil(block)).map(
  (result) => `<del>${result}</del>`
);

export default strikeThrough;
