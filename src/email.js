import * as A from "arcsecond";

const EMAIL_REGEX = /^\S+@\S+\.\S+/;

const autoLink = A.regex(EMAIL_REGEX).map(
  (result) => `<a href="mailto:${result}">${result}</a>`
);

export default autoLink;
