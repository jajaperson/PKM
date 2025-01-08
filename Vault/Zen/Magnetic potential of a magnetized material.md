---
tags:
  - public
alias: bound current density
mathLink-blocks:
  bcd: bound current density
---
[[Magnet]]
# Magnetic potential of a magnetized material

In [[Coulomb gauge]], the potential due to a magnetized [[magnet]] $\Omega$ is given by
$$
\begin{align*}
\vab A (\vab r) &= \frac{\mu_{0}}{4\pi} \iiint_{\Omega} \frac{\vab M(\vab r') \times \unitv \SR}{\Sr^2}\,d\tau' \\
&= \frac{\mu_{0}}{4\pi} \oiint_{\partial\Omega} \frac{\vab K_{b}(\vab r')}{\Sr} \,da' + \frac{\mu_{0}}{4\pi} \iiint_{\Omega} \frac{\vab J_{b}(\vab r')}{\Sr} \,d\tau'
\end{align*}
$$
where $\vab M$ is the [[Magnetic dipole moment|magnetization]],
and $\vab K_{b}$ and $\vab J_{b}$ are the surface and volume **bound current densities** respectively given by
$$
\begin{align*}
\vab K_{b}(\vab r') &= \vab M(\vab r') \times \unitv n &
\vab J_{b}(\vab r') = \vab{\nabla}\times\vab M(\vab r')
\end{align*}
$$
^bcd

If additional **free current** is present, the principle of superposition may be used to combine the potentials due to free current and due to magnetization (i.e. bound current).

> [!check]- Derivation
> Applying [[Integration by parts#^GE5]]
> $$
> \begin{align*}
> \vab A(\vab r) 
> &= \frac{\mu_{0}}{4\pi} \iiint_{\Omega} \frac{\vab M(\vab r') \times \unitv \SR}{\Sr^2}\,d\tau' \\
> &= \frac{\mu_{0}}{4\pi} \iiint_{\Omega} \vab M(\vab r') \times \vab{\nabla}'[\Sr^{-1}]\,d\tau' \\
> &= \frac{\mu_{0}}{4\pi} \oiint_{\Omega} \frac{\vab M(\vab r') \times d\vab a}{\Sr}\,d\tau'
> + \frac{\mu_{0}}{4\pi} \iiint_{\Omega} \frac{\vab{\nabla} \times \vab M(\vab r')}{\Sr}\,d\tau'
> \end{align*}
> $$
> as required. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr 