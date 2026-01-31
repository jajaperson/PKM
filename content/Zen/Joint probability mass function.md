---
tags:
  - public
---
[[Multivariate random variable]]
# Joint probability mass function

The **joint probability mass function** $f_{\vab X}$ of a [[Discrete random variable|discrete]] [[multivariate random variable]] $\vab X : \xi \to \mathbb{R}^n$ is #m/def/prob 
$$
\begin{align*}
f_{\vab X}(\vab x) = \mathbb{P}(\vab X = \vab x)
\end{align*}
$$
In order to find the probability mass function of a single component $X_{i}$ of $\vab X$,
called the **marginal probability mass function**,
one can sum over all other components
$$
\begin{align*}
\mathbb{P}(X_{i} = y) = \sum_{\vab x : x_{i} = y} f_{\vab X}(\vab x)
\end{align*}
$$

#
---
#state/tidy | #lang/en | #SemBr
