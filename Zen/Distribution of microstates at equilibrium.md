---
alias: MaxEnt thermodynamics
tags:
  - public
---
[[Statistical thermodynamics MOC]]
# Distribution of microstates at equilibrium

Let $M : \xi \to \{ M_{i} \}$ be a discrete [[general random variable|random variable]] representing the [[Microstate and macrostate|microstate]] of a thermodynamic system and let $P_{i} = \mathbb{P}(M=M_{i})$.
**Maximum entropy thermodynamics** or **MaxEnt thermodynamics** derives all results from the general [[Principle of maximum entropy]]:
The distribution $\{ P_{i} \}$ of $M$ at [[Thermal equilibrium|equilibrium]] is that which maximizes its [[Shannon entropy]] 
$$
\begin{align*}
\tilde{S}(\{ P_{i} \}) = k_{B}H[M] = -k_{B} \sum_{i} P_{i} \ln P_{i}
\end{align*}
$$
and that this coïncides with the thermodynamic [[entropy]] of the system.
Thus determination of the distribution $\{ P_{i} \}$ is reduced to an optimization problem,
and thus the method of [[Lagrange multiplier|Lagrange multipliers]] may be used.
See [[Statistical thermodynamics MOC#Ensembles]] for the distributions in different scenarios.

## See also

- [[Alternative approaches to statistical thermodynamics]]

#
---
#state/tidy | #lang/en | #SemBr
