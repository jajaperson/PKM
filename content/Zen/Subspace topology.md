---
tags:
  - public
---
[[Topology MOC]]
# Subspace topology

The **subspace topology** is a natural way of reframing a subspace as a whole space.
Let $(X, \mathcal{T}_{X})$ be a topological space, and $Y \sube X$ be any subset with the canonical inclusion $i : Y \rightarrowtail X$.
The **subspace topology** on $Y$ is the [[Coarseness and fineness of topologies|coarsest topology]] for which the canonical inclusion is continuous.[^br] #m/def/topology 
$$
\begin{align*}
\mathcal{T}_{Y} = \{ i^{-1}U : U \in \mathcal{T}_{X} \}
\end{align*}
$$

[^br]: 2020, [[@bradleyTopologyCategoricalApproach2020|Topology: A categorical approach]], p. 25–26

More generally, if $f : S \rightarrowtail X$ is an injective map,
then the subspace topology **induced** by $f$ is the coarsest topology for which $s$ is continuous.
In this case $f$ is an [[Embedding|embedding]].

## Further characterisations

### Explicit

Let $(X, \mathcal{T})$ be a topological space and $Y \sube X$ be a subset.
A subset $V \sube Y$ is then open **relative** to $Y$ iff there exists an open subset $U$ (relative to $X$) such that $V = U \cap Y$.[^Loose] 
The system $\mathcal{T}_{Y}$ of all subsets open relative to $Y$ is called the **subspace topology** induced by $X$,
and $(Y, \mathcal{T}_{X})$ forms a topological space.

[^Loose]: 2010, [[@looseAlgebraischeTopologie2010|Algebraische Topologie]], p. 9 (Definition 1.2)

### Universal property

For every topological space $(Z, \mathcal{T}_{X})$ and every map $f : Z \to Y$,
then $f$ is continuous iff $if : Z \to X$ is continuous. #m/thm/topology 

![[subobject universal property.jpg#invert]]

> [!check]- Proof
> First we will prove that the subspace topology as characterised above satisfies the universal property.
> Let $(X, \mathcal{T}_{X})$ be a topological space and let $Y \sube X$ be a subset endowed with the subspace topology $\mathcal{T}_{Y}$.
> Let $(Z, \mathcal{T}_Z)$ be some topological space, and $f : Z \to Y$ be a function.
> If $f$ is continuous, then so is the composition $if$ of continuous functions.
> Now suppose $if : Z \to X$ is continuous, and let $U \in \mathcal{T}_{Y}$.
> Then $U = i^{-1}V$ for some $V \in \mathcal{T}_{X}$.
> Since $if$ is continuous, $f^{-1}U = (if)^{-1}V \in \mathcal{T}_{Z}$, thus $f$ is continuous.
> Therefore $f$ is continuous iff $if$ is continuous.
> 
> Now let $\mathcal{T}'$ be a topology on $Y$ satisfying the universal property.
> In particular, let $(Z, \mathcal{T}_{Z}) = (Y, \mathcal{T}_{Y})$ and $f = \id_{Y} : y \mapsto y$.
> Then since $i\id_{Y} = i$ is continuous so is $\id_{Y}$,
> wherefore $\mathcal{T}'$ is coarser than $\mathcal{T}_{Y}$
> Now let $(Z, \mathcal{T}_{Z}) = (Y, \mathcal{T}')$ with $f = \id_{Y}$.
> Since $\id_Y$ is continuous, so too is $i \id_{Y} = i$.
> But $\mathcal{T}_{Y}$ is the coarsest topology on $Y$ for which $i$ is continuous,
> therefore $\mathcal{T}' = \mathcal{T}_{Y}$.
> <span class="QED"/>

## Properties

- The subspace is closed iff $i$ is a [[Open and closed maps|closed map]]
- The subspace is open iff $i$ is an [[Open and closed maps|open map]]

#
---
#state/tidy| #lang/en | #SemBr
