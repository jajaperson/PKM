---
tags:
  - public
aliases:
  - multigraph
  - general multigraph
---
[[Graph theory MOC]]
# Types of graph

In graph theory one considers many different kinds of graphs, which vary in terms of

- **edge distinguishability** (_distinguished_) Do edges have identity of their own, or are they solely identified by their start and end vertices? Note this only matters for a multigraph.
- **loops** (_pseudo-_) Are loops allowed, i.e. edges from a vertex to itself?
- **multiplicity** (_multi-_) Can there be multiple edges between the same two vertices?
- **direction** (_di-_) Do edges have direction?

This nomenclature allows for combinations of prefixes, e.g. a **distinguished pseudomultidigraph** is a [[Quiver]].
Collectively, the above cases are referred to as **general multigraphs**,
and any of these can be turned into a quiver — see [[Graphs as quivers]].
We will sometimes say there is a $(n,m)$ edge from $a$ to $b$ to indicated $n$ edges from $a$ to $b$ and $m$ edges from $b$ to $a$.

Other notion of graph do not fit into this paradigm

- [[Hypergraph]]

#
---
#state/develop | #lang/en | #SemBr
