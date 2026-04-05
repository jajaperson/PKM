---
tags:
  - public
---
[[Cyclic subgroup]]
# The order of a cyclic group equals the order of its generator

Given a [[group order|finite-ordered]] group element $a \in G$ such that $\abs a = n$,
it follows that $\abs{\langle a \rangle} = n$. #m/thm/group 

> [!check]- Proof
> Clearly $S = \{ e, a^1, \dots , a^{n-1}\} \sube \langle a \rangle$.
> Additionally, since $n$ is the smallest positive integer such that $a^n = e$,
> each of these elements is unique: we need only show they be exhausted.
> Let $a^k \in \langle a \rangle$.
> By the division algorithm  $k = pn + r$ where $0 \leq r < n$.
> Then $a^k = a^{pn + r} = a^r \in S$.
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr 