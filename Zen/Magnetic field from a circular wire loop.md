---
tags:
  - public
---
[[Biot-Savart Law]]
# Magnetic field from a circular wire loop

> ![[circular conductor.jpeg#invert]]
> A circular conductor with current $I$, radius $a$ results in a magnetic field strength $\vab B$ at the point a length of $x$ along its "axis".[^2020]

[^2020]: 2020\. [[Sources/@jayMagnetism2020|Magnetism]], pp. 22ff.

The above situation yields a number of useful symmetries: 
viz. any components of $d\vab B$ arising from one point on the wire perpendicular to the axis will be canceled out by the $d\vab B$ on the opposite side.
Therefore, $\vab B$ along this axis is always parallel to the axis itself.
Specifically, solving the [[Biot-Savart Law]] for this setup gives
$$
\begin{align*}
\abs{\vab B} = \frac{\mu_{0} Ia^2}{2(a^2+x^2)^{3/2}}
\end{align*}
$$
which, when $x = 0$, i.e. the field strength directly in the ring's centre, simplifies to
$$
\begin{align*}
\abs{\vab B} = \frac{\mu_{0}I}{2a}
\end{align*}
$$
The direction of the $\vab B$-field at any point along the axis can be determined by a right hand rule:
curl the fingers in the direction of current and the thumb points in the direction of the $\vab B$-field.

Note when $x \gg a$ this gives a $B \propto x^{-3}$,
which is analogous to an electric dipole.
See [[Magnetic dipole moment]].
$$
\begin{align*}
\vab B = \frac{\mu_{0}I \vab A}{2\pi x^3}
\end{align*}
$$

#
---
#state/tidy | #SemBr | #lang/en
