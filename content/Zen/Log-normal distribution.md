---
tags:
  - public
---
[[Continuous random variable]]
# Log-normal distribution

A **log-normally distributed** random variable $Y \sim \mathcal{LN}(\mu,\sigma^2)$ has $Y = \mathrm{e}^X$ for $X \sim \mathrm{N}(\mu,\sigma^2)$, #m/def/prob i.e. $\ln Y$ has a [[normal distribution]].
Applying [[Distribution of a differentiable injective random function]], we have the [[Probability density function]]
$$
\begin{align*}
f_{Y}(y) = \frac{1}{\sqrt{ 2\pi }} \mathrm{e}^{-(\ln y)^2/2} \frac{1}{y}
\end{align*}
$$

## Properties

1. [[Statistical moment|Moments]]: $\Ex[Y^n]=\Ex[\mathrm{e}^{nx}] = M_{X}(n) = \mathrm{e}^{n\mu + \frac 1 2 n^2 \sigma^2}$
2. [[Expectation]]: $m = \Ex[Y] = \mathrm{e}^{\mu + \frac{1}{2} \sigma^2}$
3. [[Standard deviation|Variance]]: $\Var[Y]=m^2(\mathrm{e}^{\sigma^2} - 1)$

#
---
#state/tidy | #lang/en | #SemBr
