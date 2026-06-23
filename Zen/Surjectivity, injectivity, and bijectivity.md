---
tags:
  - public
aliases:
  - surjective
  - injective
  - surjectivity
  - injectivity
  - bijectivity
  - injection
  - surjection
  - bijection
  - bijective
---
[[Naïve set theory MOC]]
# Surjectivity, injectivity, and bijectivity

**Surjective**, **injective**, and **bijective** functions are [[Morphism|epimorphisms]],  [[Morphism|monomorphisms]], and [[Morphism|isomorphisms]] respectively in [[Category of sets]].
Thus the morphisms of any [[concrete category]] may be described as such,
but these concepts may not align exactly
(for example, there exist bijective continuous functions that are not homeomorphisms).
Specifically, given a function $f:A \to B$

- $f$ is **surjective** iff for every $b \in B$ there exists $a \in A$ such that $f(a) = b$ #m/def/general 
    - In particular if there exists a right-inverse. These are equivalent assuming [[Axiom of Choice|AC]].
    - A surjective function induces an [[Equivalence relation]].
- $f$ is **injective** iff $f(a_{1}) = f(a_{2}) \iff a_{1} = a_{2}$. #m/def/general
  - Equivalently, there exists a left-inverse.
- $f$ is **bijective** iff it is surjective and injective. #m/def/general 
  - In particular, there exists a unique ambidextrous inverse. Again these are equivalent assuming [[Axiom of Choice|AC]].

#
---
#state/tidy | #lang/en | #SemBr 