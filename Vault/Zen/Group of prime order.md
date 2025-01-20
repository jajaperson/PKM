---
tags:
  - public
aliases:
  - All prime-ordered groups are cyclic
  - Groups of prime order
---
[[Cyclic subgroup]]
# All prime-ordered groups are cyclic

If a group $G$ has prime order $p = \abs{G}$,
then it must be cyclic, #m/thm/group 
i.e. isomorphic to $\mathbb{Z}_{p}^+$.

> [!check]- Proof
> Let $G$ be a group of prime order $p$.
> By [[Lagrange's Theorem]],
> $G$ only has subgroups of order $1$ and $p$.
> Since $p > 1$,
> there exists $a \in G$ such that $a \neq e$.
> Then $\abs{a} = p$
> and therefore $\langle a \rangle = G$.
> <span class="QED"/>

Clearly $\mathbb{Z}_{p}^+$ is a [[simple group]].

## See also

- [[p-group]]

#
---
#state/tidy | #lang/en | #SemBr