---
tags:
  - public
aliases:
  - A module inherits linear structure from the underlying ring
---
[[Algebra theory MOC]]
# Module over an associative algebra

Let $A$ be a [[unital associative algebra]] over $\mathbb{K}$.
A (left) $A$-[[module]] is a $\mathbb{K}$-[[vector space]] $V$ equipped with a bilinear map
$$
\begin{align*}
A \times V &\to V \\
(a,v) &\mapsto a \cdot v
\end{align*}
$$
such that

1. $1 \cdot v = v$ for $v \in V$
2. $(ab)\cdot v = a \cdot(b \cdot v)$ for $a,b \in A$, $v \in V$

This is equivalent to a **representation** of $A$ carried by $V$.

## Properties and further terminology

- $V$ automatically carries a [[Lie algebra representation]] of the [[commutator]] algebra of $A$ and any [[Lie subalgebra]].
- A [[Submodule]] of $V$ is an [[invariant subspace]] under the action of $A$.
- A module is [[Simple module|irreducible]] iff it has no proper nontrivial submodules.
- A module is [[Indecomposable module|indecomposable]] iff it cannot be decomposed into the [[Direct sum of modules|direct sum]] of two nonzero submodules.
- A [[module isomorphism]] is an [[equivalence of representations]].
- The [[Regular representation]] shows that $A$ is a module over itself.

## Explanation

Since a [[unital associative algebra]] $A$ over a field $\mathbb{K}$ is itself a ring,
it is possible to form a [[module]] $V$ over $A$.
The action of $\mathbb{K}$ on $A$ and $A$ on $V$ induces an action of $\mathbb{K}$ on $V$,
thus the module $V$ inherits the $\mathbb{K}$-linear structure of the underlying ring $A$.
Therefore $V$ is a [[vector space]] over $\mathbb{K}$. #m/thm/module

> [!check]- Proof
> Let $\mathbb{1} \in A$ be the identity element of the associative algebra $A$.
> Then a distributive and linear field action is given by
> $$
> \begin{align*}
> (\cdot) : \mathbb{K} \times V &\to V \\
> (\lambda, v) &\mapsto \lambda \mathbb{1} v
> \end{align*}
> $$
> since for any $u,v \in V$ and $\mu,\lambda \in \mathbb{K}$:
> $$
> \begin{align*}
> 1\mathbb{1}v  = v
> \end{align*}
> $$
> satisfying [[Vector space#^V4]]; 
> $$
> \begin{align*}
> (\mu\lambda) \mathbb{1} v = \mu \mathbb{1} (\lambda \mathbb{1} v)
> \end{align*}
> $$
> satisfying [[Vector space#^V5]]; 
> $$
> \begin{align*}
> \lambda \mathbb{1} (u + v) = \lambda \mathbb{1} u + \lambda \mathbb{1}v
> \end{align*}
> $$
> satisfying [[Vector space#^V6]]; and
> $$
> \begin{align*}
> (\mu+\lambda)\mathbb{1} v = \mu \mathbb{1} v + \lambda \mathbb{1}v
> \end{align*}
> $$
> satisfying [[Vector space#^V7]].
> <span class="QED"/>

Such a module coïncides exactly with the notion of a [[Group representation]] of the algebra $A$ over $\mathbb{K}$.

## See also

- [[Module over a Lie algebra]]
- [[Module over a group]]

#
---
#state/tidy | #lang/en | #SemBr
