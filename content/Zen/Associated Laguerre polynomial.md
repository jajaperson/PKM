---
aliases:
  - generalized Laguerre polynomial
tags:
  - public
---
[[Special functions MOC]]
# Associated Laguerre polynomial

The **associated Laguerre polynomials** (also called **generalized Laguerre polynomials**) $L_{q}^p$ are polynomials of degree $q$ defined (by one convention[^2018]) for $p \geq 0$ as #m/def/fun
$$
\begin{align*}
L_{q}^p(x)=(-1)^p \left( \frac{d}{dx} \right)^p L_{p+q}(x)
\end{align*}
$$
where $L_{p+q}$ is a [[Laguerre polynomial]], or equivalently,
$$
\begin{align*}
L_{q}^p(x)= \frac{x^{-p}e^x}{q!}\left( \frac{d}{dx} \right)^q (e^{-x}x^{p+q})
\end{align*}
$$

[^2018]: 2018\. [[Sources/@griffithsIntroductionQuantumMechanics2018|Introduction to quantum mechanics]], §4.2, pp. 149–150

> [!code] Mathematica
> The associated Laguerre polynomial $L_{q}^p(x)$ may be generated in [[Wolfram Mathematica]] with `LaguerreL[p,q,x]`.

## Properties

1. Clearly $L_{q}^0 = L_{q}$.

#
---
#state/develop | #lang/en | #SemBr
