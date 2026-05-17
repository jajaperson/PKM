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

Note that when $\Red = \Blue$ is a [[Bimonoid object|bimonoid]],
we have two in general distinct monoid structures on $\End_{\cat C}(\Red)$:
Composition $(\circ)$ and convolution $(*)$.

## Submonoids

If $\Red$ is a [[Bimonoid object|bimonoid]] and $\Blue$ is [[Monoid object#^comm|commutative]],
then $\Mon_{\cat C}(\Red, \Blue)$ is a submonoid of the convolution monoid $\cat C(\Red, \Blue)$. #m/thm/cat

> [!check]- Proof
> By the definition of a bimonoid, $\epsilon \in \cat{Mon}_{\cat C}(\Red , \mathbb{1})$, and clearly $\eta \in \Mon_{\cat C} (\mathbb{ 1} , \Blue)$,
> so $\eta \epsilon \in \cat{Mon}_{\cat C}(\Red, \Blue)$.
> On the other hand, using commutativity of $\Blue$ we have
> 
> ![[convolution-of-morphisms-string.svg|c]]
> 
> whence the convolution of monoid morphisms is a monoid morphism. <span class="QED"/>

Moreover, if $\Red$ is a [[Hopf monoid object|Hopf monoid]] with antipous $\sigma$, then $\Mon_{\cat C}(\Red, \Blue)$ is a [[group]],
where the inverse of $f \in \Mon_{\cat C}(\Red, \Blue)$ is given by $f \sigma$. #m/thm/cat

> [!check]- Proof
> That $f \sigma * f = \eta \epsilon$ is shown by
> 
> ![[convolution-inverse-of-morphism-string.svg|c]]
> 
> and the proof that $f * f \sigma = \eta \epsilon$ is analogous. <span class="QED"/>

#
---
#state/tidy| #lang/en | #SemBr
