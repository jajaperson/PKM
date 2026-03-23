---
tags:
  - public
---
[[Unicode]]
# Unicode composition and decomposition
Unicode has a class of characters known as "canonical compositions"[^1998]
which use a single code point to represent what would otherwise bed
a regular character and a combining character.
For example, "é" (an e with acute accent)
may either be represented as 
`U+0065 LATIN SMALL LETTER E` followed by `U+00B4 ACUTE ACCENT`;
or as `U+00E9 LATIN SMALL LETTER E WITH ACUTE` 

[^1998]: 1998, [Unicode technical report #15: Unicode composition](https://www.unicode.org/reports/tr15/pdtr15.html)

## Normalisation
This is a potential source of issues for string comparison,
since while the two examples listed above are (canonically) the same,
they will be detected as different.
As a result, to compare strings,
it is advisable to _normalise_ them beforehand,
either in the direction of decomposition or of composition

### JavaScript
In [[JavaScript]], the built-in string API provides [`String.prototype.normalize()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize) for this very purpose.

Importantly, it is possible to canonically decompose strings,
or alternatively to decompose and then compose.
Both of these normalise the string.

- Use the form argument `"NFD"` to decompose.
- Use the form argument `"NFC"` to decompose and then compose 
  (this is the default behaviour if no argument is provided).

```ts
import { fromCharCodes} from "https://deno.land/x/iter@v2.5.0/lib/generators.ts";

const dec = "é".normalize("NFD");
const com = "é".normalize("NFC");

const codes = [...fromCharCodes("ā́".normalize("NFD"))]
  .map(n => n.toString(16).padStart(4, '0'))
  .map(s => `U+${s}`)
  .join(", ")

console.log(codes); // "U+0061, U+0304, U+0301"
```

For other options, see the MDN documentation listed above.

#
---
#state/tidy | #SemBr | #lang/en
