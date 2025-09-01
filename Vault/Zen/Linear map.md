---
tags:
  - public
---
[[Linear algebra MOC]]
# Linear map
A **linear map**[^var] is a structure-preserving map of [[Vector space|vector spaces]].
That is, given two vector spaces over the same field $V,W \in \Vect_{\mathbb{K}}$ a mapping $f : V \to W$ is linear iff for any $\lambda,\mu \in \mathbb{K}$ and $\vab v, \vab u \in V$ #m/def/linalg 
$$
\begin{align*}
f(\lambda\vab v + \mu \vab u) = \lambda f(\vab v) + \mu f(\vab u)
\end{align*}
$$
It follows that $f(\vab 0) = \vab 0$.
A linear map is an example of a [[Module homomorphism]].

> [!tip]+ Geometric interpretation
> If a map $f : \mathbb{R}^n \to \mathbb{R}^m$ is interpreted as the warping of space,
> the above rules are equivalent to the following
> - The origin remains in place
> - Grid lines remain evenly spaced
> - Grid lines remain parallel
> 
> ![[ExampleLinear_ManimCE_v0.18.1.gif]]


  [^var]: variously called a **linear transformation**, **linear operator**, **linear function**, **linear morphism**.

## Properties

Some of these properties apply for a more general [[Module homomorphism]]

- A linear map $T \in \Vect_{\mathbb{K}}(U,V)$ is [[Linear epimorphism|epic]] iff it is surjective iff $\im T = V$
- A linear map $T \in \Vect_{\mathbb{K}}(U,V)$ is [[Linear monomorphism|monic]] iff it is injective iff $\ker T = \{ \vab 0 \}$
- A linear map is an [[Linear isomorphism|isomorphism]] iff it is [[Surjectivity, injectivity, and bijectivity|bijective]] iff it is epic and monic
- [[Rank-nullity theorem]]

## Related

- [[Linear kernel]]
- [[Bounded operator]]

#
---
#state/tidy | #SemBr | #lang/en 