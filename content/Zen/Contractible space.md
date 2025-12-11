---
aliases:
  - contractible
tags:
  - public
---
[[Homotopy theory MOC]]
# Contractible space

A topological space $X$ is **contractible**[^zusammenziehbar] iff it can be continuously contracted to a single point.
This yields the following two equivalent definitions #m/def/homotopy 

- $X$ is contractible iff it is [[Homotopy equivalence|homotopy equivalent]] to the [[single point space]], i.e. $X \simeq *$.[^br]
- $X$ is contractible iff the identity $\id_{X}$ is [[Null-homotopic map|null-homotopic]].[^loose]

[^br]: 2020, [[@bradleyTopologyCategoricalApproach2020|Topology: A categorical approach]], p. 35
[^loose]: 2010, [[@looseAlgebraischeTopologie2010]], p. 37 (definition 2.1.7)
[^zusammenziehbar]: German _zusammenziehbar_

> [!check]- Proof of definition equivalence
> Let $T :X \to *$.
> Then $X \simeq *$ iff there exists $c: * \to X$ such that $cT \simeq \id_{X}$ (immediately $Tc = \id_{*}$).
> Since all constant maps have the form $cT$, the definitions are equivalent.
> <span class="QED"/>

Contraction to a point may be generalised to [[Topological retraction|retraction]] to a subspace.

## Properties

- Every contractible space is [[Path connectedness|path-connected]], since if $h : \id_{X} \simeq CT$ then $h(x,-)$ is a [[continuous path]] from $x$ to $C*$.

## Examples

- A circle is not contractible, since [[Circle endomorphisms are homotopic iff they are of equal degree]] and $\deg cT = 0 \neq 1 =\deg \id$.

#
---
#state/tidy | #lang/en | #SemBr
