---
tags:
  - public
alias: joint CDF
---
[[Multivariate random variable]]
# Joint cumulative distribution function

The **joint cumulative distribution function** of a [[multivariate random variable]] $\vab X = (X_{i})_{i=1}^n$ is #m/def/prob 
$$
\begin{align*}
F_{\vab X}(\vab x) = \mathbb{P}\left(\bigcap_{i=1}^n \{ X_{i} \leq x_{i} \}\right)
\end{align*}
$$
In order to find the cumulative distribution function of a single component $X_i$ of $\vab X$,
called its **marginal cumulative distribution function**,
one takes the limit of all other components
$$
\begin{align*}
\mathbb{P}(X_{i} \leq x_{i}) = \lim_{ x_{j} \to \infty, \forall j \neq i } F_{\vab X}(\vab x) 
\end{align*}
$$

#
---
#state/tidy | #lang/en | #SemBr
