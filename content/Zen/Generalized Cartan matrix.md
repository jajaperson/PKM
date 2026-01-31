---
tags:
  - public
aliases:
  - Cartan quiver
---
[[Lie algebras MOC]]
# Generalized Cartan matrix

A **generalized Cartan matrix** $C = (c_{ij})$ is an $r \times r$ matrix such that for all $i,j \in \mathbb{N}_{r}$ #m/def/lie 

1. $c_{ii} = 2$
2. $c_{ij} \leq 0$ if $i \neq j$;
3. $c_{ij} = 0$ iff $a_{ji} = 0$.

The [[quiver]] $\Gamma$ associated to $C$ has vertices $\Gamma (V)= \mathbb{N}_{r}$
and $a_{ij} = 2\delta_{ij} - c_{ij}$ edges between vertices $i$ and $j$,
thus its [[adjacency matrix]] $A = (a_{ij})$.
A quiver which can be associated to a generalized Cartan matrix is called a **Cartan quiver**,
hence a Cartan quiver is a quiver with

- no loops
- every edge having at least one edge in the opposite direction

## Properties

- In the context of the [[Mutation and numbers games]], $C$ transitions between populations and weights on an associated quiver.

#
---
#state/develop | #lang/en | #SemBr
