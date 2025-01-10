---
tags:
  - public
---
[[Functor#Types of functors]]
# Faithful functor

A **faithful functor** is a functor that is injective on hom-sets.
If $F : \cat C \to \cat D$ is a functor,
then it is **faithful** iff for any hom-set $\cat C(X, Y)$ the associated mapping
$$
\begin{align*}
F : \cat C(X,Y) &\to \cat D(FX, FY) \\
f &\mapsto Ff
\end{align*}
$$
is injective.
If it is also surjective, the functor is a [[Fully faithful functor]].

#
---
#state/tidy| #lang/en | #SemBr
