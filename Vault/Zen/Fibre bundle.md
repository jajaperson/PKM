---
tags:
  - public
---
[[Topology MOC]]
# Fibre bundle

Let $B,F$ be spaces in [[Category of topological spaces]] or an appropriate subcategory[^1],
which we call the base space and fibre space respectively.
A **fibre bundle**
$$
\begin{align*}
F \hookrightarrow E \stackrel{\pi}{\twoheadrightarrow} B
\end{align*}
$$
is a “total space” $E$ equipped with a surjective morphism $\pi : E \twoheadrightarrow B$ such that $(E, \pi)$ is locally the [[Product topology|product space]] $(B \times F, \opn{proj}_{1})$. #m/def/topology 
This is formalized as follows:
For every $p \in B$, there is an open neighbourhood $U \sube B$ of $p$ with a morphism
$$
\begin{align*}
\varphi: \pi^{-1}(U) \to U \times F
\end{align*}
$$
such that

![[fibre-bundle.svg#invert|https://q.uiver.app/#q=WzAsMyxbMCwwLCJcXHBpXnstMX0oVSkiXSxbMiwwLCJVIFxcdGltZXMgRiJdLFswLDIsIlUiXSxbMSwyLCJcXG1hdGhybXtwcm9qfV8xIiwwLHsic3R5bGUiOnsiaGVhZCI6eyJuYW1lIjoiZXBpIn19fV0sWzAsMiwiXFxwaSIsMix7InN0eWxlIjp7ImhlYWQiOnsibmFtZSI6ImVwaSJ9fX1dLFswLDEsIlxcdmFycGhpIiwwLHsiY3VydmUiOi0xfV0sWzEsMCwiIiwxLHsiY3VydmUiOi0xfV1d]]

commutes.

## Further terminology

- A bundle for which $E = F \times B$ and $\pi = \opn{proj}_{1}$ is called **trivial**.
- A [[Bundle section]] is a section (right-inverse) to $\pi$.

## Further structure

- [[Vector bundle]]

## Examples

- The [[Möbius strip]] $M$ is a bundle $(0,1) \hookrightarrow M \twoheadrightarrow \mathbb{S}^1$ .
- The [[Klein bottle]] $K$ is a bundle $\mathbb{S}^1 \hookrightarrow K \twoheadrightarrow \mathbb{S}^1$.

#
---
#state/tidy | #lang/en | #SemBr

[^1]: Often we take [[Category of manifolds]].
