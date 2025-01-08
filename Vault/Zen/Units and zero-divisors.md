---
aliases:
  - multiplicative unit
  - zero-divisor
tags:
  - public
---
[[Ring]]
# Units and zero-divisors

In the theory of rings, a **unit** refers to an invertible element under multiplication, #m/def/ring 
i.e. for any ring $(R, +, \cdot)$,
$a \in R$ is a unit iff there exists $a^{-1} \in R$ such that $a^{-1} \cdot a = a \cdot a^{-1} = 1$. 
If a ring is not commutative
then one speaks of **left-units** and **right-units**,
based on whether left-inverses or right-inverses exist. Clearly the notion of unit does not make sense for a [[Rng]].

A **zero-divisor** is an element which sends some nonzero element to zero, #m/def/ring 
i.e. $b$ is a zero divisor iff. there exists some $b'$ such that $b' \cdot b = b \cdot b' = 0$.
For a non-commutative ring one speaks of **left-zero-divisors** and **right-zero-divisors**.

## As morphisms

Let $\cat{R}$ denote the multiplicative monoid of a ring $R$ viewed as a [[category]].
Then $a \in R$ is

- a **left-unit** iff it is [[Split monomorphism|split monic]]
- a **right-unit** iff it is [[Split epimorphism|split epic]]
- a **left-zero-divisor** iff it is not [[Monomorphism|monic]]
- a **right-zero-divisor** iff it is not [[Epimorphism|epic]]

#
---
#state/tidy | #lang/en | #SemBr
