---
tags:
  - public
---
[[Ring theory MOC]]
# Associate elements

Let $R$ be a [[ring]].
Two elements $a,b \in R$ are **associate** iff their corresponding [[principal ideal|principal ideals]] are equal, i.e. $\langle a \rangle = \langle b \rangle$.
For $R$ an [[integral domain]], this is equivalent to the existence of a [[unit]] $u \in R^\times$ such that $a = ub$.

> [!check]- Proof of equivalence in a domain
> Assume $\langle a \rangle = \langle b \rangle$, so there exist $c,d \in R$ such that $b = ac$ and $a = bd$
> so $a = bd = acd$ and thus $a(1-cd) = 0$,
> so $cd = 1$ and thus $c \in R^\times$.
> 
> Conversely, if $a = ub$, then $b = u^{-1}a$, so $\langle a \rangle = \langle b \rangle$. <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr
