---
tags:
  - public
---
[[Module theory MOC]]
# Module

A **module** $(M, R, +, \cdot)$ over a [[ring]] $R$ is an [[abelian group]] $(M, +)$ together with an action $(\cdot)$ of $R$ on $V$ that is distributive and $R$-linear. #m/def/module 
Explicitly, a **left-module** $M$ over $R$ satisfies the following for any $x,y,z \in M$ and $\mu,\lambda \in R$

1. $(v+u)+w = v+(u+w)$ ^M1
2. $v+0 = v$ ^M2
3. $u+v = v+u$ ^M3
4. $1v = v$ ^M4
5. $(\mu\lambda)v = \mu(\lambda v)$ ^M5
6. $\lambda(u+v) = \lambda u + \lambda v$ ^M6
7. $(\mu+\lambda)v = \mu v + \lambda v$ ^M7

whereas a **right-module** satisfies the same properties with scalar multiplication written on the right.[^lr]
Thus a module is a generalization of a [[vector space]],
which is just a module over a field.
This small change has far-reaching implications,
for example the existence of [[Torsion]].

[^lr]: If $R$ is a [[commutative ring]] the concepts of left- and right-modules coïncide, but otherwise there is a distinction between left- and right-scalar multiplication.

## Further terminology

- [[Finitely generated module]]

## Properties

- [[Module over a unital associative algebra#Explanation|A module inherits linear structure from the underlying ring]]

## Examples

- [[Vector space]]
- Let $I \trianglelefteq R$ be an [[ideal]]. Then $I$ is an $R$-module.
- Let $T:R$ be a [[ring extension]]. Then $T$ is an $R$-module.

#
---
#state/tidy | #lang/en | #SemBr 