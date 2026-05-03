---
tags:
  - public
---
[[Continuous random variable]]
# Exponential distribution
An **exponentially distributed** random variable $T \sim \Exp(\lambda)$
is common in situations of _exponential decay_, 
usually representing the amount of time taken for something to happen,
e.g. the decay of a uranium nucleus (see [[Poisson process]]).
It has positive support
and is described by the following [[probability density function]] and [[Cumulative distribution function]]
$$
\begin{align*}
f_{T}(t) &= \begin{cases}
\lambda e^{-\lambda t} & t \geq 0 \\
0 & t < 0
\end{cases} \\ \\
F_{T}(t) &= \begin{cases}
1 - e^{-\lambda t} & t\geq 0 \\
0 & t < 0
\end{cases}
\end{align*}
$$
$\lambda$ may be thought of as the _frequency_ of the event:
the higher $\lambda$, the shorter the time before the event occurs.
In fact, the expected _period_ is exactly what one might assume by this analogy.

## Properties

Let $T \sim \Exp(\lambda)$

1. [[Expectation]]: $\Ex[T] = 1 / \lambda$
2. [[Standard deviation|Variance]]: $\Var[T] = 1 / \lambda$
3. [[Moment-generating function]]: $M_{T}(\tau) = \frac{\lambda}{\lambda-\tau}$ for $\tau < \lambda$
4. [[Statistical moment|Moments]]: $\Ex[X^n] = \frac{n!}{\lambda^n}$

Additionally

- Every positive, continuous [[Memoryless random variable]] has an exponential disrtribution.
- [[Minimum of independent exponentially distributed random variables]]

#
---
#state/tidy | #SemBr
