---
tags:
  - public
---
[[Locally finite measure]]
# Local finite measure of a compact set is finite

Let $X$ be a hausdorff Topological space equipped with a [[Locally finite measure]] $\mu$,
and let $K \sube X$ be [[Compact space|compact]].
Then $K$ has finite measure. #m/thm/measure

> [!check]- Proof
> For each $x \in K$, let $U_{x}$ be a neighbourhood with finite measure.
> Since $\{U_{x}\}_{x\in K}$ forms an open cover of $K$ it admits a finite subcover $\{U_{x_{i}}\}_{i \in X}$ with $\{x_{i}\}_{i=1}^n \sube K$.
> By [[Measure space#Properties|monotonicity and countable subadditivity]] of $\mu$,
> $$
> \begin{align*}
> \mu(K) \leq \mu\left( \bigcup_{i=1}^n U_{i} \right) \leq \sum_{i=1}^n \mu(U_{i}) < \infty
> \end{align*}
> $$
> hence $\mu(K)$ is finite.
> <span class="QED"/>

## Corollary

A [[Locally compact space|locally compact]] measure space has [[Locally finite measure]] iff the measure of every compact set is finite. #m/thm/measure 

> [!check]- Proof
> The forward direction is given above.
> Since every $x \in X$ has a compact neighbourhood which in turn has finite measure,
> $X$ has locally finite measure.
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr
