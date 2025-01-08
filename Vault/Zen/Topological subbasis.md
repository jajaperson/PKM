---
tags:
  - public
---
[[Topology MOC]]
# Topological subbasis

Any family of subsets $\mathcal{S} \sube \mathcal{P}(X)$ whose union $\bigcup_{S \in \mathcal{S}}S = X$ forms a subbasis for a topology.
The generated topology is the [[Coarseness and fineness of topologies|coarsest topology]] containing $\mathcal{S}$. #m/def/topology 
A stronger concept is the [[Topological basis]],
which can be formed by adding all finite intersections of subbasic open neighbourhoods. #m/thm/topology 

> [!check]- Proof the generated topology is well defined and matches the basis
> Let $\mathcal{S} \sube \mathcal{P}(X)$ be a family of subsets whose union equals $X$
> We claim that there exists a [[Coarseness and fineness of topologies|coarsest topology]] $\mathcal{T}$ containing $\mathcal{S}$.
> In order to satisfy the axioms for a [[Topological space]],
> $\mathcal{T}$ must be closed under finite intersection and (in)finite union.
> If we first complete $\mathcal{S}$ under finite intersection to obtain a [[Topological basis]] $\mathcal{B}$,
> and thereafter under (in)finite union,
> we obtain a complete $\mathcal{T}$,
> since the finite intersection of unions may always be expressed as the union of finite intersections.
> <span class="QED"/>

## Properties

- [[Proving continuity with a subbasis]]
- [[Proving open map with a subbasis]]
- [[Alexander subbasis theorem]]

#
---
#state/tidy | #lang/en | #SemBr
