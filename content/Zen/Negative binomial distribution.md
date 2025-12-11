---
tags:
  - public
---
[[Discrete random variable]]
# Negative binomial distribution

The **negative binomial distribution** $X \sim \mathrm{NBin}(r,p)$ describes the number of failures of independent [[Bernoulli trial|Bernoulli trials]] with success probability $p$ before the $r$-th success. #m/def/prob 
It is thus the sum of $r$ independent [[Geometric distribution|geometrically distributed variables]],
whence follows the [[Discrete random variable|probability mass function]]
$$
\begin{align*}
\mathbb{P}(X=x) = p^r {x+r-1 \choose r-1}(1-p)^x
\end{align*}
$$

> [!check]- Proof by induction
> In the case $X \sim \mathrm{NBin}(1,p)$ it reduces to the [[Geometric distribution]] $X \sim \mathrm{Geom}(p)$.
> Now assume the probability mass function above is valid for $X_{r} \sim \mathrm{NBin}(r,p)$.
> Let $Y \sim \mathrm{Geom}(p)$ be independent so that $X_{r+1} = X_{r} + Y \sim \mathrm{NBin}(r+1,p)$.
> Then
> $$
> \begin{align*}
> \mathbb{P}(X_{r+1} = x)
> &= \mathbb{P}(X_{r}+Y = x) \\
> &= \sum_{i=0}^x \mathbb{P}(X_{r}+Y=x \mid X_{r} = i) \mathbb{P}(X_{r} = i) \\
> &= \sum_{i=0}^x \mathbb{P}(Y=x-i) \mathbb{P}(X_{r} = i) \\
> &= \sum_{i=0}^x (1-p)^{x-i}p \,p^r {i+r-1 \choose r-1}(1-p)^i  \\
> &= p^{r+1} (1-p)^x\sum_{i=0}^x  {i+r-1 \choose r-1} \\
> &= p^{r+1} {x+r \choose r}(1-p)^x
> \end{align*}
> $$
> where on the final line we invoked [[Binomial expansion#^P5]]. <span class="QED"/>

## Properties

Let $X \sim \mathrm{NBin}(r,p)$ and $q = 1-p$

1. [[Expectation]]:  $\mu =\Ex[X] = \frac{rq}{p}$ ^P1
2. [[Standard deviation|Variance]]: $\sigma^2 =\Var[X] = \frac{rq}{p^2}$ ^P2
3. [[Moment-generating function]]: $M_{X}(t) = (\frac{p}{1-q\mathrm{e}^t})^r$ for $q\mathrm{e}^t<1$ ^P3
4. [[Probability-generating function]]: $g_{X}(t) = (\frac{p}{1-qt})^r$

> [!check]- Proof of 1–3
> [[#^P1]] follows from [[Geometric distribution#^P1]] by [[Expectation#^P2|linearity of expectation]],
> while [[#^P2]] follows from [[Geometric distribution#^P2]] by [[Standard deviation#^P3]]
> [[#^P3]] follows from [[Geometric distribution#^P3]] by [[Moment-generating function#^P1]].
> <span class="QED"/>

## Relationship to other distributions

- By the [[Central limits theorem]], $\mathrm{NBin}(n,p) \rightsquigarrow \N\left( \frac{nq}{p}, \frac{nq}{p^2} \right)$ as $n \to \infty$

#
---
#state/develop | #lang/en | #SemBr
