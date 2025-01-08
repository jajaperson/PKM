---
tags:
  - public
---
[[Discrete random variable]]
# Poisson distribution

The **Poisson distribution** $X \sim \mathrm{Pois}(\lambda)$ describes the probability of $x$ events occurring in a fixed time interval,
where $\lambda$ is the expected number of occurrences and the time of each event is independent from any prior ones. #m/def/prob 
It has the probability distribution
$$
\begin{align*}
\mathbb{P}(X=x)=e^{-\lambda} \frac{\lambda^x}{x!}
\end{align*}
$$

> [!missing]- Proof
> #missing/proof

## Properties

1. [[Expectation]], [[Standard deviation|variance]]: $\Ex[X]=\Var[X]=\lambda$ ^P1
2. [[Moment-generating function]]: $\Ex[\mathrm{e}^{tX}]= \mathrm{e}^{\lambda(\mathrm{e}^t-1)}$ ^P2
3. [[Probability-generating function]]: $g_{X}(t) = \mathrm{e}^{\lambda(t-1)}$

Additionally

1. If $X \sim \mathrm{Pois}(\lambda)$ and $Y \sim \mathrm{Pois}(\mu)$ are [[Independence of random variables|independently distributed]] then $X+Y \sim \mathrm{Pois}(\lambda+\mu)$ ^Q1
2. If $X \sim \mathrm{Pois}(\lambda p)$ and $Y \sim \mathrm{Pois}(\lambda q)$ where $q = 1-p$ are [[Independence of random variables|independently distributed]] then $N = X+Y \sim \mathrm{Pois}(\lambda)$ and $X \mid N = n \sim \Bin(n,p)$. ^Q2
3. Conversely, if $N \sim \mathrm{Pois}(\lambda)$ and $X \mid N = n \sim \Bin(n,p)$ then $X \sim \mathrm{Pois}(\lambda p)$ and $Y = N - X \sim \mathrm{Pois}(\lambda q)$ are [[Independence of random variables|independently distributed]]. ^Q3

> [!check]- Proof of 1
> By [[Moment-generating function#^P1]]
> $$
> \begin{align*}
> M_{X+Y}(t) &= M_{X}(t)M_{Y}(t)
> = \Ex[\mathrm{e}^{tX}] \Ex[\mathrm{e}^{tY}]  \\
> &=\mathrm{e}^{\lambda(\mathrm{e}^t-1)} \mathrm{e}^{\mu(\mathrm{e}^t-1)} 
> = \mathrm{e}^{(\lambda+\mu)(\mathrm{e}^t-1)}
> \end{align*}
> $$
> as required. <span class="QED"/>

## Poisson paradigm
Let $\{ A_{i} \}_{i=1}^n$ be [[Independence of events|independent]] events with $p_{i} = \mathbb{P}(A_{i})$ small.
Then $X = \sum_{j=1}^n I_{A_{j}}$is approximated by $N \sim \mathrm{Pois}(\lambda)$ where $\lambda - \sum_{i=1}^n p_{i}$,
with
$$
\begin{align*}
|\mathbb{P}(X \in B) - \mathbb{P}(N \in B)| \leq \min\left( 1, \frac{1}{\lambda} \right)\sum_{j=1}^n p_{j}^2
\end{align*}
$$
for any $B \sube \mathbb{N}$.
See also [[Poisson process]].

## Relationship to other distributions

- If $X \sim \mathrm{Pois}(\lambda)$ and $Y \sim \mathrm{Pois}(\mu)$ are [[Independence of random variables|independently distributed]],
then the [[conditional distribution]] of $X$ given $X+Y = n$ is $\Bin\left( n, \frac{\lambda}{\lambda+\mu} \right)$.
- As $n \to \infty$ and $p \to 0$ as $np = \lambda$ remains fixed $\Bin(n,p) \rightsquigarrow \mathrm{Pois}(\lambda)$.
- By the [[Central limits theorem]] $\mathrm{Pois}(n) \rightsquigarrow \N(n,n)$ as $n \to \infty$

#
---
#state/develop | #lang/en | #SemBr
