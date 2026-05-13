---
tags:
  - public
date: 2026-05-13
---
[[Monoidal internalization]]
# Convolution monoid

In a [[monoidal category]] $\cat C$,
suppose $\Red$ is a [[Comonoid object|comonoid]] and $\Blue$ is a [[Monoid object|monoid]].
Then $\cat{C}(\Red, \Blue)$ is a [[monoid]] in [[Category of sets]] under the product

![[convolution-string.svg|c]]

with the unit $\eta \epsilon$. #m/thm/cat 
This is called the <dfn>convolution monoid</dfn> on $\cat C(\Red, \Blue)$.

> [!check]- Proof
> Associativity follows directly from the [[Comonoid object#^coass]] law of $\Red$ and associative law of $\Blue$.
> Unitality follows directly from the [[Comonoid object#^counit]] of $\Red$ and unit law of $\Blue$. <span class="QED"/>

#
---
#state/tidy| #lang/en | #SemBr
