---
tags:
  - public
alias: cyclic group
---
[[Subgroup]]
# Cyclic subgroup

A **cyclic subgroup** is the smallest possible subgroup containing some element.
A **cyclic group** may be **generated** from a single element (the **generator**) using the inverse and binary operations to “complete” it.
Given a generating element $a \in G$ we define $\langle a \rangle = \{ a^n \mid a \in G \}$,
where $a^0 = e$ and $a^{-n} = (a^{-1})^n$.[^gallian] #m/def/group 

[^gallian]: 2017, [[@gallianContemporaryAbstractAlgebra2017|Contemporary Abstract Algebra]], p. 65

Every cyclic group is isomorphic to $\mathbb{Z}_{n}$ under addition, where $n$ is the order of the generator. 
In the infinite case this is just additive $\mathbb{Z}$.

## Properties

- [[The order of a cyclic group equals the order of its generator]], i.e. $\abs a = \abs{\langle a \rangle}$.
- All cyclic subgroups are abelian (see above)
- **Generators of a finite group** From the theorem on [[Order of powers of a group element]],
  it follows that $\langle a \rangle = \langle a^j \rangle$ iff $\abs{a}$ and $j$ are coprime.
- [[Fundamental theorem of cyclic groups]]
- [[Number of elements of each order in a cyclic group]]
- [[Group of prime order]]
## Bibliography
- 2017, [[@gallianContemporaryAbstractAlgebra2017|Contemporary Abstract Algebra]], §5 (pp. 75ff.)

#
---
#state/tidy | #lang/en | #SemBr 