---
tags:
  - public
---
[[Topology MOC]]
# Topological basis
Given a topological space $(X, \mathcal{T})$,
a **basis** for that space is a set of open subsets $\mathcal{B} \sube \mathcal{T}$ that can form all open subsets under union.
#m/def/topology 

The topology $\mathcal{T}$ _generated_ by unions of subsets in $\mathcal{B}$
will always be the [[Coarseness and fineness of topologies|coarsest topology]] such that $\mathcal{B} \sube \mathcal{T}$,
a condition which also holds for [[Topological subbasis]].
In other words, $\mathcal{B}$ is "completed" to form a topology with the minimum additions possible,
and this completion is unique.
It follows from this that $U \in \mathcal{T}$ if and only if 
for all $x \in U$ there exists $B \in \mathcal{B}$ such that $x \in B \sube U$.
Any such $B$ for a given $x$ is called a basic open neighbourhood of $x$.

## Possible bases

A given set of subsets $\mathcal{B} \sube 2^X$ can form a basis for a  topology of $X$ if and only if
1. For all $x \in X$ there exists $B \in \mathcal{B}$ such that $x \in B$.
2. For all $A, B \in \mathcal{B}$, 
   if $x \in A \cap B$, 
   then there exists at least one $C \in \mathcal{B}$ such that $x \in C \sube A \cap B$.

The former condition comes from the requirement of a [[Topological space]] that the topology contains the whole set,
and the latter comes from the requirement that any intersection of subsets in the topology is also in the topology.[^un] 
An arbitrary collection of subsets that doesn't meet these conditions can still be used to generate a topology, see [[Topological subbasis]].

[^un]: And that our "generating operation" is just the union, so we can't get intersections for free.

## Examples

- For a [[Metric space]] the induced topology has [[Open ball|open balls]] as its basis.

#
---
#state/tidy | #SemBr | #lang/en
