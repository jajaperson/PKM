---
aliases:
  - linear subspace
tags:
  - public
---
[[Linear algebra MOC]]
# Vector subspace
A **linear subspace** $S \leq V$
of a [[vector space]] $V$
is a subset $S \sube V$ that is a vector space under the same scalar multiplication and vector addition. #m/def/linalg 
This can be boiled down to the following requirement:

> If $\vab u, \vab v \in S$ and $\lambda,\mu \in \mathbb{K}$, then $\lambda\vab u + \mu \vab v \in S$.

[^op]: Using the same operations of vector addition and scalar multiplication as they were defined in $V$.
[^fiel]: Where $\alpha$ is an element of $V$'s field.

The concept of subspaces naturally leads to the concept of a [[Span]],
which is the smallest possible subspace containing a set of specific vectors within the main vector space.

## Properties

1. The subspaces of a given vector space form a [[Complete lattice]] with initial $\{ \vab 0 \}$ and terminal $V$.
  The greatest lower bound is the intersection of subspaces, the least upper bound is the sum of subspaces.
  2. A nontrivial vector space $V$ over an infinite field $\mathbb{K}$ is not the union of finitely many proper subspaces.[^2008]

> [!check]- Proof of 2
> Let $V$ be a nontrivial vector space over $\mathbb{K}$.
> Assume $V = \bigcup_{i=1}^n S_{i}$
> and without loss of generality $S_{1} \not\sube \bigcup_{i=2}^nS_{i}$.
> Now let $v \notin \bigcup_{i=2}^nS_{i}$ and $w \notin S_{1}$.
> Then the infinite set
> $$
> \begin{align*}
> A = \{ \lambda w + v : \lambda \in \mathbb{K}\}
> \end{align*}
> $$
> is an infinite set corresponding to the line through $v$ parallel to $w$.
> We will show that $A$ contains at most one element from each $S_{i}$ and must thence be finite,
> leading to contradiction.
> 
> First note that if $\lambda w+v \in S_{1}$ for $\lambda \neq 0$ then $v \in S_{1}$ since $w \in S_{1}$, contradicting our assumption.
> Next, suppose for some $\lambda_{1} \neq \lambda_{2}$ we have $\lambda_{1}w + v \in S_{i}$ and $\lambda_{2}w + v \in S_{i}$,
> Then
> $$
> \begin{align*}
> (\lambda_{1}-\lambda_{2})w = (\lambda_{1}w+v)-(\lambda_{2}w + v) \in S_{i}
> \end{align*}
> $$
> so $w \in S_{i}$, which is also a contradiction.
> <span class="QED"/>

[^2008]: 2008\. [[Sources/@romanAdvancedLinearAlgebra2008|Advanced Linear Algebra]], p. 39

#
---
#state/tidy | #SemBr | #lang/en
