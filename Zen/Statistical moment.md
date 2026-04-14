---
aliases:
  - central moment
  - standardized moment
  - moment
tags:
  - public
---
[[Probability theory MOC]]
# Moment

Let $X : \xi \to \mathbb{R}$ be a [[real random variable]] with [[Expectation|mean]] $\mu$ and [[Standard deviation|variance]] $\sigma^2$.
For any $n \in \mathbb{N}$, we define #m/def/prob 

- the **$n$th moment** of $X$ as $\Ex[X^n]$
- the **$n$th central moment** of $X$ as $\Ex[(x-\mu)^n]$
- the **$n$th standardized moment**[^Z] of $X$ as $\Ex\left[ \left( \frac{X-\mu}{\sigma} \right)^n \right]$

if said quantities exist.
Additionally, for a $\mathbb{N}_{0}$-valued [[discrete random variable]]

- the **$n$th factorial moment** of $X$ is $\Ex\left[ \prod_{j=0}^{n-1}(X-j) \right] = g_{X}^{(k)}(1)$

where $g_{X}$ is the [[Probability-generating function]].

  [^Z]: Note this corresponds to the $n$th moment of the [[Standard normal distribution|z-score]].

## Examples

- The first central moment is the [[Expectation|mean]]
- The second central moment is the [[Standard deviation|variance]]
- The third standardized moment is the [[Skewness]]
- The fourth standardized moment is a shifted version of the [[Excess kurtosis]]

#
---
#state/tidy | #lang/en | #SemBr
