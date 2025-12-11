---
aliases:
  - irreducible operators
tags:
  - public
---
[[Representation theory MOC]]
# Representation operator

Given a [[unitary representation]] $U : G \to \mathrm{GL}(V)$ and some representation (usually an [[irrep]]) $\Gamma : G \to \mathrm{GL}(V_{0})$, a **representation operator**[^term] transforming in $\Gamma$ is a linear map $\mathcal{O} : V_{0} \to \Vect_{\mathbb{C}}(V,V)$ satisfying[^jev] #m/def/rep
$$
\begin{align*}
\mathcal{O}(\Gamma(g)v) = U(g) \mathcal{O}(v)U(g)^{\dagger}
\end{align*}
$$
for all $g \in G$ and $v \in V$.
If $\Gamma$ is an [[irrep]] $\Gamma^\mu$ we denote a corresponding representation operator as $\mathcal{O}^\mu$.

[^term]: Keppeler refers to this as a set of **irreducible operators**
[^jev]: 2015, [[@jeevanjeeIntroductionTensorsGroup2015|Introduction to tensors and group theory for physicists]], §6.2, p. 276ff


> [!warning]
> Every operator transforms in a representation

## Fixed basis

The properties and motivation for a representation operator become clearer when a basis is $\{ e_{j} \}$ fixed for $V_{0}$.
It is common to think of a representation operator $\mathcal{O}$ as a set of **irreducible operators**[^kep] $\mathcal{O}_{j} = \mathcal{O}(e_{j}) : V \to V$ corresponding to each basis vector.
The condition above thence becomes
$$
\begin{align*}
U(g) \mathcal O_{i}U(g)^{\dagger} = \sum_{j} \mathcal{O}_{j}\Gamma_{ji}(g)
\end{align*}
$$
which is essentially the statement that the $\mathcal{O}_{i}$ transform like the basis vectors $e_{j}$ under $G$.
This is a direct generalisation of the [[Tensor operator]] (including scalar and vector operators),
which transform in the standard representation of $\mathrm{SO}(3)$.

[^kep]: 2023, [[@keppelerGroupsRepresentations2023|Groups and representations]], §4.2, p. 54

## Properties

- If $\Gamma^\mu$ is the trivial representation, then $\mathcal{O}^\mu$ is just an operator that commutes with $U$.
- [[Irreducible operators applied to an irreducible orthonormal basis transform in the product representation]]
- [[Wigner-Eckart theorem]]


#
---
#state/develop | #lang/en | #SemBr
