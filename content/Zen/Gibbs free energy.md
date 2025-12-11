---
tags:
  - public
---
[[Thermodynamic potential]]
# Gibbs free energy

The **Gibbs free energy** $G(T,p,\vab N)$ is the [[Thermodynamic potential]] minimized by a system held at constant temperature and pressure.
It may be thought of as measuring the work other than pressure-volume work obtainable from a [[Thermodynamic system|closed thermodynamic system]] in an [[Isothermal process|isothermal]], [[Isobaric process|isobaric]] process.
$$
\begin{align*}
G = E + p\,V - T\,S
\end{align*}
$$
Applying [[First law of thermodynamics#^Quasistatic]]
$$
\begin{align*}
dG = -S\,dT + V\,dp + \sum_{i} \mu_{i}\,dN_{i}
\end{align*}
$$
whence the equations of state
$$
\begin{align*}
\frac{ \partial G }{ \partial T } &=-S &
\frac{ \partial G }{ \partial p } &= V &
\frac{ \partial G }{ \partial N_{i} } &= \mu_{i}
\end{align*}
$$

> [!check]- Proof of minimization
> Consider a system whose volume is free in contact with a [[Heat reservoir|heat]] and [[pressure reservoir]].
> Then
> $$
> \begin{align*}
> dS_{\mathrm{res}} &= -\frac{\dj Q_{\mathrm{sys}}}{T} \\
> \dj W_{\mathrm{res}} &= p\,dV_{\mathrm{sys}} \\
> &= -\dj W_{\mathrm{sys}}
> \end{align*}
> $$
> Noting that since the chemical makeup is fixed $dE_{\mathrm{sys}} = \dj Q_{\mathrm{sys}} + \dj W_{\mathrm{sys}}$ by the [[First law of thermodynamics]],
> it follows form the [[Entropy#^P4]] that
> $$
> \begin{align*}
> 0 &\leq dS = dS_{\mathrm{res}} + dS_{\mathrm{sys}} \\
> &= -\frac{\dj Q_{\mathrm{sys}}}{T} + dS_{\mathrm{sys}} \\
> &= -\frac{d E_{\mathrm{sys}} - \dj W_{\mathrm{sys}}}{T} + dS_{\mathrm{sys}} \\
> &= -\frac{d E_{\mathrm{sys}} + p \,dV_{\mathrm{sys}}}{T} + dS_{\mathrm{sys}} \\
> \implies 0 &\leq -dE_{\mathrm{sys}} - p\,dV_{\mathrm{sys}} + T \,dS_{\mathrm{sys}} \\
> \implies 0 &\geq d(E_{\mathrm{sys}} + p\,V_{\mathrm{sys}} - T\,S_{\mathrm{sys}}) \\
> &= dG_{\mathrm{sys}}
> \end{align*}
> $$
> hence $G_{\mathrm{sys}}$ is minimized. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr
