---
tags:
  - public
---
[[McKay graph]]
# Spectrum of a McKay graph

Let $W$ be a $\mathbb{K}[G]$-module affording character $\eta$ and $\Gamma_{W}(G)$ be its [[McKay graph]] with adjacency matrix $A_{W}(G) = (a_{ij})$.
Then the eigenvectors of $A_{W}(G)$ are the columns of the [[character table]] for $G$,
and the eigenvalues are the corresponding values of $\eta$. #m/thm/rep2 

> [!check]- Proof
> Let $\eta$ be the character afforded by $W$.
> For each $i \in \mathbb{N}_{r}$, we have
> $$
> \begin{align*}
> \sum_{j=1}^r a_{ij} \chi_{j} = \eta \chi_{i}
> \end{align*}
> $$
> and thus for any $g \in G$,
> $$
> \begin{align*}
> A_{W}(G) \begin{bmatrix}
> \chi_{1}(g) \\
> \vdots \\
> \chi_{r}(g)
> \end{bmatrix}
> =\eta(g) \begin{bmatrix}
> \chi_{1}(g) \\
> \vdots \\
> \chi_{r}(g)
> \end{bmatrix}
> \end{align*}
> $$
> which gives $r$ linearly independent eigenvectors and is thus complete.

#
---
#state/tidy | #lang/en | #SemBr
