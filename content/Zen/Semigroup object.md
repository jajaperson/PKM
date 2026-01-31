---
tags:
  - public
---
[[Internalization]]
# Semigroup object

Let $(\cat C, \otimes, \mathbb{1}, \alpha,\lambda,\rho)$ be a [[monoidal category]].
A **semigroup** in $\cat C$ consists of the data #m/def/cat
$$
\begin{align*}
M \otimes M \xrightarrow m M
\end{align*}
$$
where $m$ is called the **multiplication**,
and these satisfy the **associative law**.
Moreover, if we are in a [[Symmetric monoidal category]] with braiding $\tau$,
then $(M,m,e)$ is called **commutative** iff it satisfies the **commutative law**.


> [!info]- Commutative diagrams
> Associative law:
> ![[monoid associative law.svg#invert|https://q.uiver.app/#q=WzAsNSxbMCwwLCIoTSBcXG90aW1lcyBNKSBcXG90aW1lcyBNIl0sWzIsMCwiTSBcXG90aW1lcyAoTSBcXG90aW1lcyBNKSJdLFsxLDIsIk0gXFxvdGltZXMgTSJdLFszLDIsIk0iXSxbNCwwLCJNIFxcb3RpbWVzIE0iXSxbMCwxLCJcXGFscGhhIl0sWzAsMiwibSBcXG90aW1lcyAxIiwyXSxbMiwzLCJtIiwyXSxbMSw0LCIxIFxcb3RpbWVzIG0iXSxbNCwzLCJtIl1d|600]]
> 
> Commutative law: 
> ![[monoid commutative law.svg#invert|https://q.uiver.app/#q=WzAsMyxbMCwwLCJNIFxcb3RpbWVzIE0iXSxbMiwwLCJNIFxcb3RpbWVzIE0iXSxbMSwxLCJNIl0sWzAsMiwibSIsMl0sWzEsMiwibSJdLFswLDEsIlxcdGF1Il1d|350]]

> [!info]- String diagrams
> Associativity:
> ![[associative-string.svg#invert|c|300]]
> 
> Commutativity:
> ![[commutative-string.svg#invert|c|240]]

We can thence define a [[Homomorphism of semigroup objects]] and [[Category of semigroup objects]].
These concepts admit duals, see [[Cosemigroup object]].

#
---
#state/develop | #lang/en | #SemBr
