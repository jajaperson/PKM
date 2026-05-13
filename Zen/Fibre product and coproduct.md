---
tags:
  - public
aliases:
  - fibre product
  - fibre coproduct
  - pushout
  - pullback
  - pullback square
  - pushout square
---
[[Universal construction]]
# Fibre product and coproduct

The **fibre product** is a categorical generalization of the intersection of two sets,
whereas the **fibre coproduct** is the generalization of the union of two non-disjoint sets.

## Definition

The **fibre product** $X \mathrel{_{f}\times_{g}} Y$ is the [[Limits and colimits|limit]] of the diagram on the left,
whereas the **fibre coproduct** $X \mathrel{_{f}\amalg_{g}} Y$ is the [[Limits and colimits|colimit]] of the diagram on the right: #m/def/cat

$$
\begin{align*}
X \xrightarrow f Z \xleftarrow g Y && X \xleftarrow f Z \xrightarrow g Y
\end{align*}
$$

Notationally the $f$ and $g$ are usually omitted,
and diagramatically the fibre product or coproduct is denoted with a right angle symbol.

![[fibre-(co)product-diagram.svg#invert|c|https://q.uiver.app/#q=WzAsMTAsWzIsNCwiWCJdLFs0LDQsIloiXSxbNCwyLCJZIl0sWzIsMiwiWCBcXHRpbWVzX1ogWSJdLFswLDAsIlEiXSxbNiwyLCJaIl0sWzgsNCwiWCBcXGFtYWxnX1ogWSJdLFs2LDQsIlgiXSxbOCwyLCJZIl0sWzEwLDYsIlEiXSxbMCwxLCJmIl0sWzIsMSwiZyIsMl0sWzMsMiwicF9ZIl0sWzMsMCwicF9YIiwyXSxbMywxLCIiLDEseyJzdHlsZSI6eyJuYW1lIjoiY29ybmVyIn19XSxbNCwyLCJxX1kiLDAseyJjdXJ2ZSI6LTF9XSxbNCwwLCJxX1giLDIseyJjdXJ2ZSI6MX1dLFs0LDMsImgiLDAseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XSxbNSw4LCJnIl0sWzUsNywiZiIsMl0sWzcsNiwiaV9YIiwyXSxbOCw2LCJpX1kiXSxbNiw1LCIiLDEseyJzdHlsZSI6eyJuYW1lIjoiY29ybmVyIn19XSxbNyw5LCJqXzEiLDIseyJjdXJ2ZSI6MX1dLFs4LDksImpfMiIsMCx7ImN1cnZlIjotMX1dLFs2LDksImgiLDAseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XV0=]]

For the first diagram we say that $p_{X}$ is the **pullback** of $g$ along $f$, the latter we say $i_X$ is the **pushforward** of $g$ along $f$.


[^names]: Also called the pullback and pushforward, as well as other names.

## Properties

- To explicitly construct a fibre (co)product, we can appeal to [[Fibre product is the equalizer of a product]] and its dual result.

## Examples

- [[Amalgamated free product]]

## See also

- [[Subobject classifier]]

#
---
#state/tidy | #lang/en | #SemBr 