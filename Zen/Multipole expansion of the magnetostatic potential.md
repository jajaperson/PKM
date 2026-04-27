---
tags:
  - public
---
[[Magnetostatics MOC]]
# Multipole expansion of the magnetic potential

In [[Coulomb gauge]], the [[Electric and magnetic potentials|magnetic potential]] due to current $I$ around a closed loop $\partial\Sigma$ has the [[multipole expansion]]
$$
\begin{align*}
\vab A(\vab r) &= \frac{\mu_{0} I}{4\pi} \sum_{n=1}^\infty \frac{1}{r^{n+1}} \oint_{\partial\Sigma} (r')^n P_{n}(\cos\alpha) \,d\vab l \\
&= \frac{\mu_{0}}{4\pi}  \frac{\vab m \times \unitv r}{r^2} + \mathcal{O}(r^{-4})
\end{align*}
$$
where $\vab m$ is the [[magnetic dipole moment]] and $\alpha$ is the angle between $\vab r$ and $\vab r'$ so that $\vab r \cdot \vab r ' = rr' \cos \alpha$.
This may be combined with the principle of superposition.

> [!check]- Derivation
> By applying the [[Multipole expansion of the reciprocal]] to the [[Magnetostatics MOC#^Potential]] on a closed loop $\partial \Sigma$,
> and noting that the $n=0$ term vanishes since [[Gauß's law for magnetic flux|there are no magnetic monopoles]]
> we get the above expression. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr
