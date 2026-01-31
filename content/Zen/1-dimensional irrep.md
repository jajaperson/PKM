---
aliases:
  - 1-dimensional irrep
  - 1-dimensional representation
  - linear character
tags:
  - public
---
[[Group representation]]
# 1-dimensional irrep

A **1-dimensional-irrep** or **linear character**[^ch] $\chi : G \to \mathbb{K}$ is a homomorphism from a group to the multiplicative group of a field.
It is both a representation and the corresponding [[Group character]].
Every 1-dimensional representation is clearly irreducible.

[^ch]: See [[Group character#Linear character]]

## Irrep group

Given a finite group $G$, the set $\widehat{G}_{1}$ of 1-dimensional irreps forms a group under multiplication ([[Tensor product with a 1-dimensional representation]]),
where the inverse of $\chi^\mu$ is the complex conjugate $\overline{\chi^\mu}$.
$\widehat{G}_{1}$ is isomorphic to the dual group of the [[Abelianization]] $A = G / [G,G]$ of $G$,
since there is a one-to-one correspondance between 1-dimensional irreps of $G$ and the irreps $\widehat{A}$ of $A$.
In particular
$$
\begin{align*}
|\widehat{A}| = | G / [G,G] | = \frac{|G|}{|[G,G]|}
\end{align*}
$$
since [[Square sum of irrep dimensions|The number of irreps of an abelian group equals its order]].

> [!check]- Proof
> Since [[Abelianization#Universal property]],
> every [[Abelian representation]] factors via $A$,
> and since [[Abelian representation|An abelian representation is a sum of 1-dimensional irreps]],
> the 1-dimensional irreps of $G$ are precisely the irreps of $A$.
> <span class="QED"/>

## Properties

- [[Tensor product with a 1-dimensional representation]]
- [[Irreps of abelian groups are 1-dimensional]]
- [[Abelian representation#Main theorem|An abelian representation is a sum of 1-dimensional irreps]]

#
---
#state/develop | #lang/en | #SemBr
