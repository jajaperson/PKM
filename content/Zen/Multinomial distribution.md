---
tags:
  - public
---
[[Multivariate random variable]]
# Multinomial distribution

A [[Multivariate random variable|random vector]] $\vab X : \xi \to \mathbb{R}^k$ has a $k$-dimensional **multinomial distribution** iff it is the sum of $n$ [[Independence of random variables|independently distributed]] [[Categorical distribution|categorically distributed variables]] #m/def/prob 
$$
\begin{align*}
Y_{i} &\sim \mathrm{Cat}_{k}(\vab p) \\
X &= \sum_{i=1}^n Y_{i}\\
X &\sim \mathrm{Multi}_{k}(n,\vab p)
\end{align*}
$$
The [[joint probability mass function]] is
$$
\begin{align*}
\mathbb{P}(\vab X = \vab x) = n! \prod_{i=1}^k \frac{p_{i}^{x_{i}}}{x_{i}!}
\end{align*}
$$
and $X_{i} \sim \Bin(n,p_{i})$.
Hence this generalizes the [[binomial distribution]].

## Properties

1. Multinomial lumping $(X_{1}+X_{2},X_{3},\dots,X_{k}) \sim \mathrm{Mult}_{k-1}(n,(p_{1}+p_{2},p_{3},\dots,p_{k}))$
2. Multinomial conditioning $(X_{2},\dots,X_{k})\mid X_{1}=x_{1} \sim \mathrm{Mult}_{k-1}(n-n_{1},(p_{2}',\dots,p_{k}'))$ where $p_{j}' = \frac{p_{j}}{p_{2}+\dots+p_{k}}$
3. $\Covar[X_{i},X_{j}]= -np_{i}p_{j}$ for $i \neq j$.

#
---
#state/develop | #lang/en | #SemBr
