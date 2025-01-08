---
tags:
  - public
---
[[Centralizer of a group element]]
# Centralizer of a subgroup

The **centralizer** $C(H)$ of a subgroup $H \sube G$ is a [[subgroup]] of $G$ containing all elements of $G$ which commute with all those of $H$, i.e. $C(H) = \{ x \in G \mid \forall h \in H \, xh = hx \}$.[^gallian] #m/def/group #m/thm/group 

[^gallian]: 2017, [[@gallianContemporaryAbstractAlgebra2017|Contemporary Abstract Algebra]], p. 71 (exercise 44)

> [!check]- Proof of subgroup
> Clearly the centralizer may be constructed as the intersection
> $$
> C(H) = \bigcap_{h \in H}C(h)
> $$
> Since for all $h \in H$ also $h \in G$ follows from the [[Centralizer of a group element]] of $G$ being a subgroup of $G$ 
> that each $C(h)$ is a subgroup of $G$.
> Since [[the intersection of subgroups is a subgroup]], $C(H)$ must also be a subgroup. <span class="QED"/>

From the above proof, it is clear that the status of $H$ as a subgroup is not necessary to ensure that $C(H)$ is a subgroup.

## Additional properties

- If $H$ is abelian then $H \sube C(H)$.
- If $H = Z(G)$ then $C(H) = G$.

#
---
#state/tidy | #lang/en | #SemBr
