---
tags:
  - public
---
[[Statistical thermodynamics MOC]]
# Microcanonical ensemble

The **microcanonical ensemble** represents a system in [[Thermodynamic system|thermal isolation]], i.e. whose energy is exactly specified.
As such, its natural variables are

- $N$ — Number of particles in the system
- $V$ — System volume
- $E$ — Total energy of the system

and all $\Omega(N,V,E)$ accessible microstates are equally likely, where
$$
\begin{align*}
P_{i} &= \frac{1}{\Omega(N,V,E)} & S(N,V,E) &= k_{B}\ln \Omega(N,V,E)
\end{align*}
$$
[[Alternative approaches to statistical thermodynamics]] take this as their axiomatic starting point,
but these notes opt for [[Distribution of microstates at equilibrium|MaxEnt thermodynamics]].

> [!missing]- Derivation
> By the symmetry of the situation, it should be obvious that if there exists a unique distribution which maximizes Shannon entropy, it must be that described above. #missing/derivation 

It follows

- An [[Reversible and irreversible processes|Irreversible process]] is one which increases $\Omega$
- A [[Reversible and irreversible processes|Reversible process]] is one which maintains $\Omega$

#
---
#state/develop | #lang/en | #SemBr
