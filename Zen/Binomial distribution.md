---
tags:
  - public
---
[[Discrete random variable]]
# Binomial distribution
A **binomial distribution** is the sum of $n$ independent [[Bernoulli trial|Bernoulli trials]]
with probability of success $p$. #m/def/prob
$$
\begin{align*}
Y_{i} &\sim \Bern(p) \\
X &= \sum_{i = 1}^n Y_{i}\\
 X &\sim \Bin(n, p)
\end{align*}
$$
The probability of a given value of $X=x \in \mathbb{N}_{0}$ is hence given by
$$
\begin{align*}
\mathbb{P}(X=x) =
\begin{pmatrix}
n\\x
\end{pmatrix}
p^x
(1-p)^{n-x}
\end{align*}
$$
and the [[Expectation]] and [[Standard deviation|variance]] are given by
$$
\begin{align*}
\Ex(X) &= np \\
\Var(X) &= np(1-p)
\end{align*}
$$
As $n \to \infty$, the shape of a binomial distribution approaches that of the continuous [[Normal distribution]].
See [[Binomial expansion|binomial coëfficient]].

## Properties

Let $X \sim \Bin(n,p)$ and let $q = 1-p$

1. [[Expectation]]: $\mu = \Ex[X]=np$
2. [[Standard deviation|Variance]]: $\sigma^2 = \Var[X]=npq$
3. [[Moment-generating function]]: $M_{X} : \mathbb{R} \to \mathbb{R} : t \mapsto (p\mathrm{e}^t+q)^n$
4. [[Probability-generating function]]: $g_{X}(t) = (pt+q)^n$ ^P4

> [!check]- Proof of 1–4
>  These follow from the analogous results for a [[Bernoulli trial]] by [[Expectation#^P2]], [[Standard deviation#^P3]] and [[Moment-generating function#^P1]],
>  since a binomial variable may be thought of as the sum of independent and identically distributed Bernoulli trials. 
>  [[#^P4]] follows directly from the [[Binomial expansion]]. <span class="QED"/>

Some further properties

1. $n - X \sim \Bin(n,q)$
2. $X + Y \sim \Bin(n+m,p)$ if $Y \sim \Bin(n=m,p)$ is [[Independence of random variables|independent]] from $X$

## Relationship to other distributions

- [[Relationship between binomial and hypergeometric distributions]]
- By the [[Central limits theorem]], $\Bin(n,p) \rightsquigarrow \N(np,npq)$ as $n \to \infty$.

#
---
#state/tidy | #SemBr | #lang/en
