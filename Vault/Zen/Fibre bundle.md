---
tags:
  - public
mathLink-blocks:
  locTriv: local trivialization
---
[[Topology MOC]]
# Fibre bundle

Let $B,F$ be spaces in [[Category of topological spaces]] or an appropriate subcategory $\cat C$,[^1]
which we call the base space and fibre space respectively.
A **fibre bundle**[^2]
$$
\begin{align*}
F \to E \stackrel{\pi}{\twoheadrightarrow} B
\end{align*}
$$
is a “total space” $E$ equipped with a surjective morphism $\pi : E \twoheadrightarrow B$ such that $(E, \pi)$ is locally the [[Product topology|product space]] $(B \times F, \opn{proj}_{1})$. #m/def/topology 
This is formalized as follows:
For every $p \in B$, there is an open neighbourhood $U \sube B$ of $p$ with an isomorphism
$$
\begin{align*}
\varphi: U \times F \xrightarrow{\sim} \pi^{-1}(U)
\end{align*}
$$
^locTriv

called a **local trivialization** at $p$ such that

![[fibre-bundle.svg#invert|https://q.uiver.app/#q=WzAsMyxbMCwwLCJcXHBpXnstMX0oVSkiXSxbMiwwLCJVIFxcdGltZXMgRiJdLFswLDIsIlUiXSxbMSwyLCJcXG1hdGhybXtwcm9qfV8xIiwwLHsic3R5bGUiOnsiaGVhZCI6eyJuYW1lIjoiZXBpIn19fV0sWzAsMiwiXFxwaSIsMix7InN0eWxlIjp7ImhlYWQiOnsibmFtZSI6ImVwaSJ9fX1dLFsxLDAsIlxcdmFycGhpIiwyLHsiY3VydmUiOjF9XSxbMCwxLCIiLDEseyJjdXJ2ZSI6MX1dXQ==]]

commutes.
An open cover $\mathscr{T}$ of $B$ with local trivializations is called a **local trivialization** of $E$.

## Further terminology

- We denote thr **fibre** above a base point $p \in B$ as $E_{p} := \pi^{-1} \{ p \}$.
- A bundle for which $E = F \times B$ and $\pi = \opn{proj}_{1}$ is called **trivial**.
- A [[Bundle map]] over a fixed based space is a morphism of bundles, and we can thus form the category [[Category of fibre bundles]].
- A [[Bundle section]] is a section (right-inverse) to $\pi$, or equivalently a bundle map from $B$ to $E$.

## Further structure

- [[Vector bundle]]

## Examples

- The [[Möbius strip]] $M$ is a bundle $(0,1) \hookrightarrow M \twoheadrightarrow \mathbb{S}^1$ .
- The [[Klein bottle]] $K$ is a bundle $\mathbb{S}^1 \hookrightarrow K \twoheadrightarrow \mathbb{S}^1$.

#
---
#state/tidy | #lang/en | #SemBr

[^1]: Often we take [[Category of manifolds]] or [[Holomorphic category]].

[^2]: Despite the notation, which is chosen to resemble a [[short exact sequence]], the morphism $F \hookrightarrow E$ should not be taken too literally, since there exists an isomorphism $F \cong \pi^{-1}\{ x \}$ for every fibre.
