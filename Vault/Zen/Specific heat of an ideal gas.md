---
tags:
  - public
---
[[Ideal gas]]
# Specific heat of an ideal gas

The molar [[The relationship between temperature and heat in a solid or liquid|specific heat]] of an ideal gas at constant volume and constant pressure respectively are given by
$$
\begin{align*}
c_{V} &= \alpha\,R & c_{p} &= c_{V} + R
\end{align*}
$$
where $R = N_{A} k_{B}$ is the molar gas constant.

> [!check]- Thermodynamic derivation
> By [[First law of thermodynamics#^Quasistatic]] we have $\dj Q = dE + p\,dV$.
> At constant volume $dV = 0$ and thus $\dj Q = dE$,
> so the [[Energy of an ideal gas]] gives $\dj Q = \alpha\,\nu\, R \,dT$ and thus
> $$
> \begin{align*}
> c_{V} = \frac{\dj Q}{\nu\,dT} = \alpha\,R
> \end{align*}
> $$
> whence $E = \nu\,c_{V}\,T$
> Similarly at constant pressure $dp = 0$
> so applying the [[Ideal gas law]] and noting $d\nu = 0$
> $$
> \begin{align*}
> \dj Q &= dE + p\,dV \\
> &= \nu \, c_{V} \,dT + d(p\,V) \\
> &= \nu \,c_{V}\,dT + d(\nu \,R\,T) \\
> &=\nu\,(c_{V}+R)\,dT
> \end{align*}
> $$
> wherefore
> $$
> \begin{align*}
> c_{p} = \frac{\dj Q}{\nu\,dT} = c_{V} + R
> \end{align*}
> $$
> as claimed. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr
