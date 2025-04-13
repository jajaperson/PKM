---
aliases:
  - multiplicative unit
tags:
  - public
---
[[Ring theory MOC]]
# Unit

Let $R$ be a [[ring]], and $a \in R$. Then

- $a$ is a **left unit** iff $ab = 1$ for some $b$;
- $a$ is a **right unit** iff $ba = 1$ for some $b$;
- $a$ is a **unit** iff it is both a left unit and right unit.

By the usual argument, the inverse of an ambidextrous unit is unique,
and these form the [[group of units]].
A ring in which every nonzero element is a unit is called a [[Division ring]].

## As morphisms

Let $\underline R$ denote the multiplicative monoid of a ring $R$ viewed as a category.
Then $a \in R$ is

- a **left unit** iff it is [[Split epimorphism|split epic]];
- a **right unit** iff it is [[Split monomorphism|split monic]];
- a **unit** iff it is an [[isomorphism]].

If we view $\Lambda(a)$ and $\Rho(a)$ as functions on $R$,
then $a \in R$ is[^2009]

- a **left unit** iff $\Lambda(a)$ is surjective iff $\Rho(a)$ is injective iff $a$ is not a [[Zero-divisor|right zero-divisor]];
- a **right unit** iff $\Rho(a)$ is surjective iff $\Lambda(a)$ is surjective iff $a$ is not a [[Zero-divisor|left zero-divisor]];

  [^2009]: 2009\. [[Sources/@aluffiAlgebraChapter02009|Algebra: Chapter 0]],§III.1.2, ¶1.12, p. 123

## See also

- [[Zero-divisor]]

#
---
#state/tidy | #lang/en | #SemBr
