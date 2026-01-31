---
tags:
  - public
---
[[Subgroup]]
# The group product of elements in commuting subgroups generate a subgroup
Given two subgroups $H,K \sube G$ whose elements commute so that $hk = kh$ for any $h \in H$and $k \in K$,
the set $HK = \{ hk \mid h\in H, k \in K \}$ is a subgroup. #m/thm/group 

> [!check]- Proof
> Clearly $e \in HK$.
> Let $a,b \in HK$ so that $a = hx$ and $b = ky$ where $h,k \in H$ and $x,y \in K$.
> Then $ab^{-1} = (hx)(ky)^{-1} = hxy^{-1}k^{-1}$.
> Since $xy^{-1} \in K$ it commutes with $k^{-1} \in H$
> so that $ab^{-1} - (hk^{-1})(xy^{-1})$ where $hk^{-1} \in H$ and $xy^{-1} \in K$,
> hence $ab^{-1} \in HK$.
> Therefore $HK$ is a subgroup by [[Subgroup#One step subgroup test]].
> <span class="QED"/>


#
---
#state/tidy | #lang/en | #SemBr
