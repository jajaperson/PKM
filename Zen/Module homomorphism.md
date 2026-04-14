---
tags:
  - public
---
[[Module theory MOC]]
# Module homomorphism

Let $R$ be a ring and $V,W$ be (left) $R$-[[module|modules]].
A map $f : V \to W$ is a (left) $R$-**module homomorphism** or (left) $R$-**linear** iff for any $\lambda,\mu \in \mathbb{R}$ and $u,v \in V$ #m/def/module 
$$
\begin{align*}
f(\lambda u + \mu v) = \lambda f(u) + \mu f(v)
\end{align*}
$$
This is a direct generalization of a [[linear map]] between vector spaces.

## Properties

- A linear map $f \in \lMod R(V,W)$ is [[Epimorphism|epic]] iff it is [[Surjectivity, injectivity, and bijectivity|surjective]] iff $\im f = W$
- A linear map $f \in \lMod R(V,W)$ is [[Monomorphism|monic]] iff it is [[Surjectivity, injectivity, and bijectivity|injective]] iff $\ker f = \{  0 \}$
- A linear map is an [[isomorphism]] iff it is [[Surjectivity, injectivity, and bijectivity|bijective]] iff it is epic and monic
- If $R$ is a commutative ring, then $\lMod R(V,V)$ is an $R$-algebra called the [[Endomorphism ring]].

#
---
#state/develop | #lang/en | #SemBr
