---
tags:
  - public
---
[[Algebraic element]]
# Spectrum of an algebraic element

Let $A$ be a [[K-monoid]] over $\mathbb{K}$ and $a \in A$ be an [[algebraic element]] with [[Algebraic element|minimal polynomial]] $m_{a}(x) \in \mathbb{K}[x]$.
The roots of $m_{a}(x)$ are called the **eigenvalues** of $a$,
and the set of all eigenvalues #m/def/falg 
$$
\begin{align*}
\Spec(a) = \{ \lambda \in \mathbb{K} : m_{a}(\lambda) = 0 \}
\end{align*}
$$
is called the **spectrum** of $a$.[^2008]
[[An algebraic element is invertible iff its minimal polynomial has a nonzero constant term|Clearly]] $a$ invertible iff $0 \notin \Spec(a)$.

  [^2008]: 2008\. [[Sources/@romanAdvancedLinearAlgebra2008|Advanced Linear Algebra]], §18, p. 461

## Properties

- [[Spectral mapping theorem]]

In addition

1. $\Spec(ab) = \Spec(ba)$[^2008a]

> [!missing]- Proof
> #missing/proof

  [^2008a]: Stated with partial proof in 2008\. [[Sources/@romanAdvancedLinearAlgebra2008|Advanced Linear Algebra]], §18, p. 462

#
---
#state/tidy | #lang/en | #SemBr
