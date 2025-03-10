---
tags: 
  - public
---
[[Modules of a Heisenberg algebra]]
# Heisenberg module

Let $k \in \mathbb{K}$.
Given a $\mathbb{Z}$-graded [[Heisenberg algebra]] $\mathfrak{l}$ over $\mathbb{K}$ with centre $\mathfrak{l}_{0}$ and a basis of homogenous elements satisfying the Heisenberg commutation relations
$$
\begin{align*}
[x_{i},z] = [y_{i},z] =  [x_{i},x_{j}] = [y_{i},y_{j}] &= 0 & [x_{i},y_{j}]=\delta_{ij} z
\end{align*}
$$
one may construct the **Heisenberg module** $M(k)$, a certain $\mathbb{Z}$-[[Graded module|graded]] [[Simple module|irreducible]] $\mathfrak{l}$-[[Module over a Lie algebra|module]] linearly isomorphic to the [[symmetric algebra]] $S(\mathfrak{l}^{-}) \cong \mathbb{K}[y_{i}]_{i \in I}$ of polynomials in indeterminate $\{ y_{i} \}_{i \in I}$ so that for $f \in \mathbb{K}[y_{i}]_{i \in I} \cong M(k)$ 
$$
\begin{align*}
z \odot  f &= kf \\
y_{i} \odot  f &= y_{i}f \\
x_{i} \odot  f &= k \frac{ \partial f }{ \partial y_{i} } 
\end{align*}
$$
which is the **canonical realization** of the Heisenberg commutation relations.[^1988] 
These modules form an important [[Modules of a Heisenberg algebra|parameterized family of simple modules]] over $\mathfrak{l}$.

  [^1988]: 1988\. [[Sources/@frenkelVertexOperatorAlgebras1988|Vertex operator algebras and the Monster]], §1.6, p. 22

## Construction

Let $\mathfrak{b}^+ = \mathfrak{l}_{0} \oplus \mathfrak{l}^+$
Let $\mathbb{K}_{k}$ be the $\mathbb{Z}$-graded $\mathfrak{b}^+$-module defined by
$$
\begin{align*}
z \odot 1 &= k & \mathfrak{l}^+ \odot  1 &= 0 & \deg 1 = 0
\end{align*}
$$
and let $M(k)$ be the [[induced module]] #m/def/lie 
$$
\begin{align*}
M(k) = \Ind^\mathfrak{ l}_{\mathfrak{b}^+} \mathbb{K}_{k} = U(\mathfrak{l}) \otimes_{U(\mathfrak{b}^+)} \mathbb{K}_{k}
\end{align*}
$$
The claimed linear isomorphism $M(k) \cong S(\mathfrak{l}^{-})$ follows from the [[Poincaré-Birkhoff-Witt theorem]] and the fact that $U(\mathfrak{l}^{-}) = S(\mathfrak{l}^{-})$.

## Examples

- [[Standard Heisenberg algebra for QM#Canonical realization|Standard Heisenberg algebra for QM]]

#
---
#state/tidy | #lang/en | #SemBr
