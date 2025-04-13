---
tags:
  - public
---
[[Group theory MOC]]
# Symmetric group

A **symmetric group** $\mathrm{S}_{n}$ of degree $n$ is a [[group]] of order $n!$ made up of permutations of $n$ objects.
Let $\mathbb{N}_{n} = \{ 1, \dots , n \}$.
Then $\mathrm{S}_{n}$ is the set of all [[Surjectivity, injectivity, and bijectivity|bijections]] $\mathbb{N}_{n} \to \mathbb{N}_{n}$, 
i.e. $\mathrm{S}_{n} = \mathrm{Aut}_{\Set}(\mathbb{N}_{n}) = \mathbb{N}_{n}!$ #m/def/group

Each permutation in a symmetric group may be written as a product of disjoint $n$ cycles,
which is unique up to order of cycles and 1-cycles may be added or dropped.[^sim]

$$
\begin{pmatrix}
1 & 2 & 3 & 4 & 5 \\
5 & 3 & 4 & 2 & 1
\end{pmatrix}
= (15)(234)
$$

[^sim]: 1996, [[@simonRepresentationsFiniteCompact1996|Representations of finite and compact groups]], §I.3, p. 9

In a sense, symmetry groups are the largest (by order) possible groups with a given structure,
as formalised by [[Cayley's theorem]] –
Every group is a subgroup of a symmetry group.

## Properties

- [[Alternating character]]
- [[Conjugacy classes of a symmetric group are determined by cycle structure]]
- [[Normal subgroups of the symmetric group]]
  - [[Alternating group]]
 

## See also

- [[Representation theory of finite symmetric groups]]

#
---
#state/tidy | #lang/en | #SemBr
