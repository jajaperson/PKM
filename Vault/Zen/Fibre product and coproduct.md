---
tags:
  - public
aliases:
  - fibre product
  - fibre coproduct
  - pushout
  - pullback
---
[[Universal construction]]
# Fibre product and coproduct

The **fibre product** is a categorical generalization of the intersection of two sets,
whereas the **fibre coproduct** is the generalization of the union of two non-disjoint sets.

## Definition

The **fibre product** $X \mathrel{_{f}\times_{g}} Y$ is the [[Limits and colimits|limit]] of the diagram on the left,
whereas the **fibre coproduct** $X \mathrel{_{f}\amalg_{g}} Y$ is the [[Limits and colimits|colimit]] of the diagram on the right: #m/def/cat

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%25%20%60calc%60%20is%20necessary%20to%20draw%20curved%20arrows.%0A%5Cusetikzlibrary%7Bcalc%7D%0A%25%20%60pathmorphing%60%20is%20necessary%20to%20draw%20squiggly%20arrows.%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%25%20A%20TikZ%20style%20for%20curved%20arrows%20of%20a%20fixed%20height%2C%20due%20to%20Andr%C3%A9C.%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsNixbMCwyLCJYIl0sWzIsMiwiWiJdLFsyLDAsIlkiXSxbNCwyLCJYIl0sWzYsMCwiWSJdLFs2LDIsIloiXSxbMCwxLCJmIl0sWzIsMSwiZyIsMl0sWzUsMywiZiIsMl0sWzUsNCwiZyJdXQ%3D%3D%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09%5C%26%5C%26%20Y%20%5C%26%5C%26%5C%26%5C%26%20Y%20%5C%5C%0A%09%5C%5C%0A%09X%20%5C%26%5C%26%20Z%20%5C%26%5C%26%20X%20%5C%26%5C%26%20Z%0A%09%5Carrow%5B%22f%22%2C%20from%3D3-1%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22g%22'%2C%20from%3D1-3%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22f%22'%2C%20from%3D3-7%2C%20to%3D3-5%5D%0A%09%5Carrow%5B%22g%22%2C%20from%3D3-7%2C%20to%3D1-7%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsNixbMCwyLCJYIl0sWzIsMiwiWiJdLFsyLDAsIlkiXSxbNCwyLCJYIl0sWzYsMCwiWSJdLFs2LDIsIloiXSxbMCwxLCJmIl0sWzIsMSwiZyIsMl0sWzUsMywiZiIsMl0sWzUsNCwiZyJdXQ==" /></p>

Notationally the $f$ and $g$ are usually omitted,
and diagramatically the fibre product or coproduct is denoted with a right angle symbol.

