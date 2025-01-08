---
tags:
  - public
aliases:
  - "#m/def/topology"
  - "#m/thm/topology"
---
[[Mathematics MOC]]
# Topology MOC

Topology is the study of the defining features of a _space_.
What makes two spaces the _same_?
[[Topology notation in these notes]]

## Fundamentals

The object of interest is the [[Topological space]],
which is a space together with a way of defining which subsets are open called the **topology**.

- [[Coarseness and fineness of topologies]] on the same space
- [[Topological basis]], [[Topological subbasis]]

Open sets allow the definition of a [[Neighbourhood]] of a point.

- [[Neighbourhood system]], [[Neighbourhood basis]]

## Morphisms

The morphisms of interest are [[Continuity|continuous maps]].
Isomorphisms are then [[Homeomorphism|homeomorphisms]],
which preserve open sets in both directions,
and preserve every [[topological property]].
Other properties maps can have

- [[Open and closed maps]]
- [[Proper map]]

Special kinds of maps

- [[Embedding]]

## Topological properties and axiomatic topology

A [[Topological property]] is a property which is shared by any two [[Homeomorphism|homeomorphic]] spaces.

- [[Topological property|List of topological properties]]
- [[Countability axioms]]
- [[Separation axioms]]

## Special kinds of spaces

- [[Topological manifold]]

## Internally

### Sets

- [[Boundary]]
- [[Closure]]
- [[Interior and exterior]]
- [[Dense set]]

### Sequences

- [[Convergence]]

## Externally

I follow the structure given in [[@bradleyTopologyCategoricalApproach2020|Topology: A categorical approach]],
where we begin with the explicit topological definition,
followed by a definition based on continuous maps,
and finally the universal property.

- [[Subspace topology]], [[Quotient topology]]
- [[Product topology]] (product), [[Coproduct topology]] (coproduct)

## Specific topologies
- Special
  - [[Discrete topology]]: $(X, 2^X)$
  - [[Trivial topology]]: $(X, \{ \emptyset, X \})$
  - See [[Topology counterexamples MOC]]
- Common
  - [[Metric topology]]
- Shapes
  - [[Sphere space]]
  - [[Möbius strip]]
  - [[Unit circle topology]]
  - [[Klein bottle]]

## Related

- [[Homotopy theory MOC]]
- [[Homological algebra MOC]]
- [[Differential geometry MOC]]

---
#MOC | #state/develop | #lang/en