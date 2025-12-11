---
tags:
  - public
aliases:
  - Vandermonde determinant
---
[[Linear algebra MOC]]
# Vandermonde matrix

A **Vandermonde matrix** $T \in \opn M_{m,n}(\mathbb{K})$ is one of the form #m/def/linalg 
$$
\begin{align*}
T= \begin{bmatrix}
x_{0}^0 & \dots & x_{0}^{n-1} \\
\vdots & \ddots & \vdots \\
x_{m-1}^0 & \dots & x_{m-1}^{n-1}
\end{bmatrix}.
\end{align*}
$$
For a square matrix (i.e. $m=n$), the **Vandermonde determinant** is given by
$$
\begin{align*}
\det T = \prod_{0\leq i<j\leq n} (x_{j}-x_{i})
\end{align*}
$$

> [!missing]- Proof
> #missing/proof

#
---
#state/tidy | #lang/en | #SemBr
