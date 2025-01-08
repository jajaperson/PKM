---
tags:
  - public
aliases:
  - metrizable
---
[[Topology MOC]]
# Metric topology
A **metric topology** is a topology formed on a [[Metric space]] $(M, d)$,
using [[Open ball|open balls]] as a [[topological basis]].

Given an arbitrary topological space $(X, \mathcal{T})$,
if there exists a [[Metric space|metric]] $d: X \times X \to \mathbb{R}$ 
that forms a metric space equivalent to $\mathcal{T}$,
then the topological space $X$ is said to be **metrizable**.

## Open and closed sets
For a metric space $(M, d)$, a subset $S \sube M$ is called **open** iff
for every point $s \in S$, there exists some $\delta > 0$ such that the [[Open ball]] $B_{\delta}(s) \in S$.
In other words, $S$ is a [[Neighbourhood]] of every $s \in S$:
one can move in any direction from a point $s \in S$ without leaving $S$.

As is always the case with a topological space, a set is called **closed** iff its compliment is open. See also [[Sequential closedness]].

Loosely speaking, in the standard euclidean metric space $(\mathbb{R}^3, d)$, a set is open iff it does not include its boundary, 
while it is closed iff it does.

Outside of the trivial clopen sets $X$ and $\0$, **clopen** sets can occur in metric spaces 
when the [[boundary]] of a subset is not included in the space.
For example, in the metric space $(\mathbb{Q}, d)$ with standard metric,
the set $\{ x \in \mathbb{Q} \mid x ^2 < 3 \}$ is **clopen** since the boundary $\pm \sqrt{ 3 } \notin \mathbb{Q}$.
A topology in which all sets are **clopen** is defined by the [[Discrete topology|discrete metric]].

### Basic properties

Since a metric topology forms a [[topological space]],
- the (in)finite union of open sets is open.
 - the finite union of closed sets is closed.
- the finite intersection of open sets is open.
- the (in)finite intersection of closed sets is closed.

## Properties

- [[Metrizable implies Hausdorff]] (see [[Hausdorff space|Hausdorff]])
- [[Metrizable implies first-countable]] (see [[First countability axiom]])

#
---
#state/tidy | #land/en  | #SemBr 