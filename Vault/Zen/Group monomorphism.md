---
aliases:
  - a group monomorphism is injective
  - kernel of a group monomorphism
tags:
  - public
---
[[Group homomorphism]]
# Group monomorphism

Let $\varphi : G \to H$ be a group homomorphism.
The following statements are equivalent: #m/thm/group 

- $\varphi$ is [[Surjectivity, injectivity, and bijectivity|injective]]
- $\varphi$ is [[Morphism|monic]]
- $\ker \varphi = \{e\}$

> [!check]- Proof
> $\varphi$ is injective iff $\varphi(a) = \varphi(b) \implies a = b$ iff $\varphi(ab^{-1}) = e \implies ab^{-1} = e$ iff $\ker \varphi = \{e\}$.
> Clearly injective $\varphi$ implies monic $\varphi$.
> Now let $\varphi : G \rightarrowtail H$ be a monomorphism.
> Let $\iota : \ker \varphi \hookrightarrow G$ be the canonical injection and $\alpha T : \ker \varphi \to G : x \mapsto e$ be the trivial homomorphism.
> Since $\varphi \iota = \varphi \alpha T$, $\iota = \alpha T$ and hence $\ker \varphi = \{e\}$.
> <span class="QED"/>

#
---
#state/tidy | #lang/en | #SemBr
