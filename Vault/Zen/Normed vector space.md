---
aliases:
  - norm
tags:
  - public
---
[[Analysis MOC]]
# Normed vector space
A **normed vector space** $(V, \mathbb{K}, \|\cdot\|)$ is a [[Vector space]] over a [[Subfield]] $\mathbb{K}$ of $\mathbb{C}$ equipped with a **norm** $\|\cdot\| : V \to \mathbb{R}$,
where for any $x,y \in V$ and $\alpha \in \mathbb{K}$,
the following conditions hold: #m/def/anal/vec 

1. **Absolute homogeneity:** $\|\alpha x\| = \abs{\alpha}\|x\|$ ^N1
2. **Triangle inequality:** $\|x+y\| \leq \|x\| + \|y\|$ ^N2
3. **Positive-definite:** $\|x\| = 0$ iff. $x = 0$, otherwise $\|x\| > 0$ ^N3

The norm of a vector generalises the idea of a vector's _length_.
Every norm **induces** a [[Metric space|metric]] over the vector space, where
$$
\begin{align*}
d(\vab v, \vab u) = \|\vab v - \vab u\|
\end{align*}
$$
and consequently $\|\vab v\| = d(\vab v, \vab 0)$.
The metric, in turn, induces a [[Topological space|topology]],
making $V$ a [[Topological vector space]].
A space which can be induced by a norm is called **normable**,
but for example the norm for a normable metric is not unique in general.
See [[Space.canvas|Space]] for an overview of the relationship between different spaces.

By removing positive-definiteness, one gets a [[Seminormed vector space]].

## Properties

- [[Equivalence of norms]]
- A normed space is finite-dimensional iff the unit sphere is compact (use sequential compactness)

#
---
#state/tidy  | #lang/en | #SemBr
