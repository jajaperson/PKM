---
alias: sample mean
tags:
  - public
---
[[Estimator]]
# $\mu$-estimator
For a [[random sample]] $\{ X_{j} \}_{j=1}^n$, of identically and [[Independence of random variables|independently distributed]] random variables with [[Expectation|mean]] $\mu$ and [[Standard deviation|variance]] $\sigma^2$, the first [[Sample moment]]
$$
\begin{align*}
\overline{X}_{n} = M_{1} = \frac{1}{n} \sum_{j=0}^n X_{j}
\end{align*}
$$
estimates the [[Expectation]] of the population since
$$
\begin{align*}
\Ex[\overline{X}_{n}] &= \Ex[X] \\ 
\Var(\overline{X}_{n}) &= \frac{\sigma^2}{n}
\end{align*}
$$
This confirms the intuition that the larger a sample,
the closer its mean will get to the actual population mean.
The distribution of the $\mu$-estimator is described by the [[Central limits theorem]].

#
---
#state/tidy | #SemBr | #lang/en