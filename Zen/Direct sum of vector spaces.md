---
tags:
  - public
---
[[Linear algebra MOC]]
# Direct sum vector space

The **direct sum** of vector spaces is the [[Products and coproducts|coproduct]] of vector spaces. #m/def/linalg 
It may be constructed as tuples with componentwise operations (cf. [[Direct sum of modules]]).

## Internal direct sum

Let $V$ be a vector space and $\{ S_{i} \}_{i \in I}$ be a family of subspaces.
Then $V$ is the **direct sum** $\bigoplus_{i\in I} S_{i}$ iff $V = \sum_{i \in I}S_{i}$ and #m/def/linalg 
$$
\begin{align*}
S_{i} \cap \left( \sum_{j\neq i} S_{i} \right) = \{ 0 \}
\end{align*}
$$
If $S_{1} \bigoplus S_{2} = V$, then $S_{2}$ is a [[Complement subspace|complement]] of $S_{1}$.[^2008]

[^2008]: 2008\. [[Sources/@romanAdvancedLinearAlgebra2008|Advanced Linear Algebra]], pp. 41–42

## Further characterisations

### Fixed basis

Let $V,W \in \Vect_{\mathbb{K}}$ be vector spaces over $\mathbb{K}$ with bases $\{ v_{i} \}_{i=1}^n$ and $\{ w_{j} \}_{j=1}^m$ respectively.
The direct sum $V \oplus W$ of these spaces then has basis $\{ v_{i} \}_{i=1}^n \amalg \{ w_{j} \}_{j=1}^m$.

### Inner product spaces

 If $V$ and $W$ are inner product spaces, then $\langle (v_{1},w_{1}) | (v_{2},w_{2}) \rangle = \langle v_{1}|v_{2} \rangle + \langle w_{1}|w_{2} \rangle$

## Properties

- $\dim(V \oplus W) = \dim V + \dim W$



## See also

- [[Direct sum of linear maps]]
- [[Direct sum of representations]]

#
---
#state/develop | #lang/en | #SemBr
