---
aliases:
  - monoid
tags:
  - public
---
[[Internalization]]
# Monoid object

Let $(\cat C, \otimes, \mathbb{1}, \alpha,\lambda,\rho)$ be a [[monoidal category]].
A **monoid** in $\cat C$ consists of the data #m/def/cat
$$
\begin{align*}
\mathbb{1} \xrightarrow e M \xleftarrow m M \otimes M
\end{align*}
$$
where $e$ is called the **unit** and $m$ is called the **multiplication**,
and these satisfy the **left/right unit laws**,
and the **associative law**.
Moreover, if we are in a [[Symmetric monoidal category]] with braiding $\tau$, then $(M,m,e)$ is called **commutative** iff it satisfies the **commutative law**.

> [!info]- Commutative diagrams
> Unit laws:
> ![[monoid unit laws.svg#invert|https://q.uiver.app/#q=WzAsNCxbMCwwLCIxIFxcb3RpbWVzIE0iXSxbMiwwLCJNIFxcb3RpbWVzIE0iXSxbNCwwLCJNIFxcb3RpbWVzIDEiXSxbMiwyLCJNIl0sWzAsMSwiZSBcXG90aW1lcyAxIl0sWzIsMSwiMSBcXG90aW1lcyBlIiwyXSxbMSwzLCJtIiwxXSxbMCwzLCJcXGxhbWJkYSIsMl0sWzIsMywiXFxyaG8iXV0=|400]]
> 
> Associative law:
> ![[monoid associative law.svg#invert|https://q.uiver.app/#q=WzAsNSxbMCwwLCIoTSBcXG90aW1lcyBNKSBcXG90aW1lcyBNIl0sWzIsMCwiTSBcXG90aW1lcyAoTSBcXG90aW1lcyBNKSJdLFsxLDIsIk0gXFxvdGltZXMgTSJdLFszLDIsIk0iXSxbNCwwLCJNIFxcb3RpbWVzIE0iXSxbMCwxLCJcXGFscGhhIl0sWzAsMiwibSBcXG90aW1lcyAxIiwyXSxbMiwzLCJtIiwyXSxbMSw0LCIxIFxcb3RpbWVzIG0iXSxbNCwzLCJtIl1d|600]]
> 
> Commutative law: 
> ![[monoid commutative law.svg#invert|https://q.uiver.app/#q=WzAsMyxbMCwwLCJNIFxcb3RpbWVzIE0iXSxbMiwwLCJNIFxcb3RpbWVzIE0iXSxbMSwxLCJNIl0sWzAsMiwibSIsMl0sWzEsMiwibSJdLFswLDEsIlxcdGF1Il1d|350]]

> [!info]- String diagrams
> Unitality:
> ![[unital-string.svg#invert|c]]
> 
> Associativity:
> ![[associative-string.svg#invert|c]]
> 
> Commutativity:
> ![[commutative-string.svg#invert|c]]

We can thence define a [[Homomorphism of monoid objects]] and [[Category of monoid objects]].
These concepts admit duals, see [[Comonoid object]].
See also the weakening of [[Semigroup object]].

## Properties

- As in the traditional case, there exists at most one unit $e : \mathbb{1} \to M$ compatible with the multiplication $m : M \otimes M \to M$.

## Examples

- A monoid in [[Category of sets]] with the cartesian product is a regulat [[monoid]].
- A monoid in [[Category of abelian groups]] is a [[ring]].
- More generally, for a [[commutative ring]] $R$, a monoid in [[Category of left modules]] is an [[R-monoid]].
- A monoid in an [[Endofunctor category]] is a [[Monad]].

#
---
#state/develop | #lang/en | #SemBr
