---
categoryName: category of functors
symbol: $\cat{D}^{\cat C}$
object: "[[functor]] $\\cat C \\to \\cat D$"
morphism: "[[natural transformation]]"
arguments:
  - $\cat C$ [[category]]
  - $\cat D$ [[category]]
tags:
  - category
  - public
---
[[Category theory MOC]]
# Functor category

Given two categories $\cat C$ and $\cat D$, we construct a **functor category** $\cat D^{\cat C}$ where

- each object is a [[functor]] $F : \cat C \to \cat D$
- each morphism is a [[natural transformation]] $\eta : F \to G : \cat C \to \cat D$

A special case is an [[Endofunctor category]] $\cat C^\cat{C}$, which possesses additional monoidal structure.
Since the exponent notation becomes cumbersome, I occasionally use $\Nat(F, G) = \cat D^{\cat C}(F, G)$ when the codomain and domain of $F, G$ is well-understood.


#
---
#state/tidy | #lang/en | #SemBr
