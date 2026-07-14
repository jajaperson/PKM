---
tags:
  - public
---
[[Category theory MOC]]
# Displayed category theory MOC

From one perspective, the theory of displayed categories is redundant, since a [[displayed category]] $\cat E$ over $\cat C$ contains the same information as a “category-over”, that is an ordinary [[category]] $\int \cat E$ (the [[Total category of a displayed category|total category]]) equipped with a [[functor]] $\int \cat E \to \cat C$.
There are, however, two main advantages to the displayed approach:

1. The traditional approach would have you construct $\int \cat E$ from scratch, and then build a functor to $\cat C$.
    Displayed categories are appropriate precisely when $\int \cat E$ is built _from_ $\cat C$, by adding additional structure, and a “forgetful” functor is built simultaneously.
2. Displayed categories are in some sense ”externally” stronger than categories-over, since they have finer-grained control of definitional equality.
    [[Principle of equivalence|Evil]] notions are often exorcised when formulated in the displayed setting, see for example [[Cartesian fibration]].
   This is especially useful in type theory and in particular, [[Univalent Foundations]].

## Categories

- [[Displayed category]]
    - [[Total category of a displayed category]]
    - [[Fibre category]]

### Examples

- [[Canonical self-indexing]]
    - [[Displayed category of subobjects]]

## Morphisms of categories

- [[Displayed functor]]
- [[Displayed natural transformation]]

## Fibrations of categories

- [[Cartesian morphism]]
- [[Cartesian fibration]]

#
---
#MOC | #state/develop | #lang/en | #SemBr