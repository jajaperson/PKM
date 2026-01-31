---
tags:
  - public
---
[[Lie algebras MOC]]
# Heisenberg algebra

In the general formulation used in [[conformal field theory]], a **Heisenberg algebra** $\mathfrak{l}$ over $\mathbb{K}$ is a [[nilpotent Lie algebra]] whose 1-dimensional [[Centre of a Lie algebra|centre]] is its [[commutator ideal]] #m/def/lie 
$$
\begin{align*}
\mathfrak{l}_{0} = \mathfrak{z} (\mathfrak{l}) = [\mathfrak{l}, \mathfrak{l}] = \mathbb{K}z
\end{align*}
$$
Assuming $\dim \mathfrak{l}$ is countable, one may impose a $\mathbb{Z}$-grading $\mathfrak{l} = \bigoplus_{n \in \mathbb{Z}} \mathfrak{l}_{n}$ with $\dim \mathfrak{l}_{n} < \infty$ for $n \in \mathbb{Z}$ and $\mathfrak{l}_{0}$ given above, giving [[Abelian Lie algebra|abelian]] [[Lie subalgebra|subalgebras]]
$$
\begin{align*}
\mathfrak{l}^{\pm} = \bigoplus _{n = 1}^\infty \mathfrak{l}_{\pm n}
\end{align*}
$$
so that $\mathfrak{b}^\pm =\mathfrak{l}_{0} \oplus \mathfrak{l}^\pm$ are maximal abelian subalgebras of $\mathfrak{l}$.
An [[Alternating multilinear map|alternating]] [[bilinear form]] $(\cdot,\cdot)$ on $\mathfrak{l}$ is given by
$$
\begin{align*}
[x,y] = (x,y) z
\end{align*}
$$
which is [[Bilinear form#^nondegenerate]] on $\mathfrak{l}^+ \oplus \mathfrak{l}^{-}$ and $\mathfrak{l}_{n} \oplus \mathfrak{l}_{-n}$ for all $n \in \mathbb{N}$,
so one may form bases $(x_i)_{i \in I}$ of $\mathfrak{l}^+$ and $(y_{i})_{i \in I}$ of $\mathfrak{l}^{-}$ satisfying the **Heisenberg commutation relations**
$$
\begin{align*}
[x_{i},z] = [y_{i},z] =  [x_{i},x_{j}] = [y_{i},y_{j}] &= 0 & [x_{i},y_{j}]=\delta_{ij}z
\end{align*}
$$
and
$$
\begin{align*}
\deg x_{i} + \deg y_{i} = 0
\end{align*}
$$
for $i,j \in I$.

## Properties

1. $\dim \mathfrak{l} > 1$, since otherwise the centre would be trivial (not 1-dimensional)
2. If $\dim \mathfrak{l}$ is finite, then it is odd

## Examples

- [[Standard Heisenberg algebra for QM]]
- [[Natural Heisenberg algebras]]

## See also

- [[Modules of a Heisenberg algebra]]
  - [[Heisenberg module]]
- [[Heisenberg group]]

#
---
#state/tidy | #lang/en | #SemBr
