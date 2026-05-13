---
aliases: z-score
tags:
  - public
---
[[Normal distribution]]
# Standard normal distribution
The **standard normal distribution** is the [[Normal distribution]]
with mean $\mu=0$ 
and standard deviation $\sigma = \sigma^2 = 1$.
$$
\begin{align*}
Z \sim \N(0, 1)
\end{align*}
$$
It has the simplified probability density function
$$
\begin{align*}
f_{Z}(x) = \phi(x) = \frac{1}{\sqrt{ 2\pi }}e^{-x^2/2}
\end{align*}
$$
Due to its symmetry about $z=0$,
$$
\begin{align*}
\mathbb{P}(Z < -z) = \mathbb{P}(Z > z)
\end{align*}
$$

## Standardisation
Any normally distributed variable $X \sim \N(\mu,\sigma^2)$ can be _standardised_ using the [[Location-scale transformation]]
$$
\begin{align*}
Z = \frac{X-\mu}{\sigma} \sim \N(0,1)
\end{align*}
$$
where the standardised version of a value is sometimes called the **Z-score**.
This allows the calculation of probabilities for any normally-distributed random variable
using the [[Cumulative distribution function]] for the standard normal distribution $F_Z(z)$.
$$
\begin{align*}
\mathbb{P}(a\leq X\leq b) = F_{Z}\left( \frac{b-\mu}{\sigma} \right) - F_{Z}\left( \frac{a-\mu}{\sigma} \right)
\end{align*}
$$

## Properties

Let $Z \sim \mathrm{N}(0,1)$.

1. [[Moment-generating function]]: $\mathrm{e}^{t^2/2}$
2. [[Statistical moment|Moments]]: $\Ex[Z^{2n}] = \frac{(2n)!}{2^nn!}$
3. [[Excess kurtosis]]: 0

#
---
#state/tidy | #SemBr 