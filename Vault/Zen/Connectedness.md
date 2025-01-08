---
tags:
  - public
aliases:
  - connected
  - connected component
---
[[Topology MOC]]
# Connectedness

A topological space $(X, \mathcal{T})$ is called **connected**[^zusammenhängend] if the following equivalent[^pref] conditions hold: #m/def/topology 

1. any continuous function $f : X \to \{ 0,1 \}$ with discrete codomain is constant.[^br]
2. $X$ is not the union of two non-empty disjoint open sets.[^loose]
3. the only clopen sets are $\0$ and $X$.

[^pref]: The footnotes indicate which is the primary definition for a given source.
[^br]: 2020, [[@bradleyTopologyCategoricalApproach2020|Topology: A categorical approach]], p. 39
[^loose]: 2010, [[@looseAlgebraischeTopologie2010|Algebraische Topologie]], p. 15
[^zusammenhängend]: German _zusammenhängend_. Connectedeness is _Zusammenhang_.

> [!check]- Proof of equivalence of definitions
> For any function $f: X \to \{ 0,1 \}$,
> it follows that $f^{-1}\{ 0 \} \cap f^{-1}\{ 1 \} = \0$ and $f^{-1}\{ 0 \} \cup f^{-1}\{ 1 \} = X$.
> Clearly $f^{-1}\0$ and $f^{-1}\{ 0,1 \}$ are open,
> so $f$ is continuous iff $f^{-1}\{ 0 \}$ and $f^{-1}\{ 1 \}$ are open.
> Hence condition 1 and 2 are equivalent.
> A partition of the space into two open subsets implies both of those subsets are clopen,
> and likewise if we have a clopen subset the space can be partitioned into it and its likewise clopen compliment,
> thus condition 3 is equivalent to 1 and 2.
> <span class="QED"/>

A stronger property is [[Path connectedness|path-connected]].
When a subset is said to be connected it is meant under the [[Subspace topology]].

## Connected components

Two points $x,y \in X$ are said to be connected iff there exists a connected subspace containing both points.
This is an equivalence relation ([[Connectedness is transitive]]) and the equivalence classes are called **connected components** of $X$.

## Properties

- **Main theorem:** [[Main theorem of connectedness|The continuous image of a connected space is connected]]
- [[Connected fibres and quotient implies connected space]]
- [[Connectedness is transitive]]
- [[Connected subspaces of the real line are intervals]]
- [[Connectedness is homotopy invariant]]
- [[Cut point]]

#
---
#state/tidy | #lang/en | #SemBr
