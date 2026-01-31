---
aliases:
  - Boltzmann factor
  - canonical partition function
tags:
  - public
---
[[Statistical thermodynamics MOC]]
# Canonical ensemble

The **canonical ensemble** represents an otherwise closed system in [[thermal equilibrium]] with a [[Heat reservoir|heat bath]] at constant temperature.
As such, its natural variables are
- $N$ — Number of particles in the system
- $V$ — System volume
- $T$ — Temperature of the heat bath (and thus the system)

and microstates of all energies are accessible to the system,
with probabilities at equilibrium given by the **Boltzmann distribution**
$$
\begin{align*}
P_{i} &= \frac{\exp\left(-\frac{E_{i}}{k_{B}T}\right)}{Z} & Z = \sum_{i} \exp\left(  -\frac{E_{i}}{k_{B}T} \right) = \exp\left( -\frac{F}{k_{B}T} \right)
\end{align*}
$$
where $Z$ is the **canonical partition function**, related to the [[Helmholtz free energy]] $F = -k_{B} T \ln Z$.
The determination of $Z$ depends on the statistics used.

- [[Maxwell-Boltzmann statistics]]
- [[Modified Boltzmann approximation]]
- [[Fermi-Dirac statistics]]
- [[Bose-Einstein statistics]]

> [!missing]- Derivation
> #missing/derivation

The ratio of probabilities of two states $i$ and $j$ is given by the **Boltzmann factor**
$$
\begin{align*}
\frac{\mathbb{P}(i)}{\mathbb{P}(j)} = \exp\left( \frac{E_{j} - E_{i}}{k_{B}T} \right)
\end{align*}
$$
To calculate the probability of the system having a given energy $E$,
it is necessary to include the energy degeneracy $g(E)$, hence
$$
\begin{align*}
\mathbb{P}(E) =\frac{g(E)}{Z} \exp\left( -\frac{E}{k_{B}T} \right)
\end{align*}
$$

#
---
#state/develop | #lang/en | #SemBr
