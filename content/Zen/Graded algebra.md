---
tags:
  - public
alias: graded
---
[[Algebra theory MOC]]
# Graded algebra

Let $(M, +, 0)$ be a [[monoid]].
An [[K-algebra|algebra]] $(A, \cdot)$ over $\mathbb{K}$ is said to be $M$-**graded** iff it is an $M$-[[graded vector space]] $A = \coprod_{\alpha \in M} A_{\alpha}$
such that #m/def/falg 
$$
\begin{align*}
A_{\alpha} \cdot A_{\beta} \sube A_{\alpha + \beta}
\end{align*}
$$
for any $\alpha,\beta \in M$.
If $(A, \cdot)$ is a [[K-monoid]], this definition is equivalent to that of a [[graded ring]],
and hence $1 \in A+0$.

## Category of graded algebras

Many of our typical algebra constructions carry over.
These motivate [[Category of graded algebras]].

- [[Graded algebra homomorphism]]
- [[Graded subalgebra]], [[Quotient graded algebra]]

## Properties

- If $M \leq \mathbb{K}^+$, the [[degree operator]] on $A$ is a [[Derivation on an algebra|derivation]].
- If $A$ is commutative, then $M$ must be abelian/

## Examples

- [[Tensor algebra]]

## See also

- [[Graded structure]]

#
---
#state/tidy | #lang/en | #SemBr
