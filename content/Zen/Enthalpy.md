---
tags:
  - public
---
[[Thermodynamic potential]]
# Enthalpy

**Enthalpy** $H(S,p,\vab N)$ is the [[Thermodynamic potential]] minimized by a system held at constant pressure.
It may be thought of as measuring the heat obtainable from a [[Thermodynamic system|closed thermodynamic system]] in an [[isobaric process|isobaric]] process.
$$
\begin{align*}
H = E + p\,V
\end{align*}
$$
applying [[First law of thermodynamics#^Quasistatic]]
$$
\begin{align*}
dH= T\,dS + V\,dp + \sum_{i}\mu_{i}\,dN_{i}
\end{align*}
$$
whence the equations of state
$$
\begin{align*}
\frac{ \partial H }{ \partial S } &= T &
\frac{ \partial H }{ \partial p } &= V &
\frac{ \partial H }{ \partial N_{i} } &= \mu_{i}
\end{align*}
$$
> [!missing]- Proof of minimization
> Consider a system whose volume is free in contact with a [[pressure reservoir]].
> Then
> $$
> \begin{align*}
> 0 &\leq dS = dS_{\mathrm{res}} + dS_{\mathrm{sys}} \\
> &= \frac{\dj Q_{\mathrm{res}}}{T_{\mathrm{res}}} + dS_{\mathrm{sys}} \\
> &= \frac{dE_{\mathrm{res}}-\dj W_{\mathrm{res}}}{T_{\mathrm{res}}} + dS_{\mathrm{sys}} \\
> &= \frac{-dE_{\mathrm{sys}} - p\,dV_{\mathrm{sys}}}{T_{\mathrm{res}}} + dS_{\mathrm{sys}}
> \end{align*}
> $$

#
---
#state/develop | #lang/en | #SemBr
