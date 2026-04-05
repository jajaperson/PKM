---
aliases:
  - algebra
tags:
  - public
mathLink: $\mathbb K$-algebra
---
[[Algebra theory MOC]]
# Algebra over a field

An **algebra** $(V, \cdot)$ over a field $\mathbb{K}$ is a [[Vector space]] $V$ over $\mathbb{K}$ equipped with a [[Multilinear map|bilinear]] product $(\cdot): V \times V \to V$, #m/def/falg
i.e. for any $x,y,z \in V$ and $a,b,c \in \mathbb{K}$

1. $(x+y)z = xz + yz$ ^A1
2. $z(x+y) = zx + zy$ ^A2
3. $(ax)(by)=(ab)(xy)$ ^A3

This may be generalized to an [[R-algebra]].

## Examples

- [[K-monoid]]^[In these notes I will try and reserve infix notation for associative algebras, as there is a tendency to assume such things to be associative.]
    - Commutative
        - [[Complex number]]
        - [[Quaternion]] (non-commutative)
        - [[Symmetric algebra]]
    - Non-commutative
        - [[Matrix algebra over a field]]
        - [[Endomorphism ring]]
        - [[Tensor algebra]]
        - [[Clifford algebra]]
        - [[Monoid ring]]
        - [[Extension field as a unital associative algebra]]
- [[Category ring]]
- Non-associative
    - [[Lie algebra]]

## Properties

- The product within an algebra is completely determined by its [[Structure constants]]

#
---
#state/develop | #lang/en | #SemBr 
