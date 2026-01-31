---
tags:
  - public
---
[[Ring theory MOC]]
# Ring
A **ring** is an algebraic structure on a set, consisting of both an [[Abelian group]] and a [[monoid]] over the set which satisfy a distributivity condition —
equivalently, rings are [[Monoid object|monoids]] in [[Category of abelian groups]].

That is a **ring** $(R, +, \cdot)$ consists of an [[Abelian group]] $(R, +)$ called **addition**
and a [[Monoid]] $(R, \cdot)$ called **multiplication**, with the extra conditions[^2009] #m/def/ring
- **left-distributivity** $a \cdot (b + c) = (a \cdot b) + (a \cdot c)$
- **right-distributivity** $(b + c) \cdot a = (b \cdot a) + (c \cdot a)$

A ring may be generalized to a [[Rng]] (possibly lacking unity, where multiplication need only be a [[Semigroup]]),
or a [[Rig]] (possibly lacking additive inverses, where addition need only be an abelian monoid),
or specified to an [[Integral domain]] or [[Field]] (where both operations form [[Abelian group|abelian]] groups ignoring the additive identity, i.e. every element except $0$ is a unit[^unit]).

[^unit]: A [[Unit|multiplicative unit]] is an element with a multiplicative inverse. A [[Zero-divisor]] can multiply a nonzero element to give zero. An element cannot be both.

  [^2009]: 2009\. [[@aluffiAlgebraChapter02009|Algebra: Chapter 0]], §III.1.1, pp. 119–120

## Terminology

- A [[Subring]] is a subset of a ring which is itself a ring (under the same operations)

##  Properties

A ring has all the properties of a [[Rng]], in addition:

1. $(-1)a = -a$ ^P1
2. $(-1)(-1) = 1$ ^P2

> [!check]- Proof of 1–2
> Both [[#^P1]] and [[#^P2]] follow directly from [[Rng#Properties]].
> <span class="QED"/>

## Examples

- [[Zero ring]]
- [[Polynomial ring]] (Gallian §16 pp. 276ff.)
- [[Integers]]
- [[Adjunction of a ring]]

#
---
#state/tidy | #lang/en | #SemBr 