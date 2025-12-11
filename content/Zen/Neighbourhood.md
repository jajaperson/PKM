---
tags:
  - public
aliases:
  - Umgebung
---
[[Topology MOC]]
# Neighbourhood

In topology, a **neighbourhood**[^Umgebung] of a point is a set containing some open set around a point. #m/def/topology 
An **open neighbourhood** of a point is then an open set containing a point.
Some authors use a different definition where all neighbourhoods are open,[^munkres]
but this will be distinguished in these notes (see [[Topology notation in these notes]])

[^Umgebung]: German _Umgebung_ von $x$
[^munkres]: 2000, [[@munkresTopology2000|Topology]], pp. 96–97

It follows from this definition that a set is [[Topological space|open]] iff it is a neighbourhood of all its points.

- [[Neighbourhood system]]
- [[Neighbourhood basis]]

## Examples

### In a metric space

Let $(X, d)$ be a metric space, and $x \in X$
Then $S \sube X$ is said to be a **neighbourhood** of $x$ 
iff there exists $\epsilon > 0$ such that
$$
\begin{align*}
x \in B_{\epsilon}(x) \sube S \sube X
\end{align*}
$$
which follows if $B_{\epsilon}(x) \sube S$.

#
---
#state/tidy | #lang/en | #SemBr
