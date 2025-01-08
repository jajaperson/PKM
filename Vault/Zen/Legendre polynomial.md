---
tags:
  - public
---
[[Special functions MOC]]
# Legendre polynomial

The $\ell$th **Legendre polynomial** $P_{\ell}$ for $\ell \in \mathbb{N}_{0}$ is a polynomial of degree $\ell$ given by the [[Rodrigues' formula]][^2018] #m/def/fun
$$
\begin{align*}
P_{\ell}(x) = \frac{1}{2^\ell\ell!} \left( \frac{d}{dx} \right)^\ell \left( x^2 - 1 \right) ^\ell
\end{align*}
$$
and is [[Odd and even functions|even or odd]] depending on the parity of $\ell$.

[^2018]: 2018\. [[Sources/@griffithsIntroductionQuantumMechanics2018|Introduction to quantum mechanics]], §4.1, p. 135

> [!code] Mathematica
> The Legendre polynomial $P_{\ell}(x)$ be generated in [[Wolfram Mathematica]] with `LegendreP[ℓ, x]`.

## Properties

1. The Legendre polynomials satisfy the orthonormality condition ^P1
  $$
  \begin{align*}
  \int_{-1}^{1} P_{\ell}(x)P_{\ell'}(x) \, dx = \left( \frac{2}{2\ell+1} \right) \delta_{\ell \ell'} 
  \end{align*}
  $$ 
  

> [!check]- Proof of 1
> Without loss of generality, assume $l' < l$
> $$
> \begin{align*}
> I &=  2^{\ell + \ell!} \ell! \ell'! \int_{-1}^{1} P_{\ell}(x)P_{\ell'}(x) \, dx \\
> &= \int_{-1}^{1} \left( \left( \frac{d}{dx} \right)^\ell (x^2-1)^\ell \right) \left( \left( \frac{d}{dx} \right)^{\ell'} (x^2-1)^{\ell'} \right)  \, dx \\
> &= \left[ \sum_{j=1}^\ell \left( \left( \frac{d}{dx} \right)^{\ell-j}(x^2-1)^\ell \right) \left( \left( \frac{d}{dx} \right)^{\ell'+j-1} (x^2-1)^{\ell'} \right)  \right]_{x=-1}^{x=1} \\
> &\quad + (-1)^n \int_{-1}^{1} (x^2 - 1)^\ell \left( \frac{d}{dx} \right)^{\ell' + \ell} (x^2 - 1)^{\ell'} \, dx 
> \end{align*}
> $$
> Now the integral term on the final line is zero,
> since the highest power of $x$ is $x^{2\ell'}$ and $\ell' + \ell > 2\ell'$.
> Each of the sum terms contains at least one $(x^2 +1)$ factor and is hence zero.
> Thus for $\ell \neq \ell'$ the integral is zero.
> For the case of $\ell \neq \ell'$
> $$
> \begin{align*}
> I &= (2^\ell \ell!)^2 \int_{-1}^{1} [P_{\ell}(x)]^2 \, dx \\
> &= (-1)^\ell \int_{-1}^{1} (x^2-1)\left( \frac{d}{dx} \right)^{2\ell} (x^2-1)^\ell \, dx \\
> &= (-1)^\ell \int_{-1}^{1} (x^2-1)^\ell (2\ell!) \, dx \\
> &= 2(2\ell)! \int_{0}^{1} (1-x^2)^\ell \, dx 
> \end{align*}
> $$
> Let $x = \cos\theta$, so $dx=-\sin\theta \,d\theta$, $(1-x^2) = \sin^2 \theta$, and $[0,1] \to [\frac{\pi}{2},0]$.
> Then
> $$
> \begin{align*}
> I &= 2(2\ell)! \int_{\pi/2}^{0} \sin^{2\ell}\theta\, (-\sin\theta) \, d\theta \\
> &= 2(2\ell)! \int_{0}^{\pi / 2} \sin^{2\ell + 1}\theta \, d\theta \\
> &= 2(2\ell) \frac{(2^\ell \ell!)^2}{(2\ell+1)!}
> \end{align*}
> $$
> which proves [[#^P1]]
> <span class="QED"/>

#
---
#state/develop | #lang/en | #SemBr
