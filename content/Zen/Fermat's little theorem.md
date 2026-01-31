---
tags:
  - public
---
[[Number theory MOC]]
# Fermat's little theorem
Given a prime number $p$ and number $a \in \mathbb{N}$,
then
$a^{p-1} \equiv_{p} 1$
and
$a^p \equiv_{p} a$. #m/thm/num 

> [!check]- Proof
> Let $a = mp + r$ where $0 \leq r < p$,
> so $a \equiv_{p} r$,
> and it suffices to show $r^{p-1} \equiv_{p} 1$.
> Then $r \in \mathbb{Z}_{p}^\times$, and since [[Lagrange's theorem|the order of an element divides the order of a group]],
> $a^{p-1} \equiv 1$.
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr
