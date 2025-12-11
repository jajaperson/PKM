---
tags:
  - public
alias: discrete metric
---
[[Topological space]]
# Discrete topology
On any set $X$ the **discrete topology** of $X$ is one
where all subsets of $X$ are considered open (and therefore also closed, since the compliment of any subset is necessarily also a subset and therefore open), 
i.e. $\mathcal T = \mathcal{P}(X)$.
Such a topology is the [[Coarseness and fineness of topologies|finest]] topology that can be formed on any set.

## Metric
A discrete topology is [[Metric topology|metrizable]] with the so-called **discrete metric**
$$
\begin{align*}
\rho(x_{1},x_{2}) = \begin{cases}
1 & \text{if } x \neq y \\
0 & \text{if } x = y
\end{cases}
\end{align*}
$$
although there may exist other metricisations.

## Properties

- [[A topological space is discrete iff every point is its own connected component]]

#
---
#state/develop | #SemBr | #lang/en