---
tags:
  - public
---
[[Group theory MOC]]
# Group presentation

A **group presentation** is a way to present a group as generators and rules relating elements.
The idea is to take the [[free group]] (i.e. set of words) of the generators, and then use some [[congruence relation]] to obtain the desired group properties,
i.e. to derive a group from a [[quotient group|quotient]] of a free group.
Due to the [[Correspondence between normal subgroups and congruence relations]],
the construction can either be done using normal subgroups or congruence relations,
but the normal subgroup construction is more convenient.

Let $S$ be a set, called the **generators**, and $R$ be a set of words of $S$, called the **relators**.
Let $\mathrm{ncl}_{FS} (R)$ be the [[Normal closure]] of $R$ in the [[Free group]] $FS$.
Then
$$
\begin{align*}
G = \braket{ S : R } = F(S) / \mathrm{ncl}_{F(S)}(R)
\end{align*}
$$
Intuitively, $R$ is a list of words which should be made equal to the identity.
If the congruence relation approach is used instead, a list of relations in the form $x = y$ are given,
which can then be converted to the corresponding relators of the form $xy^{-1}$.

#
---
#state/tidy | #lang/en | #SemBr
