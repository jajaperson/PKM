---
tags:
  - public
---
[[Thermodynamic potential]]
# Helmholtz free energy

The **Helmholtz free energy** $F(T,V,\vab N)$ is the [[Thermodynamic potential]] minimized by a system held at constant temperature and volume.
It may be thought of as measuring the useful work obtainable from a [[Thermodynamic system|closed thermodynamic system]] in an [[isothermal process]].
$$
\begin{align*}
F = E - TS
\end{align*}
$$
Applying [[First law of thermodynamics#^Quasistatic]]
$$
\begin{align*}
dF = - S\,dT - p\,dV + \sum_{i} \mu_{i}\,dN_{i}
\end{align*}
$$
whence the equations of state
$$
\begin{align*}
\frac{ \partial F }{ \partial T } &= -S &
\frac{ \partial F }{ \partial V } &= -p &
\frac{ \partial F }{ \partial N_{i} } &= \mu_{i}
\end{align*}
$$

> [!check]- Proof of minimization
> Consider a system of constant volume in thermal contact with a [[heat reservoir]].
> Then
> $$
> \begin{align*}
> dS_\mathrm{res}= -\frac{\dj Q_\mathrm{sys}}{T}
> \end{align*}
> $$
> Noting that since the volume and chemical makeup are fixed $dE_{\mathrm{sys}} = \dj Q_{\mathrm{sys}}$ by the [[First law of thermodynamics]],
> it follows from the [[Entropy#^P4]] that
> $$
> \begin{align*}
> 0 &\leq dS = dS_{\mathrm{res}} + dS_{\mathrm{sys} } \\ &= -\frac{\dj Q_{\mathrm{sys}}}{T} + dS_{\mathrm{sys}} \\
> \implies 0 &\leq -d E_{\mathrm{sys}} + d(T\, S_{\mathrm{sys}})  \\
> \implies 0 &\geq d(E_{\mathrm{sys}} - T\, S_{\mathrm{sys}}) = dF_{\mathrm{sys}}
> \end{align*}
> $$
> hence $F_{\mathrm{sys}}$ is minimized. <span class="QED"/>

#
---
#state/tidy  | #lang/en | #SemBr
