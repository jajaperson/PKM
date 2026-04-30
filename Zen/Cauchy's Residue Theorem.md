---
tags:
  - public
---
[[Complex integration]]
# Cauchy's Residue Theorem
If $f(z)$ is [[analytic]] over a closed region $D \sube \mathbb{C}$ except at isolated points,
i.e. it is holomorphic for $D \setminus \{ z_{1},z_{2},\dots ,z_{M} \}$,
then the contour integral
$$
\begin{align*}
\oint_{\partial D} {f(z)}\,dz = 2\pi i \sum_{m=1}^M \Res[f,z_{m}]
\end{align*}
$$
where $\Res[f, z_{m}]$ is the [[Residue]] of the singular point $z_{m}$ which is relatively easy to calculate.

#
---
#state/develop | #lang/en | #SemBr
