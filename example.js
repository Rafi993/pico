const pico = require("./index");

const templateString = "`";
const block = `${templateString}${templateString}${templateString}`;

const input = `
 # Heading

 Hello there this is a sample text



 google.com
 www.google.com
 http://www.google.com
 http://www.google.com.
 www.google.com

 ${block}
  console.log("test")
 ${block}
`;

const output = `
 <h1>Heading</h1>

 Hello there this is a sample text



 <a href="google.com">google.com</a>
 <a href="www.google.com">www.google.com</a>
 <a href="http://www.google.com">http://www.google.com</a>
 <a href="www.google.com">www.google.com</a>

 <code>
  console.log("test")
 </code>
`;
