---
tags:
  - public
---
[[Conditional probability]]
# Conditional variance

## Given a random variable

Let $X,Y : \xi \to \mathbb{R}$ be [[Real random variable|real random variables]].
The **conditional variance** of $Y$ given $X$ is the random variable #m/def/prob 
$$
\begin{align*}
\Var[Y \mid X] = \Ex[Y^2 \mid X] - (\Ex[Y \mid X])^2
\end{align*}
$$
where we invoke the [[Conditional expected value]].

### Properties

1. Eve's law: $\Var[Y] = \Ex[\Var[Y \mid X]] + \Var[\Ex[Y \mid X]]$

#
---
#state/develop | #lang/en | #SemBr
