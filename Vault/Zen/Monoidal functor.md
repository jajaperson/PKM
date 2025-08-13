---
tags:
  - public
---
[[Monoidal category]]
# Monoidal functor

Let $\cat C, \cat D$ be monoidal categories.
A [[functor]] $T : \cat C \to \cat D$ is called **monoidal** iff it is eqquipped with an isomorphism $\epsilon : \mathbb{1} \to T\mathbb{1}$ in $\cat D$
and a natural isomorphism with components $\mu_{x,y} : Tx \otimes Ty \to T(x \otimes y)$ in $\cat D^{\cat C \times \cat C}$,
compatible with associativity

![[monoidal-functor-associativity.svg#invert|c|600]]

and unitality

![[monoidal-functor-unitality.svg#invert|c]]

Iff $\epsilon$ and $\mu$ are identities, then $T$ is called **strict monoidal**.[^1966]

  [^1966]: 1966\. [[Sources/@eilenbergClosedCategories1966|Closed categories]], §II.1, p. 473

#
---
#state/tidy | #lang/en | #SemBr
