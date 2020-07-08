# Pico

Very small markdown like syntax parser

## Why?

This parser allows you to use markdown like syntax or to build your own custom markdown parser
with modules it provided easily

## Installation

```
$ npm i pico-markdown-parser
```

or

```
yarn add pico-markdown-parser
```

## Usage

You can use your parser as such or you can import sub modules from this parser and build your own parser easily

### Simple usage

```javascript
import pico from "pico-markdown-parser";

const htmlOutput = pico(`
  # Hello

  This is a sample text!!
`);
```

### Advanced usage

```javascript
import { choice, many, heading, bold, anything } from "pico-markdown-parser";

// This new parser now supports only bold and heading
const parser = (input) =>
  many(choice([heading, bold, anything]))
    .run(input)
    .result.join("");

const htmlOutput = parser(`
  # Hello

  This is a **sample** text!!
`);
```

## Spec

Things supported by this parser are listed [here](./Spec.md)
