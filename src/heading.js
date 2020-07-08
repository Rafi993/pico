import * as A from "arcsecond";

const newline = A.lookAhead(A.str("\n"));
const newLineOrEndOfInput = A.choice([A.endOfInput, newline]);

// # followed by space followed by any chars till \n
const h1 = A.between(A.str("# "))(newLineOrEndOfInput)(
  A.everythingUntil(newLineOrEndOfInput)
).map((result) => `<h1>${result}</h1>`);

// ## followed by space followed by any chars till \n
const h2 = A.between(A.str("## "))(newLineOrEndOfInput)(
  A.everythingUntil(newLineOrEndOfInput)
).map((result) => `<h2>${result}</h2>`);

// ### followed by space followed by any chars till \n
const h3 = A.between(A.str("### "))(newLineOrEndOfInput)(
  A.everythingUntil(newLineOrEndOfInput)
).map((result) => `<h3>${result}</h3>`);

// ### followed by space followed by any chars till \n
const h4 = A.between(A.str("#### "))(newLineOrEndOfInput)(
  A.everythingUntil(newLineOrEndOfInput)
).map((result) => `<h4>${result}</h4>`);

// ### followed by space followed by any chars till \n
const h5 = A.between(A.str("##### "))(newLineOrEndOfInput)(
  A.everythingUntil(newLineOrEndOfInput)
).map((result) => `<h5>${result}</h5>`);

const heading = A.choice([h1, h2, h3, h4, h5]);

export default heading;
