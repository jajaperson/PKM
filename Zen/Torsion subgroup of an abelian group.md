---
aliases:
  - torsion subgroup
tags:
  - public
---
[[Torsion group]]
# Torsion subgroup of an abelian group
Given an [[Abelian group]] $G$ we may form the **torsion subgroup** $G_{T}$ containing all elements of finite order, i.e. $G_{T} = \{ x \in G \mid \exists n \in \mathbb{N} \; x^n = e \}$. #m/def/group  #m/thm/group

> [!check]- Proof of subgroup
> Clearly $e \in G_{T}$, so the set is inhabited.
> Let $a,b \in G_{T}$,
> so that there exist $m,n \in \mathbb{N}$ such that $a^m = b^n = e$.
> Then $(ab^{-1})^{mn} = a^{mn}b^{-mn} = (a^m)^n (b^n)^{-m} = e$,
> hence $ab^{-1} \in G_{T}$.
> Therefore $G_{T}$ is a subgroup by [[Subgroup#One step subgroup test]].
> <span class="QED"/>

#
---
#state/tidy  | #lang/en | #SemBr
