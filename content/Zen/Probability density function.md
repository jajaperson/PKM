---
tags:
  - public
alias: probability density
---
[[Probability theory MOC]]
# Probability density function

Consider a [[probability model]] $(\xi,\mathcal{F},\mathbb{P})$.
The **probability density function** $f_{X}$ of a [[general random variable]] $X \to \xi$ of a [[measure space]] $(\mathcal{X}, \Sigma, \mu)$ is the [[Radon-Nikodym theorem|Radon-Nikodym derivative]]
$$
\begin{align*}
f_{X} = \frac{d X_{*}\mathbb{P}}{d\mu}
\end{align*}
$$
where $X_{*}\mathbb{P}$ is the [[Pushforward measure]].

## Real random variable

For the simple case of a [[real random variable]] the probability density function is simply the derivative of the [[cumulative distribution function]].

#
---
#state/tidy  | #lang/en | #SemBr 