---
tags:
  - public
---
[[Cyclic subgroup]]
# Number of elements of each order in a cyclic group

Let $\langle a \rangle$ be a cyclic subgroup of order $n$, and $d$ be a positive divisor of $n$.
Then there exist exactly $\phi(n)$ elements in $\langle a \rangle$ of order $d$,
where $\phi$ is the [[Euler totient function]]. #m/thm/group 

> [!check]- Proof
> Let $\langle b \rangle$ be the unique subgroup of order $d$ (guaranteed by the [[Fundamental theorem of cyclic groups]]).
> Then every element of order $d$ is a generator of $\langle b \rangle$, 
> and by [[Order of powers of a group element]] $\langle b^k \rangle = \langle b \rangle$ iff $\gcd(k,d) = 1$.
> The number of such elements is exactly $\phi(d)$.
> <span class="QED"/>

Significantly, there is no dependence on $n$, and hence $\mathbb{Z}_{73}$ and $\mathbb{Z}_{8}$ both have exactly $\phi(8) = 4$ elements of order 8.

#
---
#state/tidy | #lang/en | #SemBr 