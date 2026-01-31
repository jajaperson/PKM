---
tags:
  - public
---
[[Entropy]]
# Entropy of an ideal gas

Consider $\nu$ moles of an [[Ideal gas]] with temperature $T$ and molar volume $v = V / \nu$.
Its [[entropy]] is then $S = \nu s$ where
$$
\begin{align*}
s = (c_{V} + \ln T + R\ln v + \tilde{C})
\end{align*}
$$
is its molar entropy.

> [!check]+ Thermodynamic derivation
> By the [[First law of thermodynamics#^Quasistatic]] and [[Energy of an ideal gas]] we have
> $$
> \begin{align*}
> \dj Q = \nu\,c_{V}\,dT+p\,dV
> \end{align*}
> $$
> for a quasistatic process with a fixed number of moles.
> The heat added per mole is then
> $$
> \begin{align*}
> \dj q = c_{V} \,dT + p\,dv
> \end{align*}
> $$
> Applying the [[Ideal gas law]] $pv = RT$ and dividing by temperature gives
> $$
> \begin{align*}
> ds=\frac{\dj q}{T} &= c_{V} \,\frac{dT}{T} + R \,\frac{dv}{T} \\
> &= d(c_{V}\,\ln T + R \,\ln v + \tilde{C})
> \end{align*}
> $$
> where $\tilde{C}$ is an undetermined constant.
> Note the unitful logarithms are dealt with by the constant. <span class="QED"/>

#
---
#state/develop | #lang/en | #SemBr
