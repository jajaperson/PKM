---
tags:
  - public
---
[[Topological property]]
# Cardinality of a topology

Given a [[topological space]] $(X, \mathcal{T})$ the **[[cardinality]] of the topology** $\abs {\mathcal{T}}$ is a [[topological property]], #m/thm/topology 
i.e. all the topologies of homeomorphic spaces have the same cardinality.

> [!check]- Proof
> Let $\phi : (X, \mathcal{T}_{X}) \to (Y, \mathcal{T}_{Y})$ be a homeomorphism.
> Since [[The image map of a bijection is a bijection]],
> $\phi^\star : \mathcal{P}(X) \to \mathcal{P}(Y)$ is a bijection with inverse $\phi_{\star}$
> We can define $F : \mathcal{T}_{Y} \twoheadrightarrow \mathcal{T}_{X} : V \mapsto \phi_\star(V)$ since the preïmage of every open set $V$ must be open, which is clearly injective since it is restricted $\phi_{\star}$.
> Thus $\abs{\mathcal{T}_{X}} \leq \abs{\mathcal{T}_{Y}}$
> Using a similar argument, we can define an injection $G : \mathcal{T}_{X} \twoheadrightarrow \mathcal{T}_{Y} : V \mapsto \phi^\star (V)$.
> Thus $\abs{\mathcal{T}_{Y}} \leq \abs{\mathcal{T}_{X}}$.
> Therefore $\abs{\mathcal{T}_{X}} = \abs{\mathcal{T}_{Y}}$. <span class="QED"/>

#
---
#state/develop | #lang/en | #SemBr
