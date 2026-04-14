---
tags:
  - public
---
[[Stellar astrophysics MOC]]
# Opacity

Given a ray of radiation, the opacity for a wavelength $\lambda$ is given by
$$
\begin{align*}
\kappa_{\lambda} &= - \frac{1}{\rho I_{\lambda}} \frac{dI_{\lambda}}{ds}
\end{align*}
$$
where $I_{\lambda}$ is the intensity at wavelength $\lambda$, $s$ is the distance traveled by the ray, and $\rho$ is the density of scatterers.
If $\rho$ is constant, the solution for $I_{\lambda}$ is
$$
\begin{align*}
I_{\lambda}(s) = I_{\lambda}(0)  e^{-\kappa_{\lambda}\rho s}
\end{align*}
$$
where the intensity falls by a factor of $e^{-1}$ after travelling the **mean free path**
$$
\begin{align*}
l_{\lambda} = \frac{1}{\rho\kappa_{\lambda}}
\end{align*}
$$
#
---
#state/develop | #lang/en | #SemBr
