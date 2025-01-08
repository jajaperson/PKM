---
tags:
  - public
---
[[Metric topology]]
# Metrizable implies Hausdorff

Let $(X, d)$ be a [[metric space]]. Then $X$ is [[Hausdorff space|Hausdorff]] under its metric topology. #m/thm/topology 

> [!check]- Proof
> Let $x,y \in X$ with $x \neq y$ (if no such $x,y$ exist then the conclusion is trivially satisfied).
> Let $r = d(x,y)$.
> Then $\mathrm{B}_{r/2}(x)$ and $\mathrm{B}_{r / 2}(y)$ are disjoint open neighbourhoods of $x$ and $y$ respectively.
> Since if $z \in \mathrm{B}_{r / 2}(x) \cap \mathrm{B}_{r / 2}(y)$ then $d(x,y) \leq d(x,z) + d(y,z) < r$ which is a contradiction.
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr
