---
tags:
  - public
---
[[Continuous random variable]]
# Normal distribution
The **normal distribution** or bell-curve is occurs frequently over a diverse range of applications.
$$
\begin{align*}
X \sim \N(\mu, \sigma^2)
\end{align*}
$$
It has the following [[probability density function]]
$$
\begin{align*}
f_{X}(x) = \frac{1}{\sqrt{ 2\pi\sigma^2 }}e^{-(x-\mu)^2/2\sigma^2}
\end{align*}
$$
with no closed-form [[Cumulative distribution function]].
One important property of the normal distribution is
that it is [[Symmetric distribution|symmetric]] about $\mu$.
$$
\begin{align*}
\mathbb{P}(Z<\mu-a) = \mathbb{P}(Z>\mu+a)
\end{align*}
$$

> [!graph]- Graph
> <iframe src="https://www.desmos.com/calculator/s3qjybaagx?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>

## Properties

Let $X \sim \mathrm{N}(\mu,\sigma^2)$.

1. [[Expectation]]: $\Ex[X] = \mu$ ^P1
2. [[Standard deviation|Variance]]: $\Var[X]= \sigma^2$ ^P2
3. [[Moment-generating function]]: $M_{X}(t) = M_{\mu + \sigma Z}(t) = \exp\left( \mu t + \frac{1}{2} \sigma^2t^2 \right)$ ^P3

Furthermore

1. If $X_{1} \sim \mathrm{N}(\mu_{1},\sigma_{1}^2)$ and $X_{2} \sim \mathrm{N}(\mu_{2},\sigma_{2}^2)$ are [[Independence of random variables|independently distributed]] then $X_{1}+X_{2} \sim \mathrm{N}(\mu_{1}+\mu_{2},\sigma_{1}^2+\sigma_{2}^2)$. ^P1
2. By [[Cramér's theorem]] the converse of the above also holds.

> [!check]- Proof of 1
> By [[Moment-generating function#^P1]]
> $$
> \begin{align*}
> M_{X_{1}+X_{2}}(t) 
> &= M_{X_{1}}(t)M_{X_{2}}(t) \\
> &= \exp\left( \mu_{1} t+\frac{1}{2}\sigma_{1}^2t^2 \right) \exp\left( \mu_{2}t+\frac{1}{2}\sigma_{2}^2t^2 \right) \\
> &= \exp\left( (\mu_{1}+\mu_{2})t + \frac{1}{2}(\sigma_{1}^2+\sigma_{2}^2)t^2 \right) 
> \end{align*}
> $$
> as required. <span class="QED"/>

## Standard form
See [[Standard normal distribution]].
#
---
#state/develop | #SemBr
