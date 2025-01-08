---
tags:
  - public
alias: monoid ring
---
[[Unital associative algebra]]
# Group ring

The **group ring** (also **monoid ring**) is a [[free module]] over a group (or monoid) with the additional structure of a [[ring]] with convolution (defined below) by a group/monoid operation, i.e. a [[∗-algebra]].
The idea is to form basis elements $\delta_{g}$ for each $g \in G$,
and take linear combinations over $R$.
This module is then given the structure of a [[ring]] using a multiplication rule (convolution) induced by group multiplication, which has the property $\delta_{g} *\delta_{h} = \delta_{gh}$.

## Definition

Let $G$ be a group, and $R$ be a ring. 
The **group ring** $R[G]$ is the set of [[Support of a map|maps of finite-support]] $G \to R$,
with the **convolution** and **conjugate** operations defined below.[^simon] #m/def/group

> [!info]- Defining basis
> The basis elements are
> $$
> \begin{align*}
> \delta_{g} : x \mapsto \begin{cases}
> 1_{R} & x=g \\
> 0_{R} & x \neq g
> \end{cases}
> \end{align*}
> $$
> and thus each $a \in R[G]$ has the form
> $$
> \begin{align*}
> a = \sum_{g \in G} a(g)\delta_{g}
> \end{align*}
> $$
> However other bases prove useful, see below

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