---
tags:
  - public
aliases:
  - compactness
  - compact
---
[[Topology MOC]]
# Compact space

A topological space $X$ is called **compact** every [[Cover set|open cover]] of $X$ contains a finite subcover. #m/def/topology 
A subset is said to be compact iff it is such under the [[Subspace topology]].
A non-compact space may be made compact via a [[Compactification]].
A related notion is [[Sequentially compact space|sequential compactness]], which is equivalent in a second-countable space.

## Complement characterisation

A topological space $X$ is compact iff every family $\{F_{\alpha}\}_{\alpha \in A}$ of closed subsets such that $\bigcap_{\alpha \in A}F_{\alpha} = \0$ has a finite subfamily such that $\bigcap_{i = 1}^n F_{\alpha_{i}} = \0$.

> [!check]- Proof
> Assume $X$ is compact.
> Let $\{F_{\alpha}\}_{\alpha \in A}$ be a family of closed sets with $\bigcap_{\alpha \in A}F_{\alpha} = \0$.
> Then $\{ X \setminus F_{\alpha} \}$ is an open cover of $X$ and therefore has a finite subcover $\{ X \setminus F_{\alpha_{i}} \}_{i=1}^n$, in which case $\bigcap_{i=1}^n F_{\alpha_{i}} = \0$.
> 
> For the converse, assume every family $\{F_{\alpha}\}_{\alpha \in A}$ of closed subsets of $X$ such that $\bigcap_{\alpha \in A}F_{\alpha} = \0$ has a finite subfamily such that $\bigcap_{i = 1}^n F_{\alpha_{i}} = \0$.
> Let $\{ U_{\alpha} \}_{\alpha \in A}$ be an open cover of $X$.
> Then $\bigcap_{\alpha \in A} (X \setminus U_{\alpha}) = \0$ so there exists a finite subfamily $\{ X \setminus U_{\alpha_{i}} \}_{i=1}^n$ such that $\bigcap_{\alpha \in A}(X \setminus U_{\alpha_{i}}) = \0$,
> in which case $\{ U_{\alpha_{i}} \}_{i=1}^n$ is a finite subcover.
> <span class="QED"/>

## Properties
Other useful properties are limited to the [[Hausdorff-compact space]].

- Compactness is a stronger condition than [[Lindelöf space|Lindelöf]]
- [[The continuous image of a compact space is compact]]
- [[Compact subsets of a Hausdorff space are closed]]
- [[Closed subsets of a compact space are compact]]
- [[A continuous bijection from compact to Hausdorff is a homeomorphism]]

#
---
#state/tidy| #lang/en | #SemBr
