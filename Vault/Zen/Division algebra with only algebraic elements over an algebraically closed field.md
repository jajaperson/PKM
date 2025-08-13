---
tags:
  - public
---
[[Division algebra]]
# Division algebra with only algebraic elements over an algebraically closed field

Let $\mathbb{K}$ be an [[algebraically closed field]] and $A$ be a [[division algebra]] such that every $a \in A$ is an [[algebraic element]] over $\mathbb{K}$.[^equiv]
Then $A = \mathbb{K}$. #m/thm/falg 

  [^equiv]: [[An algebraic element is invertible iff its minimal polynomial has a nonzero constant term|Equivalently]] $A$ is an [[K-algebra|algebra]] such that every $a \in A$ has a [[Algebraic element|minimal polynomial]] $m_{a}(x) \in \mathbb{K}[x]$ with a nonzero constant term

> [!check]- Proof
> Let $a \in A$ and $m_{a}(x) \in \mathbb{K}[x]$ be its [[Algebraic element|minimal polynomial]].
> Since $A$ has no zero divisors, $m_{a}(x)$ must be an [[Polynomial ring#^irreducible]]:
> For if $m_{a}(x) = p(x)q(x)$ then $p(a)q(a) = 0$ and hence either $p(a) = 0$ or $q(a) = 0$,
> a contradiction.
> Since $m_{a}(x)$ is irreducible it is linear by [[Algebraically closed field#^A2]],
> thus $m_{a}(x) = x - \lambda$ whence $a = \lambda \in \mathbb{K}$. <span class="QED"/>

## Corollaries

The following situations guarantee every element $a \in A$ is algebraic over $\mathbb{K}$.

1. [[All elements of a finite-dimensional unital associative algebra are algebraic]].
2. [[Dixmier's lemma]]
3. [[Quillen's lemma]]

#
---
#state/tidy | #lang/en | #SemBr
