---
aliases:
  - ill-founded
  - well-founded
tags:
  - public
---
[[Material set theory]]
# Well-founded set

A material [[set]] $A$ is said to be **ill-founded** iff it is the start of a descending $\in$-chain[^2006], #m/def/set 
i.e. there exists some [[function]] $f : \mathbb{N}_{0} \to E$ with $f(0) = A$ and $f(i+1) \in f(i)$ for every $i \in \mathbb{N}_{0}$.
A set is **well-founded** iff it is not ill-founded.

  [^2006]: 2006\. [[Sources/@moschovakisNotesSetTheory2006|Notes on set theory]], ¶11.26, p. 166

Ill-founded sets are forbidden by the [[Axiom of Foundation]], and hence in [[ZF]].
A strong negation of the axiom of foundation is [[Aczel's Antifoundation Axiom]].
## Properties

1. A set $A$ is well-founded iff its [[powerset]] $\mathcal{P}(A)$ is well-founded.
2. A set $A$ is well-founded iff all of its elements are well-founded.

> [!missing]- Proof
> #missing/proof


#
---
#state/develop | #lang/en | #SemBr
