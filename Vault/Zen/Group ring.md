---
tags:
  - public
aliases:
  - group algebra
---
[[Unital associative algebra over a field]]
# Group ring


The **group ring** $R[G]$ of a [[group]] $G$ is an [[R-ring|$R$-ring]] constructed from the corresponding [[free module]] $R^{(G)}$, such that the product of  and  coïncide.
As such, it is a specialization of the [[monoid ring]].

## Construction as maps

Let $G$ be a group, and $R$ be a ring. 
The **group ring** $R[G]$ may be identified with the set of [[Support of a map|maps of finite-support]] $G \to R$,
with the **convolution** and **conjugate** operations defined below,[^simon] 
where we identify $g \in G$ with $\delta_{g} : h \mapsto [g=h]$.
The **convolution** operation is defined by
$$
\begin{align*}
(a * b)(x) = \sum_{h \in G} a(xh^{-1})b(h)
\end{align*}
$$
> [!check]- Derivation
> Convolution is defined by extending $\delta_{g} * \delta_{h} = \delta_{gh}$ by linearity, so
> $$
> \begin{align*}
> \left( \sum_{g \in G} a(g)\delta_{g} \right) * \left( \sum_{h \in G} b(g)\delta_{g} \right) &= \sum_{g,h\in G} a(g)b(h)\delta_{gh} \\
> &= \sum_{x,h \in G } a(xh^{-1})b(h) \delta_{x}
> \end{align*}
> $$
> which yields the definition given above.
> Note the similarity to the everyday [[Convolution]] operation.

If $R$ is an [[Involutive ring]], the **conjugate** is defined by
$$
\begin{align*}
a^{\dagger}(g) = \overline{a(g^{-1})}
\end{align*}
$$

[^simon]: 1996, [[@simonRepresentationsFiniteCompact1996|Representations of finite and compact groups]], §II.3

### Hilbert space

If $R = \mathbb{C}$, then the group ring can be made into a [[Hilbert space]] with some inner product, usually taken from those listed below.

> [!info]- Inner products
> Two possible inner products on a complex group ring are
> $$
> \begin{align*}
> \braket{ a | b } = \sum_{g \in G} \overline{a(g)}b(g)
> \end{align*}
> $$
> which has $\{ \delta_{x} \}_{x \in G}$ as an [[Orthonormal basis]]; 
> or alternatively the renormalised
> $$
> \begin{align*}
> ( a | b ) = \frac{1}{\abs G} \sum_{g \in G} \overline{a(g)}b(g)
> \end{align*}
> $$
> which has $c_{1} : g \mapsto 1$ as a unit vector.
> This normalisation is used for [[Orthonormality of irreps|orthogonality of irreps]].
> In these notes I will try to stay consistent with distinguishing these two inner products as above.

## Properties

- [[∗-representation of the complex group ring]]
- [[Regular group representation]]
- [[Ideal of the complex group ring]]
- [[Idempotent of the complex group ring]]
- [[Isomorphism between the complex group ring and direct sum of matrix algebras on carriers of irreducible representations]]
- [[Centre of the group ring]]

#
---
#state/tidy | #lang/en | #SemBr