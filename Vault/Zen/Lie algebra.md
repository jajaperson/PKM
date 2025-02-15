---
tags:
  - public
aliases:
  - Lie bracket
mathLink-blocks:
  Jacobi: Jacobi identity
---
[[Lie algebras MOC]]
# Lie algebra

A **Lie algebra** $\mathfrak{g}$ is a [[vector space]] over a field $\mathbb{K}$ with an [[Alternating multilinear map|alternating bilinear map]] $[-,-]: \mathfrak{g} \times \mathfrak{g} \to \mathfrak{g}$ satisfying the **Jacobi identity** #m/def/lie 
$$
\begin{align*}
[X,[Y,Z]] + [Y,[Z,X]] + [Z,[X,Y]] = 0
\end{align*}
$$ 
^Jacobi

which [[away from 2]] is equivalent to demanding the Lie bracket is a derivation on itself (see [[adjoint Lie algebra representation#^P1]]).
A Lie algebra is one of the simplest kinds of non-associative, non-commutative [[Algebra over a field|algebras]] (in fact it is anticommutative).

Lie algebras were first encountered as tangent spaces of [[Lie group|Lie groups]].
They naturally arise as the [[Commutator|commutator algebra]] of a unital associative algebra,
and the existence of the [[universal enveloping algebra]] gives a sense in which all Lie algebras are of this form.

## Further terminology

- An [[Abelian Lie algebra]] has $[X,Y]=0$ for all $X,Y \in \mathfrak{g}$
- A [[Lie subalgebra]] is a linear subspace closed under the bracket.
- A [[Lie algebra ideal]] is a linear subspace which “absorbs all elements“.
- [[Lie algebra extension]]

## Basis

Since $\mathfrak{g}$ is a vector space we can find a basis $\{ X_{j} \}_{j \in J}$.
The behaviour of the Lie bracket on all elements is completely determined by the basis generators due to linearity.
We describe this using the so-called **structure constants**
$$
\begin{align*}
[X_{j}, X_{k}] = \sum_{\ell \in J} c^\ell_{jk} X_{\ell}
\end{align*}
$$

## Properties

1. [[Alternating iff anticommutative away from 2]]
2. Every Lie algebra may be constructed as a subalgebra of the commutator of its [[Universal enveloping algebra]] (see [[Poincaré-Birkhoff-Witt theorem]])

## Examples

- [[Commutator]] of any associative algebra


#
---
#state/tidy | #lang/en | #SemBr
