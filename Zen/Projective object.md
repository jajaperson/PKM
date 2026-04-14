---
tags:
  - public
---
[[Category]]
# Projective object

Let $\cat C$ be a [[category]].
An object $P \in \cat C$ is said to be **projective** iff it has the following (left) lifting property against [[Epimorphism|epimorphisms]]:
For any morphism $f : P \to B$
and epimorphism $q : A \twoheadrightarrow B$, 
there exists a factorization $\bar{f} : P \to A$ so that $q \bar{f} = f$. #m/def/cat

![[lift.svg#invert|https://q.uiver.app/#q=WzAsMyxbMiwwLCJBIl0sWzIsMiwiQiJdLFswLDIsIlAiXSxbMCwxLCJxIiwwLHsic3R5bGUiOnsiaGVhZCI6eyJuYW1lIjoiZXBpIn19fV0sWzIsMSwiZiIsMl0sWzIsMCwiXFxleGlzdHMgXFxiYXIgZiIsMCx7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dXQ==]]

Equivalently, the covariant [[hom-functor]] $\cat C(P,-)$ preserves [[Epimorphism|epimorphisms]].

## See also

- [[Projective module]], the original case.
- [[Injective object]], the dual notion.

#
---
#state/tidy | #lang/en | #SemBr
