---
tags:
  - public
---
[[Naïve set theory MOC]]
# Multiset

A **multiset** $M$ is a generalization of a [[set]] which may contain the same element more than once, #m/def/set 
where we write $\opn{supp} M$ for the underlying set.
This may be formalized as

- as a set $\opn{supp} M$ with a generalized characteristic function $\chi_{M} : \opn{supp} M \to \mathbb{N}$ so that $\chi_{M}(s)$ is the multiplicity of $s$ in $M$
- as a [[set]] $M'$ with an [[equivalence relation]] $R$, such that $\opn{supp} M = M' / R$ and $\chi_{M}([s]) = \abs{[s]}$.

In these notes, we will write $\mathcal{M} t$ for the multiset related to an ordered tuple $t$.
When it is clear, I may use $M$ to refer to $\opn{supp} M$.

#
---
#state/tidy | #lang/en | #SemBr
