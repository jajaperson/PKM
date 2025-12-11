---
tags:
  - public
aliases:
  - "#m/def/rep"
  - "#m/thm/rep"
---
[[Representation theory MOC]]
# Representation

A (linear) **representation** of a structure $A$ is a [[Morphism|homomorphism]] from $A$ to a structure of the same kind on a set of [[linear map|linear maps]], #m/def/rep 
which for single-typed structures is typically a subset of $\End V$ for some [[vector space]] $V$ called the **carrier space**.
A representation may thus be considered a [[functor]].

> [!info]+ Relation to modules
> If the represented structure is an [[K-monoid]],
> a representation is equivalent to a [[Module over a unital associative algebra]],
> and indeed in most cases one can move from representations of an algebraic structure to representations of a related associative algebra (e.g. [[group ring]], [[Universal enveloping algebra]]) over a field without loss of information.
> This is because $\End V$ itself is an [[Endomorphism ring]].

This yields the three equivalent ways of viewing a representation of a gadget $G$:

1. A gadget [[Morphism|homomorphism]] from $G$ to a gadget of vector spaces;
2. A [[functor]] from a gadget-as-category to [[Category of vector spaces]];
3. A [[module]] over a [[K-monoid]] related to $G$.

## Represented object

- [[Group representation]]
  - [[Representation of a finite group]]
  - [[Representation of an abelian group]]
  - [[Representation of a compact Lie group]]
- Algebras
  - [[Module over a unital associative algebra]]
  - [[∗-representation of the complex group ring|∗-representation]]
  - [[Lie algebra representation]]
- [[Quiver representation]]


#
---
#state/develop | #lang/en | #SemBr
