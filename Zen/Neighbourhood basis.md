---
tags:
  - public
---
[[Neighbourhood system]]
# Neighbourhood basis

Given a topological space $(X, \mathcal{T})$, 
a **neighbourhood basis** $\mathcal{B}(x) \sube \mathcal{N}(x)$ of a point $x \in X$ is a set of neighbourhoods of $x$ such that given any neighbourhood $S \in \mathcal{N(x)}$,
there exists a basic neighbourhood $B \in \mathcal{B}(x)$ such that $x \in B \sube S \sube X$.
#m/def/topology 

> [!info] Open neighbourhood basis
> Note that since every neighbourhood contains an open neighbourhood,
> we can always give an open neighbourhood basis if we have a neighbourhood basis,
> without loss of generality.

## Properties

- A topological space is [[First countability axiom|first-countable]] iff every point has a countable neighbourhood basis.
- Given a countable neighbourhood basis, it is possible to construct a [[Nested neighbourhood basis]].

#
---
#state/tidy | #lang/en | #SemBr 