---
tags:
  - public
---
[[QM in 3D position-space]]
# Spherically symmetric potential

Many applications of quantum mechanics for single particles in 3D space have a **spherically symmetric potential**,
i.e. $V(\mathbf{r}) = V(r)$.
Using [[QM in 3D position-space#Spherical coördinates|spherical coördinates]] and separating variables,
we find a complete set of stationary states given by[^2018]
$$
\begin{align*}
\psi(\mathbf{r}) = R(r)Y_{\ell}^{m_{\ell}}(\theta,\phi)
\end{align*}
$$
where $Y_{\ell}^{m_{\ell}}$ are [[Spherical harmonic|spherical harmonics]] and $R(r)$ is a solution of the **radial equation**
$$
\begin{align*}
\frac{d}{dr} \left( r^2 \frac{dR}{dr} \right) - \frac{2mr^2}{\hbar^2}\left( V(r)-E \right) R = \ell(\ell+1)R
\end{align*}
$$
which is solved more easily after the change of variables $u(r) = rR(r)$ gives
$$
\begin{align*}
-\frac{\hbar^2}{2m} \frac{d^2u}{dr^2} + \left( V + \frac{\hbar^2}{2m} \frac{\ell(\ell+1)}{r^2} \right) u = Eu
\end{align*}
$$
^radial

which is analogous to [[QM in 1D position-space]] for an **effective potential** containing an additional **centrifugal term**.

[^2018]: 2018\. [[Sources/@griffithsIntroductionQuantumMechanics2018|Introduction to quantum mechanics]], §4.1, pp. 131ff.

## Properties

- We are guaranteed at least $(2\ell+1)$-fold energy degeneracy due to the spherical symmetry ($m_{\ell}$ does not affect the energy).

## Examples

- [[QM of the coulomb potential]]

#
---
#state/develop | #lang/en | #SemBr
