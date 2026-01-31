---
aliases:
  - coarser
  - finer
  - coarsest topology
  - finest topology
tags:
  - public
---
[[Topological space]]
# Coarseness and fineness of topologies
Given two topologies on the same set $(X, \mathcal T)$, $(X, \mathcal T')$,
if $\mathcal T \sube \mathcal T'$ 
then $\mathcal{T}$ is said to be **coarser**[^gröber] than $\mathcal{T}'$,
since it contains larger chunks of $X$
in a smaller quantity.
Likewise $\mathcal{T'}$ is **finer**[^feiner] than $\mathcal{T}$.
Clearly all topologies are coarser than the [[Discrete topology]] and finer than the [[Trivial topology]].[^br] #m/def/topology 

[^gröber]: German _gröber_
[^feiner]: German _feiner_

- $\mathcal{T_{1} \sube \mathcal{T}_{2}}$ ::: $\mathcal{T}_{1}$ is coarser than $\mathcal{T}_{2}$
- $\mathcal{T}_{1} \supseteq \mathcal{T}_{2}$ ::: $\mathcal{T}_{1}$ is finer than $\mathcal{T}_{2}$

[^br]: 2020, [[@bradleyTopologyCategoricalApproach2020|Topology: A categorical approach]], §0.1, p. 2

## Properties

- An intersection of topologies will clearly be coarser than both topologies.
- Given two topologies $\mathcal{T}_{1}, \mathcal{T}_2$ on the same set $X$, if $e : \mathcal{T}_{1} \to \mathcal{T}_{2} :  x \mapsto x$ is continuous, then clearly $\mathcal{T}_{1} \supseteq \mathcal{T}_{2}$, i.e. $\mathcal{T_{1}}$ is finer.
#
---
#state/tidy | #SemBr | #lang/en | #flashcards/maths/topology 