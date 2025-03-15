---
tags:
  - public
---
[[Group representation theory MOC]]
# Group representation

A [[Representation]] $\Gamma$ of a group $G$ is essentially a linear [[group action]] on some vector space $V$. #m/def/rep
It is a [[Group homomorphism]] $\Gamma : G \to \mathrm{GL}(V)$.
In particular for some $g,h \in G$
$$
\begin{align*}
\Gamma(g) \Gamma(h) = \Gamma(gh)
\end{align*}
$$
and $\Gamma(e) = \mathbb{1}$ where $\mathbb{1}$ is the identity map.[^keppler]
Since [[Every representation of a compact group is equivalent to a unitary representation]], it is common to only consider unitary representations.

[^keppler]: 2023, [[@keppelerGroupsRepresentations2023|Groups and representations, p. 20]]

## Additional terminology

- $\dim \Gamma = \dim V$ is the **dimension** of the representation.
- The vector space $V$ is said to **carry** the representation $\Gamma$,
  and is also called the **carrier space**.
- In these notes, if the carrier space is an [[Inner product space]] it will usually use the linear-second $\langle \cdot|\cdot \rangle$ convention, signalled by the bar.
- In a fixed [[Orthonormal basis]] $(v_{i})_{i=1}^n$ we call $\Gamma(g)_{jk}$ the [[Matrix representation]] with elements
  $$
  \begin{align*}
  \Gamma(g)_{jk} = \bra{v_{i}} \Gamma(g)\ket{v_{k}} 
  \end{align*}
  $$
  where it is said that $v_{i}$ transform under $G$ in the representation $\Gamma$.

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