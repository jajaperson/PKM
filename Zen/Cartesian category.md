---
tags:
  - public
aliases:
  - cartesian
  - "#category/monoidal/symmetric/cartesian"
---
[[Category theory MOC]]
# Cartesian category

A <dfn>cartesian category</dfn> is a (necessarily [[Symmetric monoidal category|symmetric]]) [[monoidal category]] whose tensor product is a [[Products and coproducts|categorical product]] and whose tensor unit is a [[Initial and terminal objects|terminal object]]. #m/def/cat
Specifically, for any $A,B \in \cat C$ there exist natural transformations
$$
\begin{align*}
\mathrm{pr}_{1}^\imp{B}: 1 \otimes B \Rightarrow 1 : \cat C \to \cat C \\
\mathrm{pr}_{2}^\imp{A} : A \otimes 1 \Rightarrow 1 : \cat C \to \cat C
\end{align*}
$$
so that for any $A,B \in \cat C$ the data $(A \otimes B, \mathrm{pr}^\imp{B}_{1,\imp{A}}, \mathrm{pr}^\imp{A}_{2,\imp{B}})$
satisfy the universal property of the product.

## From finitary product category

Suppose $\cat C$ has (chosen[^1]) finite [[Products and coproducts|products]]:
That is, a [[Initial and terminal objects|terminal object]] $1 \in \cat C$, and for every pair of objects $A, B \in \cat C$ a binary product $A \times B$.
Then $(\times)$ extends to a [[Monoidal category|tensor product]] with unit $1$ so that $\cat C$ is a cartesian category.
The naturality of $\opn{pr}_{i}$ fully determines the action on morphisms:

![[binary-products-to-functor.svg#invert|c]]

Deriving the associator and unitors is routine, if a little hairy.
Deriving the coherence conditions is outright herculean.

> [!check]- Proof
> The associator and its inverse are given by the diagonal morphisms in
> 
> ![[binary-product-associator.svg#invert|c|https://q.uiver.app/#q=WzAsNyxbMCwwLCIoWCBcXHRpbWVzIFkpIFxcdGltZXMgWiJdLFswLDIsIlggXFx0aW1lcyBZIl0sWzAsNCwiWCJdLFs0LDAsIloiXSxbMiwyLCJZIl0sWzQsNCwiWCBcXHRpbWVzIChZIFxcdGltZXMgWikiXSxbNCwyLCJZIFxcdGltZXMgWiJdLFswLDNdLFswLDFdLFsxLDJdLFsxLDRdLFs2LDRdLFs2LDNdLFs1LDJdLFs1LDZdLFswLDYsIiIsMSx7ImN1cnZlIjotMiwic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzAsNSwiIiwxLHsiY3VydmUiOi0yLCJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XSxbNSwwLCIiLDEseyJjdXJ2ZSI6LTIsInN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dLFs1LDEsIiIsMSx7Im9mZnNldCI6LTEsImN1cnZlIjotMiwic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV1d&macro_url=https%3A%2F%2Fraw.githubusercontent.com%2Fjajaperson%2FPKM%2Frefs%2Fheads%2Fmain%2Fpreamble.sty]]
> 
> which explicitly gives
> $$
> \begin{align*}
> \alpha_{X Y Z} &= \langle \opn{pr}_{1} \opn{pr}_{1}, \langle \opn{pr}_{2}\opn{pr}_{1}, \opn{pr}_{2} \rangle  \rangle \\
> \alpha_{X Y Z}^{-1} &= \langle \langle \opn{pr}_{1}, \opn{pr}_{1}, \opn{pr}_{2} \rangle , \opn{pr}_{2}\opn{pr}_{2} \rangle .
> \end{align*}
> $$
> 
> The left and right unitors are given by the projections themselves.
> $$
> \begin{align*}
> \lambda_{X} &= \opn{pr}_{2}, & \rho_{X} = \opn{pr}_{3}
> \end{align*}
> $$
> Their inverses are shown by
> 
> ![[binary-product-unitors.svg#invert|c|https://q.uiver.app/#q=WzAsNixbMiwwLCJYIFxcdGltZXMgMSJdLFsyLDIsIjEiXSxbMCwxLCJYIl0sWzQsMCwiMSBcXHRpbWVzIFgiXSxbNiwxLCJYIl0sWzQsMiwiMSJdLFswLDEsIlxcb3Bue3ByfV8yIl0sWzAsMiwiXFxvcG57cHJ9XzEiLDIseyJjdXJ2ZSI6Mn1dLFsyLDEsIiFfWCIsMix7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dLFsyLDAsIlxcbGFuZ2xlIFgsICFfWCBcXHJhbmdsZSIsMix7ImN1cnZlIjoyLCJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XSxbMyw1LCJcXG9wbntwcn1fMSIsMl0sWzMsNCwiXFxvcG57cHJ9XzIiLDAseyJjdXJ2ZSI6LTJ9XSxbNCw1LCIhX1giLDAseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XSxbNCwzLCJcXGxhbmdsZSAhX1gsIFggXFxyYW5nbGUiLDAseyJjdXJ2ZSI6LTIsInN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dXQ==&macro_url=https%3A%2F%2Fraw.githubusercontent.com%2Fjajaperson%2FPKM%2Frefs%2Fheads%2Fmain%2Fpreamble.sty]]
> 
> to be
> $$
> \begin{align*}
> \lambda_{X}^{-1} &= \langle !_{X}, X \rangle , & \rho_{X}^{-1} = \langle X, !_{X} \rangle 
> \end{align*}
> $$
> A fully formal proof of the coherence relations are best carried out with a proof assistant with tactics, see the [1Lab](https://1lab.dev/Cat.Monoidal.Instances.Cartesian.html#cartesian-monoidal-categories).
> For now we note that the above morphisms were constructed as the unique solutions to universal mapping problems, 
> and that we can do analogous constructions for iterate products, 
> which will then commute (again by uniqueness). <span class="QED"/>

## See also

- The dual concept is [[Cocartesian category]].
- A [[Bicartesian category]] is both of these simultaneously.

#
---
#state/tidy | #lang/en | #SemBr

[^1]: Here we mean we have the actual exhibition of products, not the [[mere existence]]. We get this for free from the right [[Global Axiom of Choice]], or the [[Principle of Unique Choice]] in a [[univalent category]]; otherwise they need to be provided, lest we get an [[anafunctor]] from this construction.
