---
tags:
  - public
---
[[Electrodynamics MOC]]
# Electrostatics MOC

**Electrostatics** is a special case of [[Electrodynamics MOC|electrodynamics]] where the [[electric field]] is time-independent and there is no [[Magnetic field]], i.e.
$$
\begin{align*}
\vab B &= \vab 0 & \frac{ \partial \vab E }{ \partial t } &= \vab 0
\end{align*}
$$
Electrostatics was established empirically by [[Coulomb's law]], 
but of course it is fully encoded in [[Maxwell's equations]] whose differential form become
$$
\begin{align*}
\vab{\nabla}\cdot\vab E &= \frac{\rho_{q}}{\epsilon_{0}} & 0 &= 0 & \vab{\nabla}\times\vab E &= \vab 0 & \vab J &= \vab 0 \\
\end{align*}
$$
^MAXWELL

whence we have integral forms
$$
\begin{align*}
\oiint_{\partial\Omega} \vab E \cdot d\vab a &= \frac{1}{\epsilon_{0}}\iiint_{\Omega}\rho_{q}\,d\tau 
& \oint_{\partial\Sigma} \vab E \cdot d\vab \ell &= 0
\end{align*}
$$
consequentially the [[charge continuity equation]] becomes
$$
\begin{align*}
\frac{ \partial \rho }{ \partial t } = 0
\end{align*}
$$
Since the [[Poynting vector]] and thus [[Electromagnetic momentum density|momentum density]] vanishes, no energy nor momentum is transported by the fields and no momentum is stored by the fields.

## Potential

An electrostatic system is completely describes by the [[Electric and magnetic potentials|electric potential]]
$$
\begin{align*}
\vab E &= -\vab{\nabla} V & \nabla^2 V = - \frac{\rho_{q}}{\epsilon_{0}}
\end{align*}
$$
hence solving [[Poisson's equation]] for sources localized to $\Omega$
$$
\begin{align*}
V(\vab r) &= \frac{1}{4\pi\epsilon_{0}} \iiint_{\Omega} \frac{\rho(\vab r')}{\Sr} \, d\tau' \\
\vab E(\vab r) &= \frac{1}{4\pi\epsilon_{0}} \iiint_{\Omega} \frac{\rho(\vab r')}{\Sr^2} \unitv \SR \,d\tau'
\end{align*}
$$
see also [[Multipole expansion of the electrostatic potential]]

## Further properties

- [[Electrostatic energy density]]
- [[Electrostatic boundary conditions at a surface]]

## Applications

- [[Conductor in electrostatic equilibrium]]
- [[Diëlectric]]
  - [[Electric dipole moment]]
  - [[Perfect electric dipole]]
  - [[Electric potential of a polarized material]]
  - [[Linear diëlectric]]
- [[Electric displacement]]
  - [[Gauß's law for diëlectrics]]

#
---
#state/develop | #lang/en | #SemBr