<p align="center"><img align="center" src="https://i.upmath.me/svg/%0A%25%20%60calc%60%20is%20necessary%20to%20draw%20curved%20arrows.%0A%5Cusetikzlibrary%7Bcalc%7D%0A%25%20%60pathmorphing%60%20is%20necessary%20to%20draw%20squiggly%20arrows.%0A%5Cusetikzlibrary%7Bdecorations.pathmorphing%7D%0A%25%20A%20TikZ%20style%20for%20curved%20arrows%20of%20a%20fixed%20height%2C%20due%20to%20Andr%C3%A9C.%0A%5Ctikzset%7Bcurve%2F.style%3D%7Bsettings%3D%7B%231%7D%2Cto%20path%3D%7B(%5Ctikztostart)%0A%20%20%20%20..%20controls%20(%24(%5Ctikztostart)!%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20and%20(%24(%5Ctikztostart)!1-%5Cpv%7Bpos%7D!(%5Ctikztotarget)!%5Cpv%7Bheight%7D!270%3A(%5Ctikztotarget)%24)%0A%20%20%20%20..%20(%5Ctikztotarget)%5Ctikztonodes%7D%7D%2C%0A%20%20%20%20settings%2F.code%3D%7B%5Ctikzset%7Bquiver%2F.cd%2C%231%7D%0A%20%20%20%20%20%20%20%20%5Cdef%5Cpv%23%231%7B%5Cpgfkeysvalueof%7B%2Ftikz%2Fquiver%2F%23%231%7D%7D%7D%2C%0A%20%20%20%20quiver%2F.cd%2Cpos%2F.initial%3D0.35%2Cheight%2F.initial%3D0%7D%0A%25%20TikZ%20arrowhead%2Ftail%20styles.%0A%5Ctikzset%7Btail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7Btikzcd%20to%7D%7D%7D%0A%5Ctikzset%7B2tail%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%5Breversed%5D%7D%7D%7D%0A%5Ctikzset%7B2tail%20reversed%2F.code%3D%7B%5Cpgfsetarrowsstart%7BImplies%7D%7D%7D%0A%25%20TikZ%20arrow%20styles.%0A%5Ctikzset%7Bno%20body%2F.style%3D%7B%2Ftikz%2Fdash%20pattern%3Don%200%20off%201mm%7D%7D%0A%25%20https%3A%2F%2Fq.uiver.app%2F%23q%3DWzAsMTAsWzIsNCwiWCJdLFs0LDQsIloiXSxbNCwyLCJZIl0sWzIsMiwiWCBcXHRpbWVzX1ogWSJdLFswLDAsIlEiXSxbNiwyLCJaIl0sWzgsNCwiWCBcXGFtYWxnX1ogWSJdLFs2LDQsIlgiXSxbOCwyLCJZIl0sWzEwLDYsIlEiXSxbMCwxLCJmIl0sWzIsMSwiZyIsMl0sWzMsMiwicF9ZIl0sWzMsMCwicF9YIiwyXSxbMywxLCIiLDEseyJzdHlsZSI6eyJuYW1lIjoiY29ybmVyIn19XSxbNCwyLCJxX1kiLDAseyJjdXJ2ZSI6LTF9XSxbNCwwLCJxX1giLDIseyJjdXJ2ZSI6MX1dLFs0LDMsImgiLDEseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XSxbNSw4LCJnIl0sWzUsNywiZiIsMl0sWzcsNiwiaV9YIiwyXSxbOCw2LCJpX1kiXSxbNiw1LCIiLDEseyJzdHlsZSI6eyJuYW1lIjoiY29ybmVyIn19XSxbNyw5LCJqXzEiLDIseyJjdXJ2ZSI6MX1dLFs4LDksImpfMiIsMCx7ImN1cnZlIjotMX1dLFs2LDksImgiLDEseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XV0%3D%0A%5Cbegin%7Btikzcd%7D%5Bampersand%20replacement%3D%5C%26%5D%0A%09Q%20%5C%5C%0A%09%5C%5C%0A%09%5C%26%5C%26%20%7BX%20%5Ctimes_Z%20Y%7D%20%5C%26%5C%26%20Y%20%5C%26%5C%26%20Z%20%5C%26%5C%26%20Y%20%5C%5C%0A%09%5C%5C%0A%09%5C%26%5C%26%20X%20%5C%26%5C%26%20Z%20%5C%26%5C%26%20X%20%5C%26%5C%26%20%7BX%20%5Camalg_Z%20Y%7D%20%5C%5C%0A%09%5C%5C%0A%09%5C%26%5C%26%5C%26%5C%26%5C%26%5C%26%5C%26%5C%26%5C%26%5C%26%20Q%0A%09%5Carrow%5B%22f%22%2C%20from%3D5-3%2C%20to%3D5-5%5D%0A%09%5Carrow%5B%22g%22'%2C%20from%3D3-5%2C%20to%3D5-5%5D%0A%09%5Carrow%5B%22%7Bp_Y%7D%22%2C%20from%3D3-3%2C%20to%3D3-5%5D%0A%09%5Carrow%5B%22%7Bp_X%7D%22'%2C%20from%3D3-3%2C%20to%3D5-3%5D%0A%09%5Carrow%5B%22%5Clrcorner%22%7Banchor%3Dcenter%2C%20pos%3D0.125%7D%2C%20draw%3Dnone%2C%20from%3D3-3%2C%20to%3D5-5%5D%0A%09%5Carrow%5B%22%7Bq_Y%7D%22%2C%20curve%3D%7Bheight%3D-6pt%7D%2C%20from%3D1-1%2C%20to%3D3-5%5D%0A%09%5Carrow%5B%22%7Bq_X%7D%22'%2C%20curve%3D%7Bheight%3D6pt%7D%2C%20from%3D1-1%2C%20to%3D5-3%5D%0A%09%5Carrow%5B%22h%22%7Bdescription%7D%2C%20dashed%2C%20from%3D1-1%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22g%22%2C%20from%3D3-7%2C%20to%3D3-9%5D%0A%09%5Carrow%5B%22f%22'%2C%20from%3D3-7%2C%20to%3D5-7%5D%0A%09%5Carrow%5B%22%7Bi_X%7D%22'%2C%20from%3D5-7%2C%20to%3D5-9%5D%0A%09%5Carrow%5B%22%7Bi_Y%7D%22%2C%20from%3D3-9%2C%20to%3D5-9%5D%0A%09%5Carrow%5B%22%5Clrcorner%22%7Banchor%3Dcenter%2C%20pos%3D0.125%2C%20rotate%3D180%7D%2C%20draw%3Dnone%2C%20from%3D5-9%2C%20to%3D3-7%5D%0A%09%5Carrow%5B%22%7Bj_1%7D%22'%2C%20curve%3D%7Bheight%3D6pt%7D%2C%20from%3D5-7%2C%20to%3D7-11%5D%0A%09%5Carrow%5B%22%7Bj_2%7D%22%2C%20curve%3D%7Bheight%3D-6pt%7D%2C%20from%3D3-9%2C%20to%3D7-11%5D%0A%09%5Carrow%5B%22h%22%7Bdescription%7D%2C%20dashed%2C%20from%3D5-9%2C%20to%3D7-11%5D%0A%5Cend%7Btikzcd%7D%0A#invert" alt="https://q.uiver.app/#q=WzAsMTAsWzIsNCwiWCJdLFs0LDQsIloiXSxbNCwyLCJZIl0sWzIsMiwiWCBcXHRpbWVzX1ogWSJdLFswLDAsIlEiXSxbNiwyLCJaIl0sWzgsNCwiWCBcXGFtYWxnX1ogWSJdLFs2LDQsIlgiXSxbOCwyLCJZIl0sWzEwLDYsIlEiXSxbMCwxLCJmIl0sWzIsMSwiZyIsMl0sWzMsMiwicF9ZIl0sWzMsMCwicF9YIiwyXSxbMywxLCIiLDEseyJzdHlsZSI6eyJuYW1lIjoiY29ybmVyIn19XSxbNCwyLCJxX1kiLDAseyJjdXJ2ZSI6LTF9XSxbNCwwLCJxX1giLDIseyJjdXJ2ZSI6MX1dLFs0LDMsImgiLDEseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XSxbNSw4LCJnIl0sWzUsNywiZiIsMl0sWzcsNiwiaV9YIiwyXSxbOCw2LCJpX1kiXSxbNiw1LCIiLDEseyJzdHlsZSI6eyJuYW1lIjoiY29ybmVyIn19XSxbNyw5LCJqXzEiLDIseyJjdXJ2ZSI6MX1dLFs4LDksImpfMiIsMCx7ImN1cnZlIjotMX1dLFs2LDksImgiLDAseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XV0=" /></p>

For the first diagram we say that $p_{X}$ is the **pullback** of $g$ along $f$, the latter we say $i_X$ is the **pushforward** of $g$ along $f$.


[^names]: Also called the pullback and pushforward, as well as other names.

## Examples

- The union of non-disjoint sets (or topological spaces)
- [[Amalgamated free product]]

## Properties

- [[Fibre product is the equalizer of a product]]

#
---
#state/tidy | #lang/en | #SemBr 