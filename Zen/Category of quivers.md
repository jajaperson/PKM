---
categoryName: category of quivers
mathLink: $\cat{Quiv}$
object: "[[quiver]]"
morphism: "[[quiver homomorphism]]"
tags:
  - category
  - public
---
[[Graph theory MOC]]
# Category of quivers

The **category of quivers** $\cat{Quiv}$ is a [[category]] where
an object is a [[quiver]]
and a morphism is a [[quiver homomorphism]]. #m/def/cat 
It is therefore identical to the [[category of presheaves]] $\PSh(\underline{\Theta_{2}})$ on the 2-[[Kronecker category]].

## Representable quivers

Viewing $\cat{Quiv}$ as a category of presheaves, we get two representable quivers $\yo 0$ and $\yo 1$, “the walking vertex” and “the walking edge” respectively,
since by the [[Yoneda lemma]], for any quiver $\Gamma$,
$$
\begin{align*}
\Gamma_{0} &\cong \cat{Quiv}(\yo 0, \Gamma),
&
\Gamma_{1} &\cong \cat{Quiv}(\yo 1, \Gamma).
\end{align*}
$$

Of course this is easily seen without the Yoneda lemma:
If we draw the corresponding quivers, we get

![[representable-quivers.svg#invert|c]]

so $\yo 0 \cong \vec A_{1}$ and $\yo 1 \cong \Theta_{1}$.

## Important functors

- There is a natural way $\cat{Quiv} \to \cat{Graph}$ to associate every quiver to an “underlying” [[Graph|general graph]], see [[Equivalence of quivers and general graphs]].
- This factorizes the forgetful functor $\opn V$ into the underlying vertex set.
- See [[Underlying quiver]] and [[Free category]]

#
---
#state/develop | #lang/en | #SemBr
