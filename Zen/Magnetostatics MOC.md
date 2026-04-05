---
mathLink-blocks:
  Potential: magnetostatic potential
tags:
  - public
---
[[Electrodynamics MOC]]
# Magnetostatics MOC

**Magnetostatics** is a special case of [[Electrodynamics MOC|electrodynamics]] where the [[Magnetic field]] is time-independent and there is no [[electric field]], i.e.
$$
\begin{align*}
\vab E &= 0 & \frac{ \partial \vab B }{ \partial t } &= \vab 0
\end{align*}
$$
Magnetostatics was established empicircally by the [[Biot-Savart Law]], but of course it is fully encoded in [[Maxwell's equations]] whose differential form become
$$
\begin{align*}
0 &= \rho_{q} & \vab{\nabla}\cdot\vab B &= 0 & \frac{ \partial \vab B }{ \partial t } &= 0 & \vab{\nabla}\times\vab B = \mu_{0}\vab J
\end{align*}
$$
whence it immediately follows that $\frac{ \partial \vab J }{ \partial t } = \vab 0$ and the [[charge continuity equation]] becomes
$$
\begin{align*}
\vab{\nabla}\cdot\vab J = 0
\end{align*}
$$
Since the [[Poynting vector]] and thus [[Electromagnetic momentum density|momentum density]] vanishes, no energy nor momentum is transported by the fields and no momentum is stored by the fields.

## Potential

A magnetostatic system is completely described by its [[Electric and magnetic potentials|magnetic potential]]
$$
\begin{align*}
\vab B &= \vab{\nabla} \times \vab A & \vab{\nabla} (\vab{\nabla} \cdot \vab A) - \nabla^2 \vab A = \mu_{0}\vab J
\end{align*}
$$
where the [[Coulomb gauge]] $\vab{\nabla}\cdot\vab A = 0$ further reduces the above to [[Poisson's equation]]
$$
\begin{align*}
\vab B &= \vab{\nabla} \times \vab A & \nabla^2 \vab A = -\mu_{0}\vab J
\end{align*}
$$
so for localized sources the solution is
$$
\begin{align*}
\vab A(\vab r) &= \frac{\mu_{0}}{4\pi} \iiint_{\Omega} \frac{\vab J(\vab r')}{\Sr}\,d\tau' \\
\vab A(\vab r) &= \frac{\mu_{0}}{4\pi} \iint_{\Sigma} \frac{\vab K(\vab r')}{\Sr}\,da' \\
\vab A(\vab r) &= \frac{\mu_{0}}{4\pi} \int_{\Pi} \frac{\vab I(\vab r')}{\Sr}\,dl'
\end{align*}
$$ 
^Potential

for volume, surface, and line [[current density]] respectively.
See also [[Multipole expansion of the magnetostatic potential]].

## Further properties

- [[Magnetostatic energy density]]
- [[Magnetostatic boundary conditions at a surface]]

## Applications

- [[Magnet]]
  - [[Magnetic dipole moment]]
  - [[Perfect magnetic dipole]]
  - [[Magnetic potential of a magnetized material]]
  - [[Linear magnet]]
- [[H-field]]  
  - [[Ampère's law for magnets]]

#
---
#MOC | #state/develop | #lang/en | #SemBr