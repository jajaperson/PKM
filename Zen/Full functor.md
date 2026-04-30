---
tags:
  - public
---
[[Functor#Types of functors]]
# Full functor

A **full functor** is a functor that is surjective on hom-sets.
If $F : \cat C \to \cat D$ is a functor,
then it is **full** iff for any hom-set $\cat C(X, Y)$ the associated mapping
$$
\begin{align*}
F : \cat C(X,Y) &\to \cat D(FX, FY) \\
f &\mapsto Ff
\end{align*}
$$
is surjective.
If it is also injective, the functor is a [[Fully faithful functor]].

#
---
#state/tidy| #lang/en | #SemBr
