---
aliases:
  - generalized binomial expansion
tags:
  - public
---
[[Binomial expansion]]
# Generalized binomial coëfficient

Let $R$ be a [[commutative ring]] in which $\mathbb{N}$ is invertible, $\alpha \in R$,
and $k \in \mathbb{N}_{0}$.
Then the **generalized binomial coëfficients** are defined by #m/def/num 
$$
\begin{align*}
{\alpha \choose k} = \frac{\alpha^{\underline k}}{k!} = \frac{\alpha(\alpha-1) \cdots (\alpha-k+1)}{k(k-1) \cdots 1}
\end{align*}
$$
where we have used the notation of a [[Falling factorial]]. 
We then have the **generalized binomial expansion**
$$
\begin{align*}
(1+X)^\alpha = \sum_{k=0}^\infty {\alpha \choose k} X^k
\end{align*}
$$

## Properties

1. If $\alpha \in \mathbb{Z}$ then ${\alpha \choose k} = {-\alpha + k - 1 \choose k}$

#
---
#state/develop | #lang/en | #SemBr
