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

![[fibre-(co)product-diagram.svg#invert|c|https://q.uiver.app/#q=WzAsMTAsWzIsNCwiWCJdLFs0LDQsIloiXSxbNCwyLCJZIl0sWzIsMiwiWCBcXHRpbWVzX1ogWSJdLFswLDAsIlEiXSxbNiwyLCJaIl0sWzgsNCwiWCBcXGFtYWxnX1ogWSJdLFs2LDQsIlgiXSxbOCwyLCJZIl0sWzEwLDYsIlEiXSxbMCwxLCJmIl0sWzIsMSwiZyIsMl0sWzMsMiwiZl4qZyJdLFszLDAsImdeKmYiLDJdLFszLDEsIiIsMSx7InN0eWxlIjp7Im5hbWUiOiJjb3JuZXIifX1dLFs0LDIsInFfWSIsMCx7ImN1cnZlIjotMX1dLFs0LDAsInFfWCIsMix7ImN1cnZlIjoxfV0sWzQsMywiaCIsMCx7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dLFs1LDgsImciXSxbNSw3LCJmIiwyXSxbNyw2LCJmXyogZyIsMl0sWzgsNiwiZ18qZiJdLFs2LDUsIiIsMSx7InN0eWxlIjp7Im5hbWUiOiJjb3JuZXIifX1dLFs3LDksImpfMSIsMix7ImN1cnZlIjoxfV0sWzgsOSwial8yIiwwLHsiY3VydmUiOi0xfV0sWzYsOSwiaCIsMCx7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dXQ==]]

For the first diagram we say that $f^* g$ is the <dfn>pullback</dfn> of $g$ along $f$, the latter we say $f_{*}g$ is the <dfn>pushout</dfn> of $g$ along $f$.


[^names]: Also called the pullback and pushout, as well as other names.

## Properties

- To explicitly construct a fibre (co)product, we can appeal to [[Fibre product is the equalizer of a product]] and its dual result.

## Examples

- [[Amalgamated free product]]

## See also

- [[Subobject classifier]]
- [[Cartesian morphism]]

#
---
#state/tidy | #lang/en | #SemBr 