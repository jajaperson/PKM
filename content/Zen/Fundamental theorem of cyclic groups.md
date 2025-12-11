---
tags:
  - public
---
[[Cyclic subgroup]]
# Fundamental theorem of cyclic groups

> Every subgroup of a cyclic group is cyclic.
> Moreover, if $\abs{\langle a \rangle} = n$ then the order of any subgroup of $\langle a \rangle$ is a divisor of $n$;
> and, for each positive divisor $k$ of $n$, the group $\langle a \rangle$ has exactly one subgroup of order $k$, namely $\langle a^{n/k} \rangle$.[^2017] #m/thm/group 

[^2017]: 2017, [[@gallianContemporaryAbstractAlgebra2017|Contemporary Abstract Algebra]], p. 81 (thm. 4.3)

> [!check]- Proof every subgroup is cyclic
> Suppose $H \sube \langle a \rangle$ is a subgroup.
> Clearly the trivial group $\langle e \rangle$ is cyclic, so assume that $H$ contains at least one non-identity element.
> Since $H \sube \langle a \rangle$ all elements of $H$ are some power of $a$,
> and $H$ cannot contain only negative powers by closure.;
> Let $m \in \mathbb{N}$ be the smallest positive integer such that $a^m \in H$.
> By closure $\langle a^m \rangle \sube H$.
> We will prove $\langle a^m \rangle = H$.
> Let some $a^k \in H$.
> Then there exist $q \in \mathbb{Z}$ and $0 \leq r < m$ such that $k = qm + r$
> and thus $a^k = (a^m)^q a^r$, whence $a^r = a^k (a^m)^{-q}$.
> Since $a^k, a^m \in H$ by closure $a^r \in H$
> But $0 \leq r < m$ and $m$ is the least positive integer such that $a^m \in H$.
> Therefore $r = 0$ and $a^k = (a^m)^q \in \langle a^m \rangle$.
> Hence $H \sube \langle a^m \rangle$ implying $H = \langle a^m \rangle$.
> <span class="QED"/>

> [!check]- Proof the order of a subgroup divides that of the group
> Let $\abs{\langle a \rangle} = n$ and $H \sube \langle a \rangle$.
> From above, $H = \langle a^m \rangle$ where $m$ is the smallest positive integer such that $a^m \in H$.
> Letting $k = n$ as above, it follows $n = mq$.
> <span class="QED"/>
> 

> [!check]- Proof each divisor has a unique commensurate subgroup
> Let $k$ be some positive divisor of $n$.
> From the theorem on [[Order of powers of a group element]],
> it follows that $\abs{\langle a^k \rangle} = n / \gcd(n, \frac{n}{k}) = k$.
> This proves existence, now we must show uniqueness.
> Let $H \sube \langle a \rangle$ be an arbitrary subgroup of order $k$.
> From above $H = \langle a^m \rangle$ where $m$ divides $n$.
> Then $m = \gcd(n,m)$,
> whence $k = \abs{a^m} = \abs{a^{\gcd(n,m)}} = n / \gcd{n,m} = n / m$.
> Therefore $m = n / k$ and $H = \langle a^{n/k} \rangle$.
> <span class="QED"/>

The first part of this theorem is clearly the only that may be applied to infinite cyclic groups.

## Corollary for modular arithmetic

For each positive divisor $k$ of $n$ the unique subgroup of $\mathbb{Z}_{n}$ of order $k$ is $\langle k / n \rangle$.

#
---
#state/tidy | #lang/en | #SemBr