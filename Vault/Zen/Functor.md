---
tags:
  - public
---
[[Category theory MOC]]
# Functor

A (covariant) **functor** $F : \cat C \to \cat D$ is a structure-preserving map between [[Category|categories]]. #m/def/cat
It associates:

- An object $FX \in \cat D$ for every $X \in \cat C$
- A morphism $Ff \in \cat D(FX, FY)$ for every $f \in \cat C(X, Y)$

with the following compatibility conditions

- $(Fg)(Ff) = F(gf)$ for any $f \in \cat C(X, Y)$ and $g \in \cat C (Y, Z)$
- $F \id_{X} = \id_{F X}$ for any $X \in \cat C$

A functor $F : \op{\cat C} \to \cat D$ behaves like a functor but flips arrows, and is called a [[contravariant functor]].
Sometimes these are also just referred to as functors,[^br]
however in these notes all functors will be assumed to be covariant,
and contravariant functors will be made explicit by invoking the [[opposite category]].

[^br]: 2020, [[@bradleyTopologyCategoricalApproach2020|Topology: A categorical approach]], p. 10

## Types of functors

As defined above, a functor associated a mapping to every hom-set $\cat C(X, Y)$ in its codomain:
$$
\begin{align*}
F : \cat C(X,Y) &\to \cat D(FX, FY) \\
f &\mapsto Ff
\end{align*}
$$
Functors are categorised based on the behaviour of this mapping (for all possible hom-sets)

- A [[Faithful functor]] is injective on hom-sets.
- A [[Full functor]] is surjective on hom-sets.
- A [[Fully faithful functor]] is bijective on hom-sets (an embedding of a category into another, however it need not be injective on objects.

## Properties

- [[Functors encode invariants of isomorphism classes]], i.e. functors _are_ invariants.

## Typical functors

- [[Hom-functor]]

## See also

- [[Multifunctor]]

#
---
#state/develop | #lang/en | #SemBr