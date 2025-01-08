---
tags:
  - public
---
[[Coset]]
# Cosets are either identical or disjoint

Let $G$ be a group, $g_{1}, g_{2} \in G$, and $H \sube G$ be a subgroup.
#m/thm/group  Then the left [[Coset|cosets]] $g_{1}H, g_{2}H$ are

- identical iff $g_{1}^{-1}g_{2} \in H$
- disjoint otherwise

> [!check]- Proof
> Let $g_{1}, g_{2} \in G$, and $H \sube G$ be a subgroup.
> Due to basic [[Coset#Properties]],
> $$
> \begin{align*}
> g_{1}^{-1}g_{2} \in H \iff g_{1}^{-1}g_{2}H = H \iff g_{1}H = g_{2}H
> \end{align*}
> $$
> Next assume there exist $h_{1},h_{2} \in H$ such that $g_{1}h_{1} = g_{2}h_{2}$,
> i.e. $g_{1}H$ and $g_{2}H$ have a common element.
> Then $g_{1} = g_{2}h_{2}h_{1}^{-1}$,
> whence $g_{1}H = g_{2}h_{2}h_{1}^{-1 H}$
> and since $h_{2}h_{1}^{-1} \in H$,
> it follows $g_{1}H = g_{2}H$
> and thus $g_{1}^{-1}g_{2} \in H$.
> Hence is $g_{1}^{-1}g_{2} \notin H$,
> $g_{1}H$ and $g_{2}H$ can share no common element.
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr
