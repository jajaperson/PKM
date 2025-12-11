---
tags:
  - public
---
[[Discrete random variable]]
# Negative hypergeometric distribution

The **negative hypergeometric distrubition** $X \sim \mathrm{NHGeom}(s,f,r)$ describes the probability of $x$ failures occurring before the $r$-th success,
drawn from a pool containing $s$ successes and $f$ failures, without replacement. #m/def/prob 
It has the [[Discrete random variable|probability mass function]]
$$
\begin{align*}
\mathbb{P}(X=x) = \frac{{x -r -1 \choose r-1}{s+f-r-x \choose f-x}}{s+f \choose f}
\end{align*}
$$

> [!missing]- Proof
> #missing/proof 
> See lecture 4 [[STAT2062]]

## Properties

Let $X \sim \mathrm{NHGeom}(s,f,r)$

1. $\Ex[X] = \frac{rf}{s+1}$

#
---
#state/develop | #lang/en | #SemBr
