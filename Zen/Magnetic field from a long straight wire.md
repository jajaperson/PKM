---
tags:
  - public
---
[[Biot-Savart Law]]
# Magnetic field from a long straight wire
> ![[B-field from infinitely long wire.jpeg#invert]]
> An infinitely long conductor with current $I$ results in a magnetic field strength $\vab B$ at a perpendicular distance $y$.[^2020]

[^2020]: 2020\. [[Sources/@jayMagnetism2020|Magnetism]], pp. 25ff.

While this scenario is impossible for obvious reasons,
it approximates the $\vab B$-field 
short distances from a long section of straight wire in a large circuit.
Since $d\vab\ell$ is always in the direction of current[^ldir],
the right hand rule shows 
that any point with a positive $y$ in the above setup will experience $\vab B$ out of the page
(while the opposite is true for negative $y$).
Using these observations,
solving the [[Biot-Savart Law]] for this setup gives
$$
\begin{align*}
\abs{\vab B} = \frac{\mu_{0}I}{2\pi y}
\end{align*}
$$
where the direction of the $\vab B$-field can be determined by a right hand rule:
point the thumb in the direction of current and the curl of the fingers corresponds to the direction of the $\vab B$-field.

[^ldir]: The derivation of the given form of the [[Biot-Savart Law]] defines $d\vab \ell$ in this way so as to replace $\vab I \, d\ell$ with $I d\vab\ell$.

Combining this with [[Magnetic force on a wire]],
we can derive the [[Force between two straight current carrying wires]].

#
---
#state/tidy | #SemBr | #lang/en
