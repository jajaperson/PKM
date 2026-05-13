---
aliases: magnetic field around a current
tags:
  - public
---
[[Electrodynamics MOC]]
# Biot-Savart Law
The **Biot-Savart Law** describes the production of a magnetic field by current in a wire
(the converse situation to [[Magnetic force on a wire]]).
$$
\begin{align*}
d\vab B = \frac{\mu_{0}}{4\pi} \frac{I\,d\vab\ell \times \unitv \SR}{\Sr^2}
\end{align*}
$$
where $\mu_0 = 4\pi \times \pu{ E-7 N.A2 }$ is the [[permeability of free space]].
This is in many ways analogous to the law for [[Electric field around a point charge]],
but instead of the charge element $dq$ we have the current element $I\,d\vab\ell$.[^2020],
and since this current element is a vector we also use a cross product.
Biot-Savart may be used to derive the [[Magnetic field#Calculation|general expression]] for the magnetic field.

[^2020]: 2020\. [[Sources/@jayMagnetism2020|Magnetism]], p. 21

Integrating over a whole wire to solve this is pretty awful,
but there are a few special cases which simplify matters considerably: 
see [[Magnetic field from a circular wire loop]] and [[Magnetic field from a long straight wire]].

#
---
#state/tidy | #SemBr | #lang/en 
