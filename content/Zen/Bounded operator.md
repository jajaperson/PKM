---
aliases:
  - bounded linear map
tags:
  - public
---
[[Functional analysis MOC]]
# Bounded linear operator

A **bounded linear operator** is a [[linear map]] $T : X \to Y$ between [[Topological vector space|TVSs]] that maps [[Von Neumann bounded set|bounded subsets]] of $X$ to bounded subsets of $Y$, #m/def/anal/fun 


## Normed vector space

Given two [[Normed vector space|normed vector spaces]] over the same field $\mathbb{K}$,
a [[linear map]] $T : X \to Y$ is [[Continuity|continuous]] with respect to the induced topology iff: #m/thm/norm

- $T$ is bounded
- $T$ is [[Lipschitz continuity|Lipschitz continuous]] at $\vab 0$.
- $T$ is continuous anywhere.
- there exists $k \in \mathbb{R}$ such that $\| T \vab v\| \leq k \|\vab v\|$ for all $\vab v \in X$ (see [[Uniform continuity]])

where the lowest possible $k$ as its [[Operator norm]].
Therefore we may rephrase the second condition as
$$
\begin{align*}
\|T \vab x\| \leq \|T\|_{\text{op}} \|\vab x\|
\end{align*}
$$

> [!missing]- Proof
> #missing/proof

#
---
#state/tidy  | #lang/en | #SemBr 