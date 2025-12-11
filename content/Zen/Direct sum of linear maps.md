---
tags:
  - public
---
[[Direct sum of vector spaces]]
# Direct sum of linear maps

For linear endomorphisms $A : V \to V$ and $B : W \to W$,
the **direct sum** is defined as follows
$$
\begin{align*}
A \oplus B : V \oplus W &\to V \oplus W \\
(v, w) &\mapsto (Av, Aw)
\end{align*}
$$
This is used to define the [[Direct sum of representations]]

## Matrices

If $\mathbf{A}$ and $\mathbf{B}$ are matrices, then $\mathbf{A} \oplus \mathbf{B}$ is the [[Block matrix]] expanded from
$$
\begin{align*}
\begin{bmatrix}
\mathbf{A}  & 0 \\
0 & \mathbf{B}
\end{bmatrix}
\end{align*}
\begin{bmatrix}
\vab v \\
\vab w
\end{bmatrix}
=
\begin{bmatrix}
\mathbf{A \vec v} \\
\mathbf{B \vec w}
\end{bmatrix}
$$

#
---
#state/tidy | #lang/en | #SemBr
