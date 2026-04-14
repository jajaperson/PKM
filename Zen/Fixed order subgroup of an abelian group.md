---
tags:
  - public
---
[[Torsion group]]
# Fixed order subgroup of an abelian group

Given an [[Abelian group]] $G$, we may construct a subgroup $H$ containing only those elements whose order divides a given integer $n$,
i.e. $H = \{ x \in G \mid x^n = e \}$.
#m/thm/group

> [!check]- Proof
> Let $n \in \mathbb{Z}$
> Clearly $e^n = e$ so $H$ is inhabited.
> Let $x,y \in H$.
> Since $G$ is abelian $(xy^{-1})^n = x^n (y^n)^{-1} = e$,
> it follows $xy^{-1} \in H$.
> Therefore $H$ is a subgroup by [[Subgroup#One step subgroup test]].
> <span class="QED"/>

This construction can fail for non-abelian groups,
for example in $D_{4}$ the set $\{ e, r_{2}, s_{1}, s_{2}, s_{3}, s_{4} \}$ is not closed.


#
---
#state/tidy | #lang/en | #SemBr
