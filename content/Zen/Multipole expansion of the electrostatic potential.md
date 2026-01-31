---
tags:
  - public
---
[[Electrostatics MOC]]
# Multipole expansion of the electrostatic potential

The [[electrostatic potential]] due to sources localized to $\Omega$ has the [[multipole expansion]]
$$
\begin{align*}
V(\vab r) &= \frac{1}{4\pi\epsilon_{0}} \sum_{n=0}^\infty \frac{1}{r^{n+1}} \iiint_{\Omega} (r')^n P_{n}(\cos\alpha)\rho(\vab r') \,d\tau' \\
&= \frac{1}{4\pi\epsilon_{0}} \frac{Q}{r} + \frac{1}{4 \pi\epsilon_{0}} \frac{\vab p \cdot \unitv r}{r^2} + \mathcal{O}(r^{-4})
\end{align*}
$$
where $Q$ is the total charge (i.e. monopole moment) of the distribution, $\vab p$ is the [[Electric dipole moment]],
and $\alpha$ is the angle between $\vab r$ and $\vab r'$ so that $\vab r \cdot \vab r ' = rr' \cos \alpha$.
This may be combined with the principle of superposition.

> [!check]- Derivation
> By applying the [[Multipole expansion of the reciprocal]] to the [[Electrostatics MOC#Potential|electrostatic potential]] one gets the expression above. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr
