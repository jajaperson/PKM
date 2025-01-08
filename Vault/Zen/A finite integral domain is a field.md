---
tags:
  - public
---
[[Integral domain]]
# A finite integral domain is a field

Let $D$ be a finite [[Integral domain]]. Then $D$ is a [[Field]], i.e. every nonzero element of $D$ is a [[Units and zero-divisors|unit]]. #m/thm/ring 

> [!check]- Proof
> Let $a$ be a nonzero, non-unity element of $D$ (if it is unity it is trivially a unit).
> Since $D$ is finite, there must exist some $i+1 < j$ such that $a^i = a^j$.
> By cancellation it follows $a^{i-j} = 1$ and hence $a a^{i-j-1} = 1$ so $a$ is a unit.
> <span class="QED"/>

It follows that $\mathbb{Z}_{p}$ is a field.

#
---
#state/tidy | #lang/en | #SemBr
