---
tags:
  - public
---
[[Group representation theory MOC]]
# Group representation

A [[representation]] $\mathfrak{X}$ of a [[group]] $G$ is a linear [[group action]] on some vector space $V$ over $\mathbb{K}$ #m/def/rep2 
i.e. a [[group homomorphism]] $\mathfrak{X} : G \to \opn{GL}(V)$,
or equivalently a [[functor]] $\mathfrak{X} : G \to \Vect_{\mathbb{K}}$ regarding [[groups as categories]].[^not]
In particular, for any $g,h \in G$
$$
\begin{align*}
\mathfrak{X}(g) \mathfrak{X}(h) = \mathfrak{X}(gh)
\end{align*}
$$
and $\mathfrak{X}(1) = 1_{V}$.[^keppler]
Since a representation of $G$ over $\mathbb{K}$ uniquely determines a representation of the [[group ring]] $\mathbb{K}[G]$ and vice versa, the latter being equivalent to a [[Module over a unital associative algebra|$\mathbb K[G]$-module]], we often employ the abuse of terminology [[Module over a group|$G$-module]] for $(\mathfrak{X}, V)$ as a whole.
To summarize, a representation is at once

- a [[group homomorphism]] $\mathfrak{X} : G \to \opn{GL}(V)$, which we use to emphasize the carrier space;
- a [[functor]] $\mathfrak{X} : G \to \Vect_{\mathbb{K}}$, which we use to emphasize the ground field;
- a [[module]] $V$ over $\mathbb{K}[G]$, which we use to consider the aggregate as a single object.

  [^not]: We will use both notations depending on which perspective is being emphasized.


[^keppler]: 2023, [[@keppelerGroupsRepresentations2023|Groups and representations, p. 20]]
Since [[Every finite complex representation of a compact group is equivalent to a unitary representation]], it is common to only consider unitary representations.
## Additional terminology

- $\deg \mathfrak{X} = \dim_{\mathbb{K}} V$ is the **degree** of the representation.
- The vector space $V$ is said to **carry** the representation $\mathfrak{X}$,
  and is also called the **carrier space**.
- In these notes, if the carrier space is an [[Inner product space]] it will usually use the linear-second $\langle \cdot|\cdot \rangle$ convention, signalled by the bar.
- With a fixed basis, we can use a [[Matrix representation]].

## Types of representation

- A [[Faithful representation]] is injective
- A [[Full representation]] is surjective
- A [[Fully faithful representation]] is bijective
- Representations may also be classified by [[Reducibility of representations|reducibility]].

### Carrier space symmetry

- A [[Unitary representation]] is unitary for every group element.
- A [[Symplectic group representation]] is [[Symplectic transformation|symplectic]] for every group element.

## Properties

1. Every group has a trivial (in general not faithful) representation $\Gamma T : \cdot \mapsto \mathbb{1}$.
2. [[A non-trivial non-faithful representation implies a non-trivial normal subgroup]]

## Generalizations

A representation may be viewed as a [[Functor]] from a single-object [[Groupoid]] to $\Vect_{\mathbb{K}}$,
or equivalently as a [[Module over a unital associative algebra|module]] over a [[group ring]].
These yield two possible generalizations of representation.



#
---
#state/tidy | #lang/en | #SemBr