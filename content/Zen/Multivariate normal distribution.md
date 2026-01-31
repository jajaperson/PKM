---
tags:
  - public
---
[[Multivariate random variable]]
# Multivariate normal distribution

A [[Multivariate random variable|random vector]] $\vab X : \xi \to \mathbb{R}^k$ has a **multivariate normal** distribution iff every linear combination of $X_{j}$ has a [[normal distribution]], #m/def/prob 
i.e. $\vab v \cdot \vab X \sim \mathrm{N}(\mu,\sigma^2)$ for some $\mu,\sigma^2$ for any $\vab v \in \mathbb{R}^k$.
Such a distribution is fully specified by the means and variances of each component,
and the covariance of every pair of components.
Packaging this information into a mean vector $\vab \mu$ and a **covariance matrix**
$$
\begin{align*}
\Sigma = \begin{bmatrix}
\Covar[X_{1}, X_{1}]  & \cdots & \Covar[X_{1},X_{k}] \\
\vdots & \ddots & \vdots \\
\Covar[X_{k},X_{1}] & \cdots & \Covar[X_{k},X_{k}]
\end{bmatrix}
\end{align*}
$$
the [[Joint probability density function]] is given by
$$
\begin{align*}
f_{\vab X}(\vab x) = \det(2\pi \Sigma)^{-1/2} \exp \left(  -\frac{1}{2} \tp{(\vab x - \vab \mu)} \Sigma^{-1} (\vab x - \vab \mu)\right) 
\end{align*}
$$

> [!tip]- Bivariate case
> In the bivariate case, we have
> $$
> \begin{align*}
> f_{X_{1},X_{2}}(x_{1},x_{2}) = \frac{1}{\sqrt{ (2\pi)^2 \sigma_{1}^2\sigma_{2}^2(1-\rho^2) }} \exp \left( -\frac{1}{2(1-\rho^2)}\left( \left( \frac{x_{1}-\mu_{1}}{\sigma_{1}} \right) ^2 - 2\rho \left( \frac{x_{1}-\mu_{1}}{\sigma_{1}} \right) \left( \frac{x_{2}-\mu_{2}}{\sigma_{2}} \right) + \left( \frac{x_{2}-\mu_{2}}{\sigma_{2}} \right)^2  \right)  \right) 
> \end{align*}
> $$
> where $\rho = \sigma_{1,2} / \sqrt{ \sigma_{1}^2\sigma_{2}^2 }= \Corr[X_{1},X_{2}]$.

## Properties

1. Any subvector of a multivariate normal vector is multivariate normal.
2. The concatenation of two [[Independence of random variables|independently distributed]] multivariate normals is multivariate normal.

#
---
#state/tidy | #lang/en | #SemBr
