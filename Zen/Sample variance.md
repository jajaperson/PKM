---
tags:
  - public
alias: sample standard deviation
---
[[Estimator]]
# Sample variance

Let $\{ X_{j} \}_{j=1}^n$ be a sample of [[Independence of random variables|independent and identically distributed]] [[Real random variable|real random variables]] with [[Expectation|mean]] $\mu$ and [[Standard deviation|variance]] $\sigma^2$.
The **sample variance** is #m/def/prob 
$$
\begin{align*}
S^2_{n} = \frac{1}{n-1}\sum_{j=1}^n (X_{j}-\overline{X}_{n})^2
\end{align*}
$$
where $\overline{X}_{j}$ is the [[𝜇-estimator|sample mean]].
$S_{n}^2$ estimates the [[Standard deviation|variance]] of the population since
$$
\begin{align*}
\Ex[S^2_{n}]= \sigma^2
\end{align*}
$$

#
---
#state/develop | #lang/en | #SemBr
