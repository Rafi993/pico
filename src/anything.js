import * as A from "arcsecond";

// Anything including newline and spaces
const anything = A.regex(/^./s).map((result) => result);

export default anything;
