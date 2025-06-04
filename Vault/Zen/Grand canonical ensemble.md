---
tags:
  - public
---
[[Statistical thermodynamics MOC]]
# Grand canonical ensemble

The **grand canonical ensemble** represents an otherwise closed system in [[thermal equilibrium|thermal]] and [[chemical equilibrium]] with a [[Heat reservoir|heat bath]] and [[particle reservoir]].
As such, its natural variables are

- $\mu$ — Chemical potential
- $V$ — System volume
- $T$ — Temperature of the heat bath (and thus the system)

and microstates of all energies $E_{i}$ and particle numbers $N_{i}$ are accessible to the system,
with probabilities at equilibrium given by the distribution
$$
\begin{align*}
P_{i} &= \frac{\exp\left( -\frac{E_{i} - \mu N_{i}}{k_{B}T} \right)}{\mathcal{Z}} &
\mathcal{Z} &= \sum_{i} \exp\left( -\frac{E_{i}-\mu N_{i}}{k_{B}T} \right) = \exp \left( -\frac{\Phi}{k_{B}T} \right)
\end{align*}
$$
where $\mathcal{Z}$ is the **grand canonical partition function**,
related to the [[Landau free energy]] $\Phi = -k_{B}T \ln \mathcal{Z}$.
The determination of $\mathcal{Z}$ depends on the statistics used.

- [[Maxwell-Boltzmann statistics]]
- [[Modified Boltzmann approximation]]
- [[Fermi-Dirac statistics]]
- [[Bose-Einstein statistics]]

> [!missing]- Derivation
> #missing/derivation

#
---
#state/develop | #lang/en | #SemBr
