---
tags:
  - public
---
[[Convergence concepts in probability MOC]]
# Empirical cumulative distribution function

Given a [[random sample]] $\{ X_{j} \}_{j=1}^n$ of [[Independence of random variables|independent and identically distributed]] [[Real random variable|real random variables]] with [[Cumulative distribution function|CDF]] $F$, let $R_{n}(x)$ count how many of $\{ X_{j} \}_{j=1}^n$ are less than or equal to $x$; i.e.
$$
\begin{align*}
R_{n}(x) = \sum_{j=1}^n 1_{\{ X_{j} \leq x \}}
\end{align*}
$$
implying $R_{n}(x) \sim \Bin(n,F(x))$.
The **empirical cumulative distribution function** of $\{ X_{j} \}_{j=1}^n$ is #m/def/prob 
$$
\begin{align*}
F_{n}(x) = \frac{1}{n}R_{n}(x) = \sum_{j=1}^n 1_{\{ X_{j} \leq x \}}
\end{align*}
$$
and $F_{n}(x)$ [[Convergence almost surely|converges almost surely]] to $F(x)$ as $n \to \infty$,
hence it is an [[estimator]] of the true CDF.

> [!missing]- Proof
> #missing/proof
> By [[Kolmogorov's law]].

#
---
#state/develop | #lang/en | #SemBr
