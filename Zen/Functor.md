---
tags:
  - public
---
[[Category theory MOC]]
# Functor

A (covariant) **functor** $F : \cat C \to \cat D$ is a structure-preserving map between [[Category|categories]].
This is given by #m/def/cat

1. A map $F_{0} : \cat C_{0} \to \cat D_{0} : X \mapsto FX$;
2. For every $X,Y \in \cat C_{0}$, a function $F_{1} : \cat C(X,Y) \to \cat D(FX, FY)$;

with the following compatibility conditions

- $(Fg)(Ff) = F(gf)$ for any $f \in \cat C(X, Y)$ and $g \in \cat C (Y, Z)$
- $F \id_{X}( = \id_{F X}$ for any $X \in \cat C_{0}$

A functor $F : \op{\cat C} \to \cat D$ behaves like a functor but flips arrows, and is called a [[contravariant functor]] from $\cat C$ to $\cat D$.
Sometimes these are also just referred to as functors,[^br]
however in these notes all functors will be assumed to be covariant,
and contravariant functors will be made explicit by invoking the [[opposite category]].

[^br]: 2020, [[@bradleyTopologyCategoricalApproach2020|Topology: A categorical approach]], p. 10

## Types of functors

Functors are categorised based on the behaviour of $F_{1}$ (for all possible hom-sets)

- A [[faithful functor]] is injective on hom-sets.
- A [[full functor]] is surjective on hom-sets.
- A [[fully faithful functor]] is bijective on hom-sets (an embedding of a category into another, however it need not be injective on objects.

### Further classification

- [[Continuity and cocontinuity]]
- [[Exact functor]]
- [[Adjoint functor]]

## Properties

- [[Functors encode invariants of isomorphism classes]], i.e. functors _are_ invariants.

## Typical functors

- [[Hom-functor]]

## See also

- [[Multifunctor]]

#
---
#state/develop | #lang/en | #SemBr