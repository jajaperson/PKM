---
tags:
  - public
---
[[Continuous random variable]]
# Chi-squared distribution

A **chi-squared distributed** random variable $X \sim \chi^2_{n}$ is the sum of squares of $n$ [[Independence of random variables|independent and identically distributed]] $\{ Z_{i} \}_{i=1}^n$ with [[Standard normal distribution|standard normal distributions]]. #m/def/prob
$$
\begin{align*}
X &= \sum_{i=1}^n (Z_{i} )^2 & Z_{i} \stackrel{\text{iid}}{\sim} \N(0,1)
\end{align*}
$$
This turns out to be a special case of the [[Gamma distribution]],
namely $X \sim \mathrm{Gamma}\left( \frac{n}{2}, \frac{1}{2} \right)$.

> [!check]- Proof
> Let $X = Z^2$ for $Z \sim \N(0,1)$, i.e. $X \sim \chi^2_{1}$.
> Then
> $$
> \begin{align*}
> F_{X}(x) &= \mathbb{P}(Z^2 \leq x) \\
> &= \mathbb{P}(-\sqrt{ x } < Z < \sqrt{ x }) \\
> &= \Phi(\sqrt{ x } ) -  \Phi(-\sqrt{ x }) \\
> &= 2\Phi(\sqrt{ x }) - 1
> \end{align*}
> $$
> thus
> $$
> \begin{align*}
> f_{X}(x) = \varphi(\sqrt{ x }) x^{-1/2} = \frac{(1 / 2)^{1/2}}{\Gamma(1 / 2)} x^{1/2 - 1} \mathrm{e}^{-x/2}
> \end{align*}
> $$
> so $X \sim \mathrm{Gamma}\left( \frac{1}{2}, \frac{1}{2} \right)$.
> Thus by [[Gamma distribution#^Q1]], the claim is proven. <span class="QED"/>

## Properties

Additional properties

1. Let $\{ X_{j} \}_{j=1}^n$ be a [[random sample]] of variable [[Independence of random variables|independently distributed]] according to the [[normal distribution]] $\N(\mu,\sigma^2)$.
   Then the [[sample variance]] is distributed such that
   $$
  \begin{align*}
  \frac{(n-1)S_{n}^2}{\sigma^2} \sim \chi^2_{n-1}
  \end{align*}
  $$

#
---
#state/tidy | #lang/en | #SemBr 