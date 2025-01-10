---
mathLink-blocks:
  P4: entropy maximum principle
tags:
  - public
---
[[Thermodynamics MOC]]
# Entropy
**Entropy** is a somewhat obscure quantity relating to the exchange of [[heat]].
The change in entropy for a [[quasistatic process]] is defined by[^claim]
$$
\begin{align*}
dS = \frac{\dj Q}{T}
\end{align*}
$$
  [^claim]: There is an implicit claim that $dS$ is an [[Inexact differential|exact differential]] and hence the quantity $S$ is well-defined for an equilibrium state.
  For example, see [[Entropy of an ideal gas]].

[[Statistical thermodynamics MOC|Statistical thermodynamics]] reveals
$$
\begin{align*}
S = k_{B} H[M]
\end{align*}
$$
where $H$ is the [[Shannon entropy]] expressed in $\pu{nat}$ for the [[Distribution of microstates at equilibrium]].

Entropy is a quantity which increases during any [[Reversible and irreversible processes|Irreversible process]].
For a real process
$$
\begin{align*}
dS > \frac{\dj Q}{T}
\end{align*}
$$

## Thermodynamic entropy postulates

In thermodynamics, the following properties are postulated:

1. The **entropy** $S$ is a well-defined quantity for equilibrium states as a function of the [[Extensive and intensive parameters|extensive parameters]] of a system, e.g. $S = S(E,V,\vab N)$. ^P1
2. The entropy of a composite system is the sum of the entropies of its subsystems, i.e. entropy is an [[Extensive and intensive parameters|extensive parameter]]. ^P2
3. In an infinitesimal [[quasistatic process]] the change in entropy is $dS = \dj Q / T$. ^P3
4. **Entropy maximum principle:**^[Essentially the [[Second law of thermodynamics]]] For an isolated system, the entropy can never decrease, moreover if an internal constraint is removed, the final equilibrium state is that which maximizes entropy. ^P4

## As a thermodynamic potential

Entropy $S(E,V,\vab N)$ is the naural [[Thermodynamic potential]] for a [[thermodynamic system|closed thermodynamic system]].
Applying the [[First law of thermodynamics#^Quasistatic]],
$$
\begin{align*}
dS = \frac{1}{T}\,dE + \frac{p}{T}\,dV - \sum_{i} \frac{\mu_{i}}{T}\,dN_{i}
\end{align*}
$$
whence
$$
\begin{align*}
\frac{\partial S}{\partial E} &= \frac{1}{T} & \frac{\partial S}{\partial V} &= \frac{p}{T} & \frac{\partial S}{\partial N_{i}}= -\frac{\mu_{i}}{T}
\end{align*}
$$


#
---
#state/develop | #SemBr  | #lang/en 