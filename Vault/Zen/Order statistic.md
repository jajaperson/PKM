---
tags:
  - public
---
[[Multivariate random variable]]
# Order statistic

Let $\{ X_{i} \}_{i=1}^n$ be [[Real random variable|real random variables]].
The $j$th **order statistic** $X_{(j)}$ is the $j$th smallest $X_{i}$. #m/def/prob 
## Joint PDF

If $\{ X_{i} \}_{i=1}^n$ are identically and [[Independence of random variables|independently distributed]] with [[Probability density function|probability density]] $f$,
then the [[Joint probability density function]] of $\vab K =  (X_{(j)})_{j=1}^n$ is
$$
\begin{align*}
f_{\vab K}(\vab k)= n! \prod_{j=1}^n f(x_{j})
\end{align*}
$$

## Marginal CDF


If $\{ X_{i} \}_{i=1}^n$ are identically and [[Independence of random variables|independently distributed]] with [[Cumulative distribution function]] $F$,
then the marginal [[Cumulative distribution function|CDF]] of $X_{(j)}$ is
$$
\begin{align*}
\mathbb{P}(X_{(j)}\leq x) = \sum_{k=j}^n {n \choose k} F(x)^k (1-F(x))^{n-k}
\end{align*}
$$

## Marginal PDF
If $\{ X_{i} \}_{i=1}^n$ are identically and [[Independence of random variables|independently distributed]] with [[Cumulative distribution function]] $F$ and [[Probability density function|probability density]] $f$
then the marginal probability density of $X_{(j)}$ is
$$
\begin{align*}
f_{X_{(j)}} = n {n-1 \choose j-1} f(x) F(x)^{j-1} (1-F(x))^{n-1}
\end{align*}
$$

#
---
#state/develop | #lang/en | #SemBr
