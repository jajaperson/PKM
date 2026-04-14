---
alias: specific heat, molar specific heat
tags:
  - public
---
[[Thermodynamics MOC]]
# The relationship between temperature and heat in a solid or liquid
In solids and liquids,
which are not undergoing a phase change,
the relation between heat in and [[Temperature]] change is
$$
\begin{align*}
\dj Q = m \, c \, d T
\end{align*}
$$
where $c$ is the **specific heat** of the object.
This is sometimes given as
$$
\begin{align*}
\dj Q = \nu \, C \, dT
\end{align*}
$$
where $C$ is the **molar specific heat** of the object.

The values of $C$ (and $c$) are different depending on whether the heating process occurs at constant volume or constant pressure.
$$
\begin{align*}
C_{p} > C_{V}
\end{align*}
$$

> [!tip]- Explanation
> By the [[First law of thermodynamics]]
> $$
> \begin{align*}
> \dj Q = dE + p\,dV
> \end{align*}
> $$
> so if $V$ is constant, $\dj Q = dE$.
> However if we keep $p$ constant,
> $dV > 0$ so some heat gets spent as work.

Note that at [[Phase change]] boundaries,
it is impossible to increase temperature.
See [[Heat of transformation]].

## Ideal gas

For an [[Ideal gas]]
$$
\begin{align*}
C_{p}= C_{V} + R
\end{align*}
$$

> [!check]- Proof
> For constant $\nu$, we have $E = \alpha \nu R T$.
> It follows $dE = \alpha \nu R \,dT$.
> Hence for a quasistatic process ($\dj Q = dE + p \,dV$),
> it follows $\dj Q = \alpha R \nu \,dT + p\,dV$.
> 
> First we consider constant volume, whence
> $$
> \begin{align*}
> \dj Q &= \alpha R \nu \,dT = dE \\
> \implies \qquad C_{V} &= \frac{1}{\nu} \frac{\dj Q}{dT} = \alpha R
> \end{align*}
> $$
> hence $E = \nu C_{V} T$.
> 
> Now consider constant pressure, whence
> $$
> \begin{align*}
> \dj Q &= \nu C_{V} \,dT + d(pV) \\
> &= \nu C_{V}\,dT + d(\nu R T) \\
> &= \nu C_{V} \,dT + \nu R\,dT \\
> &= \nu(C_{V}+R)dT
> \end{align*}
> $$
> whence $C_{p} = C_{V} + R$.
> <span class="QED"/>


---
#state/tidy | #SemBr 
