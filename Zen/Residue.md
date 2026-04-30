---
tags:
  - public
---
[[Complex analysis MOC]]
# Residue
A **residue** of a [[meromorphic]] function $f$ at a [[Singular point]] $z_{0}$ is the value of the coëfficient $A_{-1}$ of the [[Laurent series]] about $z_{0}$.

$$
\begin{align*}
\Res[f,z_{0}] = A_{-1}
\end{align*}
$$

Residues themselves can be used to calculate a [[Complex integration|contour integral]] using [[Cauchy's Residue Theorem]].

## Calculating residues
**Cauchy's residue formula**[^2023] states that if $f(z)$ has a [[Singular point#Poles|pole]] of order $k$ at $z = z_0$, then
$$
\begin{align*}
\Res[f,z_{0}] = \frac{1}{(k-1)!} \lim_{ z \to z_{0} } \frac{d^{k-1}}{dz^{k-1}}\left[ (z-z_{0})^k f(z) \right]
\end{align*}
$$

[^2023]: 2023\. [[Sources/@hillAdvancedMathematicalMethods2023|Advanced Mathematical Methods]], p. 61

In many cases, using the [[Laurent series]] is easier than using this formula.

Often [[L'Hôpital's Rule]] is involved in calculating residues.
#
---
#state/develop | #lang/en | #SemBr
