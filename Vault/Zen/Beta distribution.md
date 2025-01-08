---
tags:
  - public
---
[[Continuous random variable]]
# Beta distribution

A **beta distributed** random variable $X \sim \mathrm{Beta}(a,b)$ is described by the following [[probability density function]] #m/def/prob 
$$
\begin{align*}
f_{X}(x) = \frac{1}{\beta(a,b)} x^{a-1}(1-x)^{b-1}
\end{align*}
$$
where $\beta(a,b)$ is chosen so as to normalize $f_{X}$
$$
\begin{align*}
\beta(a,b) = \frac{\Gamma(a+b)}{\Gamma(a)\Gamma(b)}
\end{align*}
$$
Note $\mathrm{Beta}(1,1) \sim \mathrm{Unif}(0,1)$.

## Properties

Furthermore

1. Let $X_{i} \sim \mathrm{U}(0,1)$ be [[Independence of random variables|independently distributed]]. Then the $j$th [[Order statistic]] $X_{(j)} \sim \mathrm{Beta}(j,n-j+1)$.

#
---
#state/tidy | #lang/en | #SemBr
