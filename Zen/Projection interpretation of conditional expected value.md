---
tags:
  - public
---
[[Conditional expected value]]
# Projection interpretation of conditional expected value

Let $X, Y : \xi \to \mathbb{R}$ be [[Real random variable|real random variables]].
For any function $h : \mathbb{R} \to \mathbb{R}$, #m/thm/prob 
$$
\begin{align*}
\Ex[(Y-\Ex[Y \mid X]) h(X)] = 0
\end{align*}
$$
implying $\Corr[Y-\Ex[Y \mid X],h(X)]= 0$,
i.e. $Y-\Ex[Y \mid X]$ is completely [[Variable covariance|uncorrelated]] with any function of $X$.
This motivates the following interpretation of conditional expectation:

> [!tip] Projection interpretation of conditional expected value
> $\Ex[Y \mid X]$ contains the entire component of $Y$ which is a function of $X$
> (i.e. determined by $X$)
> and the residual component $Y - \Ex[Y \mid X]$ is completely uncorrelated with any function of $X$.


#
---
#state/develop | #lang/en | #SemBr
