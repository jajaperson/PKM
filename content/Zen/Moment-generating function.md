---
tags:
  - public
---
[[Probability theory MOC]]
# Moment-generating function

The **moment-generating function** $M_{X}(\vab t)$ of a [[real random variable]] or [[Multivariate random variable|random vector]] $\vab X : \xi \to \mathbb{R}^k$ is defined as #m/def/prob 
$$
\begin{align*}
M_{X} : (-a,a)^k &\to \mathbb{R} \\
\vab t &\mapsto \Ex[\mathrm{e}^{\vab t \cdot \vab X}]
\end{align*}
$$
provided it is finite on some interval $(-a,a)$ around 0, otherwise the moment-generating function does not exist.

> [!tip]
> To make sure a moment-generating function is valid, check that $M_{X}(0)=1$.

If the moment-generating functions of two real random variables match in an arbitrarily small neighbourhood of 0, they must have the same distribution. #m/thm/prob
Thus moment-generating function carries all relevant information about the distribution of $X$, and therefore provides an alternative to working with the [[probability density function]] and [[cumulative distribution function]] directly.

## Relation to moments

Taking the [[Taylor series|Taylor expansion]] of $M_{X}$ it follows
$$
\begin{align*}
M^{(n)}(0) = \Ex[X^n] = M_{n}
\end{align*}
$$
the $n$th [[Statistical moment|moment]] of $X$. #m/thm/prob 
Hence $M_{X}$ is a [[generating function]] for the moments of $X$.

## Properties

1. $M_{X+Y}(t) = M_{X}M_{Y}(t)$ for [[Independence of random variables|independently distributed]] $X,Y$  ^P1
2. $M_{a+bX}(t) = e^{at} M_{X}(bt)$ ^P2

> [!check]- Proof of 1–2
> By definition, if it exists
> $$
> \begin{align*}
> M_{X+Y}(t) = \Ex[\mathrm{e}^{tX + tY}] = \Ex[\mathrm{e}^{tX}\mathrm{e}^{tY}] = \Ex[\mathrm{e}^{tX}] \Ex[\mathrm{e}^{tY}]
> \end{align*}
> $$
> by [[Expectation#^P3]], proving [[#^P1]].
> Similarly
> $$
> \begin{align*}
> M_{a+bX} = \Ex[\mathrm{e}^{t(a+bX)}] = \mathrm{e}^{at} \Ex[\mathrm{e}^{tbX}] = \mathrm{e}^{at} M_{X}(bt)
> \end{align*}
> $$
> proving [[#^P2]]. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr
