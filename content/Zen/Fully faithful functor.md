---
tags:
  - public
---
[[Functor#Types of functors]]
# Fully faithful functor

A **fully faithful functor** is a functor that is bijective on hom-sets. #m/def/cat 
If $F : \cat C \to \cat D$ is a functor,
then it is **fully faithful** iff for any hom-set $\cat C(X, Y)$ the associated mapping 
$$
\begin{align*}
F : \cat C(X,Y) &\to \cat D(FX, FY) \\
f &\mapsto Ff
\end{align*}
$$
is bijective.
That is to say every morphism $FX \to FY$ is the image of exactly one morphism $X \to Y$.
Fully faithful functors preserve relationships between objects in a category.

#
---
#state/tidy| #lang/en | #SemBr