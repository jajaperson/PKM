---
tags:
  - public
---
[[Compact space]]
# Compact subsets of a Hausdorff space are closed

Let $X$ be a [[Hausdorff space]].
If $K \sube X$ is compact, then $K$ is closed #m/thm/topology 

> [!check]- Proof
> Let $b \in X \setminus K$.
> For each $x \in K$ assign an open neighbourhood $U_{x}$ of $x$ and likewise an open neighbourhood $V_{x}$ of $b$ such that $U_{x} \cap V_{x} = \0$ for all $x \in K$ (the [[Hausdorff space|Hausdorff]] property).
> Then $(U_{x})_{x \in K}$ is an open cover of $K$ and thus has a finite subcover $(U_{x_{i}})_{i=1}^n$.
> Then $V = \bigcap_{i =1}^n V_{i}$ is an open subset of $X \setminus K$.
> Since every $b \in X \setminus K$ has an open neighbourhood $V \sube X \setminus K$, $X \setminus K$ is open,
> whence $K$ is closed.
> <span class="QED"/>

Similarly, [[Closed subsets of a compact space are compact]].

#
---
#state/tidy | #lang/en | #SemBr
