---
alias: standard uniform distribution
tags:
  - public
---
[[Continuous random variable]]
# Uniform distribution
A **uniformly distributed** random variable $X$ represents the selection of a real number completely randomly over a given interval $[a,b]$.
It is the simplest continuous distribution.
$$
\begin{align*}
X &\sim \Un(a, b) \\
\end{align*}
$$
It has the following [[probability density function]] and [[Cumulative distribution function]] 
$$
\begin{align*}
f_{X}(x) &= \begin{cases}
\frac{1}{b-a} & a \leq x \leq b \\
0 & \text{otherwise}
\end{cases} \\ \\
F_{X}(x) &= \begin{cases}
\frac{x-a}{b-a} & a \leq x\leq b \\
0 & x < a \\
1 & x > b
\end{cases}
\end{align*}
$$

## Properties
Let $X \sim \mathrm{U}(a,b)$.

1. [[Expectation]]: $\mu= \Ex[X] = \frac{b-a}{2}$
2. [[Standard deviation|Variance]]: $\sigma^2 = \Var[X] = \frac{(b-a)^2}{12}$
3. [[Moment-generating function]]: $M_{X} : \mathbb{R} \to \mathbb{R} : t \mapsto \frac{\mathrm{e}^{tb}-\mathrm{e}^{ta}}{t(b-a)}$


## Standard form
The **standard uniform distribution** $X \sim \Un(0,1)$ is particularly useful,
as it is a natural starting point for transforming random variables.
See [[Universality of the uniform distribution]]

#
---
#state/tidy | #SemBr
