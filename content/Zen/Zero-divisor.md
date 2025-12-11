---
tags:
  - public
aliases:
  - right zero-divisor
  - left zero-divisor
---
[[Ring theory MOC]]
# Zero-divisor

Let $R$ be a [[ring]].
A left (right) **zero-divisor** is an element $z \in R$ which sends some nonzero element to zero when multiplying on the left (right), #m/def/ring 
i.e. $z a = 0$ ($az = 0$) for some $a \in R$ with $a \neq 0$.

## As morphisms

Let $\underline R$ denote the multiplicative monoid of a ring $R$ viewed as a [[category]].
Then $a \in R$ is

- a **left zero-divisor** iff it is not [[Monomorphism|monic]];
- a **right zero-divisor** iff it is not [[Epimorphism|epic]].

If we view $\Lambda(a)$ and $\Rho(a)$ as functions on $R$,
then $a \in R$ is[^2009]

- a **left zero-divisor** iff $\Lambda(a)$ is not injective;
- a **right zero-divisor** iff $\Rho(a)$ is not injective.

  [^2009]: 2009\. [[Sources/@aluffiAlgebraChapter02009|Algebra: Chapter 0]],§III.1.2, ¶1.9, p. 122

## See also

- [[Unit]]

#
---
#state/develop | #lang/en | #SemBr
