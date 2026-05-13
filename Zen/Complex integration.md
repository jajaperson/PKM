---
aliases: Cauchy's Integral Theorem, integrals of complex analytic functions are path independent, contour integral
tags:
  - public
---
[[Complex analysis MOC]]
# Complex integration
Given a complex function $f : x + iy \mapsto u + iv$, 
its **complex integral** along a path $C$ is
$$
\begin{align*}
\int _{C} f(z) \, dz & = \int _{C}(u+iv) (dx+i\,dy) \\
&= \int _{C}u \, dx - v\,dy + i \int _{C}v \, dx  + u\,dy 
\end{align*}
$$
However, _if_ we require $f$ be **analytic**, the [[Cauchy-Riemann equations]] imply that this integral should be **path-independent**.

> **Cauchy's Integral Theorem** If $f(z)$ is an analytic complex function for a closed region $R \sube \mathbb{C}$, then
> $$
> \begin{align*}
> \oint_{\partial R} f(z)\,dz = 0
> \end{align*}
> $$
> That is, $f(z)$ is defined inside and on a closed path $\partial R$.

Note that if $R$ contains a [[Singular point|singularity]] and is hence non-[[Differentiability|analytic]], then Cauchy's Integral Theorem does not apply and the path integral may be non-zero.[^2023]
If $f$ does have singularities but they lie outside $R$, the theorem still holds.

[^2023]: 2023\. [[Sources/@hillAdvancedMathematicalMethods2023|Advanced Mathematical Methods]], p. 55

## Core integration techniques
- [[Cauchy's Integral Formula]]
- [[Cauchy's Residue Theorem]]

#
---
#state/tidy | #lang/en | #SemBr
