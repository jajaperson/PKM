---
tags:
  - public
---
[[Topology MOC]]
# Vector bundle

A (real[^1]) **vector bundle** is a $C^\alpha$-[[fibre bundle]] #m/def/topology 
$$
\begin{align*}
\mathbb{R}^k \to E \stackrel{\pi}{\twoheadrightarrow} B
\end{align*}
$$
where for every $p \in B$ the fibre $E_{p}$ is a $k$-dimensional [[vector space]] over $\mathbb{R}$
and we have a local trivalization $\mathscr{T}$ of $E$ such that each $\varphi \in \mathscr{T}$ restricts to a [[linear isomorphism]]. 
Usually we denote vector bundles by the entire space $E$ where the projection $\pi : E \twoheadrightarrow B$ onto the base space
and the structure of a vector space on each fibre $E_{p}$ is understood.

## Further terminology

- A [[Vector bundle morphism]] is a [[Bundle map]] which respects the linear structure. We can thus form the category [[Category of vector bundles]].
- Many of the usual constructions on vector spaces carry over:
    - [[Direct sum of vector bundles]]
    - [[Tensor product of vector bundles]]
    - [[Hom vector bundle]]
    - [[Dual vector bundle]]

## Examples

- The [[Tangent bundle]] for a manifold, as well as vector bundles obtained thence using the constructions above.

#
---
#state/develop | #lang/en | #SemBr

[^1]: See [[Complex vector bundle]].
