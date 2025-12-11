---
tags:
  - public
---
[[Special functions MOC]]
# Associated Legendre function

To every [[Legendre polynomial]] $P_{\ell}$ exist a number of **associated Legendre functions** $P_{\ell}^m$ defined (by one convention[^2018]) for $m \geq 0$ as #m/def/fun
$$
\begin{align*}
P_{\ell}^m(x) = (-1)^m (1-x^2)^{m/2} \left( \frac{d}{dx} \right)^m P_{\ell}(x)
\end{align*}
$$
and
$$
\begin{align*}
P_{\ell}^{-m}(x) = (-1)^m \frac{(\ell-m)!}{(\ell+m)!} P_{\ell}^m(x)
\end{align*}
$$
where naturally $P_{\ell}^m(x) = 0$ for $\abs m > \ell$.

[^2018]: 2018\. [[Sources/@griffithsIntroductionQuantumMechanics2018|Introduction to quantum mechanics]], §4.1, p. 135

> [!code] Mathematica
> The Associated Legendre polynomial $P_{\ell}^m(x)$ may be generated in [[Wolfram Mathematica]] with `LegendreP[ℓ, m, x]`.

#
---
#state/tidy | #lang/en | #SemBr
