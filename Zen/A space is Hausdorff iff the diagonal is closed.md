---
tags:
  - public
---
[[Hausdorff space]]
# A space is Hausdorff iff the diagonal is closed

Let $X$ be a topological space, $X\times X$ its [[Product topology|product]], and $\Delta = \{ (x,x) : x \in X \} \sube X \times X$ its diagonal.
Then $X$ is [[Hausdorff space|Hausdorff]] iff $\Delta \sube X \times X$ is closed.

> [!check]- Proof
> Let $A = X \times X \setminus\Delta$,
> 
> First let $X$ be [[Hausdorff space|Hausdorff]].
> and $(x,y) \in A$, so $x \neq y$.
> Since $X$ is Hausdorff, there exist open neighbourhoods $U$ and $V$ of $x$ and $y$ respectively such that $U \cap V = \0$,
> and thus $U \times V$ is an open neighbourhood of $(x,y)$ contained in $A$.
> Hence every point in $A$ has an open neighbourhood contained in $A$,
> therefore $A$ is open, whence $\Delta$ is closed.
> 
> Now let $\Delta$ be closed, i.e. $A$ be open.
> Let $x,y \in X$ with $x \neq y$.
> Then there exists an open neighbourhood $U \sube A$ of $(x,y)$.
> [[Canonical projections are open]], hence $\pi_{1}(U)$ and $\pi_{2}(U)$ are open neighbourhoods of $x$ and $y$ respectively,
> which do not intersect.
> Hence $X$ is [[Hausdorff space|Hausdorff]].
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr
