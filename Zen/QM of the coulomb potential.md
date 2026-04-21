---
tags:
  - public
---
[[Spherically symmetric potential]]
# Coulomb potential

Consider a particle of charge $-q$ and mass $m$ bound to a stationary charge $Q$ at the origin.
The potential experienced by the particle, given by [[Coulomb's law]], is [[Spherically symmetric potential|spherically symmetric]] with
$$
\begin{align*}
V(r) = -\frac{Qq}{4\pi\epsilon_{0}} \frac{1}{r}
\end{align*}
$$
giving the [[Spherically symmetric potential#^radial|radial equation]]
$$
\begin{align*}
-\frac{\hbar^2}{2m} \frac{d^2u}{dr} + \left( -\frac{Qq}{4\pi\epsilon_{0}} \frac{1}{r} + \frac{\hbar^2}{2m} \frac{\ell(\ell+1)}{r^2} \right)u = Eu 
\end{align*}
$$
which has bound states
$$
\begin{align*}
\psi_{n\ell m}(r,\theta,\phi) =  \sqrt{ \left( \frac{2}{na_{Qq}} \right)^3 \frac{(n-\ell-1)!}{2n(n+\ell)!} } e^{-r/na_{Qq}} \left( \frac{2r}{na_{Qq}} \right)^\ell L_{n-\ell-1}^{2\ell+1}\left( \frac{2r}{na_{Qq}} \right) Y_{\ell}^m(\theta,\phi)
\end{align*}
$$
where $Y_{\ell}^m$ is a [[spherical harmonic]], $L_{n-\ell-1}^{2\ell+1}$ is an [[Associated Laguerre polynomial]],
and
$$
\begin{align*}
a_{Qq} = \frac{4\pi\epsilon_{0}\hbar^2}{mQq}
\end{align*}
$$
which in the case of hydrogen is the [[Bohr radius]].
The allowable energies are
$$
\begin{align*}
E_{n} = -\left[ \frac{m_{e}}{2\hbar^2}\left( \frac{Qq}{4\pi\epsilon_{0}} \right)^2  \right] \frac{1}{n^2}
\end{align*}
$$
which are each $n^2$-degenerate.

## Quantum numbers

 - $n = 1,2,\dots$
 - $\ell=0,1,\dots,n-1$
 - $m = -\ell , -\ell +1, \dots , \ell-1,  \ell$

#
---
#state/develop | #lang/en | #SemBr
