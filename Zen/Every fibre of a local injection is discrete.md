---
tags:
  - public
---
[[Local injection]]
# Every fibre of a local injection is discrete

Let $f : X \to Y$ be a [[local injection]].
Then $f^{-1}\{ y \}$ is a [[Discrete topology|discrete]] subspace of $X$ for every $y \in Y$. #m/thm/topology 

> [!check]- Proof
> Let $y \in Y$ and $x_{1},x_{2} \in f^{-1}\{ y \}$, so that $f(x_{1})=f(x_{2})=y$
> $x_{1}$ and $x_{2}$ have open neighbourhoods $U$ and $V$ respectively such that $f \restriction U$ and $f \restriction V$ are injections:
> Thus $U \cap f^{-1} \{ y \} = \{ x_{1} \}$ and $V \cap f^{-1}\{ y \}= \{ x_{2} \}$.
> Since $U$ and $V$ are open in $X$,
> the singletons $\{ x_{1} \}$ and $\{ x_{2} \}$ are open in the [[subspace topology]] of the fibre $f^{-1}\{ y \}$.
> The selection of $x_{1},x_{2} \in f^{-1}\{ y \}$ was arbitrary,
> therefore $f^{-1}\{ y \}$ carries a [[Discrete topology|discrete]] topology for any $y \in  Y$.
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr
