---
tags:
  - public
---
[[Group order]]
# Number of elements of order 𝑑 in a finite group

In a finite group $G$, the number of elements of order $d$ is a multiple of $\phi(d)$,
where $\phi$ is the [[Euler totient function]]. #m/thm/group 
This is a corollary of the theorem on the [[Number of elements of each order in a cyclic group]].

> [!check]- Proof
> For each element $a \in G$ of order $d$ there exists a cyclic subgroup $\langle a \rangle$ of order $d$,
> which contains exactly $\phi(d)$ generators, each of order $d$.
> If there exists an element $b \in G$ of order $d$ such that $b \notin \langle a \rangle$,
> then it too has a corresponding cyclic subgroup $\langle b \rangle$ of order $d$,
> which also  contains exactly $\phi(d)$ generators each of order $d$,
> none of which may be contained in $\langle  a \rangle$.
> Continuing in this fashion, it is clear that the number of elements in $G$ of order $d$ is $n\phi(d)$ where $n$ is some nonnegative integer.
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr
