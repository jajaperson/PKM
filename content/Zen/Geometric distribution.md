---
tags:
  - public
---
[[Discrete random variable]]
# Geometric distribution

The **geometric distribution** $X \sim \mathrm{Geom}(p)$ describes the number of failures of independent [[Bernoulli trial|Bernoulli trials]] with success probability $p$ before the first success. #m/def/prob 
It has the [[Discrete random variable|probability mass function]]
$$
\begin{align*}
\mathbb{P}(X=x)= (1-p)^x p = q^x p
\end{align*}
$$
for $x \in \mathbb{N}_{0}$.

> [!check]- Proof
> Let $Y_{i} \sim \Bern(p)$ be independent for $i \in \mathbb{N}$.
> Then
> $$
> \begin{align*}
> \mathbb{P}(X = x) &= \mathbb{P}\left( \{ X_{x+1}=1 \} \cap \bigcap_{i=1}^x \{ X_{i}=0 \} \right) \\
> &= \mathbb{P}(X_{x+1}=1)\prod_{i=1}^x \mathbb{P}(X_{i}=0) \\
> &= p(1-p)^x
> \end{align*}
> $$
> as claimed. <span class="QED"/>

This is related to the [[Negative binomial distribution]], which is the sum of i.i.d. geometric variables.

## Properties

Let $X \sim \mathrm{Geom}(p)$ and $q = 1-p$

1. [[Expectation]]: $\Ex[X]= \frac{q}{p}$ ^P1
2. [[Standard deviation|Variance]]: $\Var[X] = \frac{q}{p^2}$ ^P2
3. [[Moment-generating function]]:
   $$
  \begin{align*}
  M_{X} : (-\infty, -\ln q) &\to \mathbb{R} : \\t &\mapsto \frac{p}{1-q\mathrm{e}^t}
  \end{align*}
  $$ 
  ^P3

> [!check]- Proof of 1
> Invoking the expansion for a [[geometric series]]
> $$
> \begin{align*}
> \Ex[X] &= \sum_{x=0}^\infty x\mathbb{P}(x=x) 
> =  \sum_{x=0}^\infty x(1-p)^x p \\
> &= (1-p)p\sum_{x=0}^\infty x (1-p)^{x-1} \\
> &= (1-p) p\sum_{x=0}^\infty - \frac{d}{dp}\left[(1-p)^x\right]  \\
> &= (p-1)p\, \frac{d}{dp} \sum_{x=0}^\infty(1-p)^x \\
> &= (p-1)p \,\frac{d}{dp} \frac{1}{1(1-p)} \\
> &= (p-1)p \,\frac{d}{dp}p^{-1} 
> = (1-p)p^{-1}
> \end{align*}
> $$
> as claimed, proving [[#^P1]].
> 
> Alternately we may invoke [[conditional expected value]].
> Let $S$ denote the event that the first trial is successful.
> Then noting that $(X \mid S) \sim X + 1$, we have
> $$
> \begin{align*}
> \Ex[X] &= \Ex[X \mid S] p + \Ex[X \mid S^c]q \\
> &= \Ex[1+X]q = q(1+\Ex[X])
> \end{align*}
> $$
> whence
> $$
> \begin{align*}
> \Ex[X] = \frac{q}{p}
> \end{align*}
> $$
> proving [[#^P1]]. <span class="QED"/>

#
---
#state/develop | #lang/en | #SemBr