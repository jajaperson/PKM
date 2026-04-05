---
tags:
  - public
---
[[Lie algebras MOC]]
# Direct product of Lie algebras

The **direct product** is the [[Products and coproducts|categorical product]] in [[Category of Lie algebras]].
Given two Lie algebras $\mathfrak{g}, \mathfrak{h}$,
their product $\mathfrak{g} \times \mathfrak{h}$ consists of the [[direct product vector space]][^sum] together with a bracket given by
$$
\begin{align*}
[(g_{1},h_{1}),(g_{2},h_{2})] = ([g_{1},g_{2}],[h_{1},h_{2}])
\end{align*}
$$

Hence regarded as subspaces $\mathfrak{g} \cong (\mathfrak{g}, 0)$ and $\mathfrak{h} \cong (0, \mathfrak{h})$ commute and are [[Lie algebra ideal|ideals]].

  [^sum]: for two (or by induction, finite) operands this is naturally isomorphic to the [[direct sum of vector spaces]] $\mathfrak{g} \oplus \mathfrak{h}$

## Internal direct product

Let $\mathfrak{a}, \mathfrak{b} \leq \mathfrak{g}$ be [[Lie subalgebra|subalgebras]] such that $\mathfrak{g} = \mathfrak{a} \oplus \mathfrak{b}$ and $[\mathfrak{a},\mathfrak{b}] = 0$.
Then $\mathfrak{g}$ is the **internal direct product** $\mathfrak{a} \times \mathfrak{b}$.
Equivalently, $\mathfrak{g} = \mathfrak{a} \oplus \mathfrak{b}$ with both $\mathfrak{a},\mathfrak{b} \trianglelefteq \mathfrak{g}$ [[Lie algebra ideal|ideals]].

## See also

- [[Semidirect product of Lie algebras]], which generalizes the direct product

#
---
#state/tidy | #lang/en | #SemBr
