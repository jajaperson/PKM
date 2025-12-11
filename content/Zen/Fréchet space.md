---
tags:
  - public
---
[[Separation axioms]]
# Fréchet space

A **Fréchet space** or **$\mathrm{T}_{1}$ space** is a [[topological space]] $(X, \mathcal{T})$ where any two points are **separable**,
i.e. for any $x,y \in X$ with $x \neq y$ there exists an open neighbourhood $U$ of $x$ and $V$ of $y$
such that $x \notin V$ and $y \notin U$. #m/def/topology 
Equivalent conditions include

1. for every $x \in X$, the singleton $\{ x \}$ is closed

> [!check]- Proof of equivalence
> Let $x \in X$.
> For each $y \in X \setminus \{ x \}$, let $U(y)$ be an open neighbourhood of $y$ not containing $x$.
> Then
> $$
> \begin{align*}
> X \setminus \{ x \} = \bigcup_{y \in X \setminus \{ x \}} U(y)
> \end{align*}
> $$
> is open, thus $\{ x \}$ is closed.
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr
