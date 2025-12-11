---
aliases:
  - Homöomorphismus
  - homeomorphic
tags:
  - public
---
[[Topology MOC]]
# Homeomorphism

A homeomorphism is an [[Morphism|isomorphism]] in [[Category of topological spaces]],
i.e. a [[Continuity|continuous]] map with a continuous inverse. #m/def/topology 
Therefore both images of open sets in the domain are open in the codomain,
and preïmages of open sets in the codomain are open in the domain.
Homeomorphisms preserve every [[Topological property]].

Unlike with categories of algebras,
a bijective continuous map is not necessarily a homeomorphism,
there exist continuous bijections with non-continuous inverses.
However, [[A continuous bijection from compact to Hausdorff is a homeomorphism]].

> [!info]- Example
> Consider two topologies $\mathcal{T}_{1}$ and $\mathcal{T}_2$ on $X$, where $\mathcal{T}_{1} \subne \mathcal{T}_{2}$ (see [[Coarseness and fineness of topologies]]).
> Then the identity map $i:(X,\mathcal{T}_{1}) \to (X, \mathcal{T}_{2}) : x \mapsto x$ is continuous and bijective,
> but its inverse $i^{-1}$ is not.
> Therefore, $i$ is not a homeomorphism.
> <span class="QED"/>

## Properties

- [[A map is a homeomorphism iff it is bijective, continuous, and open]]

## See also

- [[Local homeomorphism]] which preserves local properties

#
---
#state/tidy | #lang/en | #SemBr
