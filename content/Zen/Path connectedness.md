---
aliases:
  - path-connected
  - arc-connected
  - arc connectedness
tags:
  - public
---
[[Connectedness]]
# Path connectedness
A **path-connected** space is a topological space $(X, \mathcal{T})$ 
in which all points $x,y \in X$ may be connected by a [[Continuous path]] $c : [0,1] \to X$ so that $c(0)=x$ and $c(1) = y$.
A subset of $X$ may also be **path-connected**. #m/def/topology 

If $c$ is a [[Continuous path|continuous arc]] then $X$ is called **arc-connected**.
Path connectedness is stronger than ordinary connectedness  ([[Path connected implies connected]]), but weaker than arc connectedness.
Not every path-connected space is arc-connected, take the [[Line with two origins]].

## Path-connected components

Two points $x,y \in X$ are said to be path-connected iff there exists a connected path between them,
and we write $x \sim y$.
This is an equivalence relation ([[Connectedness is transitive]]) and the equivalence classes are called **path-connected components** of $X$.

## Properties
- [[Main theorem of connectedness]]: Path connectedness is preserved by continuous functions, thus it is a [[Topological property]]. 
- [[Connectedness is transitive]]: Path-connected neighbourhoods of a point have a path-connected union.
- Any $c([0,1])$ is connected
- Convex subsets of $\mathbb{R}^n$ are connected
- Every path-connected [[Hausdorff space]] is arc-connected.
- A space is path-connected iff [[Constant map|constant maps]] form a [[Homotopy of maps|homotopy class]].
- [[Path connectedness is homotopy invariant]]

#
---
#state/tidy  | #lang/en | #SemBr 
