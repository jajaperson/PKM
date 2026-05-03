---
tags:
  - public
---
[[Linear algebra MOC]]
# Cross product

The **cross product** is a [[Lie algebra|Lie bracket]] on $\mathbb{R}^3$.
Given two vectors expressed in an orthonormal basis with the same orientation as the space
$$
\begin{align*}
\vab x = \vthree{x_{1}}{x_{2}}{x_{3}}, \quad \vab y = \vthree{y_{1}}{y_{2}}{y_{3}}
\end{align*}
$$
the cross product is given by
$$
\begin{align*}
\vab z = \vab x \times\vab y = \det \begin{bmatrix}
\unitv e_{1} & x_{1} & y_{1} \\
\unitv e_{2} & x_{2} & y_{2} \\
\unitv e_{3} & x_{3} & y_{3}
\end{bmatrix}
\end{align*}
$$
or equivalently in index notation and using [[Einstein summation convention]]
$$
\begin{align*}
z_{\ell} = \epsilon_{jk\ell}x_{j}y_{k}
\end{align*}
$$


> [!missing]- Proof of Lie bracket
> #missing/proof

#
---
#state/develop | #lang/en | #SemBr
