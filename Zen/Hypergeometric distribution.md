---
tags:
  - public
---
[[Discrete random variable]]
# Hypergeometric distribution

The **hypergeometric distribution** $X \sim \mathrm{HGeom}(s,f,n)$ describes the probability of a sample of size $n$ containing $x$ successes, drawn from a pool consisting of $s$ successes and $f$ failures, without replacement. #m/def/prob 
It has the [[Discrete random variable|probability mass function]]
$$
\begin{align*}
\mathbb{P}(X=x) = \frac{{s \choose x}{f \choose n-x}}{s+f \choose n}
\end{align*}
$$

> [!check]- Proof
> We draw $n$ times from a pool of size $s+f$, so the total number of outcomes is $s+f \choose n$.
> Using the naïve definition of probability,
> the number of outcomes with $X=x$ will be equal to the number of ways of choosing $x$ of $s$ successes and $n-x$ of $f$ failures,
> giving ${s \choose x}{f \choose n-x}$.
> <span class="QED"/>

## Properties

Let $X \sim \mathrm{HGeom}(s,f,n)$. Let $N = s + f$, $p = s/N$, and $q = f / N$.

1. [[Expectation]]: $\Ex[X]= \frac{ns}{s+f} = np$ ^P1
2. [[Standard deviation|Variance]]: $\Var[X] = \frac{N-n}{N-1}npq$ ^P2

> [!check]- Proof of 1–2
> Let $I_{j}$ be the [[Bernoulli trial|indicator random variable]] for the $j$th draw being a success,
> so that $X = \sum_{j=1}^n I_{j}$.
> It follows $\Ex[I_{j}] = p$ and hence $\Ex[X]= \sum_{j=1}^n \Ex[I_{j}] = np$, proving [[#^P1]].
> We also have $\Var[I_{j}]= pq$.
> Notice that by symmetry, $\Covar[I_{i},I_{j}] = \Covar[I_{1},I_{2}]$ for $i \neq j$.
> Now
> $$
> \begin{align*}
> \Var[X] &= \Var \left[ \sum_{j=1}^n I_{j} \right] \\
> &= \sum_{j=1}^n \Var[I_{j}] + \sum_{i=1}^n \sum_{j=1}^n (1-\delta_{ij}) \Covar[I_{i},I_{j}] \\
> &= npq + n(n-1) \Covar[I_{1},I_{2}]
> \end{align*}
> $$
> where
> $$
> \begin{align*}
> \Covar[I_{1},I_{2}] &= \Ex[I_{1}I_{2}] - \Ex[I_{1}]\Ex[I_{2}] \\
> &= \frac{s}{N} \frac{s-1}{N-1} - p^2 \\
> &= p\left( \frac{s-1}{N-1}-p \right)
> \end{align*}
> $$
> so
> $$
> \begin{align*}
> \Var[X] &= npq + n(n-1)p \left( \frac{s-1}{N-1} - p \right) \\
> &=\frac{N-n}{N-1}npq
> \end{align*}
> $$
> proving [[#^P2]]. <span class="QED"/>

Furthermore

1. $\mathrm{HGeom}(s,f,n) \sim \mathrm{HGeom}(n,s+f-n,f)$ ^Q1



See also

- [[Relationship between binomial and hypergeometric distributions]]
- [[Geometric distribution]]


#
---
#state/develop | #lang/en | #SemBr
