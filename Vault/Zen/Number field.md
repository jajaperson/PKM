---
tags:
  - public
aliases:
  - algebraic number
---
[[Algebraic number theory MOC]]
# Number field

A **number field** $K$ is an [[Field extension|extension field]] of [[Rational numbers]] of finite [[Field extension|degree]] $[K : \mathbb{Q}]$, #m/def/num/alg
whence $K : \mathbb{Q}$ is an [[algebraic element|algebraic extension]].
Similarly, if $K : \mathbb{Q}$ is an arbitrary extension and $x \in K$ is [[Algebraic element|algebraic]] over $\mathbb{Q}$,
then [[Adjunction of a ring|$\mathbb{Q}(x)$]] is a number field,[^all]
and $x$ is called an **algebraic number**.[^2022]

  [^all]: All number fields have this form by the [[Primitive element theorem]].
  [^2022]: 2022\. [[Sources/@bakerAlgebraicNumberTheory2022|Algebraic number theory course notes]]. §2, p. 7


> [!code]- Sage
> To create a number field in [[Sage]] with a given defining polynomial,
> ```sage
> f = x^3 - 2 * x - 2
> K.<θ> = NumberField(f)
> ```


In order to study a number field we often turn to study its [[Ring of integers of a number field|ring of integers]] and [[Ideal class group of a number field|ideal class group]].


## Properties

- [[Bases for a number field]]
- [[Norm of a number field]]

## Classification

### By degree

- [[Quadratic field]]
- [[Cubic field]]

### By form

- [[Cyclotomic field]]

### By properties

- [[Monogenic field]]

#
---
#state/tidy | #lang/en | #SemBr

[^2023]: 
