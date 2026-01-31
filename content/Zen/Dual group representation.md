---
tags:
  - public
aliases:
  - self-dual representation
---
[[Group representation theory MOC]]
# Dual representation

Let $\Gamma : G \to \opn{GL}(V)$ be a [[Group representation]].
The **dual representation** is a representation carried by the [[dual vector space]] $V^*$ defined by #m/def/rep 
$$
\begin{align*}
\Gamma^*(g) = \Gamma(g^{-1})^*.
\end{align*}
$$
In the case of a [[unitary representation]] $\Gamma : G \to \opn{GL}(V)$,
the dual representation $\Gamma^*$ may be identified with the complex conjugate.


> [!tip]- Functorial construction
> The representation $\Gamma$ may be conceived as a [[functor]] from a [[Groups as categories|groups-as-category]] $\Gamma : G \to \Vect_{\mathbb{K}}$.
> We have two [[Contravariant functor|contravariant functors]] $\inv : \op G\to G$
> and $\opn{dual} : \op{\Vect_{\mathbb{K}}} \to \Vect_{\mathbb{K}}$.
> The dual representation is thus the covariant functor
> $$
> \begin{align*}
> \Gamma^*= \text{dual} \circ \Gamma \circ \inv : G \to \Vect_{\mathbb{K}}
> \end{align*}
> $$

A representation $\Gamma$ is called **self-dual** iff it is [[Equivalence of group representations|equivalent]] to its dual $\Gamma^*$,
and [[a group representation is self-dual iff it preserves a nondegenerate bilinear form]].

#
---
#state/develop | #lang/en | #SemBr
