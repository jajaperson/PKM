---
alias: monoid
tags:
  - public
---
[[Category theory MOC]]
# Monoid object

Let $(\cat C, \otimes, 1, \alpha,\lambda,\rho)$ be a [[monoidal category]].
A **monoid** in $\cat C$ consists of the data #m/def/cat
$$
\begin{align*}
1 \xrightarrow e M \xleftarrow m M \otimes M
\end{align*}
$$
where $e$ is called the **unit** and $m$ is called the **multiplication**,
and these satisfy the **left/right unit laws**

![[monoid unit laws.svg#invert|https://q.uiver.app/#q=WzAsNCxbMCwwLCIxIFxcb3RpbWVzIE0iXSxbMiwwLCJNIFxcb3RpbWVzIE0iXSxbNCwwLCJNIFxcb3RpbWVzIDEiXSxbMiwyLCJNIl0sWzAsMSwiZSBcXG90aW1lcyAxIl0sWzIsMSwiMSBcXG90aW1lcyBlIiwyXSxbMSwzLCJtIiwxXSxbMCwzLCJcXGxhbWJkYSIsMl0sWzIsMywiXFxyaG8iXV0=|400]]

and the **associative law**

![[monoid associative law.svg#invert|https://q.uiver.app/#q=WzAsNSxbMCwwLCIoTSBcXG90aW1lcyBNKSBcXG90aW1lcyBNIl0sWzIsMCwiTSBcXG90aW1lcyAoTSBcXG90aW1lcyBNKSJdLFsxLDIsIk0gXFxvdGltZXMgTSJdLFszLDIsIk0iXSxbNCwwLCJNIFxcb3RpbWVzIE0iXSxbMCwxLCJcXGFscGhhIl0sWzAsMiwibSBcXG90aW1lcyAxIiwyXSxbMiwzLCJtIiwyXSxbMSw0LCIxIFxcb3RpbWVzIG0iXSxbNCwzLCJtIl1d|600]]

Moreover, if we are in a [[Braided monoidal category]] with braiding $\tau$, then $(M,m,e)$ is called **commutative** iff it satisfies

![[monoid commutative law.svg#invert|https://q.uiver.app/#q=WzAsMyxbMCwwLCJNIFxcb3RpbWVzIE0iXSxbMiwwLCJNIFxcb3RpbWVzIE0iXSxbMSwxLCJNIl0sWzAsMiwibSIsMl0sWzEsMiwibSJdLFswLDEsIlxcdGF1Il1d|350]]

In terms of [[String diagram|string diagrams]], these are written as

![[monoid object laws.png#invertW]]

We can thence define a [[Homomorphism of monoid objects]] and [[Category of monoid objects]].
These concepts admit duals, see [[Comonoid object]].

## Examples

- A monoid in [[Category of sets]] with the cartesian product is a regulat [[monoid]].
- A monoid in [[Category of abelian groups]] is a [[ring]].
- More generally, for a [[commutative ring]] $R$, a monoid in [[Category of left modules]] is an [[R-ring|$R$-ring]].
- A monoid in an [[Endofunctor category]] is a [[Monad]].

#
---
#state/develop | #lang/en | #SemBr
